import img from "../../../assets/no-projects.png"
function NotAddedSection({setContent}){
    return(
        <div className="w-full flex h-screen flex-col items-center  gap-y-6 mt-32">
            <img className="h-16" src={img} alt="No Project Img" />
                <p className="text-gray-600 font-bold text-2xl">No Project Selected</p>
                <p className="text-gray-500 text-lg">Select a Project or get started with anew one.</p>
                <button className="h-12 rounded-md text-gray-400 bg-gray-700 p-3 center hover:bg-gray-800" onClick={()=>
                        setContent(()=> "addingProject")
                }>Create new project</button>
        </div> 
    );
}
export default NotAddedSection;