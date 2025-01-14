function SideBar({setContent,todoLists,currentTodoListIndex,modifyTodoLists}){
    
    return(
        <div className="w-1/4  bg-black h-screen  rounded-tr-2xl pt-20 pl-6 pr-5 mt-6 ">
            <h1 className="text-neutral-200 font-bold text-2xl uppercase">Your Projects</h1>
            <p className="text-gray-500 w-32 text-center p-2 rounded-lg mt-8 bg-gray-500 bg-opacity-30 hover:bg-gray-700 transition ease-out" onClick={()=> setContent(()=>"addingProject")}>+ Add Project</p>

            <div className="mt-4  text-gray-500">
                {todoLists.map((todoList,index)=>(
                    <p className={`${todoList.active? "text-white bg-gray-400 bg-opacity-10":""} mt-2 p-2  rounded-md w-full break-words`} 
                        onClick={()=> {
                                currentTodoListIndex(index)
                                setContent(()=>"addedProject")
                                
                                modifyTodoLists((prevTodoLists)=> (
                                    prevTodoLists.map(list => (
                                        // list.TITLE === todoList.TITLE?
                                        {
                                            ...list,
                                            active:list.id === todoList.id? true: false
                                        }
                                    ))
                                ))
                                
                            }
                        }  
                            key={index}>{todoList.TITLE}
                    </p>
                )
            )}
            </div>
        </div>        
    )
}
export default SideBar