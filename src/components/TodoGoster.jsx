
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
// import { useState } from "react";

const TodoGoster = ({ todos, setTodos }) => {
  
  // console.log(setTodos);

  const deleteTodos = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((item) => (
        <div key={item.id} className={item.isDone ? "done" : "gorev"}>
          <h3>
            {item.text}
            <div>
              <FaCheckCircle
                onClick={() =>
                  setTodos(
                    todos.map((a) =>
                      a.id === item.id ? { ...a, isDone: !a.isDone } : a
                    )
                  )
                } style={{color:"green", fontSize:"20px"}}
              />
              <MdDeleteForever onClick={() => deleteTodos(item.id)} style={{color:"red", fontSize:"25px"}} />
            </div>
          </h3>
          <h6>{item.day} </h6>
        </div>
      ))}
    </div>
  );
};

export default TodoGoster;
