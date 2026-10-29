//import TaskList from "./TaskList";

function TaskItem({task, onComplete, onDelete}){
    return (
        <li>
            <strong>{task.title}</strong>
            <p>{task.description}</p>
            <button onClick={()=> onComplete(task._id)}>Complete</button>
            <button onClick={()=> onDelete(task._id)}>Delete</button>
        </li>
    );
}

export default TaskItem;