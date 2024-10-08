import PropTypes from 'prop-types';

const Seacrhbar = ({setSearch, setShort}) => {

    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearch(searchValue)
    }
    const handleSort = (e) => {
        setShort(e.target.value)
    }
    return (
        <div className="lg:flex items-center lg:gap-4 bg-spaceCadet/90 p-3 rounded-xl">
            <div className="lg:w-9/12">
                <form onSubmit={handleSearch}>
                    <div
                        className="mx-auto relative bg-white flex flex-col  md:flex-row items-center justify-center border border-orange py-1 px-2 rounded-md gap-2 shadow-2xl focus-within:border-orange"
                        htmlFor="search-bar">
                        <input  name="search" id="search-bar" placeholder="your keyword here"
                            className="px-4 py-2 w-full rounded-md flex-1 outline-none bg-white" />
                        <button

                            className="w-full md:w-auto px-6 py-3 bg-orange border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">

                            <div className="relative">


                                <div
                                    className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                                    <svg className="opacity-0 animate-spin w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                        </path>
                                    </svg>
                                </div>

                                <div className="flex items-center transition-all opacity-1 valid:"><span
                                    className="text-sm font-semibold whitespace-nowrap truncate mx-auto">
                                    Search
                                </span>
                                </div>

                            </div>

                        </button>
                    </div>
                </form>
            </div>
            <div className="lg:w-3/12 mt-2 lg:mt-0">
                <select onChange={handleSort} className='py-3 px-4 w-full  text-lg font-semibold rounded-md border-2 border-orange outline-none focus:border-indigo-200-600 focus:placeholder:text-black' name="sort" id="sort">
                    <option value='default' >Sort By</option>
                    <option className="text-xl font-semibold" value="new">Newest First</option>
                    <option className="text-xl font-semibold" value="old">Oldest First</option>
                    <option className="text-xl font-semibold" value="lowToHigh">Price (Low to High)</option>
                    <option className="text-xl font-semibold" value="highToLow">Price (High to Low)</option>
                </select>
            </div>

        </div>
    );
};
Seacrhbar.propTypes = {
    setSearch: PropTypes.any,
    setShort: PropTypes.func,
}
export default Seacrhbar;