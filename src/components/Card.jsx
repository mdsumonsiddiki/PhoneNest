
import { FaStar } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Card = ({ product }) => {
    return (

        <div className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-5 relative">
                <div className='flex gap-1 items-center absolute top-8 right-8'>
                    <FaStar className='text-orange' /> <span className='font-bold'>{product.Ratings}</span>
                </div>
                <img
                    src={product.ProductImage}
                    alt="phone"
                    className="rounded-xl h-full w-full object-cover" />
            </figure>
            <div className='flex justify-between flex-col h-full'>
                <div className="px-5 py-4">
                    <h2 className="text-2xl text-spaceCadet font-medium">{product.ProductName}</h2>
                    <p className='text-lg text-spaceCadet/90'>{product.Description}</p>
                    <h2 className='text-spaceCadet text-xl font-medium'>Category: <span className='font-normal'>{product.Category}</span></h2>
                    <h2 className='text-spaceCadet text-xl font-medium'>Price: <span className='font-normal'>{product.Price}</span></h2>
                    <h2 className='text-spaceCadet text-xl font-medium'>Added on: <span className='font-normal'>{product.ProductCreationDateTime}</span></h2>

                </div>
                <div className="mt-2 p-4">
                    <button className="bg-orange px-3 py-2 font-medium text-xl text-white rounded-md">Buy Now</button>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    product: PropTypes.array,
}
export default Card;