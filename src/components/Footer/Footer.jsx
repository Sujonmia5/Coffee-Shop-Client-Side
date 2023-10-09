import { FaArrowUp, FaFacebookF, FaLinkedinIn, FaTiktok, FaYoutube } from 'react-icons/fa'
import { BsFillSendFill } from 'react-icons/bs'
import { TfiLocationPin, TfiMobile } from 'react-icons/tfi'
import './Footer.css';

const Footer = () => {
    return (
        <div className="">
            {/* Footer top link */}
            <div className="w-full border-t border-secondary  relative flex justify-center items-center">
                <a className='relative w-6 h-5' href="#">
                    <FaArrowUp className='h-12 w-12 p-3 absolute left-0 right-0 mx-auto -top-6 bg-black hover:bg-primary transition-all border border-[#a7a7a7] rounded-full' />
                    <span className='absolute -bottom-10 -left-3 whitespace-nowrap text-[#a7a7a7] hover:text-white'>Go to Top</span>
                </a>
            </div>
            {/* Footer Contact Section */}
            <div className='max-w-[1200px] mx-auto p-5'>
                <div className='flex flex-wrap gap-y-5 items-center justify-between pt-32 font-jost'>
                    <div className='flex items-center gap-1'>
                        <TfiMobile className='w-6 h-6 text-primary' />
                        <p className='text-base uppercase tracking-wider text-white'>Phone: <span className='text-[#a7a7a7]'>+880163-6144675</span></p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <TfiLocationPin className='w-6 h-6 text-primary' />
                        <p className='text-base uppercase tracking-wider text-white'>ADDRESS : <span className='text-[#a7a7a7]'>30 North West New</span></p>
                    </div>
                    <div className='relative w-[384px] border-b'>
                        <input placeholder='Email Address' className='max-w-[384px] bg-transparent  focus:outline-none rounded h-10 p-3' type="text" />
                        <button className='absolute uppercase -right-5 w-36 h-10'>
                            Subscribe
                            <BsFillSendFill className='w-4 h-4 ml-2 inline-flex text-primary' />
                        </button>
                    </div>
                </div>
                {/* Footer brand Section */}
                <div className='flex flex-wrap gap-y-5 justify-between items-end'>
                    <div className='space-y-3 md:w-1/2'>
                        <figure className='w-28 h-28'>
                            <img src="/src/assets/more/logo1.png" alt="" />
                        </figure>
                        <p>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
                    </div>
                    <div className='flex justify-end items-center gap-4 social sm:w-1/2'>
                        <a href="#">
                            <FaFacebookF className='w-4 h-4' />
                        </a>
                        <a href="#">
                            <FaTiktok className='w-4 h-4' />
                        </a>
                        <a href="#">
                            <FaLinkedinIn className='w-4 h-4' />
                        </a>
                        <a href="#">
                            <FaYoutube className='w-4 h-4' />
                        </a>
                    </div>

                </div>
                <div className='border-t border-secondary mt-10 flex justify-center pt-5'>
                    <h1>Copyright by Coffee Shop || 2023</h1>
                    <h1 className='italic'>Development By <strong className='font-jost text-green-400 italic'>Md Sujon Mia</strong></h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;