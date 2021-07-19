import React from 'react';

const PostsArray = ({ postsArray }) => {

    //console.log(postsArray[1].comments)
    return (
        <div>
            <ul>
                {postsArray.map((item) => <article key={item.id}>
                    <text>{item.id}</text><br />
                    <strong>{item.title}</strong><br />
                    <text>{item.body}</text><br />
                    <small>
                        last comment:<br/>
                        <strong>{item.comments.name}</strong><br />
                        {item.comments.body}
                    </small>
                </article>)}
            </ul>
        </div>
    );
}

export default PostsArray;