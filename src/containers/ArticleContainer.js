import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";
import CategorySelector from "../components/CategorySelector";

const ArticleContainer = () => {
    const [articles, setArticles] = useState([]);


    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = () => {
        fetch("https://content.guardianapis.com/search?q=brexit&format=json&api-key=test")
        .then(results => results.json())
        .then(data => setArticles(data["response"]["results"]));
    };

   

    const onCategorySelected = (category) => {
        const filteredArticles = articles.filter(article => article["sectionName"] === category);
        setArticles(filteredArticles);
    };

    return (
        <>
            <CategorySelector articles={articles} onCategorySelected={onCategorySelected}/>
            <ArticleList articles={articles} />
        </>
    )
};

export default ArticleContainer;