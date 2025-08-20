import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 })
    }

    const GOOGLE_SHEETS_URL = process.env.GOOGLE_SHEETS_URL

    if (!GOOGLE_SHEETS_URL) {
      return NextResponse.json({ success: false, error: 'Google Sheets URL not configured' }, { status: 500 })
    }

    console.log('Submitting to Google Sheets:', { email, GOOGLE_SHEETS_URL: GOOGLE_SHEETS_URL.substring(0, 50) + '...' })

    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        timestamp: new Date().toISOString(),
      })
    })

    console.log('Google Sheets response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Google Sheets error response:', errorText)
      throw new Error(`Google Sheets responded with ${response.status}: ${errorText}`)
    }

    const result = await response.json()
    console.log('Google Sheets success:', result)
    return NextResponse.json({ success: true, data: result })

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to submit email' 
    }, { status: 500 })
  }
}