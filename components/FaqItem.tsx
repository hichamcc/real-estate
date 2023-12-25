import React, { useState } from 'react'
import { minus, plus } from '@/constants/assets'

interface ItemProps {
    question: string;
    answer: string;

}
const FaqItem: React.FC<ItemProps> = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    return (
        <div className='w-full border-gray-300 border-2 py-4 px-4 rounded-lg mt-4'>
            <div className='flex flex-row justify-between cursor-pointer' onClick={toggleOpen} >
                <p className='font-semibold mb-4'>
                    {question}
                </p>
                <img className={`w-[16px] h-[16px] hover:scale-105 transform transition duration-500 ${isOpen ? 'rotate-90' : ''}`} src={plus.src} alt="" />
            </div>
            <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px]' : 'max-h-0'}  w-[90%]`}>
                <p className='text-gray-600'>
                    {answer}
                </p>
            </div>
        </div>
    )
}

export default FaqItem