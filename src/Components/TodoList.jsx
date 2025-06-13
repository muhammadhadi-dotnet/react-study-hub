import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Todo  ()  {

const todos = useSelector((state) => state.todos);

    return ( 
      <>
      <h1 className="text-center">Todo List</h1>
      <p className="text-center">This is a simple Todo List application using React and Redux.</p>
      <div  className="col-md-8 text-center mx-auto">
      <Link to="/AddTodoList" className="btn btn-primary mb-3">Add Todo</Link> 
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
          </tr>
            ))}
         </tbody> 
        </table>
      </div>
     
      </>
     );
}
 export default Todo;