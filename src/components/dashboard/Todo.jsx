import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';
import "./dashboard.scss"


export const Todos = ({handleEditClick, editFormVisibility}) => {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div>
        <div className='actions-box'>
              {editFormVisibility===false&&(
                <>
                  <span onClick={()=>handleEditClick(todo)}></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}></span>
                </>
              )}
        </div>
    </div>
  ))
}
