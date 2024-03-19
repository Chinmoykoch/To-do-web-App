import React from 'react';
import {useState} from 'react';
import { Form } from '../dashboard/Form';
import { Todos } from "../dashboard/Todo";
import {useDispatch, useSelector} from 'react-redux';
import {deleteAll} from '../redux/todoapp/actions/index';
import "./dashboard.scss"

function Dashboard() {

    const dispatch = useDispatch();
  
    const todos = useSelector((state)=>state.operationsReducer);
  
    const [editFormVisibility, setEditFormVisibility]=useState(false);
  
    const [editTodo, setEditTodo]=useState('');
  
    const handleEditClick=(todo)=>{
      setEditFormVisibility(true);
      setEditTodo(todo);
    }
  
    const cancelUpdate=()=>{
      setEditFormVisibility(false);
    }
  
      return (
      <div className="wrapper">
        <br></br>
        <h1 className="text-center">TODO-WEB APP</h1>
        <hr />
        <Form editFormVisibility={editFormVisibility} editTodo={editTodo}
        cancelUpdate={cancelUpdate}/>
        <Todos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
        {todos.length > 1 && (
          <button className='btn btn-danger btn-md delete-all'
          onClick={()=>dispatch(deleteAll())}>DELETE ALL</button>
        )}
      </div>
    );
  }

export default Dashboard;
