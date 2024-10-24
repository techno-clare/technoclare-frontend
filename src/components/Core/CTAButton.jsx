import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowUpRight } from "react-icons/bs";


const CTAButton = ({text, path}) => {
  return (
    <Link to={path}>
        <button className="flex items-center gap-2 text-palewhite-5 font-bold 
                text-xl px-7 py-3 mt-3 rounded rounded-full border border-palewhite-5
                group">
            <div className="group-hover:-translate-x-1.5 duration-300 transition-all ease-in-out">{text}</div>
            <BsArrowUpRight className='group-hover:translate-x-1.5 group-hover:-translate-y-1 duration-300 transition-all ease-in-out' />
        </button>
    </Link>
  )
}

export default CTAButton