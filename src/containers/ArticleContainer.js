import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import CategorySelector from "../components/CategorySelector";

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        getArticles();
    }, []);

    useEffect(() => {
        getCategories(articles);
    }, [articles])

    const getArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(results => results.json())
        .then(data => setArticles(data["response"]["results"]));
    };

    const getCategories = (articles) => {
        const categories = articles.map((article) => article["sectionName"]);
        setCategories(categories);
    };

    const onCategorySelected = (category) => {
        setSelectedCategory(category);
        const filteredArticles = articles.map((article) => article["sectionName"] === category);
        setArticles(filteredArticles);
    };

    return (
        <>
            <CategorySelector categories={categories} onCategorySelected={onCategorySelected}/>
            <ArticleList articles={articles} />
        </>
    )
};

export default ArticleContainer;