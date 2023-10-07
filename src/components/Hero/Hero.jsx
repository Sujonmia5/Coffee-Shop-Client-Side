// import { FaLinkedin, FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa'
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import PrimaryButton from "../utilities/Button/PrimaryButton";

const Hero = () => {
    return (
        <div className="home-hero relative xl:mt-14 pt-12">
            {/* Hero Content */}
            <div className="max-w-[1400px] h-full text-center  mt-40 sm:mt-0 sm:text-start sm:grid grid-cols-2 justify-center items-center mx-auto px-5 relative">
                <div className="hero-content col-span-2 sm:-mt-20">
                    <h1 className="text-[60px] min-[1200px]:text-[100px] uppercase font-normal leading-normal sm:whitespace-nowrap mb-5">rosted coffee
                        <br />
                        for you</h1>
                    <p className="text-lg font-jost tracking-wider capitalize leading-8">The coffee is brewed by first roasting the green coffee beans over hot
                        <br />
                        coals in a brazier. given an opportunity to sample.</p>
                    <div className="space-y-5 space-x-2 sm:space-y-0 sm:flex items-center gap-5 mt-5 relative">
                        <PrimaryButton title={'Testy Coffee'} />
                        <button className="btn btn-sec font-jost">
                            <a href="">Read more</a>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-x-4 sm:gap-x-8 justify-center sm:justify-start mt-20">
                        <a className="flex gap-x-1 transition-all items-center hover:text-[var(--primary-color)]" href="">
                            <FaFacebookSquare />
                            <span>Facebook</span>
                        </a>
                        <a className="flex gap-x-1 transition-all items-center hover:text-[var(--primary-color)]" href="">
                            <FaSquareXTwitter />
                            <span>Twitter</span>
                        </a>
                        <a className="flex gap-x-1 transition-all items-center hover:text-[var(--primary-color)]" href="">
                            <FaLinkedin />
                            <span> Linkedin</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;