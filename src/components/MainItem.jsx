
import Card from "./Card";
import Pagination from "./Pagination";
import Loader from "./Loader";

import PropTypes from 'prop-types';

const MainItem = ({products, isLoading, handlePaginationButton, pages, currentPage, numberOfPages}) => {
   

    return (
        <div className="pb-10">
            {
                isLoading && <div className="flex items-center justify-center my-6 md:my-32">
                    <Loader height='h-12' width='w-12' />
                </div>
            }
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden">
                {
                    products.map(product => <Card key={product._id} product={product} />)
                }
            </div>
            <div>
                <Pagination
                 handlePaginationButton={handlePaginationButton}
                 pages={pages}
                 currentPage={currentPage}
                 numberOfPages={numberOfPages}
                 />
            </div>
        </div>
    );
};
MainItem.propTypes = {
    products: PropTypes.array,
    isLoading: PropTypes.bool,
    handlePaginationButton:PropTypes.func,
    pages:PropTypes.array,
    currentPage:PropTypes.number,
    numberOfPages:PropTypes.number,
}
export default MainItem;