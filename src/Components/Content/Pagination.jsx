import React from 'react';

const Pagination = ({ postsPerPage, totalPosts }) => {

    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers[0])
    return (
        <div>
            <ul>            
                {
                    pageNumbers.map((number) => (
                        <li key={number}>
                            <a href="!#" >
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Pagination;