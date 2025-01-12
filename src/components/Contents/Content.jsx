import AddedSection from "./ContentSections/AddedSection";
import AddingSection from "./ContentSections/AddingSection";
import NotAddedSection from "./ContentSections/NotAddedSection";

export default function Content({ content, save, modifyTodoLists, todoListIndex,  todoLists}){
    return(
    <div className="h-screen w-3/4">
            {content === "notAddedProject" && <NotAddedSection />}
            {content === "addingProject" &&  <AddingSection save={save} modifyTodoLists={modifyTodoLists} todoLists={todoLists}/>}
            {content === "addedProject" && <AddedSection todoListIndex={todoListIndex} modifyTodoLists={modifyTodoLists} todoLists={todoLists}/>};
    </div>);
}