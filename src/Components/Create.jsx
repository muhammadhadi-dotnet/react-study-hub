import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Create = () => {
  const[name,setName]=useState('');
  const[desc,setDesc]=useState('');

  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
//     const data = [name, desc];
//    alert(`Your data is ${data}`);
}

    return ( 
        <div className="container p-5">
            <h1 className="text-center my-5">Create New Item</h1>
            <form onSubmit={handelSubmit}>
                <div className="mb-3">
                    <label htmlFor="itemName" className="form-label">Item Name</label>
                    <input type="text" className="form-control" 
                    id="itemName" placeholder="Enter item name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="itemDescription" className="form-label">Description</label>
                    <textarea className="form-control"
                     rows="3" 
                     value={desc}
                     onChange={(e) => setDesc(e.target.value)}
                     placeholder="Enter item description">

                     </textarea>
                </div>
                <button type="submit" className="btn btn-primary">Create Item</button>
            </form>

            <div className="mt-5">
                <button onClick={()=>navigate(-1)} className="btn btn-primary">Back</button>
                <h2>Preview</h2>
                <p><strong>Item Name: </strong> <span id="previewItemName">Your item name will appear here {name}</span></p>
             <p><strong>Description:</strong> <span id="previewItemDescription">Your item description will appear here {desc}</span></p>
         </div>
        </div>
     );
}
 
export default Create;