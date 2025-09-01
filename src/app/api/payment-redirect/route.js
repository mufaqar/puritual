import { encryptRequest, generateRequestString } from '@/lib/encryption';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const paymentData = Object.fromEntries(formData);
    
    // Generate request hash
    const requestString = generateRequestString(paymentData);
    const requestHash = encryptRequest(requestString);
    paymentData.RequestHash = requestHash;
    
    // Create a form that will auto-submit to AlphaPay
    const formFields = Object.entries(paymentData)
      .map(([key, value]) => `<input type="hidden" name="${key}" value="${value}" />`)
      .join('');
    
    const autoSubmitScript = `
      <script>
        document.addEventListener('DOMContentLoaded', function() {
          document.getElementById('alphaPayForm').submit();
        });
      </script>
    `;
    
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Redirecting to AlphaPay...</title>
        </head>
        <body>
          <form id="alphaPayForm" method="post" action="https://sandbox.bankalfalah.com/SSO/SSO/SSO">
            ${formFields}
          </form>
          <p>Redirecting to AlphaPay payment gateway...</p>
          ${autoSubmitScript}
        </body>
      </html>
    `;
    
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Payment redirect error:', error);
    return new Response(JSON.stringify({ 
      success: 'false', 
      Message: error.message || 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}