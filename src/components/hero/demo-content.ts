import { fullTaskContent } from './task-content'

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
}

export const demoMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'user',
    content: 'I want a feature so users can invite teammates by email to join their workspace. They should be able to choose a role (Owner, Admin, or Member). The invite should expire after 24 hours.'
  },
  {
    id: '2',
    role: 'assistant',
    content: `You are a senior tech lead. Implement "Team Invites" end-to-end in our Next.js 14 app.

Context
- Stack: Next.js App Router, TypeScript, Prisma + Postgres, Auth.js (Email), Resend, Zod, TanStack Query.
- Non-negotiables: input validation (Zod), rate-limit sensitive routes, single-use hashed tokens, a11y, i18n-ready.
- Performance: optimistic UI for invite creation, suspense + React Query caching, lazy-load admin table.

Deliverables
1) DB (Prisma migration)
   - Invitation { id, email (unique per workspace, pending only), role ('OWNER'|'ADMIN'|'MEMBER'), tokenHash, expiresAt, consumedAt, workspaceId, createdAt }
   - Indexes: (workspaceId,email,status), (tokenHash)
   - Add audit log table if missing: AuditLog { id, actorUserId, action, workspaceId, meta, createdAt }

2) API (App Router route handlers)
   - POST /api/invites: body {email, role}. Validations: workspace owner/admin only, email format, dedupe pending invite.
     • Rate-limit by actor/workspace; on success create Invitation + send email via Resend.
   - POST /api/invites/accept: body {token}. Validate not expired/consumed; create user (if needed), attach to workspace, mark consumedAt.
   - GET /api/invites: list pending invites for current workspace (paginated).

3) Email
   - Resend template "invite_to_workspace": contains CTA with signed URL /accept?token={token}.
   - Token: random 32 bytes; store scrypt hash only; expiresAt = now + 24h.

4) UI
   - "Invite members" modal: fields {email, role}. Zod form + TanStack Query mutation with optimistic update; clear form on success; toasts for states.
   - "Pending invites" table: email, role, status, sentAt, actions (resend, cancel). Infinite scroll.
   - Accept screen: handles success/error states, auto-sign-in if Auth.js session exists.

5) Security
   - Hash tokens (do not store raw); single use; CSRF on POST routes; server-side role check; robust error messages without leaking internals.

6) Analytics/Logs
   - Track "invite_sent", "invite_accepted", "invite_cancelled" with workspaceId, role.
   - Insert AuditLog rows mirroring these events.

7) Tests
   - Unit: token generation/verification utils.
   - Integration: POST /api/invites (happy path, dedupe, rate-limit), /api/invites/accept (expired, reused).
   - E2E (Playwright): owner invites -> email link -> accept -> lands in app.

8) Git plan
   - Branch: feat/team-invites
   - Commits (atomic):
     1) chore(db): add Invitation + AuditLog schema
     2) feat(api): POST /api/invites with validation + RL
     3) feat(email): Resend template + token hashing
     4) feat(ui): invite modal + optimistic create
     5) feat(ui): pending table + actions
     6) feat(api): accept invite endpoint + flow
     7) test: unit/integration/e2e coverage
     8) docs: README changes, env vars, runbook

Acceptance (BDD)
- Given I am a workspace owner, when I invite a valid email with role "Member", then an email is sent and the invite appears in "Pending Invites".
- Given a valid, unexpired token, when the recipient clicks the link, then they join the workspace and the token is consumed.
- Given an expired or reused token, when used, then the invite is rejected with a friendly recovery path (request new invite).

Repo notes
- Update .env with RESEND_API_KEY; add RATE_LIMITER config.
- Expose minimal PR description with checklist; link to test runs.`
  }
]

export const chatAssistantMessages: ChatMessage[] = [
  {
    id: '1',
    role: 'user',
    content: 'I want to add a ChatGPT-like AI chat assistant to my app. When users log in, they should see a "Chat with AI" button or section. When they click it, they get a clean chat window where they can type questions and get helpful AI responses.'
  },
  {
    id: '2',
    role: 'assistant',
    content: fullTaskContent
  }
]