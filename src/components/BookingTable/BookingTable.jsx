import PrimaryButton from "../utilities/Button/PrimaryButton";


const BookingTable = () => {
    return (
        <div className="">
            <div className="max-w-[1200px] mx-auto lg:flex">
                <div className="lg:w-1/2">
                    <iframe width="100%" height="550" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=550&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Coffee%20Shop)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Calculate population in area</a></iframe>
                </div>
                <div className="lg:w-1/2 p-5 text-center flex flex-col justify-center items-center border border-secondary bg-dark">
                    <h6 className="bg-primary px-2 inline-block rounded font-jost uppercase tracking-widest text-xs mb-5">RESERVATION</h6>
                    <h2 className=" text-4xl sm:text-6xl font-bebas mb-5">BOOKING A TABLE</h2>
                    <div className="flex flex-col gap-8 w-full h-auto my-5">
                        <label htmlFor="">
                            <input className="w-11/12 mx-auto h-16 border border-secondary rounded text-[#a7a7a7] focus-visible:outline-none px-5 py-4 bg-transparent font-jost" placeholder={'4 Person'} type="text" />
                        </label>
                        <label htmlFor="">
                            <input className="w-11/12 mx-auto h-16 border border-secondary rounded text-[#a7a7a7] focus-visible:outline-none px-5 py-4 bg-transparent font-jost" placeholder={'12,02,2023'} type="text" />
                        </label>
                        <label htmlFor="">
                            <input className="w-11/12 mx-auto h-16 border border-secondary rounded text-[#a7a7a7] focus-visible:outline-none px-5 py-4 bg-transparent font-jost" placeholder={'11:00 AM'} type="text" />
                        </label>
                    </div>
                    <PrimaryButton title={"Booking a Table"} />
                </div>
            </div>
        </div>
    );
};

export default BookingTable;