import React,{useState} from 'react'
import Child from './Child'
const Parent = () => {

    const [value, setValue] = useState('this text will change')
  return (
    <div>
         <h1>{value}</h1>
        <Child  setValue ={setValue}/>
       
    </div>
  )
}

export default Parent