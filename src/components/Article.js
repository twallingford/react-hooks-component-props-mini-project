import React from "react";

function Article({id, title, date="January 1, 1970", preview}){


    /*const postList = posts.map((post) => {

        const {id, title, date="January 1, 1970", preview} = post;
        console.log(id)
        console.log(title)
        console.log(date)
        console.log(preview)

    })*/

    return (
        <article>
            <div key={id}>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </div>
        </article>
    )

}

export default Article