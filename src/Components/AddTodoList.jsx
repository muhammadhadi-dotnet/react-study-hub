import { addTodo } from "./Slice/Slice";
import { useDispatch } from "react-redux";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddTodoList () {
    const navigate = useNavigate();
   const [todoTitle, setTodoTitle] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ title: todoTitle }));
       setTodoTitle('');
       navigate("/todo"); // Clear the input field after submission 
        console.log("Todo added:", todoTitle);
    };

    return ( 
        <div className="col">
            <h2 className="text-center">Add Todo List</h2>
            <form className="form-inline"  onSubmit={handleSubmit}>
                <div className="form-group mb-2">
                    <label htmlFor="todoTitle" className="sr-only">Todo Title</label>
                    <input type="text" className="form-control"
                     value={todoTitle}
                     onChange={(e) => setTodoTitle(e.target.value)}
                      placeholder="Enter Todo Title"
                      />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Add Todo</button>
            </form>
</div>
     );
}
 
export default AddTodoList;