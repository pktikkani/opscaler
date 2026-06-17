import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const FROM = 'OpScaler Website <info@prag-matic.com>'
const TO = ['pavan@prag-matic.com', 'karthik@prag-matic.com']

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email is not configured.' },
      { status: 500 },
    )
  }

  let data: Record<string, unknown>
  try {
    data = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = String(data.name ?? '').trim()
  const email = String(data.email ?? '').trim()
  const company = String(data.company ?? '').trim()
  const message = String(data.message ?? '').trim()
  const budget = String(data.budget ?? '').trim()

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email, and message are required.' },
      { status: 400 },
    )
  }

  const html = `
    <h2>New contact from OpScaler</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
    ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
  `

  const resend = new Resend(apiKey)
  const { error } = await resend.emails.send({
    from: FROM,
    to: TO,
    replyTo: email,
    subject: `New Contact - ${name}`,
    html,
  })

  if (error) {
    return NextResponse.json(
      { error: 'Failed to send message.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
