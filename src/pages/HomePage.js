import React from 'react';

import PostList from '../components/PostList';
import './HomePage.css'; // 导入样式文件

const HomePage = () => {
    const posts = [
        { title: 'First Post', content: 'This is the content of the first post.' },
        { title: 'Second Post', content: 'This is the content of the second post.' },
    ];

    return (
        <div>
            <div className="home-page">
                <h1>This is Shaun's Arbitrage Blog</h1>
                <small>Let's make more money!</small>
                
            </div>
            <div>
                <PostList posts={posts} />
            </div>
        </div>
        
    );
};

export default HomePage;