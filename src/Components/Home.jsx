import { useState } from 'react';

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
        <button type="button" onClick={handleClick} className="btn btn-primary">
            Click me    </button>  
        </div> 
     );
}
 
export default Home;