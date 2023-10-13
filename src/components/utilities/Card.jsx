import './card.css'
import { motion } from 'framer-motion'


const Card = ({ coffee }) => {
    const { name, price } = coffee;
    const PriceString = price.toFixed(2)
    // console.log(PriceString);
    return (
        <div className='w-full'>
            <motion.div
                layout
                initial={{
                    opacity: 0,
                    left: 0
                }}
                animate={{
                    opacity: 1,
                    left: 1
                }}
                exit={{
                    scale: 0.5,
                }}
                transition={{
                    duration: 0.5
                }}
                className="card max-w-md mt-16 border border-[#a7a7a7] rounded-sm h-28 flex items-end py-5 min-[1200px]:items-center justify-between px-4 sm:px-10 min-[1200px]:px-16 mx-auto relative">
                <div
                    className="absolute w-20 h-20 rounded-full overflow-hidden 
                max-[1200px]:left-0 
                max-[1200px]:right-0 
                max-[1200px]:mx-auto
                max-[1200px]:-top-10
                min-[1200px]:-left-10 
                min-[1200px]:top-0 
                min-[1200px]:bottom-0 
                min-[1200px]:my-auto">
                    <img className="w-20 h-20 rounded-full" src='/src/assets/cups/Rectangle 14.png' alt="" />
                </div>
                <h1 className=" h1_card font-bebas text-2xl text-left tracking-widest relative">
                    {name}
                </h1>
                <p className="text-primary font-jost font-semibold">$ {PriceString}</p>
            </motion.div>
        </div>
    );
};

export default Card;