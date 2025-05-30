import React from 'react';
import BlogsList from './BlogsList';

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



    return (
      <>
        <BlogsList blogItems={blogs}  title="Hello world"/>
      </>

      );
}
 
export default ListElement;