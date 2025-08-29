export default function SuccessPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-green-600">✅ Payment Successful</h1>
        <p className="mt-4">Thank you! Your payment was processed successfully.</p>
      </div>
    </div>
  );
}
