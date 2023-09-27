import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, markTaskAsDone } from '../actions'; // Pastikan Anda memiliki action creator yang sesuai

function ToDoList() {
  const [task, setTask] = useState('');
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const toggleTaskDone = (taskId) => {
    dispatch(markTaskAsDone(taskId));
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => {
        dispatch(addTask({ id: Date.now(), name: task, isDone: false })); // Tambahkan isDone: false
        setTask('');
      }}>
        Add Task
      </button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id} className={t.isDone ? 'done' : ''}>
            {t.name}
            <button onClick={() => dispatch(removeTask(t.id))}>Delete</button>
            {!t.isDone && (
              <button onClick={() => toggleTaskDone(t.id)}>Mark as Complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;