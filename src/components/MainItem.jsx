import Card from "./Card";
import Pagination from "./Pagination";


const MainItem = () => {
    return (
        <div className="pb-10">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden">
                <Card />
                <Card />
                <Card />
            </div>
            <div>
                <Pagination/>
            </div>
        </div>
    );
};

export default MainItem;