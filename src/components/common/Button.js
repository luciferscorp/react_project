import React from 'react'
import '../asserts/css/button.css'

export default function Button({Title,Type,onClick}) {
  return (
    <div>
      <button className='submitButton' type={Type}  onClick={(e)=>onClick(e)}>{Title}</button>
    </div>
  )
}
