import React, { useState, useRef } from 'react'
import { house_1, house_2, house_3, house_4, house_5, house_6, house_7, house_8, house_9, house_10, arrow_left, arrow_right } from '../constants/assets'

const imgSlides = [house_1, house_2, house_3, house_4, house_5, house_6, house_8, house_9, house_10]

const Slide = () => {
    const imgStyle = "object-cover  rounded-lg  cursor-pointer w-1/3 sm:w-1/5 p-1 opacity-90 hover:opacity-100 "
    const [currentIndex, setCurrentIndex] = useState(0);
    const heights = ['h-48 sm:h-40  ', 'h-56 sm:h-56', 'h-48 sm:h-72', 'h-48 sm:h-56', 'h-48 sm:h-40'];
    const [slideAnimation, setSlideAnimation] = useState('s-left');

    const showPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
        setSlideAnimation('s-right')
    };

    const showNext = () => {
        setSlideAnimation('s-left')

        setCurrentIndex((prevIndex) => {
            const visibleImages = window.innerWidth >= 768 ? 5 : 3;
            return prevIndex === imgSlides.length - visibleImages ? prevIndex : prevIndex + 1;
        });
    };

    return (
        <div className='max-w-[1280px] justify-between m-auto  p-1 sm:p-6 flex  z-50'>

            <div className='flex items-center gap-2 z-50'>
                <img className='w-[16px] h-[16px] cursor-pointer sm:hover:scale-110 transition' src={arrow_left.src} alt="" onClick={showPrevious} />

                <div id='slider' className='w-[90vw]  max-w-[1280px] flex overflow-hidden items-center justify-between '>

                    {imgSlides.map((img, index) => (
                        <img
                            key={index}
                            className={`${imgStyle} transition-all ${slideAnimation} ease-linear  duration-300  ${index < currentIndex || index >= currentIndex + 5 ? 'hidden' : heights[index - currentIndex]} `}
                            src={img.src} alt="" />
                    ))}

                </div>
                <img className='w-[16px] h-[16px] cursor-pointer sm:hover:scale-110 transition' src={arrow_right.src} alt="" onClick={showNext} />

            </div>

        </div>

    )
}

export default Slide