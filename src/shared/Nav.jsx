import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-spaceCadet/90">
            <div className="navbar container">
                <div className="navbar-start">
                    <Link to='/' className="text-orange font-bold text-xl md:text-3xl lg:text-4xl">PhoneNest</Link>
                </div>

                <div className="navbar-end space-x-2">
                    <Link className=" px-3 md:px-3 lg:px-5  font-medium md:text-lg md:tracking-wide py-1 md:py-1.5 rounded-full text-white bg-orange ">SingIn</Link>
                    <Link className=" px-3 md:px-3 hidden md:block lg:px-5 font-medium md:text-lg md:tracking-wide py-1 md:py-1.5 rounded-full text-white  bg-orange ">SingUp</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Nav;