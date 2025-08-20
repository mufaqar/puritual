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
    title: "Product",
    items: [
      {
        question: "What makes Puritual different from regular handwashes?",
        answer: "Unlike conventional gel-based hand washes, Puritual offers a delightful foam-based alternative. Our rich, airy lather turns handwashing into a pure, foamy and feel-good ritual. The light, luxurious foam feels playfully indulgent and completely avoids the sticky or heavy sensation often associated with gel-based cleansers. It’s more than just a handwash — it’s your fragrant, feel-good moments."
      },
      {
        question: "Does Puritual contain natural ingredients?",
        answer: "Yes, we keep it pure and skin-loving. Puritual handwashes are enriched with aloe vera for natural hydration, vitamin E for soft care, and mood-lifting fragrances that turns everyday hygiene into a joyful ritual you’ll actually look forward to."
      },
      {
        question: "Can I use Puritual on the go?",
        answer: "Yes, Puritual’s ergonomic, travel-friendly design makes it perfect for home, work, or wherever life takes you. Whether it’s on your office desk, in your car, or in your travel bag — you can enjoy soft, fragrant foam anytime, anywhere. Clean hands and feel-good rituals don’t have to wait!"
      },
      {
        question: "Is Puritual handwash safe and suitable for the whole family, including kids?",
        answer: "Yes. Puritual’s gentle, skin-friendly formula is crafted for everyone from little hands to grown-up ones. Kids love Its soft, rich foam and parent love the skin-safe formula. Handwashing just became the favorite part of everyone’s day.\nSafety Note: For happy hands only — not for mouths or eyes. If contact occurs, rinse well with clean water. Little ones should enjoy the foam with grown-up supervision."
      },
      {
        question: "How much product should I use per wash and how long one bottle lasts?",
        answer: "A little Puritual goes a long way. Just one to two pumps are enough to create rich, playful foam for a thorough, satisfying cleanse. Because it’s foam-based, Puritual can last up to twice as long as regular gel-based handwashes, making it both fun and efficient. Of course, it depends on how much fun you’re having with the foam."
      },
      {
        question: "Does the Puritual handwash bottle have a safety lock?",
        answer: "Yes, it does! Puritual’s pump is designed with a built-in locking mechanism. Simply rotate the pump clockwise to lock and anti-clockwise to unlock or look for the lock/unlock indicator on the pump head. This handy feature is perfect for carrying in bags, using on the go, or storing safely around kids. No spills, no surprises, just pure, foamy fun wherever you are."
      }
    ]
  },
  {
    title: "Ordering",
    items: [
      {
        question: "How can I place an order?",
        answer: "It’s super easy! Just hop onto our website, pick your favorite Puritual, add it to your cart, and breeze through the quick checkout steps. Foamy fun is just a few clicks away! Once you’re done, we’ll send you a confirmation email with your order ID and all the details."
      },
      {
        question: "What payment methods do you accept?",
        answer: "You can pay using COD (cash on delivery), debit or credit cards, or via bank transfers. Whether you love the ease of card payments or prefer paying at your doorstep, we’ve got you covered."
      },
      {
        question: "Can I cancel or change my order after placing it?",
        answer: "You may cancel or make changes to your order before it enters shipping process. Once it has shipped, we may not be able to cancel or change. If you need help, just reach out to our support team — we’d love to assist you in any way we can!"
      },
      {
        question: "Do I need to create an account to order?",
        answer: "You can easily check out as a guest. But creating an account makes it a whole lot easier — you can quickly reorder your favorite rituals, track your orders and view your full order history anytime you like. It’s the quickest way to keep your foamy favorites just a click away."
      },
      {
        question: "Where can I view my order history?",
        answer: "If you’ve created an account, you can easily view your past and current orders by logging into your account, clicking ‘My Account,’ and selecting ‘View Orders.’"
      },
      {
        question: "How do I reset my account password?",
        answer: "Click on the Forgot Password link on the login page and follow the simple steps to reset it. Need help? Our team is just a message away."
      }
    ]
  },
  {
    title: "Shipping and Delivery",
    items: [
      {
        question: "How are Puritual products packed and delivered?",
        answer: "All our orders are packed in sturdy shipping boxes with added protection to ensure safe delivery. Every box and the bottle itself are sealed with tamper-evident stickers so you can be sure you’re getting a fresh, unused product. If a seal is broken upon delivery, please contact us right away."
      },
      {
        question: "How can I track my order?",
        answer: "Once your order is dispatched, you’ll receive an email with tracking details so you can follow your Puritual package on its journey to you."
      },
      {
        question: "How long does delivery take?",
        answer: "Delivery usually takes 3–5 working days in major cities and 5–7 working days for remote areas. We’ll send you tracking details as soon as your order ships. Please note that rare delays can occur due to high volume or exceptional situations."
      },
      {
        question: "Do you offer nationwide shipping?",
        answer: "Yes! We deliver all across Pakistan. Whether you’re in a big city or a small town, your foamy fun will find you."
      }
    ]
  },
  {
    title: "Returns and Refunds",
    items: [
      {
        question: "What products are not eligible for returns and refunds?",
        answer: "For hygiene and safety, only products that are unused, unopened, and have their original safety seals intact are eligible for returns and refunds. We can’t accept returns for products that have been opened, used, or have broken safety seals. Please make sure to request a return within 3 working days of delivery. Also, products purchased during promotional sales, flash sales, or special offers don’t qualify for returns or refunds—so make sure you love your picks before checking out!"
      },
      {
        question: "What if I received a damaged product?",
        answer: "We pack with love and care, but if something goes wrong, we’ll make it right. If your order arrives damaged, please inform the delivery courier at the time of delivery and contact our Puritual support team as soon as possible.\n\nTo help us process your claim smoothly, we recommend recording a quick unboxing video when opening your package.\n\nAll damage claims must be reported within 3 working days of delivery. Once reviewed, we’ll arrange a free pickup and send you a fresh, perfect replacement. Just make sure the product is unused, safety seals are intact, and all original items (including the invoice) are returned."
      },
      {
        question: "What if I received the wrong product?",
        answer: "If you receive the wrong product, please let us know within 3 working days of delivery. We’ll quickly arrange a free pickup and send you the correct item right away. Just make sure the product is unused, sealed, and returned with all original items, including the invoice."
      },
      {
        question: "Can I exchange or return a product if I changed my mind?",
        answer: "We totally get it, sometimes minds (and scent vibes) change. If you’d like to return or exchange a product, please contact us within 3 working days of delivery. The product must be unused, unopened, and with all safety seals intact. In cases of change of mind, the return shipping cost will need to be covered by you. Once we receive the product in its original condition, we’ll review and process your exchange or refund."
      },
      {
        question: "How long does it take to process an exchange or refund?",
        answer: "After we receive and review the returned product to ensure it’s unused, sealed, and eligible, we will notify you and will process your exchange or refund within 3-5 working days. Refunds will always be issued to your original payment method. Depending on your bank or payment provider, it may take a little extra time to show up in your account."
      },
      {
        question: "What if I opened or used the product?",
        answer: "For hygiene purpose, if the product is opened or used or the safety seal is not intact, we can not accept returns, exchanged or refunds."
      }
    ]
  }
];

  