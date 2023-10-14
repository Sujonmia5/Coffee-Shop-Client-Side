import DynamicHero from '../../components/DynamicHero/DynamicHero';
import PrimaryButton from '../../components/utilities/Button/PrimaryButton';
import { DynamicHeroPath } from '../../components/utilities/Function/Function';
import { GiCoffeeCup } from 'react-icons/gi';
import { AiOutlineComment } from 'react-icons/ai';
import { FaCalendarAlt } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import './Blog.css';

const Blog = () => {
    const Path = DynamicHeroPath()

    return (
        <div className='mt-28 md:mt-52'>

            <DynamicHero Path={Path} />
            <div className='max-w-[1200px] mx-auto p-5 grid grid-cols-3 gap-x-4 mt-20'>
                {/* Blog section start */}
                <div className='col-span-2 space-y-10'>
                    <article className='blog_card border rounded-xl px-8 py-9'>
                        <div className='w-full h-2/3 rounded-lg overflow-hidden'>
                            <figure>
                                <img id='image' className='rounded-lg transition-all' src="/src/assets/blog/blog-post-1.jpg" alt="blog_image" />
                            </figure>
                        </div>
                        <div className='w-full'>
                            <ul className='flex justify-start items-center gap-x-16 my-5'>
                                <li className='relative'>
                                    <a className='flex justify-start items-center gap-x-1 text-[#a7a7a7] font-jost text-sm hover:text-primary  after:absolute -right-10 after:content-[" "] after:w-[1.5px] after:h-full blog_link' href="#">
                                        <GiCoffeeCup className='w-5 h-5' />
                                        Coffee
                                    </a>
                                </li>
                                <li className='relative'>
                                    <a className='flex justify-start items-center gap-x-1 text-[#a7a7a7] font-jost text-sm hover:text-primary  after:absolute -right-10 after:content-[" "] after:w-[1.5px] after:h-full blog_link' href="#">
                                        <AiOutlineComment className='w-5 h-5' />
                                        <span>25</span>
                                        Comment
                                    </a>
                                </li>
                                <li>
                                    <a className='flex justify-start items-center gap-x-1 text-[#a7a7a7] font-jost text-sm hover:text-primary' href="#">

                                        <FaCalendarAlt className='w-4 h-4' />
                                        4th March 2023
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bebas tracking-wide'>WHISPER TO US ABOUT YOUR FEELINGS, AND WE WILL PREPARE WHAT YOU NEED NOW.</h1>
                            <p className='text-lg my-5 text-justify font-jost text-[#a7a7a7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni magnam architecto eaque dolore corporis suscipit dicta a obcaecati cum inventore omnis quas mollitia tenetur pariatur, quis voluptatibus et vitae, at eum repudiandae cumque! Illum minus, a perspiciatis amet ea accusantium sint reprehenderit culpa maxime voluptatibus temporibus nihil sed libero.</p>
                        </div>
                        <div className='flex gap-20'>
                            <PrimaryButton title={'read more'} style={'text-white font-jos1 text-sm text-sm w-28 h-16'} />
                            {/* Authors name & Photo */}
                            <div className='flex items-center justify-start gap-x-4'>
                                <figure className='w-10 h-10 overflow-hidden rounded-full'>
                                    <img className='rounded-full' src="/src/assets/man/pexels-pixabay-220453.jpg" alt="author photo" />
                                </figure>
                                <h5 className='text-xl font-young capitalize'>name</h5>
                            </div>
                        </div>
                    </article>
                    <article className='blog_card border rounded-xl px-8 py-9'>
                        <div className='w-full h-2/3 rounded-lg overflow-hidden'>
                            <figure>
                                <img id='image' className='rounded-lg transition-all' src="/src/assets/blog/blog-post-1.jpg" alt="blog_image" />
                            </figure>
                        </div>
                        <div className='w-full'>
                            <ul className='flex justify-start items-center gap-x-16 my-5'>
                                <li className='relative'>
                                    <a className='flex justify-start items-center gap-x-1 text-[#a7a7a7] font-jost text-sm hover:text-primary  after:absolute -right-10 after:content-[" "] after:w-[1.5px] after:h-full blog_link' href="#">
                                        <GiCoffeeCup className='w-5 h-5' />
                                        Coffee
                                    </a>
                                </li>
                                <li className='relative'>
                                    <a className='flex justify-start items-center gap-x-1 text-[#a7a7a7] font-jost text-sm hover:text-primary  after:absolute -right-10 after:content-[" "] after:w-[1.5px] after:h-full blog_link' href="#">
                                        <AiOutlineComment className='w-5 h-5' />
                                        <span>25</span>
                                        Comment
                                    </a>
                                </li>
                                <li>
                                    <a className='flex justify-start items-center gap-x-1 text-[#a7a7a7] font-jost text-sm hover:text-primary' href="#">

                                        <FaCalendarAlt className='w-4 h-4' />
                                        4th March 2023
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='text-3xl font-bebas tracking-wide'>WHISPER TO US ABOUT YOUR FEELINGS, AND WE WILL PREPARE WHAT YOU NEED NOW.</h1>
                            <p className='text-lg my-5 text-justify font-jost text-[#a7a7a7]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni magnam architecto eaque dolore corporis suscipit dicta a obcaecati cum inventore omnis quas mollitia tenetur pariatur, quis voluptatibus et vitae, at eum repudiandae cumque! Illum minus, a perspiciatis amet ea accusantium sint reprehenderit culpa maxime voluptatibus temporibus nihil sed libero.</p>
                        </div>
                        <div className='flex gap-20'>
                            <PrimaryButton title={'read more'} style={'text-white font-jos1 text-sm text-sm w-28 h-16'} />
                            {/* Authors name & Photo */}
                            <div className='flex items-center justify-start gap-x-4'>
                                <figure className='w-10 h-10 overflow-hidden rounded-full'>
                                    <img className='rounded-full' src="/src/assets/man/pexels-pixabay-220453.jpg" alt="author photo" />
                                </figure>
                                <h5 className='text-xl font-young capitalize'>name</h5>
                            </div>
                        </div>
                    </article>
                </div>
                <div className=' col-span-1 rounded-xl space-y-10'>

                    <div className='w-full rounded-xl border p-7'>
                        <h2 className='text-3xl font-bebas uppercase'>Search Here</h2>
                        <div className='relative h-14'>
                            <input className='w-full h-12 mt-2 rounded-lg text-base border font-jost px-4 py-2 focus:outline-none' type="text" name='search' placeholder='Search Product' />
                            <a className='absolute top-2 bottom-0 my-auto right-1 transition-all text-[#a7a7a7] hover:bg-primary hover:text-white rounded-full h-10 w-10  flex justify-center items-center' href="">
                                <CiSearch className=' w-6  h-6 ' />
                            </a>
                        </div>
                    </div>
                    <div className='w-full rounded-xl border p-7'>
                        <h2 className='text-3xl font-bebas uppercase'>Categories</h2>
                        <div className='relative h-14'>
                            <input className='w-full h-12 mt-2 rounded-lg text-base border font-jost px-4 py-2 focus:outline-none' type="text" name='search' placeholder='Search Product' />
                            <a className='absolute top-2 bottom-0 my-auto right-1 transition-all text-[#a7a7a7] hover:bg-primary hover:text-white rounded-full h-10 w-10  flex justify-center items-center' href="">
                                <CiSearch className=' w-6  h-6 ' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;