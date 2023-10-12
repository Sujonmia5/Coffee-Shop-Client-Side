import AboutCafena from "../../components/AboutCafena/AboutCafena";
import AboutHero3 from "../../components/AboutHero3/AboutHero3";
import DynamicHero from "../../components/DynamicHero/DynamicHero";
import OurChef from "../../components/OurChef/OurChef";
import WCMAbout from "../../components/WCMAbout/WCMAbout";
import { DynamicHeroPath } from "../../components/utilities/Function/Function";
import './About.css'

const About = () => {

    const DynamicHeroData = DynamicHeroPath();
    return (
        <div className="mt-28 sm:pt-40">
            <DynamicHero Path={DynamicHeroData} />
            <AboutCafena />
            <WCMAbout />
            <AboutHero3 />
            <OurChef />
        </div>
    );
};

export default About;

