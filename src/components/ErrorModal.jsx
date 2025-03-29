import { forwardRef,useImperativeHandle,useRef } from "react";
import {createPortal} from "react-dom";
function ErrorModal({inputIsFilled},ref){
    const dialog = useRef();

    useImperativeHandle(ref, ()=>{
        return{
             open(){
                if(!inputIsFilled){
                    dialog.current.showModal();
                }
            }
        }
    }); 
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            <p className="text-xl font-bold  my-4">Invalid output</p>
            <p className="text-stone-500 mb-4">Looks like you forgot to enter a value</p>
            <p className="text-stone-400">PLease make sure you provide a valid value for every input field.</p>
            <form method="dialog" className="mt-4 text-right">  
                <button className="hover:bg-gray-400 p-2 rounded-lg">Okay</button>
            </form>
        </dialog>, document.getElementById("modal-root")
    );
}

export default forwardRef(ErrorModal);