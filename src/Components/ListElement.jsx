import React from 'react';
import BlogsList from './BlogsList';
import { useState } from 'react';

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

   const [blogItem, setBlogs] = useState(blogs);  
   const handleClick = (id) => {
        const blogToDelete = blogItem.filter(blog => blog.id !== id);
        setBlogs(blogToDelete);
    }
    return (
      <>
        <BlogsList blogItems={blogItem} handleClick={handleClick}/>
      </>

      );
}
 
export default ListElement;