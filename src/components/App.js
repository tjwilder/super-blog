import React, { Component } from 'react';
import Banner from './Banner.js';
import Navbar from './Navbar.js';
import Blog from './Blog.js';
import { ReactComponent as Logo } from '../images/logo.svg';
import '../css/App.css';

// TODO:
// PureComponent?
// Framework for site
class App extends Component {
    render() {
        return (
            <div className="App">
                <Banner />
                <Navbar />
                <Blog />
            </div>
        );
    }
}

export default App;
