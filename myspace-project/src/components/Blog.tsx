import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
    return (
        <div className="blog-entries">
            <h3>Tom's Latest Blog Entry <a href="#">[Subscribe to this Blog]</a></h3>
            <p>Top 8, 16, 20, 24 friends :) <a href="#">(view more)</a></p>
            <p>MySpace Concert & Parties -Georgia, Orlando, Miami! <a href="#">(view more)</a></p>
            <p>In Stores Today - MySpace Records Vol. 1 ! <a href="#">(view more)</a></p>
            <p>MySpace Records - in stores soon! <a href="#">(view more)</a></p>
            <a href="#">[View All Blog Entries]</a>
        </div>
    );
};

export default Blog;
