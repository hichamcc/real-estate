import React from 'react'
import { propertyTypes, locations, rentRanges } from '../constants'
import { types } from 'util'

const Home = () => {
    return (
        <section className='min-h-[50vh]' id='home'>
            <div className='flex absolute w-full h-[600px] z-0'>
                <div className='top-0 w-[50%] h-[600px] pink__gradient'></div>
                <div className='top-0 w-[50%] h-[600px] green__gradient'></div>
            </div>

            <p className='z-50 w-full text-center mt-10 md:text-7xl sm:text-6xl text-5xl font-semibold text-black'>
                Unlock The Door To Your <br className='sm:block hidden' /> Perfect Home
            </p>
            <p className='w-full text-center mt-10 t text-gray-600'>
                Our Expertise in Matching You With Homes that Building More than Homes Suit <br className='sm:block hidden' /> Your Lifestyle and Aspirations.
            </p>

            <div className='flex flex-1 flex-wrap flex-col sm:flex-row justify-between items-center sm:[80%] w-[90%] max-w-[1100px] bg-white rounded-xl md:rounded-full min-h-[100px] m-auto mt-10 p-3 box-shadow border relative z-10' >
                <div className='w-full sm:w-1/4 sm:border-r-2 border-r-0 sm:border-b-0 border-b-2   mb-4 sm:mb-0'>
                    <label className='block items-center px-3' htmlFor="">Locations</label>
                    <select className="focus:ring-transparent	 form-select text-gray-500 bg-transparent border-none active:border-none z-50">
                        <option value=""> Select Your City</option>
                        {locations.map((location) => (
                            <option value={location.id}> {location.location}</option>
                        ))}
                    </select>
                </div>
                <div className=' w-full sm:w-1/4 sm:border-r-2 border-r-0 sm:border-b-0 border-b-2 mb-4 sm:mb-0'>
                    <label className='block items-center px-3' htmlFor="">Property Type</label>
                    <select className="focus:ring-transparent form-select text-gray-500  bg-transparent border-none active:border-none z-50">
                        <option value=""> Select Type</option>
                        {propertyTypes.map((property) => (
                            <option value={property.id}> {property.type}</option>
                        ))}
                    </select>
                </div>
                <div className=' w-full sm:w-1/4'>
                    <label className='block items-center px-3' htmlFor="">Rent Range</label>
                    <select className="focus:ring-transparent form-select text-gray-500  bg-transparent border-none active:border-none z-50">
                        <option value=""> Select Range</option>
                        {rentRanges.map((rent) => (
                            <option value={rent.id}> {rent.range}</option>
                        ))}
                    </select>
                </div>
                <div className=' w-full md:w-1/4 text-center md:text-end  mt-3'>
                    <button className='bg-black rounded-full py-3 px-8 text-white mb-0 md:mb-3 mr-0 md:mr-6'>
                        Search
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Home