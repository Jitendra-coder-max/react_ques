import React, { useState } from 'react'

const UserCompo = () => {

    const[data, setData] = useState(0)
    const date =new Date()
    
// let data = "anil"
    const handleClick = () => {
        // data="peter"
        // alert('text')
        // console.log(data)
       setData(data+1)
        
    }
  return (
    <div>UserCompo <h1>{data}</h1>
        <button onClick={handleClick}> Click here</button>
    </div>
  )
}

export default UserCompo