import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsFillBasket2Fill } from 'react-icons/bs'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="h-20 min-[1200px]:h-32 py-3 md:py-6 w-full sm:border-b-[0.1px] border-[#a7a7a7] absolute top-0 z-50 " >
            <div className="max-w-[1400px] px-5 mx-auto flex items-center justify-between">
                <a href='/' className="h-16 w-16 md:h-20 md:w-20 block md:hidden min-[1200px]:block relative mr-7">
                    <figure>
                        <img className="h-16 w-16 md:h-20 md:w-20" src="/public/favicon.png" alt="brand-logo" title="logo" />
                        <span className='absolute left-0 right-0 m-auto text-sm -mt-2 whitespace-nowrap'>Coffee Shop</span>
                    </figure>
                </a>
                <nav className="min-[1200px]:flex-1">
                    <ul id='nav-item-left' className="hidden gap-x-5 lg:gap-x-10 md:flex nav-item-left-side common">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/">Menu</a>
                        </li>
                        <li>
                            <a href="/">Reservation</a>
                        </li>
                        <li className='block min-[1200px]:hidden'>
                            <a href="/">Pages</a>
                        </li>
                        <li className='block min-[1200px]:hidden'>
                            <a href="/">Shop</a>
                        </li>
                        <li className='block min-[1200px]:hidden'>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </nav>

                <div className='w-5/12 flex justify-end items-center'>
                    <nav id='nav-item-right' className='flex gap-x-5'>
                        <ul className='items-center hidden min-[1200px]:flex gap-x-10 nav-item-right-side common'>
                            <li>
                                <a href="/">Pages</a>
                            </li>
                            <li>
                                <a href="/">Shop</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                        <div>
                            <ul className='flex gap-x-5 md:gap-x-10'>
                                <li>
                                    <a href="/">
                                        <BiSearch className='h-5 w-5 sm:h-7 sm:w-7' />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <GiHamburgerMenu className='h-5 w-5 sm:h-7 sm:w-7' />
                                    </a>
                                </li>
                                <li>
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