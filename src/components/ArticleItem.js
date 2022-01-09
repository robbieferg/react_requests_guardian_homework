const ArticleItem = ({article}) => {
    return (
        <li>
            <h3>{article["webTitle"]}</h3>
            <h4>Category: {article["sectionName"]}</h4>
            <h4>Date Posted: {article["webPublicationDate"].split("T")[0]}</h4>
            <p><a href={article["webUrl"]}>Read Now</a></p>
            <hr></hr>
        </li>
    );
};

export default ArticleItem;