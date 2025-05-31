import React from 'react';
import BlogsList from './BlogsList';
import useFetch from './useFetch';


const ListElement = () => {
   
   const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/users');
   const handleClick = (id) => {
        alert(`You clicked on user with ID: ${id}`);
    }

    return (
      <>
       {error && <div className="text-center my-5"><h1>Error: {error.message}</h1></div> }
       {loading && <div className="text-center my-5"><h1>Loading...</h1></div> }
       {data&&<BlogsList blogItems={data} handleClick={handleClick}/>}
      </>

      );
}
 
export default ListElement;