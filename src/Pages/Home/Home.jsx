import FutureSlider from '../../components/FutureSlider/FutureSlider';
import Hero from '../../components/Hero/Hero';
import HomeMenu from '../../components/HomeMenu/HomeMenu';
import OurHistory from '../../components/OurHistory/Ourhistory';
import './Home.css'
const Home = () => {
    return (
        <div className="">
            <Hero />
            <FutureSlider />
            <OurHistory />
            <HomeMenu />
        </div>
    );
};

export default Home;