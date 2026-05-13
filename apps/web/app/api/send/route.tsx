import { render } from 'react-email';
import { VercelInviteUserEmail } from 'transactional/emails/vercel-invite-user';

export async function GET() {
  const html = await render(<VercelInviteUserEmail/>);

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
    },
  });
} 

