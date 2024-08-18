import MainItem from "../components/MainItem";
import Seacrhbar from "../components/Seacrhbar";

const Home = () => {
    return (
        <div className="bg-platinum min-h-screen pt-8">
            <div className="container flex">
                <div className="w-3/12">

                </div>
                <div className="w-9/12">
                    <Seacrhbar/>
                    <MainItem/>
                </div>
            </div>
        </div>
    );
};

export default Home;