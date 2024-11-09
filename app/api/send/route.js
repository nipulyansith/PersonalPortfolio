// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;


export async function POST(req, res) {
  const { email, subject, message } = await req.body;
  try {
    const { data, error } = await resend.emails.send({
      from: 'My Portfolio <onboarding@resend.dev>',
      to: ['nipulyansith26@gmail.com'],
      subject: 'Portfolio Contact - Lets Connect',
      react: 
      <>


      <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
        <h2 style={{ color: '#4A90E2' }}>New Contact Form Submission</h2>
        <p>
          You have received a new message from your portfolio contact form:
        </p>
        <p>
          <strong>Sender's Email:</strong> {email}<br />
          <strong>Subject:</strong> {subject}<br />
          <strong>Message:</strong><br />
          {message}
        </p>
        <p>
          Please follow up with the sender as soon as possible.
        </p>
        <p>Best regards,</p>
        <p>Your Portfolio</p>
      </div>


    </>
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
