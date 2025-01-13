import AddedSection from "./ContentSections/AddedSection";
import AddingSection from "./ContentSections/AddingSection";
import NotAddedSection from "./ContentSections/NotAddedSection";

export default function Content({ content, setContent, modifyTodoLists, todoListIndex,  todoLists}){
    return(
    <div className="h-screen w-3/4">
            {content === "notAddedProject" && <NotAddedSection />}
            {content === "addingProject" &&  <AddingSection setContent={setContent} modifyTodoLists={modifyTodoLists} todoLists={todoLists}/>}
            {content === "addedProject" && <AddedSection todoListIndex={todoListIndex} setContent={setContent} modifyTodoLists={modifyTodoLists} todoLists={todoLists}/>};
    </div>);
}