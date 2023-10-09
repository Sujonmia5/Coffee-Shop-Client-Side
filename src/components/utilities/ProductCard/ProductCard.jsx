import './ProductCard.css'
import { BsStarHalf, BsBasket2Fill } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import { FaRegEye } from 'react-icons/fa6'
import { BiHeart } from 'react-icons/bi'

const ProductCard = () => {
    return (
        <div className="max-w-[700px] h-[514px] border border-secondary relative product_Card rounded">
            {/* Product Hover Button Container */}
            <div className='absolute Product_button'>
                <button>
                    <BsBasket2Fill className='w-5 h-5' />
                </button>
                <button>
                    <BiHeart className='w-5 h-5' />
                </button>
                <button>
                    <FaRegEye className='w-5 h-5' />
                </button>
            </div>
            {/* Product Card Image  */}

            <div className='img-box relative bg-transparent flex justify-center items-center'>
                <figure>
                    <img className="default" src="/src/assets/cups/16.png" alt="" />
                    <img className="on_hover" src="/src/assets/cups/17.png" alt="" />
                </figure>
            </div>
            {/* Product content */}
            <div className='absolute product_Content text-center font-jost font-normal py-5'>
                <div className='flex gap-x-2 items-center text-center justify-center mb-2'>
                    <h4 className='text-sm'>COFFEE</h4>
                    <div className='flex items-center text-primary'>
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <AiTwotoneStar />
                        <BsStarHalf />
                    </div>
                </div>
                <h1 className='text-lg'>BRAZIL COFFEE GRED</h1>
                <p className='text-base'>Price: <span className='text-primary'>$4154</span></p>
            </div>
        </div>
    );
};

export default ProductCard;