export default function AddedSection(){
    return(
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

                <p className="text-center">You haven't added any task yet.</p>  
                <div className="rounded-md flex items-center justify-between bg-gray-200 w-full p-7 ">
                    <p>TASK</p>
                    <p className="p-2 transition ease-linear hover:bg-red-600  rounded-md">Clear</p>
                </div>
            </div>
        </div>
        
    );
}