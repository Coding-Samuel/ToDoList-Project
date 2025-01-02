import SideBar from "./components/Sidebar";
import Content from "./components/Contents/Content";
import { useState } from "react";
function App() {
  const [content,setContent] = useState("notAddedProject");
  return (
    <div className="flex w-screen">
      <SideBar showContent={setContent}/>
      <Content content={content}/>
    </div>
  );
}

export default App;
