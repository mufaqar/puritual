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
      question: "What is your refund policy?",
      answer: "We offer a full refund within 30 days of purchase if you are not satisfied with our product.",
    },
    {
      question: "How do I contact support?",
      answer: "We have no relation to projects that copy us: repeat parts of the name, packaging, style of social media management. Sometimes, customers will come across such a fake and say that we have gone bad or that it has become tasteless. Always pay attention to whether it is really Mr.Pops - in addition to high quality, in points of sale we are distinguished by a branded burgundy refrigerator and a large burgundy logo on each package. ",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping fees and delivery times vary by location.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan anytime from your account settings without losing any data.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day free trial with access to all premium features.",
    }
  ];
  