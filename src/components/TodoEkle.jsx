import React, { useState } from "react";

const TodoEkle = ({ todos, setTodos }) => {
  const [buton, setButon] = useState(true);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const sabmitOldugunda = (e) =>{
    
    e.preventDefault();
    setTodos([...todos, {id: new Date().getTime(), text:text, day:date, isDone:false} ])
    setText("");
    setDate("");

  }
  


  return (
    <div>
      <header>
        <h1>TO DO APP</h1>
        <button onClick={() => setButon(!buton)} className="btn">
          {buton ? "CLOSE" : "SHOW"} ADD TASK BAR
        </button>
      </header>
      {buton && (
        <form onSubmit={sabmitOldugunda}>
          <div className="formControl">
            <label htmlFor="text">Task</label>
            <input
              onChange={(e) => setText(e.target.value)}
              type="text"
              id="text"
              value={text}
            />
          </div>
          <div className="formControl">
            <label htmlFor="day">Day & Time</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="dateTime-local"
              id="day"
              value={date}
            />
          </div>
          <button type="submit" className="btn btn-submit">
            SUBMIT
          </button>
        </form>
      )}
    </div>
  );
};

export default TodoEkle;
