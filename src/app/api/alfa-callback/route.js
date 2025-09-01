export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Process the callback data from AlphaPay
    const callbackData = Object.fromEntries(formData);
    console.log('AlphaPay callback received:', callbackData);
    
    // Add your business logic here (update database, send confirmation, etc.)
    // Verify the transaction status and update your database accordingly
    
    // For successful transactions, redirect to a success page
    if (callbackData.TransactionStatus === 'SUCCESS') {
      // Update your database here
      return Response.redirect(new URL('/payment/success', request.url));
    } else {
      // Handle failed transactions
      return Response.redirect(new URL('/payment/error', request.url));
    }
  } catch (error) {
    console.error('Callback error:', error);
    return Response.redirect(new URL('/payment/error', request.url));
  }
}

export async function GET(request) {
  try {
    // Handle GET requests if needed
    const searchParams = request.nextUrl.searchParams;
    const callbackData = Object.fromEntries(searchParams);
    console.log('AlphaPay callback (GET) received:', callbackData);
    
    // Extract parameters for success page
    const orderId = searchParams.get('TransactionReferenceNumber');
    const amount = searchParams.get('TransactionAmount');
    const status = searchParams.get('TransactionStatus');
    
    if (status === 'SUCCESS') {
      return Response.redirect(new URL(`/payment/success?orderId=${orderId}&amount=${amount}`, request.url));
    } else {
      return Response.redirect(new URL('/payment/error', request.url));
    }
  } catch (error) {
    console.error('Callback error:', error);
    return Response.redirect(new URL('/payment/error', request.url));
  }
}