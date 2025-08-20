// Google Sheets API integration for waitlist using Next.js API route
export async function addEmailToSheet(email: string) {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email })
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error('Error submitting to waitlist API:', error)
    return { success: false }
  }
}