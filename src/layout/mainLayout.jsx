import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { DynamicHeroPath } from "../components/utilities/Function/Function";

function Main() {
    const Path = DynamicHeroPath();
    console.log(Path.PathName);
    const FooterContent = () => {
        if (Path.PathName) {
            return <Footer />
        }
    }
    // console.log(FooterContent());
    return (
        <div className={`${Path.PathName ? 'bg-white text-black' : 'bg-black -mt-14 text-white'}`}>
            <Navbar />

            <Outlet />
            {
                FooterContent()
            }
        </div>
    )
}
export default Main;