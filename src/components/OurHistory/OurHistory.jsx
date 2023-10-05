

const OurHistory = () => {
    return (
        <div className="pt-32">
            <div className="max-w-[1400px] mx-auto p-2 sm:p-5">
                <div className="w-full h-full min-[1200px]:grid grid-cols-2">
                    <div className="">
                        <img className="w-full h-full" src="/src/assets/bg/about-bg-3-1.jpg" alt="" />
                    </div>
                    <div className="px-7 py-10 sm:p-10 md:p-14 xl:p-20 border border-secondary  bg-dark">
                        <div>
                            <span className="bg-primary px-3 py-1 rounded-md font-young font-light">Our History</span>
                            <h1 className="text-[55px] font-bebas mb-5 mt-4 uppercase">
                                CREATE A NEW STORY WITH US
                            </h1>
                            <p className="capitalize text-justify text-lg font-jost mb-4">Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
                            <p className="capitalize text-justify text-lg font-jost mb-4">Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHistory;