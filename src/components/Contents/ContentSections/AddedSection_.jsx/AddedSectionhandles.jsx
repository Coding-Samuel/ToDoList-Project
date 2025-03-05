export function handleAddTask(currentTodoList,task,modifyTodoLists){
    let taskValue = task.current.value.trim();

    // prevents the user from inputting an empty value 
    if (taskValue === "") return 

    // updates the todolists state
    modifyTodoLists(prevTodoLists =>{

        const newTodoLists = prevTodoLists.map((list)=>
            currentTodoList.id === list.id? 
            {
                ...list,
                TASKS:[
                ...list.TASKS,
                {
                    id:list.TASKS.length, task: taskValue
                }]
            }:list
        )
        return newTodoLists;
    });
    task.current.value = "";
}

export function handleRemoveTask(todoTaskIndex,currentTodoList,modifyTodoLists){
    const tasks = currentTodoList.TASKS;
    const filteredTasks = tasks.filter((_,index)=> index !== todoTaskIndex);

    modifyTodoLists((prevTodoLists)=>{
        
        // The clicked task is being removed    
        const modifiedTodoLists = prevTodoLists.map((list)=> 
                list.id === currentTodoList.id?
                {
                    ...list,
                    // 
                    TASKS: list.TASKS.length === 1 ? "":[...filteredTasks]
                }:list

            )
            
            return modifiedTodoLists
    });
    
}
export function handleRemoveTodoList(currentTodoList,setContent,modifyTodoLists){
        setContent(()=> "notAddedProject")
        modifyTodoLists((prevTodoLists => 
        prevTodoLists.filter(list => currentTodoList !== list)
    ));
}
