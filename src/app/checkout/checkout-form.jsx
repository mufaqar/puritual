'use client'
import React, { useState } from 'react'
import SquareButton from '@/components/ui/square-button'
import { useSelector } from 'react-redux';
import { handleCheckout } from '@/lib/handle-checkout';
import { CreateOrder } from '@/lib/create-order';

const CheckouthtmlForm = () => {
    const cart = useSelector((state) => state?.cart);
    const [formData, setFormData] = useState({
        your_name: '',
        your_email: '',
        country: '',
        city: '',
        phone: '',
        email: '',
        company_name: '',
        vat_number: '',
        payment_method: 'credit-card',
        delivery_method: 'free',
    })

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
        grandTotal : grandTotal || 0,
        cart: cart || [],
        formData : formData || {}
    }


    
    const handleCheckoutPayment = async () => {
        if(formData?.payment_method === "pay-on-delivery"){
            const res = await CreateOrder(data)
            
        }else{
            handleCheckout(data)
        }
    }

    return (
        <section className="max-w-[1280px] mx-auto px-3">
            <form className="mx-auto max-w-screen-xl">
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
                                        placeholder="Bonnie Green"
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
                                        placeholder="name@flowbite.com"
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
                                        <option>United States</option>
                                        <option value="AS">Australia</option>
                                        <option value="FR">France</option>
                                        <option value="ES">Spain</option>
                                        <option value="UK">United Kingdom</option>
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
                                        <option>San Francisco</option>
                                        <option value="NY">New York</option>
                                        <option value="LA">Los Angeles</option>
                                        <option value="CH">Chicago</option>
                                        <option value="HU">Houston</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="phone_number" className="mb-2 block text-sm font-medium text-dark">Phone Number*</label>
                                    <div className="flex items-center">
                                        <span className="inline-flex items-center rounded-s-lg bg-dark p-3 text-primary">+1</span>
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
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-lg bg-dark p-4 text-sm text-primary"
                                        placeholder="name@flowbite.com"
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
                                        placeholder="Flowbite LLC"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="vat_number" className="mb-2 block text-sm font-medium text-dark">VAT number</label>
                                    <input
                                        type="text"
                                        id="vat_number"
                                        value={formData.vat_number}
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
                                {['credit-card', 'pay-on-delivery'].map(id => (
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
                                <p className='pb-[10px] font-medium pt-[14px]'>Proceed to Payment</p>
                            </SquareButton>
                            <p className="text-sm mt-2 font-normal text-gray-400">
                                One or more items in your cart require an account. <a href="#" className="font-medium text-primary-700 underline">Sign in or create an account now.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </form>
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
