import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import './Testimonial.css'

const slideContent = [
    { title: 'Slide 1', content: 'This is content for slide 1' },
    { title: 'Slide 2', content: 'This is content for slide 2' },
    { title: 'Slide 3', content: 'This is content for slide 3' },
    // Add more slide content as needed
];

const Testimonial = () => {
    return (
        <>
            <div className="my-5 text-center space-y-2">
                <p className="font-jost text-xs sm:text-base uppercase bg-primary inline-block px-2 rounded tracking-widest py-1">Customer Review</p>
                <h1 className="font-bebas text-4xl sm:text-6xl">OUR CUSTOMER REVIEW</h1>
            </div>
            <Swiper navigation={true} i modules={[Navigation]} >
                <SwiperSlide>
                    <div className="review_box space-y-5 font-jost text-lg w-full sm:w-[70%]">
                        <img className="quote" src="/src/assets/t-quote.png" alt="" />
                        <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
                        <div className="RU_info space-y-2">
                            <img className="review_user" src="/src/assets/shahin-khalaji-i1_n8jVMRZU-unsplash (2).jpg" alt="" />
                            <h3 className="text-xl font-young">Rasalina De Willamson</h3>
                            <h5 className="text-primary uppercase font-young text-base">Founder & CEO</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="review_box space-y-5 font-jost text-lg w-full sm:w-[70%]">
                        <img className="quote" src="/src/assets/t-quote.png" alt="" />
                        <p>Very good quality of food and service. Vast menu with child friendly items as well as local seafood and even entrees for those who dont like seafood. Great place! Thanks. We absolutely love everything there!</p>
                        <div className="RU_info space-y-2">
                            <img className="review_user" src="/src/assets/shahin-khalaji-i1_n8jVMRZU-unsplash (2).jpg" alt="" />
                            <h3 className="text-xl font-young">Rasalina De Willamson</h3>
                            <h5 className="text-primary uppercase font-young text-base">Founder & CEO</h5>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Testimonial;