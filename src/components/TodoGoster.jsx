import Data from "../helper/Data"
const TodoGoster = ({todos,setTodos}) => {

  // console.log(setTodos);
  

  return (
    <div>
      {todos.map((item)=>(
        <div key={item.id}>
          <h3>{item.text}
          setTodos()</h3>
        </div>
      ))}
    </div>
  )
}

export default TodoGoster