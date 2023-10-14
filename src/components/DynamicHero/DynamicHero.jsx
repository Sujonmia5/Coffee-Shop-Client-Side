
import './DynamicHero.css'

const DynamicHero = ({ Path }) => {
    // console.log(Path);
    return (
        <div className='dynamic_hero_bg h-64 md:h-96 relative'>
            <div className='z-30 absolute top-0'>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
            </div>

            <div className='absolute bottom-0 z-30 rotate-180'>
                <img src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-1.png" alt="" />
            </div>

            <div className='h-full absolute w-full z-40'>
                <div className='w-full flex flex-col justify-center items-center h-full bg-opacity-50 -mt-2 space-y-5'>
                    <h3 className='text-4xl md:text-7xl font-bebas text-white'>{Path?.title}</h3>
                    <div className='flex text-sm text-white uppercase font-young tracking-widest gap-1'>
                        <a href="/">Home</a> <span> / </span>
                        <p className='text-primary'>{Path?.PathName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DynamicHero;