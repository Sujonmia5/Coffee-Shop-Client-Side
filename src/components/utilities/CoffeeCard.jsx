import { motion } from 'framer-motion'
const CoffeeCard = ({ item }) => {

    const { name, coffee_img, price } = item;
    const fixedPrice = price.toFixed(2)

    return (
        <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.2
            }}
            className="max-w-[622px] h-[90px] my-4 ">
            <div className="coffee-card mx-auto hover:text-white max-[1200px]:mt-20
            min-[1200px]:ml-24 relative max-w-[454px] h-full border border-secondary flex justify-end items-center p-5 sm:px-10 z-50">
                <figure className="w-[80px] h-[80px] menu-img absolute 
                max-[1200px]:left-0 max-[1200px]:right-0 max-[1200px]:mx-auto max-[1200px]:-top-10  
                min-[1200px]:-left-10 rounded-full overflow-hidden">
                    <img className="w-full h-full object-cover  rounded-full" src={coffee_img} alt="" />
                </figure>
                <h1 className="flex-1 font-bebas text-2xl text-left min-[1200px]:ml-16 tracking-widest">
                    <span className="coffee-name relative">{name}</span>
                </h1>
                <p className="text-primary font-jost font-semibold">$ {fixedPrice}</p>
            </div>
        </motion.div>
    );
};

export default CoffeeCard;