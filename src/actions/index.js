export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };

  
export const addTask = (task) => ({ type: 'ADD_TASK', payload: task });
export const removeTask = (id) => ({ type: 'REMOVE_TASK', payload: id });

export const MARK_TASK_AS_DONE = 'MARK_TASK_AS_DONE';

export function markTaskAsDone(taskId) {
  return {
    type: MARK_TASK_AS_DONE,
    payload: taskId,
  };
}