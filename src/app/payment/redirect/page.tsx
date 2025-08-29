"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function PaymentRedirect() {
  const params = useSearchParams();
  const amount = params.get("amount");
  const orderId = params.get("orderId");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/alfa-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, orderId }),
      });
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, [amount, orderId]);

  useEffect(() => {
    if (data?.fields) {
      const form = document.getElementById("alfaForm") as HTMLFormElement | null;
      form?.submit();
    }
  }, [data]);

  if (!data) return <p>Preparing Payment...</p>;

  return (
    <form id="alfaForm" action={data.actionUrl} method="POST">
      {Object.entries(data.fields).map(([key, val]) => (
        <input key={key} type="hidden" name={key} value={val as string} />
      ))}
      <p>Redirecting to Bank Alfalah...</p>
    </form>
  );
}
