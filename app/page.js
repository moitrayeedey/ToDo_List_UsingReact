'use client'
import React, { useState } from 'react'

const page = () => {
  //useState variable to create and set task
  const [task, setTask] = useState("");
  //useState variable to create and set description of the task
  const [des, setDes] = useState("");
  const [mainTask, setmainTask] = useState([]);

  //ADD TASK
  const submitHandler = (e) => {
    //to prevent the form from reloading
    e.preventDefault();
    // to make sure the old tasks remain when the new task is added
    setmainTask([...mainTask, {task, des}]);
    //reset the task and des
    setTask("");
    setDes("");
  }

  //DELETE TASK
  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }

  //DISPLAYING TASKS
  let renderTask = <h2>No task available</h2>
  // t = task ; i = index
  if(mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.task}</h5>
            <h6 className='text-xl'>{t.des}</h6>
          </div>
          <button onClick = {() => {
            deleteHandler(i);
          }} className='bg-red-400 text-white px-4 py-2 rounded font-bold mb-5'>Delete Task</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-4xl text-center font-semibold'>To-Do List</h1>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder="enter task here" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md'
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}/>
        <input type='text' placeholder="enter description here" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2 rounded-md'
        value={des}
        onChange={(e) => {
          setDes(e.target.value);
        }}
        />
        <button className='bg-black text-center text-white m-5 px-4 py-2 text-2xl rounded-md'>
          Add Task
        </button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page