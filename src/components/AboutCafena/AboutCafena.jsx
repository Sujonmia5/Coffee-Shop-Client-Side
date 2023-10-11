import { BsCheck2All } from "react-icons/bs";

const AboutCafena = () => {
    return (
        <div className="bg_Cafna_Hero py-10 px-20">
            <div className="flex items-center max-w-[1400px] px-5">
                <div className="w-1/2 relative flex justify-center items-center">
                    <figure>
                        <img src="/src/assets/man/download.png" alt="" />
                        <img className="absolute -left-5 bottom-0 w-64  h-64" src="/src/assets/more/6.png" alt="" />
                    </figure>
                </div>
                <div className="w-1/2">
                    <div className="ml-16">
                        <p className="font-jost uppercase text-white tracking-widest my-5 bg-primary inline-block px-3 py-1 rounded ">ABOUT CAFENA</p>
                        <h2 className="text-4xl md:text-6xl font-bebas mb-6">ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h2>
                        <p className="text-lg font-jost text-[#a7a7a7] my-5">Mauris rhoncus orci in imperdiet placerat. Vestibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibhtincidunt.</p>
                        <ul className="ul_li">
                            <li className="text-lg font-jost mb-4 flex gap-2 items-center">
                                <span className="w-10 h-10 border border-[#a7a7a7] rounded-lg flex justify-center items-center check_li" >
                                    <BsCheck2All className="icon" />
                                </span>
                                What is Lorem Ipsum Lorem Ipsum is simply.
                            </li>
                            <li className="text-lg font-jost mb-4 flex gap-2 items-center">
                                <span className="w-10 h-10 border border-[#a7a7a7] rounded-lg flex justify-center items-center check_li" >
                                    <BsCheck2All className="icon" />
                                </span>
                                Dummy text of the printing text.
                            </li>
                            <li className="text-lg font-jost mb-4 flex gap-2 items-center">
                                <span className="w-10 h-10 border border-[#a7a7a7] rounded-lg flex justify-center items-center check_li" >
                                    <BsCheck2All className="icon" />
                                </span>
                                Typesetting industry Lorem Ipsum has been the industry's
                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div >
    );
};

export default AboutCafena;