import AboutCafena from "../../components/AboutCafena/AboutCafena";
import DynamicHero from "../../components/DynamicHero/DynamicHero";
import { DynamicHeroPath } from "../../components/utilities/Function/Function";
import './About.css'

const About = () => {

    const DynamicHeroData = DynamicHeroPath();
    return (
        <div className="mt-28 sm:pt-40">
            <DynamicHero Path={DynamicHeroData} />
            <AboutCafena />
        </div>
    );
};

export default About;

