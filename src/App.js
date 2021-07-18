import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import Content from './Components/Content/Content.jsx'
function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Nav />
            <Content/>
        </div>
    );
}

export default App;
