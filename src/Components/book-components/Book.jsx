import React from 'react'
import { useState } from 'react';
import useFetch from '../useFetch';
import { BOOK_API_ENDPOINTS } from '../Api/bookEndPoint';
import { Link } from 'react-router-dom';
import useDeleteHook from './useDeleteHook';

const Book = () => {

const {data,isLoading,error}=useFetch(BOOK_API_ENDPOINTS.GET_BOOKS);
//  const deleteBook = useDeleteHook(); 

  const { deleteData } = useDeleteHook();

  const handleDelete = async (id) => {
  await deleteData(`${BOOK_API_ENDPOINTS.DELETE_BOOK}/${id}`);
  
    window.location.reload(); // Refreshes the page and re-fetches the book list
  
  };


    return (
   <div className="row justify-content-center">
      
    <div className="col-8 my-5">
       <div className="d-flex justify-content-between align-items-center my-4">
         <h1 className="m-0">Book List</h1>
         <Link to="/new-book" className="btn btn-primary">Add New Book</Link>
      </div>
    {error && <div className="text-center my-5"><h1>Error: {error.message}</h1></div> }
    {isLoading && <div className="text-center my-5"><h1>Loading...</h1></div> }
      {data && (
         <table className="table table-striped table-bordered">
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">Name</th>
               <th scope="col">Author</th>
               <th scope="col">Price</th>
               <th scope='col'>Action</th>
            </tr>
         </thead>
         <tbody>
            {data.map((book, index) => (
               <tr key={index}>
               <th scope="row">{index + 1}</th>
               <td>{book.name}</td>
               <td>{book.author}</td>
               <td>SAR {book.price}</td>
               <td>
                  <Link to={`/edit/${book.id}`} className="btn btn-secondary mx-2">Edit</Link>
                  <button onClick={()=>handleDelete(book.id)} className="btn btn-danger">Delete</button>
               </td>
               </tr>
            ))}
         </tbody>
         </table>
      )}
     </div>   
   </div>
      );
}
 
export default Book;