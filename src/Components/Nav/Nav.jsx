import React from 'react';
import style from './Nav.module.css';
const Nav = () => {
    return (

        <nav className={style.nav}>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a> </a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Nav;