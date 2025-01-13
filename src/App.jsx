import { useState } from "react";
import SideBar from "./components/Sidebar";
import Content from "./components/Contents/Content";

function App() {
  const [content,setContent] = useState("notAddedProject");
  const [todoLists, modifyTodoLists]= useState([]);
  const [todoListIndex, setTodoList]= useState({});
  
   function currentTodoListIndex (index){
      setTodoList(index);
  }

 
  return (
    <div className="flex w-screen">
      <SideBar currentTodoListIndex={currentTodoListIndex} setContent={setContent} todoLists={todoLists}/>
      <Content todoListIndex={todoListIndex}  content={content} todoLists={todoLists}  modifyTodoLists={modifyTodoLists} setContent={setContent}/>
    </div>
  );
}

export default App;
 