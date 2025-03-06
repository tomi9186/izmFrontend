import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import MediaImg from '../media/MediaImg';
import PostDate from './PostDate';
import PostAuthor from "./PostAuthor";
import './Blog.css';

const BlogSingle = () => {

    const {id} = useParams();    
    const [post, setPost] = useState(null);

    useEffect(
        () => {
            fetch('https://frontend.internetskimarketing.eu/backend/wp-json/wp/v2/posts?slug=' + id)
            .then(response => response.json())
            .then(data => setPost(data[0]))
        }, [id]
    );

    if(!post) return <p>Učitavanje...</p>;

    return(
        <div className="single-post container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered}} />
                    <p>
                        <PostAuthor authorID={post.author} />  
                        <PostDate date={post.date} />
                    </p>
                    <MediaImg id={post.featured_media} size="full" />
                    <div dangerouslySetInnerHTML={{ __html: post.content.rendered}} />
                </div>
            </div>
        </div>
    );
};

export default BlogSingle;