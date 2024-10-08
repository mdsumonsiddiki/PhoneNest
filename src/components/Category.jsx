
import PropTypes from 'prop-types';

const categories = ['All', 'Mobile', 'GlassProtector', 'Backcover', 'Earphone', 'Accessories', 'Charger', 'Battery'];

const Category = ({setSelectedCategory, selectedCategory}) => {
    

    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
     
    };
  
    return (
        <div className="w-full max-w-md mx-auto p-4  bg-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-sm ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
    );
};
Category.propTypes = {
  setSelectedCategory: PropTypes.func,
  selectedCategory: PropTypes.string,
}
export default Category;