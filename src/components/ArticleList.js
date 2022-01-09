import ArticleItem from "./ArticleItem";

const ArticleList = ({articles}) => {
    const articleItems = articles.map((article, index) => {
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