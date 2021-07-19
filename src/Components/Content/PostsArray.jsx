import React, { useState } from 'react';
import Modal from "./Modal.jsx";
/*let modalActive = false;*/
const PostsArray = ({ postsArray }) => {
    const [modalActive, setModalActive] = useState(true);
    //let setModalActive = (flag) => {
    //    modalActive = flag;
    //}
    //console.log(postsArray[1].comments)
    return (
        <div>
            <Modal active={modalActive} setActive={setModalActive} />
            <ul>
                {postsArray.map((item) => <p key={item.id} >
                    
                    <text>{item.id}</text><br />
                    <strong>{item.title}</strong><br />
                    <text>{item.body}</text><br />
                    <small>
                        last comment:<br/>
                        <strong>{item.comments[4].name}</strong><br />
                        {item.comments[4].body}
                    </small>
                    <button onClick={() => { setModalActive(true);}}>open post</button>
                </p>)}
            </ul>
        </div>
    );
}

export default PostsArray;