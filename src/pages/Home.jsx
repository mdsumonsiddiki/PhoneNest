import MainItem from "../components/MainItem";
import Seacrhbar from "../components/Seacrhbar";
import SideBar from "../components/SideBar";

const Home = () => {
    return (
        <div className="bg-platinum min-h-screen pt-8 px-2 ">
            <div className="container md:flex md:gap-8">
                <div className="md:w-3/12">
                    <SideBar />
                </div>
                <div className="md:w-9/12">
                    <Seacrhbar />
                    <MainItem />
                </div>
            </div>
        </div>
    );
};

export default Home;