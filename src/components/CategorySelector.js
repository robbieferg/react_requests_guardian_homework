const CategorySelector = ({articles, onCategorySelected}) => {
    
    const categoryOptions = articles.map((article, index) => <option value={index} key={index}>{article["sectionName"]}</option>)

    const handleChange = (event) => {
      const chosenCategory = articles[event.target.value]["sectionName"];
      onCategorySelected(chosenCategory);  
    };

    

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="">Select a Category</option>
            {categoryOptions}
        </select>
    );
};

export default CategorySelector;