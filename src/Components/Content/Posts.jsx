import React, { useState } from 'react';
import PostsArray from './PostsArray';
import Pagination from './Pagination.jsx';
const url = 'https://jsonplaceholder.typicode.com/posts'
const url2 = 'https://jsonplaceholder.typicode.com/comments'
let p_array = [];
let c_array = [];
let postsPerPage = 10;
let curPage = 1;

class Posts extends React.Component {
    //const [currentPage, setCurrentPage] = useState(1);
    state = {
        array: [],
        error: "",
        curPage: 1,
    }

    componentDidMount = async () => {
        try {
            let result = await fetch(url);
            p_array = await result.json();
            let result2 = await fetch(url2);
            c_array = await result2.json();
        }
        catch (err) {
            this.setState({error: "Ошибка получения данных"})
        }
        for (let i = 0; i < p_array.length; i++) {
            let _id = p_array[i].id;
            let _comments = [];
            for (let i = 0; i < c_array.length; i++) {
                if (_id == c_array[i].postId) {
                    _comments.push(c_array[i]);
                }
            }
            //console.log(_comments)
            p_array[i] = {
                userId: p_array[i].userId,
                id: p_array[i].id,
                title: p_array[i].title,
                body: p_array[i].body,
                comments: _comments,
                
            }
           console.log(p_array[i].comments)
        }

        this.setState({array: p_array})
        
    }
    update = (num) => {
        curPage = num;
        this.setState({ curPage: num });
    }

    render()
    {
        const { error } = this.state;

        let lastPostIndex = curPage * postsPerPage;
        let firstPostIndex = lastPostIndex - postsPerPage;
        let currentPosts = p_array.slice(firstPostIndex, lastPostIndex);
        //console.log(p_array[3].body)
        return (
            <div className="posts">
                <h1>News feed</h1>
                <h2> {error} </h2>

                <PostsArray postsArray={currentPosts} />
                <Pagination postsPerPage={postsPerPage} totalPosts={p_array.length} paginate={this.update}/>
            </div>
            );

    }
}

export default Posts;

