import PropTypes from 'prop-types';
let pages = [1,2,3,4,]
const Pagination = ({handlePaginationButton, currentPage, numberOfPages }) => {
    return (
        <div className='flex justify-center mt-12'>
            <button
                disabled={currentPage === 1}
                onClick={() => handlePaginationButton(currentPage - 1)}
                className='px-4 py-2 mx-1 text-spaceCadet border-2 border-orange disabled:text-gray-500 capitalize bg-white rounded-md disabled:cursor-not-allowed '
            >
                <div className='flex items-center -mx-1'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 mx-1 rtl:-scale-x-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M7 16l-4-4m0 0l4-4m-4 4h18'
                        />
                    </svg>

                    <span className='mx-1'>previous</span>
                </div>
            </button>
            {/* Numbers */}
            {pages.map(btnNum => (
                <button
                    onClick={() => handlePaginationButton(btnNum)}
                    key={btnNum}
                    className={`hidden ${currentPage === btnNum ? 'bg-primary text-white' : ' border-2 border-orange'
                        } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline font-bold`}
                >
                    {btnNum}
                </button>
            ))}
            {/* Next Button */}
            <button
                disabled={currentPage === numberOfPages}
                onClick={() => handlePaginationButton(currentPage + 1)}
                className='px-4 py-2 mx-1 text-spaceCadet border-2 border-orange transition-colors duration-300 transform bg-white rounded-md  disabled:hover:bg-gray-200  disabled:cursor-not-allowed '
            >
                <div className='flex items-center -mx-1'>
                    <span className='mx-1'>Next</span>

                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6 mx-1 rtl:-scale-x-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M17 8l4 4m0 0l-4 4m4-4H3'
                        />
                    </svg>
                </div>
            </button>
        </div>
    );
};
Pagination.propTypes = {
    handlePaginationButton:PropTypes.func,
    pages:PropTypes.array,
    currentPage:PropTypes.number,
    numberOfPages:PropTypes.number,
    

}
export default Pagination;