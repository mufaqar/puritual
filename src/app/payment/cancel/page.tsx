export default function FailedPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-100">
      <div className="bg-white p-6 rounded shadow text-center">
        <h1 className="text-2xl font-bold text-red-600">❌ Payment Failed</h1>
        <p className="mt-4">Oops! Something went wrong. Please try again.</p>
      </div>
    </div>
  );
}
