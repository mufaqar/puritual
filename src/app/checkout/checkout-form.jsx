"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CreateOrder } from "@/lib/create-order";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CheckouthtmlForm = () => {
  const cart = useSelector((state) => state?.cart);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    your_name: "",
    your_email: "",
    country: "pakistan",
    city: "LHR",
    phone_number: "",
    address: "",
    state: "PU",
    postcode: "",
    payment_method: "cod", 
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e) => {
    const { id } = e.target;
    setFormData((prev) => ({ ...prev, payment_method: id }));
  };

  const subTotal = cart?.totalPrice
    ? parseFloat(cart.totalPrice.toFixed(2))
    : 0;
  const storePickup = subTotal > 3000 ? 0 : 250; // Free delivery if subtotal > 3000
  const tax = 0;
  const saving = 0;
  const grandTotal = subTotal + storePickup + tax + saving;

  const data = {
    orderTotal: grandTotal || 0,
    cart: cart || [],
    formData: formData || {},
  };

  const checkMissingFiled = () => {
    const requiredFields = [
      "your_name",
      "your_email",
      "country",
      "city",
      "phone_number",
      "address",
      "state",
      "postcode",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);
    if (missingFields.length > 0) {
      toast.error("Please fill out all required fields.");
      return true;
    }
  };

  const handleCheckoutPayment = async () => {
    if (checkMissingFiled()) return;
     // 🧠 Check if product(s) exist in the cart
  if (!cart?.items || cart.items.length === 0) {
    toast.error("🛒 Your cart is empty. Please add a product before checkout.");
    return;
  }

  // 🧠 Ensure all products have valid IDs
  const invalidItems = cart.items.filter((item) => !item.id || item.id === "");
  if (invalidItems.length > 0) {
    toast.error("⚠️ Some products in your cart are invalid. Please re-add them.");
    return;
  }
    setLoading(true);

    try {
      // ✅ COD FLOW
      if (formData.payment_method === "cod") {
        const res = await CreateOrder(data);
        if (res?.status === "success") {
          const orderId = res?.orderId;
          router.push(`/thank-you?orderId=${orderId}`);
        } else {
          toast.error("❌ Failed to create COD order.");
        }
        return;
      }

      // ✅ CREDIT CARD (ONLINE PAYMENT) FLOW
      const res = await CreateOrder(data);
      if (res?.status !== "success")
        throw new Error("❌ Failed to create Woo order.");

      const orderId = res?.orderId;

      // 🔹 Step 2: Request handshake
      const handshakeRes = await fetch("/api/handshake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      }).then((res) => res.json());

      const authToken = handshakeRes?.authToken;
      if (!authToken) throw new Error("❌ Handshake failed.");

      // 🔹 Step 3: Prepare transaction request
      const transactionRequest = {
        AuthToken: authToken,
        ChannelId: "1001",
        Currency: "PKR",
        IsBIN: 0,
        ReturnURL: `${window.location.origin}/api/alfa-callback`,
        MerchantId: process.env.NEXT_PUBLIC_HS_MERCHANT_ID || "32286",
        StoreId: process.env.NEXT_PUBLIC_HS_STORE_ID || "220188",
        MerchantHash:
          process.env.NEXT_PUBLIC_HS_MERCHANT_HASH ||
          "OUU362MB1urs/t6z8hRyGZuT7KpVgaK4lRdYLGTkBqiq468CtZr5q3/GJF2Z5WRbrx2sWlaPP75vFzk4yqF7CA==",
        MerchantUsername: process.env.NEXT_PUBLIC_HS_USERNAME || "asarot",
        MerchantPassword:
          process.env.NEXT_PUBLIC_HS_PASSWORD || "+TbkQ8qmQsZvFzk4yqF7CA==",
        TransactionTypeId: "3",
        TransactionReferenceNumber: orderId,
        TransactionAmount: grandTotal,
      };

      const NEXT_PUBLIC_SB_TRANSACTION = process.env.NEXT_PUBLIC_SB_TRANS;

      // 🔹 Step 4: Request transaction hash
      const hashResponse = await fetch("/api/transaction-hash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transactionRequest),
      }).then((res) => res.json());

      const requestHash = hashResponse?.requestHash;
      if (!requestHash) throw new Error("❌ No RequestHash returned.");

      // 🔹 Step 5: Submit form to AlfaPay
      const form = document.createElement("form");
      form.method = "POST";
      form.action = NEXT_PUBLIC_SB_TRANSACTION;
      form.style.display = "none";

      for (const [key, value] of Object.entries(transactionRequest)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }

      const requestHashInput = document.createElement("input");
      requestHashInput.type = "hidden";
      requestHashInput.name = "RequestHash";
      requestHashInput.value = requestHash;
      form.appendChild(requestHashInput);

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("🔥 Checkout Error:", error);
      alert("Something went wrong with payment. Check console logs.");
    } finally {
      setLoading(false);
    }
  };

  // const redirectToBank = (authToken, requestHash, payload, orderTotal) => {
  //   const form = document.createElement("form");
  //   form.method = "POST";
  //   form.action = "https://payments.bankalfalah.com/SSO/SSO/SSO";

  //   const fields = {
  //     AuthToken: authToken,
  //     RequestHash: requestHash,
  //     ChannelId: payload.ChannelId,
  //     Currency: payload.Currency,
  //     IsBIN: payload.IsBIN,
  //     ReturnURL: payload.ReturnURL,
  //     MerchantId: payload.MerchantId,
  //     StoreId: payload.StoreId,
  //     MerchantHash: payload.MerchantHash,
  //     MerchantUsername: payload.MerchantUsername,
  //     MerchantPassword: payload.MerchantPassword,
  //     TransactionTypeId: payload.TransactionTypeId,
  //     TransactionReferenceNumber: payload.TransactionReferenceNumber,
  //     TransactionAmount: orderTotal,
  //   };

  //   Object.keys(fields).forEach((key) => {
  //     const input = document.createElement("input");
  //     input.type = "hidden";
  //     input.name = key;
  //     input.value = fields[key];
  //     form.appendChild(input);
  //   });

  //   document.body.appendChild(form);
  //   form.submit();
  // };

  return (
    <section className="max-w-[1280px] mx-auto px-3">
      <div className="mx-auto max-w-screen-xl">
        <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
          <div className="min-w-0 flex-1 space-y-8">
            {/* Delivery Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-dark">
                Delivery Details
              </h2>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="your_name"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="your_name"
                    value={formData.your_name}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                    placeholder="Muhammad "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="your_email"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    Your email*
                  </label>
                  <input
                    type="email"
                    id="your_email"
                    value={formData.your_email}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                    placeholder="name@puritual.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    City*
                  </label>
                  <select
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                  >
                    <option value="KHI">Karachi</option>
                    <option value="LHR" >Lahore</option>
                    <option value="ISB">Islamabad</option>
                    <option value="RWP">Rawalpindi</option>
                    <option value="FSD">Faisalabad</option>
                    <option value="MLT">Multan</option>
                    <option value="PEW">Peshawar</option>
                    <option value="QTA">Quetta</option>
                    <option value="GJW">Gujranwala</option>
                    <option value="SKT">Sialkot</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    State*
                  </label>
                  <select
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                  >
                    <option value="PU" >Punjab</option>
                    <option value="LHR">Sindh</option>
                    <option value="ISB">KPK</option>
                    <option value="RWP">Balochistan</option>
                    <option value="FSD">Gilgit-Baltistan</option>
                    <option value="MLT">Azad Kashmir</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    Country*
                  </label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                  >
                    <option value="pakistan">Pakistan</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="phone_number"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    Phone Number*
                  </label>
                  <div className="flex items-center">
                    <span className="inline-flex items-center rounded-s-lg bg-dark p-3 text-primary">
                      +92
                    </span>
                    <input
                      type="text"
                      id="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="block w-full rounded-e-lg bg-dark p-3 text-primary"
                      placeholder="123-456-7890"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                    placeholder="H # 123 ..."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="postcode"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    Postcode
                  </label>
                  <input
                    type="text"
                    id="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                    placeholder="DE42313253"
                    required
                  />
                </div>
              </div>
            </div>
            {/* Payment Method */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-dark">Payment</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <label
                  htmlFor="credit_card"
                  key="credit_card"
                  className="rounded-lg border cursor-pointer border-gray-200 bg-dark p-4 ps-4 "
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      id="credit_card"
                      name="payment_method"
                      checked={formData.payment_method === "credit_card"}
                      onChange={handleRadioChange}
                      className="h-4 w-4 mt-1"
                    />
                    <div className="ms-4 text-sm">
                      <span className="font-medium leading-none text-primary capitalize">
                        Online Payment
                      </span>
                      <p className="mt-1 text-xs text-gray-400">
                        Pay with your credit/Debit card
                      </p>
                    </div>
                  </div>
                </label>
                <label
                  htmlFor="cod"
                  key="cod"
                  className="rounded-lg border cursor-pointer border-gray-200 bg-dark p-4 ps-4 "
                >
                  <div className="flex items-start">
                    <input
                      type="radio"
                      id="cod"
                      name="payment_method"
                      checked={formData.payment_method === "cod"}
                      onChange={handleRadioChange}
                      className="h-4 w-4 mt-1"
                    />
                    <div className="ms-4 text-sm">
                      <span className="font-medium leading-none text-primary capitalize">
                        Cash on Delivery
                      </span>
                      <p className="mt-1 text-xs text-gray-400">
                        Pay once you receive the product
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Delivery Methods */}
          </div>

          {/* Sidebar Summary */}
          <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md bg-dark p-5 md:p-10 rounded-4xl sticky top-28">
            <div className="flow-root">
              <div className="-my-3 divide-y divide-primary">
                <dl className="flex justify-between py-3 text-base">
                  <dt className="text-gray-400">Subtotal</dt>
                  <dd className="text-secoundry">Rs{subTotal}</dd>
                </dl>
                <dl className="flex justify-between py-3 text-base">
                  <dt className="text-gray-400">Savings</dt>
                  <dd className="text-secoundry">Rs{saving}</dd>
                </dl>
                <dl className="flex justify-between py-3 text-base">
                  <dt className="text-gray-400">Delivery charges</dt>
                  <dd className="text-secoundry">Rs{storePickup}</dd>
                </dl>
                <dl className="flex justify-between py-3 text-base">
                  <dt className="text-gray-400">Tax</dt>
                  <dd className="text-secoundry">Included </dd>
                </dl>
                <dl className="flex justify-between py-3 text-base font-bold">
                  <dt className="text-secoundry">Total</dt>
                  <dd className="text-secoundry">
                    Rs{Number(grandTotal).toFixed(2)}
                  </dd>
                </dl>
              </div>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleCheckoutPayment}
                className="uppercase w-full bg-primary !text-dark hover:!text-white hover:bg-secoundry px-3 py-2 text-lg relative z-20 flex text-center justify-center items-center shadow-[3px_3px_0_3px_rgb(174,208,54)] hover:shadow-[0px_0px_0_0px_rgb(174,208,54)] transition-all duration-300 ease-linear"
              >
                <p className="pb-[10px] font-medium pt-[14px]">
                  {loading ? "Proceeding..." : "Proceed to Payment"}
                </p>
              </button>
              <p className="text-sm mt-2 font-normal text-gray-400">
                Free Delivery above Rs 3000
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable InputField Component (optional inline version)
const inputField = ({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-sm font-medium text-dark">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
      placeholder={placeholder}
      required
    />
  </div>
);

export default CheckouthtmlForm;
