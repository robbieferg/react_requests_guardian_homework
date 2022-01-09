const ArticleItem = ({article}) => {
    return (
        <li>
            <h3>{article["webTitle"]}</h3>
            <h4>Category: {article["sectionName"]}</h4>
            <h4>Date Posted: {article["webPublicationDate"]}</h4>
            <p><a href={article["webURL"]}>Read Now</a></p>
            <hr></hr>
        </li>
    );
};

export default ArticleItem;