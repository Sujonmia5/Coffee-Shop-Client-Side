import PrimaryButton from '../utilities/Button/PrimaryButton';
import ProductCard from '../utilities/ProductCard/ProductCard';
import Testimonial from '../Testimonial/Testimonial';
import './HomeProduct.css';

const HomeProduct = () => {
    return (
        <div className='max-w-[1200px] mx-auto p-5 py-10'>
            <div className=' min-[1200px]:flex min-[1200px]:items-end justify-between max-[1200px]:text-center'>
                <div className='space-y-4'>
                    <h4 className='bg-primary inline-block px-3 py-1 rounded-md font-jost mb-3 text-sm uppercase tracking-widest'>Popular Product</h4>
                    <h1 className=' text-4xl sm:text-6xl font-bebas'>CAFENA POPULAR PRODUCT</h1>
                </div>
                <div className='my-5'>
                    <div>
                        <PrimaryButton title={'view all product'} />
                    </div>
                </div>
            </div>

            {/* Product section */}
            <div className='my-10 grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 gap-y-10 gap-x-10'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <Testimonial />
        </div>
    );
};

export default HomeProduct;