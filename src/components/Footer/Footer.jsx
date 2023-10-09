import { FaArrowUp } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="h-screen">
            {/* Footer top link */}
            <div className="w-full border-t border-secondary relative">
                <a className='w-14 h-14 rounded-full absolute left-0 right-0 -top-7 mx-auto transition-all bg-black hover:bg-primary border border-secondary flex justify-center items-center' href="#">
                    <FaArrowUp className='h-6 w-6' />
                    <span className='absolute -bottom-10 w-28 ml-5 uppercase'>go to top</span>
                </a>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Footer;