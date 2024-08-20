
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../components/Loader";
import UseAuth from "../hook/UseAuth";


const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader height='h-16' width='w-16' />
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/singin" state={location.pathname} />;
  }

  return children;
};
PrivateRoute.propTypes = {
  children: PropTypes.object,
};
export default PrivateRoute;