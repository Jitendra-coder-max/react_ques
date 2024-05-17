import React, { useState } from 'react'

const Drop = () => {

    const [name,setName] = useState('');
    const [tnc, setTnc] = useState(false);
    const[interest, setInterest] = useState('')

    const getFormData = (e) => {
              e.preventDefault()

              console.log(name,tnc,interest)
    }
  return (
    <div>Drop
        <form onSubmit={getFormData}>

            <input type="text" placeholder=" enter name" onChange={(e)=> setName(e.target.value)}/> <br/>
            <select onChange={(e) => setInterest(e.target.value)}>
                <option>Select option</option>
                <option>Marvel</option>
                <option>DC</option>
                
            </select> <br/>
            <input  type="checkbox" onChange={(e) =>setTnc(e.target.checked)}/><span> Accept Terms and conditions</span>
                <br/>
                <button type="submit"> Submit</button>
        </form>
    </div>
  )
}

export default Drop