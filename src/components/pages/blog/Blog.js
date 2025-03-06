import React, { useEffect, useState } from "react";
import MediaImg from '../media/MediaImg';
import PostDate from './PostDate';
import { Link } from "react-router-dom";
import './Blog.css';

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?author=20')
            .then(response => {
                return response.json();
            })
            .then(data => setPosts(data))
        }, []
    );

    return(
        <div className="container blog">
         <h1>Blog</h1>
         <div>
            {posts.map(post => (
                <div className="row mb-5">
                    <div className="col-md-5">
                    <MediaImg id={post.featured_media} size="medium_large" />
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <PostDate date={post.date} />
                        <Link to={'/blog/' + post.slug}>
                            <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                        </Link>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    </div>
                </div>
            ))}
         </div>
        </div>
    );
};

export default Blog;