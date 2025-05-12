import FaqsTemplate from '@/templates/faqs-page';
import React from 'react'

const page = () => {
  return (
    <FaqsTemplate faqs={faqs}/>
  )
}

export default page


const faqs = [
  {
    question: "What are the available delivery options?",
    answer: `<p>We offer a Home Delivery service. Times and cost for deliveries will vary depending on the location. For more information, please see our <a href="/delivery information">delivery information</a> page.</p>`
  },
  {
    question: "What time does the Puritual customer care team operate, and how can I get in contact?",
    answer: `<p>You can contact our customer care team on the following number +92300-4416441, +92300-4161465</p>
             <p><strong>Puritual Customer Service:</strong><br>We are open Monday to Thursday 10AM to 6PM. Friday 2PM to 6PM (Pakistan local time, GMT +5). You can also <a href="/contact-us">contact us</a> using our quick form and our team will get back to you as soon as possible.</p>`
  },
  {
    question: "Can I view my order history?",
    answer: `<p>You can view your orders at any time using our website. Simply follow the steps below.</p>
             <ol class="space-y-2 my-3">
               <li>Log in to our website and click on 'my account' at the top of the page.</li>
               <li>Click on the link ‘View Orders’ on the left of the page. This will show you your order history.</li>
             </ol>`
  },
  {
    question: "Can I track my order online?",
    answer: `<p>Yes, you will receive a unique tracking via email once your order is packed. This link will allow you to track your order at any time letting you know when your order will be delivered.</p>`
  },
  {
    question: "When I place an order, how long does delivery take?",
    answer: `<p>Your order confirmation email will inform you of the expected lead time for delivery. Our courier company will attempt to call you should they not have enough <a href="/delivery information">delivery information</a> to deliver your order.</p>`
  },
  {
    question: "I've received my order, but it's not suitable. How do I return it?",
    answer: `<p>Puritual is committed to providing exceptional quality and service. We will gladly refund or exchange any item(s)* that do not meet your satisfaction, provided they are returned unused and in their original packaging within 7 days of receipt, along with a copy of the invoice.</p>
             <p>Please visit our returns and refunds page for full details.</p>`
  },
  {
    question: "I've received a discount voucher but the code doesn't work online, why is this?",
    answer: `<p>Please be aware that once you’ve applied the voucher code, it cannot be used again, so please do not apply it until you’re sure that you’re ready to place and pay for your order.</p>
             <p>Most common reasons for promotion codes not working are:</p>
             <ul class="space-y-2 my-3">
               <li>being out of date</li>
               <li>being applied to products that are not eligible</li>
               <li>the set order limit not being reached</li>
             </ul>
             <p>If you’re still having problems, you can also <a href="/contact-us">contact us</a> using our quick form and we'll be happy to explain how you can redeem your discount online.</p>`
  },
  {
    question: "How can I remove my details from your mailing list?",
    answer: `<p>We regret to learn that you are considering unsubscribing. Simply login to your account on our website and follow the quick steps below.</p>
             <ol class="space-y-2 my-3">
               <li>Click on the 'My Account' link at the top of the website.</li>
               <li>Click on the 'Communication Preferences'</li>
               <li>Simply un-tick the email check box and click 'Save'.</li>
               <li>You will see a message telling you that the subscription has been removed.</li>
               <li>If you wish to subscribe to the newsletters again at any time, simply navigate to this section, tick the check box and click 'Save'.</li>
             </ol>
             <p>You can also unsubscribe by clicking on the unsubscribe link at the end of any promotional email. On click, you will navigate to the un-subscription page on the website where once you enter the reason for un-subscription and click 'Unsubscribe', you can start a new shopping journey.</p>`
  },
  {
    question: "Why has my order been cancelled?",
    answer: `<p>Your order may be cancelled for a number of reasons. The most common reasons for this are:</p>
             <ul class="space-y-2 my-3">
               <li>High demand of goods – In this event, you will receive an email confirming the cancellation and what to do next.</li>
               <li>If you requested a cancellation. You’ll receive a confirmation email once this has been done.</li>
               <li>If we’ve been unsuccessful in delivering the order to your chosen delivery address.</li>
               <li>If payment was not successful</li>
             </ul>`
  },
  {
    question: "I've placed an order online and it looked as though it was processed; yet I haven't received a confirmation email. Why?",
    answer: `<p>We’re sorry that you haven't received your confirmation email. If our email address is not in your address book or safe list, it may have been classed as spam mail, meaning that it might not have appeared in your inbox. It is also worth checking that your email address has been entered correctly.</p>
             <p>Usually our confirmation emails are sent within a few minutes of an order being placed. However, when our site is very busy, you may have to wait a little bit longer before you receive your email.</p>`
  },
  {
    question: "How do I change my delivery address?",
    answer: `<p>You may update your Puritual address book by clicking the 'my account' link at the top of the page, logging in using your username and password and selecting 'address book' from where you can add, remove and amend your addresses.</p>
             <p>If you have already placed an order, any changes will not reflect in any confirmed orders. Once an order has been placed, it is often not possible for us to change the delivery address.</p>`
  },
  {
    question: "After placing my order, when is payment taken from my account?",
    answer: `<p>All payments will be charged once your order is confirmed. This is applicable on both credit and debit cards.</p>
             <p>For COD orders, cash payment will be collected by our delivery partner at the time of delivery.</p>`
  },
  {
    question: "How do I know if my online order has been successful?",
    answer: `<p>When you place an order on our website, we will reply to you with an email confirming your order and all delivery and billing address details, including all the items you have ordered.</p>
             <p>Please check that all the information is correct on this confirmation email as incorrect information can cause delays on your order.</p>`
  },
  {
    question: "I have forgotten my password. What should I do?",
    answer: `<p>If you have an existing account with us and have forgotten your password, please click here 'sign in / register'. Click the 'forgotten your password?' link. We will then send you an email with instructions to reset your password.</p>
             <p>If you don't receive your password reset email within 1 hour, please check your spam folder. If the email is not in your spam folder, please request another by contacting our customer care team.</p>`
  },
  {
    question: "Can I change my payment information?",
    answer: `<p>Once an order has been placed, we are unable to change your payment information. By default, we do not store any payment information on our systems.</p>`
  },
  {
    question: "How can I change my personal information?",
    answer: `<p>To update or change your personal information, please log-in to bathandbodyworks.ae using the 'sign in / register' link. If you are already signed in, please click the 'my account' link at the top of the page. Then select 'my details and contact preferences'. From this section, you may view and amend your password, address, wish list and contact details including choosing how you would like us to contact you.</p>`
  }
];

  