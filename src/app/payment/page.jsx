"use client";
import { useEffect, useState } from "react";

export default function PaymentRedirect() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    async function init() {
      const res = await fetch("/api/alfa-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: "100.00", orderId: "ORDER123" }),
      });
      const data = await res.json();
      setFormData(data);
    }
    init();
  }, []);

  useEffect(() => {
    if (formData?.fields) {
      document.getElementById("alfaForm")?.submit();
    }
  }, [formData]);

  if (!formData) return <p>Loading...</p>;

  return (
    <form id="alfaForm" method="POST" action={formData.actionUrl}>
      {Object.entries(formData.fields).map(([k, v]) => (
        <input type="hidden" key={k} name={k} value={v} />
      ))}
      <p>Redirecting to Bank Alfalah...</p>
    </form>
  );
}
