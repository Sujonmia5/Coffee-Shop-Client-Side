import BookingTable from '../../components/BookingTable/BookingTable';
import Footer from '../../components/Footer/Footer';
import FutureSlider from '../../components/FutureSlider/FutureSlider';
import Hero from '../../components/Hero/Hero';
import HomeMenu from '../../components/HomeMenu/HomeMenu';
import HomeProduct from '../../components/HomeProduct/HomeProduct';
import NewsArticle from '../../components/News&Article/News&Article';
import OurHistory from '../../components/OurHistory/Ourhistory';
import DiscoverHero from '../../components/discoverHero/DiscoverHero';
import { DynamicHeroPath } from '../../components/utilities/Function/Function';
import './Home.css'

const Home = () => {

    return (
        <div className=" relative">
            <Hero />
            <FutureSlider />
            <OurHistory />
            <HomeMenu />
            <DiscoverHero />
            <div className="home-product bg-red-300">
                <HomeProduct />
            </div>
            <BookingTable />

            <div className='blog-bg'>
                <NewsArticle />
                <div className='bg-black bg-opacity-75'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;