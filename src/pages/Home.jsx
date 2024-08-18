import MainItem from "../components/MainItem";
import Seacrhbar from "../components/Seacrhbar";
import SideBar from "../components/SideBar";

const Home = () => {
    return (
        <div className="bg-platinum min-h-screen pt-8">
            <div className="container flex gap-8">
                <div className="w-3/12">
                    <SideBar />
                </div>
                <div className="w-9/12">
                    <Seacrhbar />
                    <MainItem />
                </div>
            </div>
        </div>
    );
};

export default Home;