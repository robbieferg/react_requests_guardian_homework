const CategorySelector = ({articles, onCategorySelected}) => {
    
    const categories = articles.map((article, index) => article["sectionName"]);

    const getUniqueCategories = (categories) => {
        const uniqueList = [];
        for (const category of categories) {
            if (!uniqueList.includes(category)) {
                uniqueList.push(category);
            }
        }
        return uniqueList;
    };

    const categoryOptions = getUniqueCategories(categories);

    const optionList = categoryOptions.map((category, index) => <option value={index} key={index}>{category}</option>)

    const handleChange = (event) => {
      const chosenCategory = categoryOptions[event.target.value];
      onCategorySelected(chosenCategory);  
    };

    

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Select a Category</option>
            {optionList}
        </select>
    );
};

export default CategorySelector;