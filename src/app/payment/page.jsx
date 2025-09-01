'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState('handshake');
  const [handshakeData, setHandshakeData] = useState({
    orderId: '',
  });
  const [transactionData, setTransactionData] = useState({
    orderId: '',
    amount: '',
    transactionType: '3',
    mobileNumber: '',
    email: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [authToken, setAuthToken] = useState('');

  const handleHandshakeSubmit = async (e) => {
    e.preventDefault();
    if (!handshakeData.orderId) {
      setResult({ type: 'error', message: 'Please enter Order ID' });
      return;
    }
    
    setIsProcessing(true);
    setResult(null);
    
    try {
      // Call our handshake API
      const response = await fetch('/api/handshake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId: handshakeData.orderId,
        }),
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Handshake failed');
      }
      
      setResult({ 
        type: 'success', 
        message: 'Handshake successful!',
        data: result
      });
      
      // Store auth token for transaction request
      if (result.authToken) {
        setAuthToken(result.authToken);
      }
      
      // Pre-fill transaction form with order ID
      setTransactionData(prev => ({
        ...prev,
        orderId: handshakeData.orderId
      }));
      
      // Switch to transaction tab
      setActiveTab('transaction');
      
    } catch (error) {
      console.error('Handshake error:', error);
      setResult({ 
        type: 'error', 
        message: `Handshake failed: ${error.message}` 
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTransactionSubmit = async (e) => {
    e.preventDefault();
    if (!transactionData.orderId || !transactionData.amount || !transactionData.transactionType) {
      setResult({ type: 'error', message: 'Please fill all required fields' });
      return;
    }
    
    setIsProcessing(true);
    setResult(null);
    
    try {
      // Prepare transaction data
      const transactionRequest = {
        AuthToken: authToken,
        ChannelId: '1001',
        Currency: 'PKR',
        IsBIN: '0',
        ReturnURL: `${window.location.origin}/api/alfa-callback`,
        MerchantId: process.env.NEXT_PUBLIC_HS_MERCHANT_ID || '32286',
        StoreId: process.env.NEXT_PUBLIC_HS_STORE_ID || '220188',
        MerchantHash: process.env.NEXT_PUBLIC_HS_MERCHANT_HASH || '0aFsbiT8uYBQKWZnuLKZtzSbVcvzxBAbSsjzsmfYwIgQdnhHbQEbwxemeqeWYLbX',
        MerchantUsername: process.env.NEXT_PUBLIC_HS_USERNAME || 'enenul',
        MerchantPassword: process.env.NEXT_PUBLIC_HS_PASSWORD || 'MinKUhGphedvFzk4yqF7CA==',
        TransactionTypeId: transactionData.transactionType,
        TransactionReferenceNumber: transactionData.orderId,
        TransactionAmount: transactionData.amount,
        CustomerMobile: transactionData.mobileNumber,
        CustomerEmail: transactionData.email
      };
      
      // Generate request hash (this would be done server-side in real implementation)
      console.log('Submitting transaction:', transactionRequest);
      
      // Create form and submit to AlphaPay
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://sandbox.bankalfalah.com/SSO/SSO/SSO';
      form.style.display = 'none';
      
      for (const [key, value] of Object.entries(transactionRequest)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
      
      // Add RequestHash (this would be properly calculated in real implementation)
      const requestHashInput = document.createElement('input');
      requestHashInput.type = 'hidden';
      requestHashInput.name = 'RequestHash';
      requestHashInput.value = 'simulated-request-hash';
      form.appendChild(requestHashInput);
      
      document.body.appendChild(form);
      form.submit();
      
    } catch (error) {
      console.error('Transaction error:', error);
      setResult({ 
        type: 'error', 
        message: `Transaction failed: ${error.message}` 
      });
      setIsProcessing(false);
    }
  };

  const handleInputChange = (setter) => (e) => {
    const { name, value } = e.target;
    setter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container py-20 mx-auto p-4">
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'handshake' ? 'active' : ''}`}
          onClick={() => setActiveTab('handshake')}
        >
          Step 1: Handshake Request
        </button>
        <button 
          className={`tab ${activeTab === 'transaction' ? 'active' : ''}`}
          onClick={() => setActiveTab('transaction')}
          disabled={!authToken}
        >
          Step 2: Transaction Request
        </button>
      </div>
      
      {activeTab === 'handshake' && (
        <div className="card">
          <h2>Handshake Request</h2>
          <p className="instruction">Enter Order ID and click Handshake</p>
          
          <form onSubmit={handleHandshakeSubmit}>
            <div className="form-group">
              <label htmlFor="handshakeOrderId">Order ID:</label>
              <input
                id="handshakeOrderId"
                name="orderId"
                type="text"
                value={handshakeData.orderId}
                onChange={handleInputChange(setHandshakeData)}
                placeholder="Enter order ID"
                required
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isProcessing}
              className="btn btn-primary"
            >
              {isProcessing && <span className="loading"></span>}
              {isProcessing ? 'Processing...' : 'Handshake'}
            </button>
          </form>
        </div>
      )}
      
      {activeTab === 'transaction' && (
        <div className="card">
          <h2>Transaction Request Parameters</h2>
          <p className="instruction">
            Select Payment Mode, enter transaction details, and click Run to redirect to AlphaPay payment gateway
          </p>
          
          <form onSubmit={handleTransactionSubmit}>
            <div className="form-group">
              <label htmlFor="transactionType">Transaction Type:</label>
              <select
                id="transactionType"
                name="transactionType"
                value={transactionData.transactionType}
                onChange={handleInputChange(setTransactionData)}
                required
              >
                <option value="1">Alfa Wallet</option>
                <option value="2">Alfalah Bank Account</option>
                <option value="3">Credit/Debit Card</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="transactionOrderId">Order ID:</label>
              <input
                id="transactionOrderId"
                name="orderId"
                type="text"
                value={transactionData.orderId}
                onChange={handleInputChange(setTransactionData)}
                placeholder="Enter order ID"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="amount">Transaction Amount (Whole Number):</label>
              <input
                id="amount"
                name="amount"
                type="number"
                value={transactionData.amount}
                onChange={handleInputChange(setTransactionData)}
                placeholder="Enter amount"
                min="1"
                step="1"
                required
              />
            </div>
            
         
            
            <button 
              type="submit" 
              disabled={isProcessing}
              className="btn btn-success"
            >
              {isProcessing && <span className="loading"></span>}
              {isProcessing ? 'Processing...' : 'RUN'}
            </button>
          </form>
        </div>
      )}
      
      {result && (
        <div className={`card result ${result.type}`}>
          <h3>{result.type === 'success' ? 'Success' : 'Error'}</h3>
          <p>{result.message}</p>
          {result.type === 'success' && authToken && (
            <div className="auth-token-info">
              <p><strong>Auth Token:</strong> {authToken.substring(0, 20)}...</p>
              <p>You can now proceed to the transaction step.</p>
            </div>
          )}
          {result.type === 'error' && (
            <button 
              onClick={() => setResult(null)}
              className="btn"
              style={{marginTop: '10px'}}
            >
              Try Again
            </button>
          )}

        
{process.env.NODE_ENV === 'development' && (
  <div className="card debug-card">
    <h2>Debug Information</h2>
    <div className="debug-section">
      <h3>Environment Variables:</h3>
      <pre>
        {JSON.stringify({
          HS_MERCHANT_ID: process.env.HS_MERCHANT_ID ? 'Set' : 'Missing',
          HS_STORE_ID: process.env.HS_STORE_ID ? 'Set' : 'Missing',
          HS_CHANNEL_ID: process.env.HS_CHANNEL_ID ? 'Set' : 'Missing',
          RETURN_URL: process.env.NEXT_PUBLIC_RETURN_URL || 'Not set'
        }, null, 2)}
      </pre>
    </div>
    {authToken && (
      <div className="debug-section">
        <h3>Auth Token:</h3>
        <p>{authToken}</p>
      </div>
    )}
    {result && result.data && (
      <div className="debug-section">
        <h3>Response Data:</h3>
        <pre>{JSON.stringify(result.data, null, 2)}</pre>
      </div>
    )}
  </div>
)}
        </div>
      )}
      
      
    </div>
  );
}