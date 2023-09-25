import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask } from '../actions';

function ToDoList() {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <div>current state of task: {task}</div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => {
        dispatch(addTask({ id: Date.now(), name: task }));
        setTask('');
      }}>
        Add Task
      </button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.name}
            <button onClick={() => dispatch(removeTask(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
