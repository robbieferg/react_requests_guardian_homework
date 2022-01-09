const CategorySelector = ({categories, onCategorySelected}) => {
    const handleChange = (event) => {
      const chosenCategory = categories[event.target.value];
      onCategorySelected(chosenCategory);  
    };

    const categoryOptions = categories.map((category, index) => <option value={index} key={index}>{category}</option>)

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Select a Category</option>
            {categoryOptions}
        </select>
    );
};

export default CategorySelector;