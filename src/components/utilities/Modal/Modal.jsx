import PrimaryButton from "../Button/PrimaryButton";
import { IoClose } from 'react-icons/io5';
import { BsPlus } from 'react-icons/bs';
import { HiMinusSm } from 'react-icons/hi';
import './Modal.css'


const Modal = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <div className='modal fixed left-0 top-0 w-full h-full z-50 flex justify-center items-center'>
            {/* Modal Wrapper */}
            <div onClick={() => setIsModalOpen(false)} className="w-full h-full absolute left-0 top-0 bg-slate-950 bg-opacity-75"></div>
            {/* Modal Content */}
            <div className="modal_content max-w-[1200px] overflow-y-scroll md:overflow-hidden z-50 h-[600px] md:h-auto bg-white rounded-md p-5 md:p-10 space-y-5">
                <button onClick={() => setIsModalOpen(!isModalOpen)}>Close</button>
                <div className="md:flex text-black relative">
                    {/* close Modal */}

                    <button onClick={() => setIsModalOpen(false)} className="bg-dark absolute right-0 -top-10 w-10 h-10 rounded-md flex items-center justify-center cursor-pointer">
                        <IoClose className="w-6 h-6 text-white" />
                    </button>

                    {/* modal image */}
                    <div className="modal-img px-10">
                        <div>
                            <img src="/src/assets/download.png" alt="" />
                        </div>
                    </div>
                    {/* modal content text */}
                    <div className="flex-1 mt-5 md:mt-0 space-y-3 max-w-[720px] mx-auto">
                        <h1 className="font-jost text-2xl font-semibold">
                            VICARAGUA COFFEE BEANS
                        </h1>
                        <div>
                            rating
                        </div>
                        <p>Price:</p>
                        <h5 className="text-xl font-jost">Available : <span className="text-[#A7A7A7]">In stock</span></h5>
                        <p className="font-jost text-base text-[#808080]">Anlor sit amet, consectetur adipiscing elit. Fusce condimentum est lacus, non pretium risus lacinia vel. Fusce eget turpis orci.</p>

                        <div className="sm:flex space-y-3 items-center justify-start gap-4">
                            <p className="uppercase font-normal font-jost">QTY</p>
                            <div className="w-20 h-10 modal-QTY relative">
                                <input className="w-20 h-10 border border-gray-500 p-4 text-center  rounded-md focus:border focus-visible:outline-none focus-visible:border-gray-500 text-base font-jost font-normal" type="number" defaultValue={1}
                                ></input>
                                <BsPlus className="w-7 h-7 cursor-pointer absolute top-0 bottom-0 my-auto right-0 " />
                                <HiMinusSm className="w-7 h-7 cursor-pointer absolute top-0 bottom-0 my-auto left-0" />
                            </div>
                            <div className="text-white font-bold font-bebas">
                                <PrimaryButton title={'Add to Cart'} />
                            </div>
                        </div>
                        <div className="text-sm font-jost font-normal flex gap-3">
                            <ul className="space-y-2">
                                <li>Category :</li>
                                <li>SKU:</li>
                                <li>BRAND:</li>
                            </ul>
                            <ul className="space-y-2 text-[#808080]">
                                <li>WATCHES</li>
                                <li>2584-MK63</li>
                                <li>BRENDA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;



