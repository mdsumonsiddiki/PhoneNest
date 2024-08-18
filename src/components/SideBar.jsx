
import Category from "./Category";
import PriceRange from "./PriceRange";



const SideBar = () => {
  
    return (
       <div className="space-y-8">
        <PriceRange/>
        <Category/>
        <div>
            <button className="bg-orange py-2 text-xl font-semibold rounded-md w-full text-white">Submit</button>
        </div>
       </div>
    );
};

export default SideBar;