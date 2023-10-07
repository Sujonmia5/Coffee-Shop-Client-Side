import FutureSlider from '../../components/FutureSlider/FutureSlider';
import Hero from '../../components/Hero/Hero';
import HomeMenu from '../../components/HomeMenu/HomeMenu';
import HomeProduct from '../../components/HomeProduct/HomeProduct';
import OurHistory from '../../components/OurHistory/Ourhistory';
import DiscoverHero from '../../components/discoverHero/DiscoverHero';
import './Home.css'
const Home = () => {
    return (
        <div className=" relative">
            <Hero />
            <FutureSlider />
            <OurHistory />
            <HomeMenu />
            <DiscoverHero />
            <div className="home-product h-screen">
                <HomeProduct />
            </div>
        </div>
    );
};

export default Home;