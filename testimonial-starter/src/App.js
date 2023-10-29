import React from "react";
import Testimonial from "./Components/Testimonial.jsx";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col h-[100vh] w-[100vw] bg-gray-200 items-center justify-center">
      <h1 className=" text-center text-4xl font-bold">Our Testimonials</h1>
      <div className=" text-center bg-violet-400 h-[4px] w-[9rem] mt-1 mx-auto"></div>
      <Testimonial reviews = {reviews}/>
    </div>
  );
};

export default App;
