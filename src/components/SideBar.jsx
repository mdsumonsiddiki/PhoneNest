
import { useState } from "react";
import Category from "./Category";
import PriceRange from "./PriceRange";
import PropTypes from 'prop-types';


const SideBar = ({hsndleSidebarSubmit}) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState(''); 
    return (
       <div className="space-y-4 mb-4 md:mb-0 md:space-y-8">
        <PriceRange setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} maxPrice={maxPrice} minPrice={minPrice} />
        <Category setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
        <div>
            <button onClick={()=>hsndleSidebarSubmit(minPrice, maxPrice, selectedCategory)} className="bg-orange py-2 text-xl font-semibold rounded-md w-full text-white">Submit</button>
        </div>
       </div>
    );
};
SideBar.propTypes = {
    hsndleSidebarSubmit: PropTypes.func,
}
export default SideBar;