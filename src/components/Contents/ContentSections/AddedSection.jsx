import {useRef } from "react";


export default function AddedSection({todoListIndex, modifyTodoLists, todoLists, setContent}){
    // holds the currently added task
    const task = useRef();
    const currentTodoList = todoLists[todoListIndex];
    
    function handleAddTask(){

            // updates the todolists state
            modifyTodoLists(prevTodoLists =>{

                const newTodoLists = prevTodoLists.map((list)=>
                    currentTodoList.id === list.id? 
                    {
                        ...list,
                        TASKS:[
                        ...list.TASKS,
                        {
                            id:list.TASKS.length, task: task.current.value.trim()
                        }]
                    }:list
                )

                return newTodoLists;
        });

    }

    function handleRemoveTask(todoTaskIndex){
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
    function handleRemoveTodoList(){
        setContent(()=> "notAddedProject")
        modifyTodoLists((prevTodoLists => 
            prevTodoLists.filter(list => currentTodoList === list)
        ))
    }
    return(
        <div className="flex flex-col mt-28 h-auto w-full pl-8 pr-64 space-y-4">
            <div className="flex justify-between">
                <h2 className="font-bold text-3xl">{currentTodoList.TITLE}</h2>
                <p className="p-3 transition ease-out bg-red-500 hover:bg-red-600  rounded-md" onClick={()=> {
                    console.log(todoLists)  
                    handleRemoveTodoList()
                }
                }>Delete</p>
            </div>

            <div className="text-gray-400">{currentTodoList.DATE}</div>
            <div className="whitespace-pre-line">
        {currentTodoList.DESCRIPTION}</div>

            <div className="bg-gray-300 h-0.5 w-full "></div>

            <div className="space-y-7">
                <h2 className="font-bold text-3xl">Tasks</h2>
                <div className="flex items-center gap-x-4">
                    <input ref={task} className="rounded-md h-10 bg-gray-200 w-80 focus:bg-gray-300 transition ease-out p-5" type="text"  id="TASKS" />
                    <p className="p-2 rounded-md transition ease-linear hover:bg-gray-300" 
                        onClick={handleAddTask}
                    >Add Tasks</p>
                </div>

                {
                    currentTodoList.TASKS? 
                        <div className="rounded-md max-h-64 flex flex-col items-center justify-between overflow-auto bg-gray-200 w-full p-7 ">
                            {
                                currentTodoList.TASKS.map((todoTask,index)=>(
                                    <div className="flex w-full items-center justify-between " key={index}>
                                        <p>{todoTask.task}</p>
                                        <p className="p-2 transition ease-linear hover:text-red-600  rounded-md" onClick={()=> handleRemoveTask(index)}>Clear</p>
                                    </div>
                                ))
                            }
                        </div>
                     :
                    <p className="text-center">You haven't added any task yet.</p> 
                }
            </div>
        </div>
    )
}