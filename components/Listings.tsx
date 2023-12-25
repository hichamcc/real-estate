import React from 'react'
import { house_1, house_2, house_3, house_4, house_5, house_6, house_8, house_9, house_10 } from '../constants/assets'
import { propertyTypes } from '@/constants'
import Button from './Button'
const imgListing = [house_1, house_3, house_4, house_5, house_6, house_8, house_9, house_10]

const Listings = () => {
    return (
        <section id='listings' className='max-w-[1280px] sm:p-6 p-2 m-auto'>
            <div className=' justify-between flex  sm:flex-row flex-col sm:mt-24 mt-12'>
                <div className='sm:w-1/2 w-full'>
                    <p className='text-3xl font-bold' >Discover Our Premium Property</p>
                    <p className='mt-4 leading-6 text-gray-600 '>Our Expertise In Matching You With Homes That Suit Your Lifestyle And Aspirations. Discover A Seamless Real Estate.</p>
                </div>
                <div className='sm:w-1/2 w-full sm:text-end text-center mt-4 sm:mt-0'>
                    <Button value="See All Properties" style='' />
                </div>
            </div>

            <div className='flex sm:flex-row flex-col w-full  gap-2 mt-12'>

                {propertyTypes.map((prop, index) => (
                    <div className=" relative sm:w-1/3 w-full   sm:h-[360px] h-[280px] bg-cover  rounded-lg bg-gradient-to-l p-2 cursor-pointer hover:scale-105 transition" style={{ backgroundImage: `url(${imgListing[index].src})` }}>
                        <div className='absolute bottom-0 left-0 bg-black bg-opacity-10  w-full p-2'>
                            <p className=' text-white font-semibold text-2xl mt-auto'>{prop.type}</p>
                            <p className='text-white mt-4 max-w-[300px]'>
                                Introducing The New Golden City , The Empbrace of peopel.
                            </p>
                        </div>
                    </div>
                ))}

            </div>

            <div className='flex sm:flex-row flex-col w-full gap-4 mt-12'>
                <div className='sm:w-3/5 w-full '>
                    <img className='rounded-3xl' src={imgListing[5].src} alt="" />
                </div>
                <div className='sm:w-2/5 w-full   flex flex-col justify-between'>
                    <img className='rounded-3xl h-3/5 w-full object-cover' src={imgListing[0].src} alt="" />

                    <div className=' w-full '>
                        <p className='mt-4 leading-6  sm:text-base text-sm p-2 text-gray-600'>Our Expertise In Matching You With Homes That Suit Your Lifestyle And Aspirations. Discover A Seamless Real Estate.</p>

                    </div>
                    <div className=' w-full  mt-4 sm:mt-0'>
                        <Button value="Featured Property" style='mt-4' />
                    </div>

                </div>


            </div>

        </section>
    )
}

export default Listings