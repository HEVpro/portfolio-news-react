import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogData, selectUserInput } from '../../../features/users';
import './blog.css';


const Blog = () => {

    const search = useSelector(selectUserInput);
    const url = `https://gnews.io/api/v4/search?q=${search}&lang=en&token=057df6d0cc5d47156a59370fc2fa068e`;

    const dispatch = useDispatch();
    const [blogs, setBlogs] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url)
             .then(response => {
                 dispatch(setBlogData(response.data));
                 setBlogs(response.data);
                 setLoading(false);
             })   
             .catch((error) => {
                 console.log(error);
             })

    }, [search]);

    return(
        <div className="blog-page">
                       {loading ? <h1> Loading...</h1> : ""}
         
            <div className="news">
                {blogs?.articles.map((blog) => (
                    <a className="oneNew" target="_blank" href={blog.url}>
                        <img src={blog.image}/>
                        <div className="new-content">
                                <div className="source">
                                    <span>{blog.source.name}</span>
                                    <span>{blog.publishedAt}</span>
                                 </div>
                                    
                            <span>{blog.title}</span>
                            <p>{blog.description}</p>
                        </div>
                    </a>
                ))}
                {blogs?.totalArticles === 0 && (
                    <h1>There are no News with this search! 😧 
                        Please try again with other search!
                    </h1>
        
                )}
                
            </div>
            


        </div>
    )
}
export default Blog;