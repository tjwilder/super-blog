import React from 'react';
import Banner from './Banner.js';
import Navbar from '../containers/Navbar.js';
import Blog from './Blog.js';
/* import { ReactComponent as Logo } from '../images/logo.svg'; */
import '../css/App.css';

// TODO:
// PureComponent?
// Framework for site
const App = () => (
  <div className="App">
    <Banner />
    <Navbar />
    <Blog />
  </div>
);

export default App;
