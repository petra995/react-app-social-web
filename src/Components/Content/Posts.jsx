import React, { useState } from 'react';
import PostsArray from './PostsArray';
import Pagination from './Pagination.jsx';



function Posts({ data }) {
    console.log(data);
    let p_array = [];
    let postsPerPage = 10;
    let curPage = 1;
    const [currentPage, setCurrentPage] = useState(1)
        let lastPostIndex = currentPage * postsPerPage;
        let firstPostIndex = lastPostIndex - postsPerPage;
    let currentPosts = data.slice(firstPostIndex, lastPostIndex);
    debugger;
    let ppaginate = ({ pageNumber }) => {
        curPage = pageNumber;
        }
        const paginate = pageNumber => setCurrentPage(pageNumber);


        return (
            <div className="posts">
                <h1>News feed</h1>

                <PostsArray postsArray={currentPosts} />
                <Pagination postsPerPage={postsPerPage} totalPosts={data.length} paginate={paginate}/>
            </div>
            );
            
    //    );
}

export default Posts;

