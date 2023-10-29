import React, { useState } from 'react'
import Card from './Card.jsx'
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  const [index , setIndex] = useState(0);
  let reviews = props.reviews;
  function leftSliderHandeler(){
    if(index - 1 < 0){
      setIndex(reviews.length - 1);
    }
    else{
      setIndex(index - 1);
    }
  }
  function rightSliderHandeler(){
    if(index + 1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  }
  function randomSliderHandeler(){
      let random = Math.floor(Math.random() * reviews.length);
      setIndex(random);
  }
  console.log(reviews);
  return (
    <div className='flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center
    mt-10 p-10 mx-auto transition-all duration-700 drop-shadow-md hover:drop-shadow-xl rounded-md'>
      <Card review = {reviews[index]}/>
      <div className='flex flex-row gap-4 m-2 text-violet-400 text-3xl'>
        <button onClick={leftSliderHandeler}>
          <FiChevronLeft />
        </button>
        <button onClick={rightSliderHandeler}>
          <FiChevronRight />
        </button>
      </div>
      <div className='mt-3'>
        <button className=' bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 
        py-2 rounded-md font-bold text-white text-lg'
        onClick={randomSliderHandeler}>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial