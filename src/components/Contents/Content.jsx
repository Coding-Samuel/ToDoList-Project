import AddedSection from "./ContentSections/AddedSection";
import AddingSection from "./ContentSections/AddingSection";
import NotAddedSection from "./ContentSections/NotAddedSection";

export default function Content({content}){
    return(
    <div className="h-screen w-3/4 overflow-hidden">
            {content === "notAddedProject" && <NotAddedSection/>}
            {content === "addingProject" &&  <AddingSection/>}
            {content === "addedProject" && <AddedSection/>};
    </div>);
}