import ArticleItem from "./ArticleItem";

const ArticleList = ({articles}) => {
    const articleItems = articles.map((article, index) => {
        return <ArticleItem article={article} key={index}/>
    });

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

export default ArticleList;