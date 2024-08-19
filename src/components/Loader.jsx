import { FiLoader } from "react-icons/fi";
import PropTypes from 'prop-types';

const Loader = ({height, width}) => {
    return (
        <FiLoader className={`animate-spin ${height} ${width}`} />

    );
};
Loader.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
}
export default Loader;