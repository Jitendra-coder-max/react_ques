import React,{useState} from 'react'

const Input = () => {

    const [value, setValue] = useState('');

    const handleChange = (e) => {
     setValue(e.target.value)
    }
  return (

    <div>Input
        <input  type="text"  placeholder ="Enter your name " value={value} onChange={handleChange}/>
        <h1>{value}</h1>
        <button disabled={value.length>5}> Click here</button>
    </div>
  )
}

export default Input