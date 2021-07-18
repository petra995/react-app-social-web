import React from 'react';
import style from './Content.module.css';
import Posts from './Posts.jsx';
function Content() {
    return (
        <div className={style.content}>
            <textarea></textarea>
            <button>add post</button>
            <Posts/>
            <img src="http://www.zulijani.com/assets/royalslider/templates/img/full-width/medium/10.jpg" />
        </div>
    );
}

export default Content;