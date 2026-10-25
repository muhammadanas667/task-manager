import { useState, useEffect } from 'react';
import './App.css';

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
    </div>
  );
}

export default App;