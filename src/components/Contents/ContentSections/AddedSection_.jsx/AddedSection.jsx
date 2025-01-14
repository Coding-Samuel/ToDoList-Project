import {useRef } from "react";
import { handleAddTask, handleRemoveTask, handleRemoveTodoList } from "./AddedSectionhandles";

export default function AddedSection({ todoListIndex, modifyTodoLists, todoLists, setContent}){
    // holds the currently added task
    const task = useRef();

    // The Displayed todo list
    const currentTodoList = todoLists[todoListIndex];
    
    return(
        <div className="flex flex-col mt-28 h-auto w-full pl-8 pr-64 space-y-4">
            <div className="flex justify-between">
                <h2 className="font-bold text-3xl">{currentTodoList.TITLE}</h2>
                <p className="p-3 transition ease-out hover:text-red-600  rounded-md" onClick={()=> {
                    // Removes current todo list
                    handleRemoveTodoList(currentTodoList,setContent,modifyTodoLists)
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
                        onClick={()=>
                            // Adds a task to current todo list's TASKS
                            handleAddTask(currentTodoList,task,modifyTodoLists)}
                    >Add Tasks</p>
                </div>

                {
                    currentTodoList.TASKS? 
                        <div className="rounded-md max-h-64 flex flex-col items-center justify-between overflow-auto bg-gray-200 w-full p-7 ">
                            {
                                currentTodoList.TASKS.map((todoTask,index)=>(
                                    <div className="flex w-full items-center justify-between " key={index}>
                                        <p>{todoTask.task}</p>
                                        <p className="p-2 transition ease-linear hover:text-red-600  rounded-md" onClick={()=> 
                                            // Removes task from current todo list's TASKS 
                                            handleRemoveTask(index,currentTodoList,modifyTodoLists)}>Clear</p>
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