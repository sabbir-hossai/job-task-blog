import React from 'react';
import Blogs from '../Blogs/Blogs';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div className='homeBody'>
            <Navbar></Navbar>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;