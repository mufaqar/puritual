export default function PaymentErrorPage() {
  return (
    <div className="container">
      <div className="header">
        <h1>Payment Failed</h1>
      </div>
      
      <div className="card">
        <div className="result error">
          <h2>We're sorry, but your payment could not be processed.</h2>
          <p>There was an issue with your transaction. Please try again.</p>
          <p>If the problem persists, please contact customer support.</p>
        </div>
        
        <a href="/payment" className="btn" style={{marginTop: '20px'}}>
          Try Again
        </a>
      </div>
    </div>
  );
}