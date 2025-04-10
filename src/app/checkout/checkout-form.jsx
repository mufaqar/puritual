'use client'
import React, { useState } from 'react'
import SquareButton from '@/components/ui/square-button'
import { useSelector } from 'react-redux';
import { handleCheckout } from '@/lib/handle-checkout';
import { CreateOrder } from '@/lib/create-order';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const CheckouthtmlForm = () => {
    const cart = useSelector((state) => state?.cart);
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        your_name: '',
        your_email: '',
        country: '',
        city: '',
        phone_number: '',
        address: '',
        company_name: '',
        postcode: '',
        payment_method: 'credit-card',
        delivery_method: 'free',
    })
    const router = useRouter()

    const handleChange = (e) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleRadioChange = (e) => {
        const { name, id } = e.target
        setFormData(prev => ({ ...prev, [name]: id }))
    }

    const subTotal = cart?.totalPrice?.toFixed(2)
    const storePickup = 0
    const tax = 0
    const saving = 0
    const grandTotal = subTotal + storePickup + tax + saving

    const data = {
        grandTotal: grandTotal || 0,
        cart: cart || [],
        formData: formData || {}
    }

    const handleCheckoutPayment = async () => {
        if (checkMissingFiled()) return;
        setLoading(true)
        if (formData?.payment_method === "pay-on-delivery") {
            const res = await CreateOrder(data)
            const paymentMethod = res?.orderData?.payment_method_title
            const name = res?.orderData?.billing?.first_name
            const address = res?.orderData?.billing?.address_1
            const email = res?.orderData?.billing?.email
            const phone = res?.orderData?.billing?.phone
            if (res?.status === "success") {
                setLoading(false)
                localStorage.removeItem('couponData')
                router.push(`/success?paymentMethod=${paymentMethod}&name=${name}&address=${address}&email=${email}&phone=${phone}&orderId=${res?.orderId}`)
            } else {
                setLoading(false)
            }
        } else {
            handleCheckout(data)
        }
    }

    const checkMissingFiled = () => {
        const requiredFields = ['your_name', 'your_email', 'country', 'city', 'phone_number', 'address', 'company_name', 'postcode'];
        const missingFields = requiredFields.filter(field => !formData[field]);
        if (missingFields.length > 0) {
            toast.error('Please fill out all required fields.');
            return true;
        }
    }

    return (
        <section className="max-w-[1280px] mx-auto px-3">
            <div className="mx-auto max-w-screen-xl">
                <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                    <div className="min-w-0 flex-1 space-y-8">
                        {/* Delivery Details */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-dark">Delivery Details</h2>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="your_name" className="mb-2 block text-sm font-medium text-dark">Your name</label>
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
                                    <label htmlFor="your_email" className="mb-2 block text-sm font-medium text-dark">Your email*</label>
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
                                    <label htmlFor="country" className="mb-2 block text-sm font-medium text-dark">Country*</label>
                                    <select
                                        id="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                                    >
                                        <option>Pakistan</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="city" className="mb-2 block text-sm font-medium text-dark">City*</label>
                                    <select
                                        id="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                                    >
                                        <option value="KHI">Karachi</option>
                                        <option value="LHR">Lahore</option>
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
                                    <label htmlFor="phone_number" className="mb-2 block text-sm font-medium text-dark">Phone Number*</label>
                                    <div className="flex items-center">
                                        <span className="inline-flex items-center rounded-s-lg bg-dark p-3 text-primary">+92</span>
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
                                    <label htmlFor="address" className="mb-2 block text-sm font-medium text-dark">Address</label>
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
                                    <label htmlFor="company_name" className="mb-2 block text-sm font-medium text-dark">Company name</label>
                                    <input
                                        type="text"
                                        id="company_name"
                                        value={formData.company_name}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                                        placeholder="Puritual "
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="postcode" className="mb-2 block text-sm font-medium text-dark">Postcode</label>
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
                                {['pay-on-delivery'].map(id => (
                                    <label htmlFor={id} key={id} className="rounded-lg border cursor-pointer border-gray-200 bg-dark p-4 ps-4 ">
                                        <div className="flex items-start">
                                            <input type="radio" id={id} name="payment_method" checked={formData.payment_method === id} onChange={handleRadioChange} className="h-4 w-4 mt-1" />
                                            <div className="ms-4 text-sm">
                                                <span className="font-medium leading-none text-primary capitalize">
                                                    {id.replace('-', ' ')}
                                                </span>
                                                <p className="mt-1 text-xs text-gray-400">{id === 'pay-on-delivery' ? '+$15 payment processing fee' : 'Pay with your credit/Debit card'}</p>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Methods */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-dark">Delivery Methods</h3>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                <div className="rounded-lg border border-gray-200 bg-dark p-4 ps-4">
                                    <div className="flex items-start">
                                        <input type="radio" id="free" name="delivery_method" checked={formData.delivery_method === 'free'} onChange={handleRadioChange} className="h-4 w-4 mt-1" />
                                        <div className="ms-4 text-sm">
                                            <label htmlFor="free" className="font-medium leading-none text-primary">Free Delivery</label>
                                            <p className="mt-1 text-xs text-gray-400">Get it in 3-5 days</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Summary */}
                    <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md bg-dark p-5 md:p-10 rounded-4xl sticky top-28">
                        <div className="flow-root">
                            <div className="-my-3 divide-y divide-primary">
                                <dl className="flex justify-between py-3 text-base">
                                    <dt className="text-gray-400">Subtotal</dt><dd className="text-secoundry">${subTotal}</dd>
                                </dl>
                                <dl className="flex justify-between py-3 text-base">
                                    <dt className="text-gray-400">Savings</dt><dd className="text-secoundry">${saving}</dd>
                                </dl>
                                <dl className="flex justify-between py-3 text-base">
                                    <dt className="text-gray-400">Store Pickup</dt><dd className="text-secoundry">${storePickup}</dd>
                                </dl>
                                <dl className="flex justify-between py-3 text-base">
                                    <dt className="text-gray-400">Tax</dt><dd className="text-secoundry">${tax}</dd>
                                </dl>
                                <dl className="flex justify-between py-3 text-base font-bold">
                                    <dt className="text-secoundry">Total</dt><dd className="text-secoundry">${Number(grandTotal).toFixed(2)}</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <SquareButton onClick={handleCheckoutPayment} className="uppercase w-full">
                                <p className='pb-[10px] font-medium pt-[14px]'>{loading ? "Proceeding..." : "Proceed to Payment"}</p>
                            </SquareButton>
                            <p className="text-sm mt-2 font-normal text-gray-400">
                                One or more items in your cart require an account. <a href="#" className="font-medium text-primary-700 underline">Sign in or create an account now.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Reusable InputField Component (optional inline version)
const inputField = ({ label, id, value, onChange, placeholder, type = 'text' }) => (
    <div>
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-dark">{label}</label>
        <input type={type} id={id} value={value} onChange={onChange} className="block w-full rounded-lg bg-dark p-4 text-sm text-primary" placeholder={placeholder} required />
    </div>
)

export default CheckouthtmlForm
