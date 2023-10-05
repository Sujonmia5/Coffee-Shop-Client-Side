

const FutureSlider = () => {
    return (
        <div className=" mt-20 sm:mt-40">
            <div className="max-w-[1400px] px-2 sm:px-5 mx-auto grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-5">
                <div className="card-future overflow-hidden relative w-auto h-[300px] border-2  border-[#32323D]  rounded">
                    <div className="w-full h-full before:content-none before:w-full before:h-full before:bg-black">
                        <img className="object-cover h-full w-full" src="/src/assets/cups/Rectangle 16.png" alt="" />
                    </div>
                    <div id="content-card" className="absolute left-0 right-0 mx-auto top-0  py-10 px-5 sm:px-10 bottom-0">
                        <span className=''>01</span>
                        <h2 className="text-3xl uppercase font-bebas mb-1">Best Coffee flavour</h2>
                        <p>Curabitur semper erat a lacusey sedn consequat, sit ametey.</p>
                    </div>
                </div>
                <div className="card-future overflow-hidden relative w-auto h-[300px] border-2   border-[#32323D]  rounded">
                    <div className="w-full h-full">
                        <img className="object-cover h-full w-full" src="/src/assets/cups/Rectangle 14.png" alt="" />
                    </div>
                    <div id="content-card" className="absolute left-0 right-0 mx-auto top-0  py-10 px-8 sm:px10 bottom-0">
                        <span className='text'>02</span>
                        <h2 className="text-3xl uppercase font-bebas mb-1">Place to Get Lost</h2>
                        <p>Curabitur semper erat a lacusey sedn consequat, sit ametey.</p>
                    </div>
                </div>
                <div className="card-future overflow-hidden relative w-auto h-[300px] border-2  border-[#32323D]  rounded">
                    <div className="w-full h-full before:content-none before:w-full before:h-full before:bg-black">
                        <img className="object-cover h-full w-full" src="/src/assets/cups/3.jpg" alt="" />
                    </div>
                    <div id="content-card" className="absolute left-0 right-0 mx-auto top-0  py-10 px-8 sm:px10 bottom-0">
                        <span className='text'>03</span>
                        <h2 className="text-3xl uppercase font-bebas mb-1">Proper Roasting</h2>
                        <p>Curabitur semper erat a lacusey sedn consequat, sit ametey.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureSlider;