import React from 'react'
import { useState } from 'react'
import '../asserts/css/input.css'

const Input = ({ type2323, placeholder, value }) => {
  // const [placeholder1, setplaceholder1] = useState("");
  // const [type1, settype1] = useState("");

  return (
    <div >
      <input type={type2323} placeholder={placeholder} value={value} className="inputField" />
    </div>
  )
}

export default Input;









