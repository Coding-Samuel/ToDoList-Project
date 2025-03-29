import AddedSection from "./AddedSection_.jsx/AddedSection";
import AddingSection from "./AddingSection";
import NotAddedSection from "./NotAddedSection";

export default function Content({ content, setContent, modifyTodoLists, todoListIndex,  todoLists}){
    return(
    <div className="h-screen w-3/4">
            {content === "notAddedProject" && <NotAddedSection setContent={setContent}/>}
            {content === "addingProject" &&  <AddingSection setContent={setContent} modifyTodoLists={modifyTodoLists} todoLists={todoLists}/>}
            {content === "addedProject" && <AddedSection todoListIndex={todoListIndex} setContent={setContent} modifyTodoLists={modifyTodoLists} todoLists={todoLists}/>};
    </div>);
}