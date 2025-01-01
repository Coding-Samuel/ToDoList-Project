function SideBar({showContent}){
    return(
        <div className="w-1/4 bg-black h-screen  rounded-tr-2xl pt-20 pl-8 mt-6 ">
            <h1 className="text-neutral-200 font-bold text-2xl uppercase">Your Projects</h1>
            <p className="text-gray-500 w-32 text-center p-2 rounded-lg mt-8 bg-gray-500 bg-opacity-30 hover:bg-gray-700 transition ease-out" onClick={()=> showContent(()=>"addingProject")}>+ Add Project</p>

            <p className="mt-4 text-gray-500">PROJECT TITLES</p>
        </div>        
    );
}
export default SideBar