
const AboutHero3 = () => {
    return (
        <div className="max-w-[1400px] mx-auto my-10">
            <div className="md:flex h-[500px] md:h-[600px] relative">
                <div className="w-full h-full min-[1200px]:-ml-24">
                    <figure className="w-full h-full">
                        <img className="w-full h-full" src="/src/assets/cups/best-coffe-1.jpg" alt="" />
                    </figure>
                </div>
                <div className="flex justify-center items-center absolute md:relative top-0 bottom-0 my-auto md:-ml-[50%] min-[1200px]:-ml-32 ">
                    <div className="shadow-2xl border bg-white rounded px-5 md:px-24 py-10 md:py-20 w-[80%] space-y-5 md:-ml-28">
                        <h2 className="text-4xl sm:text-6xl font-bebas ">TRY THE BEST COFFEE IN THE HOUSING CITY</h2>
                        <p className="text-lg text-[#a7a7a7] font-jost">Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
                        <p className="text-lg text-[#a7a7a7] font-jost">
                            Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero3;