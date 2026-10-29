function TaskList({tasks}){
    return(
        <ul>
            {tasks.map((task) => (
                
                    <li key={task._id}>
                        <strong>{task.title}</strong>
                        <p>{task.description}</p>
                    </li>                
            ))}
        </ul>
    );
}

export default TaskList;