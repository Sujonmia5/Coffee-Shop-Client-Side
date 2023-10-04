
const Hero = () => {
    return (
        <div className="home-hero relative xl:mt-12 pt-12">
            {/* Hero Content */}
            <div className="max-w-[1400px] h-full grid grid-cols-2 justify-center items-center  mx-auto relative">
                <div className="hero-content col-span-2 ">
                    <h1 className="text-[60px] min-[1200px]:text-[100px] uppercase font-semibold whitespace-nowrap mb-5">rosted coffee
                        <br />
                        for you</h1>
                    <p className="text-lg font-jost tracking-wider capitalize leading-8">The coffee is brewed by first roasting the green coffee beans over hot
                        coals in a brazier. given an opportunity to sample.</p>
                    <div className="flex gap-5 mt-5">
                        <button className="btn-pri btn">
                            <a href="/">Testy Coffee</a>
                        </button>
                        <button className="btn">
                            <a href="">Read more</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;