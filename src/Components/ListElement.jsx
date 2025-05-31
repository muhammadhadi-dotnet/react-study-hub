import React from 'react';
import BlogsList from './BlogsList';
import { useState,useEffect } from 'react';

const ListElement = () => {
   let blogs=
      [
        {
          id: 1,
          title: "Understanding React Hooks",
          Author: "John Doe",
          price: 500
        },
        {
          id: 2,
          title: "Advanced JavaScript Techniques",
          Author: "Jane Smith",
          price: 200
        },
        {
          id: 3,
          title: "CSS Grid Layouts Explained",
          Author: "Khan",
          price: 400
        }
      ];
   const [blogItem, setBlogs] = useState(null); 
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

    // Function to handle the delete action 
   const handleClick = (id) => {
        const blogToDelete = blogItem.filter(blog => blog.id !== id);
        setBlogs(blogToDelete);
    }
    useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/users')
          .then(
            response =>{
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }
        
            )
            .then(data => {
                setBlogs(data);
                setLoading(false);
                setError(null);
                console.log(data);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });    
     },[]);

    return (
      <>
       {error && <div className="text-center my-5"><h1>Error: {error.message}</h1></div> }
       {loading && <div className="text-center my-5"><h1>Loading...</h1></div> }
       {blogItem&&<BlogsList blogItems={blogItem} handleClick={handleClick}/>}
      </>

      );
}
 
export default ListElement;