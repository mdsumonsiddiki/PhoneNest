import phone from '../assets/phone1.avif'
import { FaStar } from "react-icons/fa6";

const Card = () => {
    return (

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-5 relative">
                <div className='flex gap-1 items-center absolute top-8 right-8'>
                    <FaStar className='text-orange' /> <span className='font-bold'>4.5</span>
                </div>
                <img
                    src={phone}
                    alt="phone"
                    className="rounded-xl" />
            </figure>
            <div className="px-5 py-4">
                <h2 className="text-2xl text-spaceCadet font-medium">Iphone</h2>
                <p className='text-lg text-spaceCadet/90'>Create a Fullstack functionality based Single page</p>
                <h2 className='text-spaceCadet text-xl font-medium'>Brand: <span className='font-normal'>Xiaomi</span></h2>
                <h2 className='text-spaceCadet text-xl font-medium'>Price: <span className='font-normal'>25000</span></h2>
                <h2 className='text-spaceCadet text-xl font-medium'>Added on: <span className='font-normal'>24th, May, 2024</span></h2>
                <div className="mt-2">
                    <button className="bg-orange px-3 py-2 font-medium text-xl text-white rounded-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;