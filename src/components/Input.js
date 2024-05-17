import React,{useState} from 'react'

const Input = () => {

    const [value, setValue] = useState('');
    const [show, setShow] = useState(false) // agar bydefault value ko dikhana he to true otherwise false

    const handleChange = (e) => {
     setValue(e.target.value)
    }
  return (

    <div>Input
        <input  type="text"  placeholder ="Enter your name " value={value} onChange={handleChange}/>
        {/* { show && <p>{value}</p>} */}

        { show ? <p>{value}</p>: null}

      <button onClick={() => setShow(true)}>click here</button>
        {/* <button disabled={value.length>5}> Click here</button> */}
    </div>
  )
}

export default Input