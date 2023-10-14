import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillBasket2Fill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="h-20 min-[1200px]:h-32 py-3 md:py-6 w-full sm:border-b-[0.1px] border-[#a7a7a7] absolute top-0 z-50 " >
            <div className="max-w-[1400px] px-5 mx-auto flex items-center justify-between">
                <a href='/' className="h-16 w-16 md:h-20 md:w-20 block md:hidden min-[1200px]:block relative mr-7">
                    {/* Shop brand logo */}
                    <figure>
                        <img className="h-16 w-16 md:h-20 md:w-20" src="/public/favicon.png" alt="brand-logo" title="logo" />
                        <span className='absolute left-0 right-0 m-auto text-sm -mt-2 whitespace-nowrap'>Coffee Shop</span>
                    </figure>
                </a>
                <nav className="min-[1200px]:flex-1">
                    <ul id='nav-item-left' className="hidden gap-x-5 lg:gap-x-10 md:flex nav-item-left-side common">
                        <li className='menu_link'>
                            <a href="/">Home</a>
                        </li>
                        <li className='menu_link'>
                            <a href="/about">About</a>
                        </li>
                        <li className='menu_link'>
                            <a href="/menu">Menu</a>
                        </li>
                        <li className='menu_link'>
                            <a href="/reservation">Reservation</a>
                        </li>
                        {/* Responsive Section */}
                        <li className='menu_link block min-[1200px]:hidden'>
                            <a href="/">Pages</a>
                        </li>
                        <li className='menu_link block min-[1200px]:hidden'>
                            <a href="/">Shop</a>
                        </li>
                        <li className='menu_link block min-[1200px]:hidden'>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className='w-5/12 flex justify-end items-center'>
                    <nav id='nav-item-right' className='flex gap-x-5'>
                        {/* Desktop section */}
                        <ul className='items-center hidden min-[1200px]:flex gap-x-10 nav-item-right-side common relative'>
                            <li className='menu_link relative menu_link_page py-2'>
                                <a href="#">Pages</a>
                                <ul id='submenu'
                                    className='
                                w-48 bg-white absolute -bottom-64 h-auto py-5 text-black rounded-lg sub_menu z-50
                                '>
                                    <li className='page_submenu py-1 my-2 w-full hover:text-primary font-jost font-semibold'>
                                        <a className='px-7 py-2 w-full h-full uppercase font-semibold' href="/blog">
                                            Blog
                                        </a>
                                    </li>
                                    <li className='page_submenu py-1 my-2 w-full hover:text-primary font-jost font-semibold'>
                                        <a className='px-7 py-2 w-full uppercase font-semibold' href="#">
                                            Chefs
                                        </a>
                                    </li>
                                    <li className='page_submenu py-1 my-2 w-full hover:text-primary font-jost font-semibold'>
                                        <a className='px-7 py-2 w-full uppercase font-semibold' href="#">
                                            Faq
                                        </a>
                                    </li>
                                    <li className='page_submenu py-1 my-2 w-full hover:text-primary font-jost font-semibold'>
                                        <a className='px-7 py-2 w-full uppercase font-semibold' href="#">
                                            story
                                        </a>
                                    </li>
                                    <li className='page_submenu py-1 my-2 w-full hover:text-primary font-jost font-semibold'>
                                        <a className='px-7 py-2 w-full uppercase font-semibold' href="#">
                                            Gallery
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li id='shop' className='menu_link relative'>
                                <a href="/">Shop</a>
                                <ul id='shop_menu' className=' absolute -bottom-44 bg-white text-black font-jost py-5 w-56 rounded-lg z-50'>
                                    <li className='shop_submenu relative w-full h-full py-2 hover:text-primary hover:tracking-widest'>
                                        <a className='text-base relative font-jost font-medium uppercase px-7' href="#">Shop</a>
                                    </li>
                                    <li className='shop_submenu relative w-full h-full py-2 hover:text-primary hover:tracking-widest'>
                                        <a className='text-base relative font-jost font-medium uppercase px-7' href="#">Shop Cart</a>
                                    </li>
                                    <li className='shop_submenu relative w-full h-full py-2 hover:text-primary hover:tracking-widest'>
                                        <a className='text-base relative font-jost font-medium uppercase px-7' href="#">Shop Checkout</a>
                                    </li>
                                </ul>
                            </li>

                            <li className='menu_link'>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                        <div>
                            <ul className='flex gap-x-5 md:gap-x-10'>
                                <li className='menu_link'>
                                    <a href="/">
                                        <BiSearch className='h-5 w-5 sm:h-7 sm:w-7' />
                                    </a>
                                </li>
                                <li className='menu_link'>
                                    <a href="/">
                                        <GiHamburgerMenu className='h-5 w-5 sm:h-7 sm:w-7' />
                                    </a>
                                </li>
                                <li className='menu_link'>
                                    <a href="/">
                                        <BsFillBasket2Fill className='h-5 w-5 sm:h-7 sm:w-7' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Navbar;