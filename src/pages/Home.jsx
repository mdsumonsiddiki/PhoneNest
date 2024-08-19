import {useState } from "react";
import MainItem from "../components/MainItem";
import Seacrhbar from "../components/Seacrhbar";
import SideBar from "../components/SideBar";
import useAxiosCommon from "../hook/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
    const axiosCommon = useAxiosCommon();
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('')

    const { data: products = [], isLoading } = useQuery({
        queryKey: ['allproducts', currentPage, search],
        queryFn: async () => {
            const { data } = await axiosCommon(`/products?page=${currentPage}&size=${itemsPerPage}&search=${search}`)
            return data
        },
    })
    const handleSearch = (e) => {
        e.preventDefault();
        const searchValue = e.target.search.value;
        setSearch(searchValue);
    }
   
    const { data: productCount = 0 } = useQuery({
        queryKey: ['product-count'],
        queryFn: async () => {
            const { data } = await axiosCommon(`/product-count`)
            return data.count
        },
    })

    const numberOfPages = Math.ceil(productCount / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)


    const handlePaginationButton = value => {
        setCurrentPage(value)

    }
    return (
        <div className="bg-platinum min-h-screen pt-8 px-2 ">
            <div className="container md:flex md:gap-8">
                <div className="md:w-3/12">
                    <SideBar />
                </div>
                <div className="md:w-9/12">
                    <Seacrhbar handleSeacrch={handleSearch} />
                    <MainItem
                        products={products}
                        isLoading={isLoading}
                        handlePaginationButton={handlePaginationButton}
                        pages={pages}
                        currentPage={currentPage}
                        numberOfPages={numberOfPages} />
                </div>
            </div>
        </div>
    );
};

export default Home;