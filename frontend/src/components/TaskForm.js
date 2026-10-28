import { useState } from "react";


// ({onTaskAdded} this is how you destructre the props )
function TaskForm({onTaskAdded}){     
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/tasks', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify({title, description })
        })
        onTaskAdded()
        setTitle('')
        setDescription('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;

