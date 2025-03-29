import { useState } from "react";
import SideBar from "./components/Sidebar";
import Content from "./components/Contents/ContentSections/Content";

function App() {
  const [content, setContent] = useState("addingProject");
  const [todoLists, modifyTodoLists] = useState([]);
  const [todoListIndex, setTodoList] = useState({});
  
  function currentTodoListIndex (index){
      setTodoList(index);
  }

 
  return (
    <div className="flex w-screen">
      <SideBar currentTodoListIndex={currentTodoListIndex} setContent={setContent} todoLists={todoLists} modifyTodoLists={modifyTodoLists}/>
      <Content todoListIndex={todoListIndex}  content={content} todoLists={todoLists}  modifyTodoLists={modifyTodoLists} setContent={setContent}/>
    </div>
  );
}

export default App;
 