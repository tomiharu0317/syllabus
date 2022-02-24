import { NextPage } from 'next'

/* This example requires Tailwind CSS v2.0+ */
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

// const Faq: NextPage = () => {
//   return <FAQ />
// }

// export default function FAQ() {
//   return (
//     <div className='bg-gray-50'>
//       <div className='max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8'>
//         <h2 className='text-3xl font-extrabold text-gray-900'>Frequently asked questions</h2>
//         <div className='mt-8'>
//           <dl className='divide-y divide-gray-200'>
//             {faqs.map((faq) => (
//               <div key={faq.id} className='pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8'>
//                 <dt className='text-base font-medium text-gray-900 md:col-span-5'>
//                   {faq.question}
//                 </dt>
//                 <dd className='mt-2 md:mt-0 md:col-span-7'>
//                   <p className='text-base text-gray-500'>{faq.answer}</p>
//                 </dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function FAQ() {
  return (
    <div className='bg-white'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center'>
          Frequently asked questions
        </h2>
        <div className='mt-12'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3'>
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className='text-lg leading-6 font-medium text-gray-900'>{faq.question}</dt>
                <dd className='mt-2 text-base text-gray-500'>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
