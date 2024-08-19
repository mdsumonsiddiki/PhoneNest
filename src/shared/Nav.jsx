import { Link } from "react-router-dom";
import UseAuth from "../hook/UseAuth";

const Nav = () => {
    const { user, userLogOut } = UseAuth();

    return (
        <div className="bg-spaceCadet/90 shadow-xl">
            <div className="navbar container">
                <div className="navbar-start">
                    <Link to='/' className="text-orange font-bold text-xl md:text-3xl lg:text-4xl">PhoneNest</Link>
                </div>

                {
                    user ? <div className="navbar-end"><button onClick={userLogOut} className=" px-3  block md:px-3 lg:px-5  font-medium md:text-lg md:tracking-wide py-1 md:py-1.5 rounded-full text-white bg-orange ">Log Out</button> </div> : <div className="navbar-end space-x-2">
                        <Link to='/singin' className=" px-3 md:px-3 lg:px-5  font-medium md:text-lg md:tracking-wide py-1 md:py-1.5 rounded-full text-white bg-orange ">SingIn</Link>
                        <Link to='/singup' className=" px-3 md:px-3 hidden md:block lg:px-5 font-medium md:text-lg md:tracking-wide py-1 md:py-1.5 rounded-full text-white  bg-orange ">SingUp</Link>
                    </div>
                }


            </div>
        </div>
    );
};

export default Nav;