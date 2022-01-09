import ArticleItem from "./ArticleItem";

const ArticleList = ({displayedArticles}) => {
    const articleItems = displayedArticles.map((article, index) => {
        return <ArticleItem article={article} key={index}/>
    });

    return (
        <div>
        <ul>
            {articleItems}
        </ul>
        </div>
    )
}

export default ArticleList;