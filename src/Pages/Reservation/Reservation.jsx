import './reservation.css'
import { DynamicHeroPath } from '../../components/utilities/Function/Function';
import DynamicHero from '../../components/DynamicHero/DynamicHero';
import { useForm } from 'react-hook-form';


const Reservation = () => {
    const Path = DynamicHeroPath();

    const { register, handleSubmit, formState: { errors } } = useForm()

    console.log(errors);
    const ReservationHandler = (data) => {
        console.log(data);

    }

    return (
        <div className='mt-28 md:mt-52'>
            <DynamicHero Path={Path} />
            <div className='w-full py-32 justify-center items-center bg_reservation'>
                <div className='max-w-[1200px] mx-auto p-5 sm:p-10 md:p-16 space-y-10 text-center bg-white border shadow-2xl rounded'>
                    <h1 className='text-4xl md:text-6xl  font-bebas'>Reservation</h1>
                    <form onSubmit={handleSubmit(ReservationHandler)} className='font-jost  grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4' >
                        <div className='w-full'>
                            <div className='max-w-lg flex flex-col text-start mx-auto'>
                                <label className='text-lg font-jost uppercase selection:bg-stone-600 p-1 tracking-widest' htmlFor="">Your Name</label>
                                <input {...register('name', { required: 'Name is Required' })} className={`max-w-lg p-3 sm:p-5 rounded border focus:outline-none focus:border-2 ${errors?.name?.message ? 'border-red-600' : 'border-primary'}`} placeholder='Enter your name' type="text" name='name' />
                                {
                                    errors && <p className='text-sm text-red-600 lowercase font-jost'>{errors?.name?.message}</p>
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='max-w-lg flex flex-col text-start mx-auto'>
                                <label className='text-lg font-jost uppercase selection:bg-stone-600 p-1 tracking-widest' htmlFor="">Number</label>
                                <input {...register('number', { required: 'number is required', minLength: { message: 'please input your 11 digit phone number', value: 11 }, maxLength: { message: 'number is incorrect', value: 11 }, pattern: { message: "starting number only 0", value: /^0\d*$/ } })} className='max-w-lg p-3 sm:p-5 rounded border focus:outline-none focus:border-2 border-primary ' placeholder='Enter your number' type="number" name='number' />
                                {
                                    errors && <p className='text-sm text-red-600 lowercase font-jost'>{errors?.number?.message}</p>
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='max-w-lg flex flex-col text-start mx-auto s'>
                                <label className='text-lg font-jost uppercase selection:bg-stone-600 p-1 tracking-widest' htmlFor="">Seates</label>
                                <select {...register("seates", { required: 'please select your Seates' })} className='max-w-lg p-3 sm:p-5 rounded border text-[#a7a7a7] focus:outline-none focus:border-2 border-primary capitalize'>
                                    <option value={''}>Seates</option>
                                    <option value={'2 person'}>2 person</option>
                                    <option value={'3 person'}>3 person</option>
                                    <option value={'4 person'}>4 person</option>
                                    <option value={'5 person'}>5 person</option>
                                </select>
                                {
                                    errors && <p className='text-sm text-red-600 lowercase font-jost'>{errors?.seates?.message}</p>
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='max-w-lg flex flex-col text-start mx-auto'>
                                <label className='text-lg font-jost uppercase selection:bg-stone-600 p-1 tracking-widest' htmlFor="">Dates</label>
                                <input
                                    {...register('date', { required: 'please select date' })}
                                    className='max-w-lg p-3 sm:p-5 rounded border focus:outline-none text-[#a7a7a7] focus:border-2 border-primary '
                                    data-date-format="DD MMMM YYYY"
                                    type="date" name='date' />
                                {
                                    errors && <p className='text-sm text-red-600 lowercase font-jost'>{errors?.date?.message}</p>
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='max-w-lg flex flex-col text-start mx-auto'>
                                <label className='text-lg font-jost uppercase selection:bg-stone-600 p-1 tracking-widest' htmlFor="">Time</label>
                                <input
                                    {...register('time', { required: 'please select time' })}
                                    className='max-w-lg p-3 sm:p-5 rounded border focus:outline-none text-[#a7a7a7] focus:border-2 border-primary ' type="time" name='time' />
                                {
                                    errors && <p className='text-sm text-red-600 lowercase font-jost'>{errors?.time?.message}</p>
                                }
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='max-w-lg flex flex-col text-start mx-auto'>
                                <label className='text-lg font-jost uppercase selection:bg-stone-600 p-1 tracking-widest' htmlFor="">Email</label>
                                <input {...register('email', { required: 'Enter your Email' })} className='max-w-lg p-3 sm:p-5 rounded border focus:outline-none text-[#a7a7a7] focus:border-2 border-primary ' placeholder='Enter your email' type="email" name='email' />
                                {
                                    errors && <p className='text-sm text-red-600 lowercase font-jost'>{errors?.name?.message}</p>
                                }
                            </div>
                        </div>
                        <div className='md:col-span-2 my-5'>
                            {/* <PrimaryButton type={'submit'} title={'Submit'} style={''} /> */}
                            <button type='submit' className='btn_submit bg-primary'>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reservation;