import React, { useState } from 'react'
import { navLinks } from '../constants'
import { menu, close } from '../constants/assets';

const Navigation = () => {

    const [activeNavItem, setActiveNavItem] = useState<string | null>("home");

    const handleNavItemClick = (itemName: string) => {
        setActiveNavItem(itemName);
    };

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    console.log(menu.src);
    return (
        <nav className='w-full flex sm:px-12 sm:py-6 p-3  justify-between items-center '>
            <div className=''> <p className='text-3xl tracking-widest'><b>O</b>asis</p> </div>
            <div className='min-w-[400px] sm:block hidden'>
                <ul className='sm:flex flex-row  hidden justify-between items-center felx-1' >
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`${activeNavItem === nav.id ? 'text-black' : 'text-gray-500'} font-poppins font-normal cursor-pointer text-[16px] hover:text-black transition ease-in-out hover:scale-110 `}
                        >
                            <a href={`#${nav.id}`} onClick={() => handleNavItemClick(nav.id)}>
                                {nav.title}
                            </a>

                        </li>
                    ))}

                </ul>
            </div>
            <div className='sm:block hidden'>
                <button className='font-medium px-4 py-1 text-gray-500 hover:scale-110 hover:text-black'>Sign in</button>
                <button className='font-medium px-4 py-1 ml-2 border-solid border-2 border-black rounded-full hover:text-white hover:bg-black transition duration-300 '> Sign Up</button>
            </div>

            <div className='sm:hidden flex flex-1 justify-end items-center' >
                <img
                    src={mobileMenuOpen ? close.src : menu.src}
                    className='w-[28px] h-[28px] object-contain'
                    alt=""
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                />
                <div
                    className={`${mobileMenuOpen ? 'flex' : 'hidden'} p-6 bg-white z-50 absolute top-10 right-0 mx-2 my-2 min-w-[140px]  rounded-xl border transition sidebar`}
                >
                    <ul className=' flex-col text-center' >
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`${activeNavItem === nav.id ? 'text-black' : 'text-gray-500'} font-poppins font-normal cursor-pointer text-[16px] hover:text-black transition ease-in-out hover:scale-110 p-2 `}
                            >
                                <a href={`#${nav.id}`} onClick={() => {
                                    handleNavItemClick(nav.id);
                                    setMobileMenuOpen((prev) => !prev)
                                }}>
                                    {nav.title}
                                </a>

                            </li>
                        ))}

                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navigation