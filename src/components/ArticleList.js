import React from "react";
import Article from "./Article";

function ArticleList({posts}){

    const articlesC = posts.map((post) => {

        return( 
            <Article id={post.id} title={post.title} date={post.date} preview={post.preview}/>
        )
    })

    console.log(articlesC);

    return (
        <main>
            {articlesC}
        </main>
    )

}

export default ArticleList