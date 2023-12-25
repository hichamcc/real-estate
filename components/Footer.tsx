import React from 'react'
import { socialMedia, footerLinks } from '../constants';
const Footer = () => {
    return (
        <section className=' bg-black flex flex-col py-8 px-4'>
            <div className={` max-w-[1280px]  m-auto flex md:flex-row flex-col mb-8 w-full`}>
                <div className='w-1/3'>
                    <p className='text-white font-semibold text-xl' ><b>O</b>asis</p>
                    <p className={`text-dimWhite mt-4 max-w-[310px]`}>
                        The best meeting scheduling for you ever
                    </p>
                </div>
                <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
                    {footerLinks.map((footerLink) => (
                        <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]' >
                            <h4 className="font-poppins text-medium text-[18px] leading-[27px] text-white">
                                {footerLink.title}
                            </h4>
                            <ul>
                                {footerLink.links.map((link, index) => (
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-white cursor-pointer }`} >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>
            </div>
            <div className=' max-w-[1280px] w-full m-auto flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]' >
                <p className="font-poppins text-normal text-center text-[18px] leading-[27px] text-white">
                    2023 Oasis, All Rights Reserved
                </p>
                <div className='flex flex-row md:mt-0 mt-6' >
                    {socialMedia.map((social, index) => (
                        <img
                            key={social.id}
                            src={social.icon.src}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index == socialMedia.length - 1 ? 'mr-0' : 'mr-6'}`}
                        >

                        </img>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Footer