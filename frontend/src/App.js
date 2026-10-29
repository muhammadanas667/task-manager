import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState([]) //That will stores the tasks array

   const fetchTasks = async () =>{
    const response = await fetch('http://localhost:5000/api/tasks')
    const data = await response.json()
    setTasks(data)
  }

useEffect(() => {
  fetchTasks()
},[])
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={fetchTasks}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;