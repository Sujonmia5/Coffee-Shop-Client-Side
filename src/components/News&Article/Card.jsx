import { FaArrowRight } from 'react-icons/fa'
const NewsCard = ({ data }) => {
    const { image_link } = data;
    return (
        <div className="max-w-[400px] h-[430px] bg-transparent border border-secondary card_blog mx-auto">
            <figure className="h-3/5 overflow-hidden">
                <img className='image_blog' src={image_link.link_1} alt="blog image" />
            </figure>
            <div className="text-start h-1/2 py-8 px-7 space-y-3 ">
                <p className="text-[14px] font-semibold font-jost text-primary">BY: <span className="text-[#a7a7a7]">RASALINA \ LIFE \ 23.01.2017</span></p>
                <h3 className="text-xl font-jost my-4 relative link_text
                ">
                    <a href="#">
                        Ideal Cocktails From Our Barmen For
                        Pefect Mood
                    </a>
                </h3>
                <div className="text-[#a7a7a7] text-base font-jost ">
                    <a className="link hover:text-white" href="#">
                        Read More
                        <FaArrowRight className='absolute -right-5 top-1 bottom-0 my-auto icon' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;