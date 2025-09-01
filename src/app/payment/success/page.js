export default function PaymentSuccessPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Payment Successful!</h1>
      </div>
      
      <div className="card">
        <div className="result success">
          <h2>Thank you for your payment!</h2>
          <p>Your transaction was completed successfully.</p>
          <p>You will receive a confirmation email shortly.</p>
        </div>
        
        <a href="/payment" className="btn" style={{marginTop: '20px'}}>
          Make Another Payment
        </a>
      </div>
    </div>
  );
}