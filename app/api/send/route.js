import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parse the request body
    const { email, subject, message } = await req.json();

    // Validate required fields
    if (!email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Email, subject, and message are required.' }),
        { status: 400 }
      );
    }

    // Send email using Resend API
    const { data, error } = await resend.emails.send({
      from: 'My Portfolio <onboarding@resend.dev>',
      to: ['nipulyansith26@gmail.com'], // Replace with the recipient's email
      subject: 'Portfolio Contact - Lets Connect',
      react: (
        <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
          <h2 style={{ color: '#4A90E2' }}>New Contact Form Submission</h2>
          <p>You have received a new message from your portfolio contact form:</p>
          <p>
            <strong>Sender&apos;s Email:</strong> {email}
            <br />
            <strong>Subject:</strong> {subject}
            <br />
            <strong>Message:</strong>
            <br />
            {message}
          </p>
          <p>Please follow up with the sender as soon as possible.</p>
          <p>Best regards,</p>
          <p>Your Portfolio</p>
        </div>
      ),
    });

    if (error) {
      console.error('Error sending email:', error);
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }

    // Return success response
    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (err) {
    console.error('Error in POST handler:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
