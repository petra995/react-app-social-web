import React, { useState } from 'react';
import PostsArray from './PostsArray';
import Pagination from './Pagination.jsx';
const url = 'https://jsonplaceholder.typicode.com/posts'
let p_array = [];
let postsPerPage = 10;
let curPage = 1;

function Posts () {
    const [currentPage, setCurrentPage] = useState(1);
    state = {
        array: [],
        error: "",
        curPage: 1,
    }

    componentDidMount = async () => {
        try {
            let result = await fetch(url);
            p_array = await result.json();
        }
        catch (err) {
            this.setState({error: "Ошибка получения данных"})
        }
        this.setState({array: p_array})
        
    }
    
    render()
    {
        const { error } = this.state;

        let lastPostIndex = curPage * postsPerPage;
        let firstPostIndex = lastPostIndex - postsPerPage;
        let currentPosts = p_array.slice(firstPostIndex, lastPostIndex);

        let paginate = (pageNumber) => {
            this.setState({ curPage: pageNumber })
        }
        const ppaginate = pageNumber => setCurrentPage(pageNumber);


        return (
            <div className="posts">
                <h1>News feed</h1>
                <h2> {error} </h2>

                <PostsArray postsArray={currentPosts} />
                <Pagination postsPerPage={postsPerPage} totalPosts={p_array.length} paginate={ppaginate}/>
            </div>
            );
            
    //    );

    }
}

export default Posts;

