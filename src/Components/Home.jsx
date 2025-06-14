import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  let [name, setName] = useState("Home Page");
  let [count, setCount] = useState(0);


   const handleClick=()=>{
    setCount(count + 1);
    if(count ==10){
        setCount("You are completed 10 clicks");
    }
    setName("Home Page Button Click");
    console.log("Button clicked");
   }

    return ( 
        <div className="container text-center my-5">
            <h1 className="text-center">Welcome to the Home Page</h1>
            <p className="lead">{name} click count {count}</p>
            <Link to="/create" className="btn btn-success mx-2">Create</Link>
            <Link to="/list" className="btn btn-info mx-2">List</Link>
            <Link to="/" className="btn btn-warning mx-2">Home</Link>
            <Link to="/todo" className="btn btn-warning mx-2">Todo</Link>
            <Link to="/post" className="btn btn-warning mx-2">Post</Link>
        <button type="button" onClick={handleClick} className="btn btn-primary">
            Click me    </button>  
        </div> 
     );
}
 
export default Home;