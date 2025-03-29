import { useState, useRef } from "react";
import ErrorModal from "../../ErrorModal";
export default function AddingSection({setContent, modifyTodoLists, todoLists}){

    const [input, addInput] = useState({});
    const error = useRef();
    
    const INPUTS  = ["TITLE","DESCRIPTION","DATE"];
    let inputIsFilled = INPUTS.every((field)=>
         input[field] && input[field].trim() !== "");

    function handleInput(e){
        const {id,value} = e.target;
        addInput((prevInput)=>({
           ...prevInput,
           [id]:value,
           id:todoLists.length,
           "TASKS":"",
           active: false
        }))
    }
    function handleSave(){
        error.current.open(); //opens the error modal

        if(inputIsFilled){
            setContent(("notAddedProject"))
                
            modifyTodoLists((prevTodoLists)=> {
                return [...prevTodoLists, input] 
            })
        }
    }
    return(
    <>
        <ErrorModal inputIsFilled={inputIsFilled} ref={error}/>
        <div className="h-full  w-full flex flex-col mt-28 pl-16 pr-64">
            <div className="flex items-center justify-end gap-x-3">
                <span className="p-2 w-20 text-center rounded-lg hover:bg-gray-300 transition ease-out" onClick={()=> 
                    setContent(()=> "notAddedProject")}>Cancel
                </span>
                
                <button type="submit"  className="text-white p-2 w-20   text-center rounded-lg bg-gray-700 hover:bg-gray-800 transition ease-out" onClick={handleSave}>Save
                </button>
            </div>

                <label htmlFor="TITLE" className="font-bold text-gray-500 mt-4" name="TITLE">TITLE</label>
                <input id="TITLE" className="bg-gray-200 p-2 outline-none rounded-md transition-all ease-in-out border-b-gray-300 border-b-2 focus:border-b-gray-500" type="text" onChange={handleInput}/>

                <label htmlFor="DESCRIPTION" className="font-bold text-gray-500 mt-4">DESCRIPTION</label>
                <textarea  className="rounded-md outline-none p-4 resize-none  bg-gray-200 transition-all ease-in-out border-b-gray-300 border-b-2 focus:border-b-gray-500" id="DESCRIPTION" onChange={handleInput}></textarea>

                <label htmlFor="DATE" className="font-bold text-gray-500 mt-4">DUE DATE</label>
                <input required  id="DATE" className="p-2 rounded-md outline-none  bg-gray-200 transition-all ease-in-out border-b-gray-300 border-b-2 focus:border-b-gray-500" type="date" onChange={handleInput}/>
        </div>
    </>   
    );
}