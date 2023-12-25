import React from 'react'
import { minus, plus } from '@/constants/assets'
import FaqItem from './FaqItem'
const Faq = () => {
    return (
        <div className='max-w-[1280px] sm:p-6 p-2 m-auto'>

            <p className='text-3xl font-bold text-center mb-16'>
                Frequently Asked Questions
            </p>

            <FaqItem
                question="How do I search for properties on your website?"
                answer="To find properties, simply use our intuitive search bar on the homepage. Filter results by location, property type, and price range to refine your search.
                " />

            <FaqItem
                question="What type of properties do you offer?"
                answer="To find properties, simply use our intuitive search bar on the homepage. Filter results by location, property type, and price range to refine your search.
                " />
            <FaqItem
                question="How Can I contact a real estate agent from your team?"
                answer="To find properties, simply use our intuitive search bar on the homepage. Filter results by location, property type, and price range to refine your search.
                " />

            <FaqItem
                question="What information should I prepare when selling my property?"
                answer="To find properties, simply use our intuitive search bar on the homepage. Filter results by location, property type, and price range to refine your search.
                " />

        </div>
    )
}

export default Faq