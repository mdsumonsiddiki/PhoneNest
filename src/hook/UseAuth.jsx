
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const UseAuth = () => {
    const authInfo = useContext(AuthContext)
    return authInfo;
};

export default UseAuth;