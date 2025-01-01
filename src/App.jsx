import SideBar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";
function App() {
  const [content,setContent] = useState("addedProject");
  return (
    <div className="flex w-screen">
      <SideBar showContent={setContent}/>
      <Content content={content}/>
    </div>
  );
}

export default App;
