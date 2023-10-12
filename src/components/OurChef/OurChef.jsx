import { BiPlus } from 'react-icons/bi'
import { FaFacebookF, FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const OurChef = () => {
    return (
        <div className='max-w-[1200px] p-5 mx-auto mb-16'>
            <div className='w-full flex flex-col justify-center items-center space-y-5'>
                <p className='text-sm text-white bg-primary px-2 p-1 rounded inline-block uppercase tracking-widest font-jost'>Our Chef</p>
                <h2 className='text-4xl sm:text-6xl font-bebas tracking-tight'>MEET OUR PROFESSIONAL Chef</h2>
            </div>
            <div className='my-5 grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-4'>
                <div className='max-w-[520px] max-h-[476px] flex flex-col justify-end px-3 sm:px-7 py-5 sm:py-9 border rounded-lg chef_card'>
                    <div className='relative mb-5 flex-1'>
                        <figure className='w-full h-full'>
                            <img className='h-[300px]' src="/src/assets/man/girl.jpg" alt="" />
                        </figure>

                        {/* <button className='w-10 h-10 absolute transition-all right-0 top-5 bg-white flex justify-center items-center rounded text-[#a7a7a7] hover:bg-primary hover:text-white social_trigger'>
                            <BiPlus className='w-5 h-5' />
                        </button> */}
                        <ul className='absolute space-y-3 top-16 right-0 social_chef'>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaXTwitter />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaPinterestP />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='text-xl font-jost uppercase font-medium'>RASALINA DE WILLAMSON</h3>
                        <p className='text-xs text-primary font-jost font-semibold'>12 YEAR EXPERIENCE</p>
                    </div>
                </div>
                <div className='max-w-[520px] max-h-[476px] flex flex-col justify-end px-3 sm:px-7 py-5 sm:py-9 border rounded-lg chef_card'>
                    <div className='relative mb-5 flex-1'>
                        <figure className='w-full h-full'>
                            <img className='h-[300px]' src="/src/assets/man/boy.jpg" alt="" />
                        </figure>

                        {/* <button className='w-10 h-10 absolute transition-all right-0 top-5 bg-white flex justify-center items-center rounded text-[#a7a7a7] hover:bg-primary hover:text-white social_trigger'>
                            <BiPlus className='w-5 h-5' />
                        </button> */}
                        <ul className='absolute space-y-3 top-16 right-0 social_chef'>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaXTwitter />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaPinterestP />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='text-xl font-jost uppercase font-medium'>RASALINA DE WILLAMSON</h3>
                        <p className='text-xs text-primary font-jost font-semibold'>12 YEAR EXPERIENCE</p>
                    </div>
                </div>
                <div className='max-w-[520px] max-h-[476px] flex flex-col justify-end px-3 sm:px-7 py-5 sm:py-9 border rounded-lg chef_card'>
                    <div className='relative mb-5 flex-1'>
                        <figure className='w-full h-full'>
                            <img className='h-[300px]' src="/src/assets/man/girl.jpg" alt="" />
                        </figure>

                        {/* <button className='w-10 h-10 absolute transition-all right-0 top-5 bg-white flex justify-center items-center rounded text-[#a7a7a7] hover:bg-primary hover:text-white social_trigger'>
                            <BiPlus className='w-5 h-5' />
                        </button> */}
                        <ul className='absolute space-y-3 top-16 right-0 social_chef'>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaXTwitter />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className='text-[#a7a7a7] w-10 h-10 flex justify-center items-center bg-white hover:bg-primary hover:text-white transition-all rounded'>
                                <a href="#">
                                    <FaPinterestP />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <h3 className='text-xl font-jost uppercase font-medium'>RASALINA DE WILLAMSON</h3>
                        <p className='text-xs text-primary font-jost font-semibold'>12 YEAR EXPERIENCE</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurChef;