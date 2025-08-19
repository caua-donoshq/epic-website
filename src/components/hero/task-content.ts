export const fullTaskContent = `# Technical Implementation Specification

## BDD Scenarios

### Scenario 1: Happy Path - User Creates and Uses AI Chat

\`\`\`gherkin
Given I am a logged-in user on the dashboard
When I click "New AI Chat" button
Then a new chat session is created with a unique ID
And I see an empty chat interface with input field
When I type "Hello, can you help me with my project?" and press Enter
Then my message appears instantly in the chat (optimistic update)
And I see a typing indicator "AI is typing..."
And I receive a streaming AI response word by word
And the complete conversation is saved to my chat history
And I can see this chat session in my chat list sidebar
\`\`\`

### Scenario 2: Edge Case - Switching Between Multiple Chat Sessions

\`\`\`gherkin
Given I have 3 existing chat sessions with conversation history
When I click on "Chat Session 2" in the sidebar
Then the chat interface loads the full conversation history for that session
And I can scroll through previous messages
And the input field is ready for new messages
When I start typing a new message
Then it's associated with the current active session
And other sessions remain unchanged
\`\`\`

### Scenario 3: Error Handling - AI Service Unavailable

\`\`\`gherkin
Given I am in an active chat session
When I send a message "Explain quantum computing"
And the AI service is temporarily unavailable
Then my message appears with "Sending..." status
And after timeout, the message shows "Failed to send" with retry button
When I click the retry button
Then the message is attempted again
And if successful, I receive the AI response
And if failed again, I see "AI service temporarily unavailable" with option to try later
\`\`\`

### Scenario 4: Performance - Large Chat History with Real-time Updates

\`\`\`gherkin
Given I have a chat session with 500+ messages
When I open this chat session
Then only the latest 50 messages load initially (virtual scrolling)
And I see a "Load earlier messages" button at the top
When I scroll up, more messages load seamlessly
And when the AI sends a new response in real-time
Then it appears immediately without affecting scroll position
And the message count updates in the sidebar
\`\`\`

## Security Requirements

### Authentication & Authorization

- **JWT Token Validation**: All chat API endpoints require valid JWT tokens
- **Session Ownership**: Users can only access their own chat sessions
- **Input Sanitization**: All user messages sanitized to prevent XSS attacks
- **Rate Limiting**: Max 20 messages per minute per user to prevent abuse

### Data Protection

- **Message Encryption**: Chat messages encrypted at rest in database
- **PII Detection**: Automatic detection and handling of sensitive information
- **Audit Logging**: All chat interactions logged for security monitoring
- **Session Isolation**: Chat sessions completely isolated between users

### AI Service Security

- **API Key Protection**: OpenAI API key stored securely in backend environment
- **Request Validation**: All AI requests validated and filtered
- **Response Filtering**: AI responses screened for inappropriate content
- **Usage Tracking**: Monitor AI API usage to prevent quota abuse

## Performance Requirements

### Response Times

- **Message Send**: <100ms perceived response time (optimistic updates)
- **AI Response Initiation**: <500ms to start receiving streamed response
- **Chat History Load**: <200ms for recent messages, progressive loading for history
- **Session Switching**: <150ms to switch between chat sessions

### Scalability Targets

- **Concurrent Users**: Support 1000+ concurrent chat sessions
- **Message Throughput**: Handle 10,000+ messages per minute
- **Real-time Updates**: <100ms latency for WebSocket message delivery
- **Chat History**: Efficiently handle sessions with 10,000+ messages

### Caching Strategy

- **Recent Messages**: Cache last 50 messages per session for instant loading
- **Session List**: Cache user's chat sessions list with smart invalidation
- **AI Responses**: Cache common AI responses for faster delivery
- **Optimistic Updates**: Immediate UI feedback for all user actions

## Architecture

### Frontend Architecture

\`\`\`
apps/frontend/src/features/ai-chat/
├── components/
│   ├── ChatInterface.tsx        # Main chat UI with message list
│   ├── MessageBubble.tsx        # Individual message component
│   ├── ChatInput.tsx           # Message input with send button
│   ├── ChatSidebar.tsx         # Session list and management
│   ├── TypingIndicator.tsx     # AI typing animation
│   └── StreamingMessage.tsx    # Real-time message streaming
├── hooks/
│   ├── useChatSessions.ts      # Session management
│   ├── useChatMessages.ts      # Message CRUD operations
│   ├── useAIStreaming.ts       # AI response streaming
│   └── useChatOptimistic.ts    # Optimistic updates
├── services/
│   ├── chat.service.ts         # Chat API calls
│   ├── ai-streaming.service.ts # WebSocket streaming
│   └── chat-cache.service.ts   # Caching strategies
└── types/
    └── chat.types.ts           # TypeScript definitions
\`\`\`

### Backend Architecture

\`\`\`
apps/backend/src/features/ai-chat/
├── controllers/
│   ├── chat-sessions.controller.ts    # Session CRUD
│   ├── chat-messages.controller.ts    # Message handling
│   └── ai-streaming.controller.ts     # AI integration
├── services/
│   ├── openai.service.ts              # OpenAI API integration
│   ├── chat-security.service.ts       # Content filtering
│   └── message-encryption.service.ts  # Data encryption
├── routes/
│   ├── chat-sessions.routes.ts        # Session endpoints
│   ├── chat-messages.routes.ts        # Message endpoints
│   └── ai-streaming.routes.ts         # Streaming endpoints
├── schemas/
│   ├── chat-session.schema.ts         # Database schema
│   └── chat-message.schema.ts         # Message schema
└── middleware/
    ├── chat-rate-limit.middleware.ts  # Rate limiting
    └── ai-content-filter.middleware.ts # Content filtering
\`\`\`

### Real-time Architecture

\`\`\`
WebSocket Events:
├── chat:message:new        # New message sent
├── chat:message:typing     # User typing indicator
├── chat:response:start     # AI response begins
├── chat:response:chunk     # AI response chunk
├── chat:response:complete  # AI response finished
└── chat:session:updated    # Session metadata updated
\`\`\`

## Success Criteria

### User Experience Metrics

- **Time to First Response**: <500ms for AI to start responding
- **Message Delivery Rate**: 99.9% of messages successfully delivered
- **User Engagement**: Average session length >5 minutes
- **Error Rate**: <0.1% of user actions result in errors

### Technical Performance Metrics

- **API Response Times**: 95% of requests under 200ms
- **WebSocket Latency**: <100ms for real-time message delivery
- **Cache Hit Rate**: >90% for chat history requests
- **Database Performance**: <50ms for message queries

### Business Metrics

- **Feature Adoption**: >70% of users try AI chat within 30 days
- **Session Creation**: Average 3+ chat sessions per active user
- **User Retention**: AI chat users have 25% higher retention
- **Support Reduction**: 30% reduction in support tickets

## Files to Create

### Frontend Core Services

**File:** \`apps/frontend/src/features/ai-chat/services/chat.service.ts\`
**Purpose:** Core API service for chat session and message management
**Technology Choices:** Axios with TypeScript for type-safe API calls
**Dependencies:** axios, @/shared/services/api
**Core Functions:**

- \`createChatSession()\`: Creates new chat session for user
- \`getChatSessions()\`: Fetches user's chat sessions with pagination
- \`sendMessage()\`: Sends user message and triggers AI response
- \`getChatMessages()\`: Retrieves messages for specific session with virtual scrolling
- \`deleteChatSession()\`: Removes session and all associated messages
- \`updateSessionTitle()\`: Updates chat session title based on content
**Security Requirements:** JWT authentication, input sanitization, rate limiting
**Integration Points:** Integrates with auth service, real-time WebSocket service, and performance cache

**File:** \`apps/frontend/src/features/ai-chat/services/ai-streaming.service.ts\`
**Purpose:** WebSocket service for real-time AI response streaming
**Technology Choices:** Socket.io-client for reliable WebSocket communication
**Dependencies:** socket.io-client, @/shared/contexts/AuthContext
**Core Functions:**

- \`connectToAIStream()\`: Establishes authenticated WebSocket connection
- \`subscribeToSession()\`: Subscribes to specific chat session events
- \`handleStreamingResponse()\`: Processes incremental AI response chunks
- \`emitTypingIndicator()\`: Sends typing status to other session participants
- \`reconnectWithBackoff()\`: Handles connection drops with exponential backoff
- \`closeStreamConnection()\`: Cleanly closes WebSocket connections
**Security Requirements:** JWT token authentication, message validation, connection encryption
**Integration Points:** Integrates with chat service, auth context, and real-time message components

**File:** \`apps/frontend/src/features/ai-chat/hooks/useChatSessions.ts\`
**Purpose:** React hook for managing chat sessions with optimistic updates
**Technology Choices:** TanStack Query for caching with React 19 useOptimistic fallback
**Dependencies:** @tanstack/react-query, @/shared/hooks/use-optimistic-mutation
**Core Functions:**

- \`useChatSessionsQuery()\`: Fetches and caches user's chat sessions
- \`useCreateSession()\`: Creates new session with optimistic updates
- \`useDeleteSession()\`: Deletes session with optimistic removal
- \`useUpdateSessionTitle()\`: Updates session title with debounced API calls
- \`useActiveSession()\`: Manages currently active session state
- \`prefetchSessionMessages()\`: Preloads messages for session switching
**Security Requirements:** Authentication validation, error boundary handling
**Integration Points:** Integrates with chat service, WebSocket streaming, and session components

**File:** \`apps/frontend/src/features/ai-chat/hooks/useChatMessages.ts\`
**Purpose:** Hook for message management with virtual scrolling and real-time updates
**Technology Choices:** TanStack Query with virtual scrolling integration
**Dependencies:** @tanstack/react-query, @tanstack/react-virtual
**Core Functions:**

- \`useChatMessagesQuery()\`: Fetches messages with infinite scroll pagination
- \`useSendMessage()\`: Sends message with optimistic updates and streaming response
- \`useMessageVirtualization()\`: Handles virtual scrolling for large message lists
- \`useRealTimeMessages()\`: Integrates WebSocket for live message updates
- \`useMessageSearch()\`: Search through chat history with debounced queries
- \`useMessageRetry()\`: Retry failed messages with exponential backoff
**Security Requirements:** Message content sanitization, ownership validation
**Integration Points:** Integrates with AI streaming service, virtual scrolling components, and message cache

### Frontend Components

**File:** \`apps/frontend/src/features/ai-chat/components/ChatInterface.tsx\`
**Purpose:** Main chat interface container with message list and input
**Technology Choices:** React with Tailwind CSS and shadcn/ui components
**Dependencies:** @/components/ui, @tanstack/react-virtual, framer-motion
**Core Functions:**

- \`renderMessageList()\`: Virtual scrolling message list with performance optimization
- \`handleNewMessage()\`: Processes user input with validation and optimistic updates
- \`scrollToBottom()\`: Auto-scrolls to new messages with smooth animation
- \`loadEarlierMessages()\`: Infinite scroll loading for chat history
- \`handleStreamingResponse()\`: Displays AI responses as they stream in
- \`manageTypingIndicators()\`: Shows/hides typing status for participants
**Security Requirements:** XSS prevention in message rendering, input validation
**Integration Points:** Integrates with message hooks, streaming service, and session management

**File:** \`apps/frontend/src/features/ai-chat/components/MessageBubble.tsx\`
**Purpose:** Individual message component with streaming and formatting support
**Technology Choices:** React with markdown rendering and syntax highlighting
**Dependencies:** react-markdown, prism-react-renderer, date-fns
**Core Functions:**

- \`renderMessageContent()\`: Safely renders markdown with syntax highlighting
- \`handleStreamingUpdate()\`: Updates message content as streaming progresses
- \`formatTimestamp()\`: Human-readable timestamp formatting
- \`showMessageStatus()\`: Displays send/delivered/error status indicators
- \`handleMessageActions()\`: Copy, delete, and retry message actions
- \`renderCodeBlocks()\`: Syntax-highlighted code blocks with copy functionality
**Security Requirements:** Markdown sanitization, XSS prevention, content filtering
**Integration Points:** Integrates with message data, streaming updates, and user actions

**File:** \`apps/frontend/src/features/ai-chat/components/ChatSidebar.tsx\`
**Purpose:** Session list sidebar with session management and search
**Technology Choices:** React with virtualized list for performance
**Dependencies:** @/components/ui, @tanstack/react-virtual, fuse.js
**Core Functions:**

- \`renderSessionList()\`: Virtual scrolling list of chat sessions
- \`handleSessionSearch()\`: Fuzzy search through session titles and recent messages
- \`createNewSession()\`: Quick session creation with optimistic updates
- \`switchActiveSession()\`: Session switching with prefetching for smooth UX
- \`deleteSessionWithConfirm()\`: Session deletion with confirmation modal
- \`updateSessionTitle()\`: Inline title editing with auto-save
**Security Requirements:** Session ownership validation, search input sanitization
**Integration Points:** Integrates with session hooks, search service, and main chat interface

### Backend Core Services

**File:** \`apps/backend/src/features/ai-chat/services/openai.service.ts\`
**Purpose:** OpenAI API integration with streaming response handling
**Technology Choices:** OpenAI SDK with streaming support and error handling
**Dependencies:** openai, @/shared/utils/security-logger
**Core Functions:**

- \`createChatCompletion()\`: Generates AI response with conversation context
- \`streamChatCompletion()\`: Streams AI response in real-time chunks
- \`validateRequest()\`: Validates chat messages before sending to OpenAI
- \`handleAPIErrors()\`: Graceful handling of OpenAI API failures and rate limits
- \`trackUsage()\`: Monitors API usage and costs per user
- \`filterResponse()\`: Content filtering for AI responses
**Security Requirements:** API key protection, request validation, usage monitoring
**Integration Points:** Integrates with chat controllers, WebSocket service, and content filtering

**File:** \`apps/backend/src/features/ai-chat/services/chat-security.service.ts\`
**Purpose:** Content filtering and security validation for chat messages
**Technology Choices:** Custom content filtering with configurable rules
**Dependencies:** @/shared/utils/validation, bad-words
**Core Functions:**

- \`sanitizeUserInput()\`: Cleans and validates user messages
- \`detectPII()\`: Identifies and flags personally identifiable information
- \`filterInappropriateContent()\`: Removes or flags inappropriate messages
- \`validateMessageLength()\`: Enforces message length limits
- \`checkRateLimit()\`: Per-user rate limiting validation
- \`logSecurityEvent()\`: Audit logging for security incidents
**Security Requirements:** XSS prevention, content policy enforcement, audit logging
**Integration Points:** Integrates with message controllers, AI service, and security monitoring

**File:** \`apps/backend/src/features/ai-chat/controllers/chat-messages.controller.ts\`
**Purpose:** Message CRUD operations with streaming AI responses
**Technology Choices:** Express.js with TypeScript and real-time WebSocket integration
**Dependencies:** express, @/shared/middleware/auth, socket.io
**Core Functions:**

- \`sendMessage()\`: Processes user message and triggers AI response streaming
- \`getMessages()\`: Retrieves paginated messages for chat session
- \`deleteMessage()\`: Removes message with ownership validation
- \`retryMessage()\`: Retries failed AI responses
- \`searchMessages()\`: Full-text search through user's chat history
- \`streamAIResponse()\`: Coordinates AI streaming with WebSocket broadcasting
**Security Requirements:** Authentication, authorization, input validation, rate limiting
**Integration Points:** Integrates with OpenAI service, WebSocket server, and database

**File:** \`apps/backend/src/features/ai-chat/controllers/chat-sessions.controller.ts\`
**Purpose:** Chat session management with user ownership validation
**Technology Choices:** Express.js with Drizzle ORM for type-safe database operations
**Dependencies:** express, drizzle-orm, @/shared/database/connection
**Core Functions:**

- \`createSession()\`: Creates new chat session for authenticated user
- \`getUserSessions()\`: Retrieves user's sessions with pagination and metadata
- \`updateSessionTitle()\`: Updates session title with auto-generation from content
- \`deleteSession()\`: Removes session and all associated messages
- \`getSessionStats()\`: Provides session analytics and usage statistics
- \`shareSession()\`: Handles session sharing functionality (future feature)
**Security Requirements:** User authentication, ownership validation, input sanitization
**Integration Points:** Integrates with auth middleware, message controllers, and user service

### Database Schema

**File:** \`apps/backend/src/features/ai-chat/schemas/chat-session.schema.ts\`
**Purpose:** Database schema definition for chat sessions
**Technology Choices:** Drizzle ORM with PostgreSQL types
**Dependencies:** drizzle-orm, @/shared/database/connection
**Core Functions:**

- \`chatSessions\` table definition with proper indexes
- \`sessionParticipants\` table for multi-user sessions (future)
- Session metadata and settings schema
- Foreign key relationships and constraints
- Optimized indexes for performance queries
**Security Requirements:** Encrypted fields, user isolation, audit columns
**Integration Points:** Referenced by message schema, user schema, and session controllers

**File:** \`apps/backend/src/features/ai-chat/schemas/chat-message.schema.ts\`
**Purpose:** Database schema for chat messages with encryption support
**Technology Choices:** Drizzle ORM with encrypted text fields
**Dependencies:** drizzle-orm, @/shared/services/encryption
**Core Functions:**

- \`chatMessages\` table with encrypted content
- Message status and metadata tracking
- Optimized indexes for session queries
- Full-text search configuration
- Message threading support (future)
**Security Requirements:** Content encryption, user ownership, audit trail
**Integration Points:** Links to chat sessions, users, and AI response tracking

### Real-time Infrastructure

**File:** \`apps/backend/src/shared/services/websocket-chat.service.ts\`
**Purpose:** WebSocket service for real-time chat functionality
**Technology Choices:** Socket.io with Redis adapter for multi-server scaling
**Dependencies:** socket.io, redis, @/shared/middleware/auth
**Core Functions:**

- \`initializeChatWebSocket()\`: Sets up chat-specific WebSocket handlers
- \`authenticateSocketConnection()\`: Validates JWT tokens for WebSocket connections
- \`joinChatSession()\`: Adds user to session-specific WebSocket room
- \`broadcastToSession()\`: Sends messages to all session participants
- \`handleStreamingChunks()\`: Broadcasts AI response chunks in real-time
- \`manageTypingIndicators()\`: Handles typing status across session participants
**Security Requirements:** JWT authentication, room access control, message validation
**Integration Points:** Integrates with chat controllers, AI service, and Redis for scaling

**File:** \`apps/frontend/src/features/ai-chat/components/StreamingMessage.tsx\`
**Purpose:** Component for displaying streaming AI responses with typing animation
**Technology Choices:** React with custom streaming text animation
**Dependencies:** framer-motion, react-markdown
**Core Functions:**

- \`handleStreamingChunk()\`: Processes incoming AI response chunks
- \`animateTypingEffect()\`: Creates realistic typing animation for AI responses
- \`renderPartialMarkdown()\`: Safely renders markdown as content streams in
- \`handleStreamingComplete()\`: Finalizes message when streaming ends
- \`showStreamingIndicator()\`: Visual feedback during response generation
- \`handleStreamingError()\`: Error handling for failed streaming responses
**Security Requirements:** Content sanitization during streaming, XSS prevention
**Integration Points:** Integrates with WebSocket service, message bubbles, and chat interface`