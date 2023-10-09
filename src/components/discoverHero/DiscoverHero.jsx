import { useState } from "react";
import PrimaryButton from "../utilities/Button/PrimaryButton";
import { FaPlus } from 'react-icons/fa'
import Modal from "../utilities/Modal/Modal";

const DiscoverHero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
            <div className="max-w-[1220px] mx-auto px-5 pt-5 sm:pt-28 ">
                <div className="min-[1200px]:flex flex-row-reverse max-[1200px]:px-28 max-[1000px]:px-16 max-[676px]:px-0 ">
                    <div className="min-[1200px]:w-1/2 h-full flex justify-center min-[1200px]:justify-end items-center mb-16 ">
                        <figure className="relative">

                            <img className="" src="/src/assets/download.png" alt="" />
                            <span onClick={() => setIsModalOpen(!isModalOpen)} className="w-7 h-7 rounded-full flex justify-center items-center text-dark cursor-pointer bg-white absolute top-0 right-8">
                                <FaPlus />
                            </span>
                            <span onClick={() => setIsModalOpen(!isModalOpen)} className="w-7 h-7 rounded-full flex justify-center items-center text-dark cursor-pointer bg-white absolute bottom-2 left-5">
                                <FaPlus />
                            </span>
                        </figure>
                    </div>
                    <div className="min-[1200px]:w-1/2 mb-5">
                        <h1 className="text-4xl sm:text-6xl font-bebas">COFFEE MACHINE, BUY FOR HOME</h1>
                        <p className="font-jost text-lg my-5 md:my-10">Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.
                            <br />
                            Aliquam erat volutpat.
                            mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.</p>
                        <PrimaryButton title={'discover now'} />
                    </div>
                </div>
                {
                    isModalOpen &&
                    <Modal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                }
            </div>
        </>
    );
};

export default DiscoverHero;