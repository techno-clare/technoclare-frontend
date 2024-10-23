import React from 'react'

const HighlightedText = ({text, color}) => {
  return (
    <span className={`${color} font-bold text-lg`} >
        {text}
    </span>
  )
}

export default HighlightedText