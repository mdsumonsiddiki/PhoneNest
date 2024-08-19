import { useEffect, useState } from "react";
import useAxiosCommon from "../hook/useAxiosCommon";
import Card from "./Card";
import Pagination from "./Pagination";
import Loader from "./Loader";


const MainItem = () => {
    const [products, setProducts] = useState([])
    const axiosCommon = useAxiosCommon()

    useEffect(() => {
        const allServiceData = async () => {
            const { data } = await axiosCommon(`/product`);
            setProducts(data);
        };
        allServiceData();
    }, [axiosCommon]);

    return (
        <div className="pb-10">
            {
                !products && <div className="flex items-center justify-center my-6 md:my-32">
                    <Loader height='h-12' width='w-12' />
                </div>
            }
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 overflow-hidden">
                {
                    products.map(product => <Card key={product._id} product={product} />)
                }
            </div>
            <div>
                <Pagination />
            </div>
        </div>
    );
};

export default MainItem;