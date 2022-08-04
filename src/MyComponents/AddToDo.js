import React, { useState } from "react";

export const AddToDo = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=>{
      e.preventDefault(); //the default action that belongs to the event will not occur
      if(!title || !desc){
        alert("Title or Description can not be blank")
      }
      else{
        addTodo(title, desc);
        setTitle("");
        setDesc(""); //for these two, after adding a todo the input boxes be blank again
      };
  }
  return (
    <div className="container my-3">
        <h3>Add a todo</h3>
      <form onSubmit = {submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-success btn-sm">Add to do</button>
      </form>
    </div>
  );
};
