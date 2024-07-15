import React from 'react'

const TodoEkle = () => {
  return (
    <div>
    <header>
    <h1>TO DO APP</h1>
    <button>CLOSE ADD TASK BAR</button>
    </header>
    <form>
      <div className="formControl">
        <label htmlFor="text">Task</label>
        <input type="text" id="text"/>
      </div>
      <div className="formControl">
        <label htmlFor="day">Day & Time</label>
        <input type="dateTime-local" id="day"/>
      </div>
      <button type="submit" className="btn btn-submit">SUBMIT</button>
    </form>
      

    </div>
  )
}

export default TodoEkle