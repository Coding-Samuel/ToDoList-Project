import img from "../assets/no-projects.png"
export default function Content({content}){
    return(
    <div className="h-screen w-3/4 overflow-hidden">
            {content=== "notaddedProject" && <div className="w-full flex h-screen flex-col items-center  gap-y-6 mt-32">
            <img className="h-16" src={img} alt="No Project Img" />
                <p className="text-gray-600 font-bold text-2xl">No Project Selected</p>
                <p className="text-gray-500 text-lg">Select a Project or get started with anew one.</p>
                <button className="h-12 rounded-md text-gray-400 bg-gray-700 p-3 center hover:bg-gray-800">Create new project</button>
        </div> }

        { content === "addingProject" && <div className="h-full  w-full flex flex-col mt-28 pl-16 pr-64">
            <div className="flex items-center justify-end gap-x-3">
                <span className="p-2 w-20 text-center rounded-lg hover:bg-gray-300 transition ease-out">Cancel</span>
                <span className="text-white p-2 w-20 text-center rounded-lg bg-gray-700 hover:bg-gray-800 transition ease-out">Save</span>
            </div>

            <label htmlFor="TITLE" className="font-bold text-gray-500 mt-4" name="TITLE">TITLE</label>
            <input id="TITLE" className="bg-gray-200 p-2 outline-none rounded-md transition-all ease-in-out border-b-gray-300 border-b-2 focus:border-b-gray-500" type="text" />

            <label htmlFor="DESCRIPTION" className="font-bold text-gray-500 mt-4">DESCRIPTION</label>
            <textarea className="rounded-md outline-none p-4 resize-none  bg-gray-200 transition-all ease-in-out border-b-gray-300 border-b-2 focus:border-b-gray-500" id="DESCRIPTION"></textarea>

            <label htmlFor="DATE" className="font-bold text-gray-500 mt-4">DUE DATE </label>
            <input id="DATE" className="p-2 rounded-md outline-none  bg-gray-200 transition-all ease-in-out border-b-gray-300 border-b-2 focus:border-b-gray-500" type="date" />
        </div>
        }
        {content === "addedProject" && 
        <div className="flex flex-col mt-28 h-full w-full pl-8 pr-64 space-y-4">
            <div className="flex justify-between">
                <h2 className="font-bold text-3xl">PROJECT TITLE</h2>
                <p className="p-3 transition ease-out bg-red-500 hover:bg-red-600  rounded-md">Delete</p>
            </div>

            <div className="text-gray-400">PROJECT DATE</div>
            <div className="">PROJECT DESCRIPTION</div>

            <div className="bg-gray-300 h-0.5 w-full "></div>

            <div className="space-y-7">
                <h2 className="font-bold text-3xl">Tasks</h2>
                <div className="flex items-center gap-x-4">
                    <input className="rounded-md h-10 bg-gray-200 w-80 focus:bg-gray-300 transition ease-out p-5" type="text" />
                    <p className="p-2 rounded-md transition ease-linear hover:bg-gray-300">Add Tasks</p>
                </div>
                <div className="rounded-md flex items-center justify-between bg-gray-200 w-full p-7 ">
                    <p>TASK</p>
                    <p className="p-2 transition ease-linear hover:bg-red-600  rounded-md">Clear</p>
                </div>
            </div>
        </div>
        
        };
    </div>);
}