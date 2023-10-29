import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
    console.log(props);
    let review = props.review;
    let name = review.name;
    let image = review.image;
    let job = review.job;
    let text = review.text;
  return (
    <div >
        <div className=" relative">
            <img src={image} className='aspect-square h-[140px] w-[140px] rounded-full absolute top-[-116px] z-[25] left-[10px]'/>
            <div className='aspect-square bg-violet-500 h-[140px] w-[140px] rounded-full absolute top-[-119px] z-[10] left-[18px]'></div>
        </div>

        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize leading-3 tracking-wide">{name}</p>
        </div>

        <div className="text-center mt-4">
            <p className="text-violet-300 text-sm uppercase">{job}</p>
        </div>
        <div className='flex flex-col items-center m-5 justify-evenly text-center'>
            <div className='text-violet-400 mb-5'> 
                <FaQuoteLeft />
            </div>
            <div className=' text-slate-500 '>
                {text}
            </div>
            <div className='text-violet-400 mt-5 '>
                <FaQuoteRight />
            </div>
        </div>

    </div>
  )
}

export default Card