import React from "react";
import { IoMdAddCircle } from 'react-icons/io'

function App() {
    return (
      <div className="bg-blue-950 h-screen">
        <div className="lg:container mx-auto">
          <h1 className="text-5xl text-white font-extrabold">To Do</h1>
          <div className="flex justify-between text-white pt-7">
            <p>Lists</p>
            <button className="flex items-center text-lg font-bold gap-1 px-3 py-2 rounded-lg hover:bg-gray-600">Add <IoMdAddCircle /></button>
          </div>
        </div>
      </div>
    )
}

export default App