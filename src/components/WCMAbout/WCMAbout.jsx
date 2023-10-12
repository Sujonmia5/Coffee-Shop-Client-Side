import { BiRightArrowAlt } from 'react-icons/bi'

const WCMAbout = () => {
    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <div className="flex flex-col justify-center items-center text-center mb-14">
                <p className="text-sm bg-primary px-2 py-1 inline-block rounded text-white uppercase font-jost tracking-widest mb-5">Why chose us</p>
                <h2 className="text-4xl sm:text-6xl font-bebas">
                    WE ARE PROVIDE BEST SERVICE
                    <br />
                    IN YOUR CITY</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3  gap-4'>
                <div className="WC_card max-w-md h-max p-2 border rounded mx-auto">
                    <div className="px-11 py-12">
                        <div className='flex flex-col justify-center items-center mb-7 relative'>
                            <figure>
                                <img className='' src="/src/assets/icons/wcu-1.png" alt="" />
                            </figure>
                            <span className='WC_icon_bg'></span>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-3xl font-bebas mb-3'>testy coffee recipe</h3>
                            <p className='text-base text-[#a7a7a7] font-jost '>
                                Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.
                            </p>
                            <div className=' border border-[#a7a7a7] rounded w-10 h-10 mx-auto mt-5 flex justify-center items-center text-[#a7a7a7] WC_link transition-all'>
                                <a href="#" className='bg-transparent' >
                                    <BiRightArrowAlt className='w-6 h-6' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WC_card max-w-md h-max p-2 border rounded mx-auto">
                    <div className="px-11 py-12">
                        <div className='flex flex-col justify-center items-center mb-7 relative'>
                            <figure className='relative'>
                                <img className='' src="/src/assets/icons/wcu-2.png" alt="" />
                            </figure>
                            <span className='WC_icon_bg'></span>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-3xl font-bebas mb-3'>Great Location</h3>
                            <p className='text-base text-[#a7a7a7] font-jost '>
                                Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.
                            </p>
                            <div className=' border border-[#a7a7a7] rounded w-10 h-10 mx-auto mt-5 flex justify-center items-center text-[#a7a7a7] WC_link transition-all' >

                                <a href="#" className='bg-transparent' >
                                    <BiRightArrowAlt className='w-6 h-6' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="WC_card max-w-md h-max p-2 border rounded mx-auto">
                    <div className="px-11 py-12">
                        <div className='flex flex-col justify-center items-center mb-7 relative'>
                            <figure className='relative'>
                                <img className='w-16 h-16 ' src="/src/assets/icons/3461980.png" alt="" />

                            </figure>
                            <span className='WC_icon_bg'></span>
                        </div>
                        <div className='text-center'>
                            <h3 className='text-3xl font-bebas mb-3'>Professional Chef</h3>
                            <p className='text-base text-[#a7a7a7] font-jost '>
                                Accumsa nfringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat. Aenean accumsany.
                            </p>
                            <div className=' border border-[#a7a7a7] rounded w-10 h-10 mx-auto mt-5 flex justify-center items-center text-[#a7a7a7] WC_link transition-all' >

                                <a href="#" className='bg-transparent' >
                                    <BiRightArrowAlt className='w-6 h-6' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WCMAbout;