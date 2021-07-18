import React from 'react';
import style from './Content.module.css';
import Posts from './Posts.jsx';
let p_array = [];
const url = 'https://jsonplaceholder.typicode.com/posts'
class Content extends React.Component {
    state = {
        array: [],
        curPage: 1,
    }

    componentDidMount = async () => {
        try {
            let result = await fetch(url);
            p_array = await result.json();
            console.log(p_array)
        }
        catch { }
        this.setState({ array: p_array })
        console.log(p_array)
    }
    render() {
        this.componentDidMount()
        console.log(p_array)
        return (
            <div className={style.content}>
                <textarea></textarea>
                <button>add post</button>
                <Posts data={ p_array}/>
                <img src="http://www.zulijani.com/assets/royalslider/templates/img/full-width/medium/10.jpg" />
            </div>
        );
    }
    
}

export default Content;