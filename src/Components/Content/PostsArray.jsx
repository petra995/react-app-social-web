import React from 'react';

const PostsArray = ({ postsArray }) => {

    return (
        <div>
            <ul>
                {postsArray.map((item) => <article key={item.id}>
                    <text>{item.id}</text><br />
                    <strong>{item.title}</strong><br />
                    <text>{item.body}</text><br /><br />
                </article>)}
            </ul>
        </div>
    );
}

export default PostsArray;