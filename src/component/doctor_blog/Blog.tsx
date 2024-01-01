import { useState } from "react";
import RightSide from "./RightSide"
import Sidebar from "./Sidebar"


const Blog = () => {
  const [activeTab, setActiveTab] = useState("My Dashboard");

  return (
    <div className="h-full bg-[#F5F7F8] pt-28">
      <div className="lg:flex gap-x-8 w-[90%] mx-auto py-16">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <RightSide activeTab={activeTab} />
      </div>
    </div>
  )
}

export default Blog