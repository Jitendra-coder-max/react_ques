import React,{useState,useEffect,memo} from 'react';


function A({ children }) {
    console.log('A')
    const [state, setState] = useState(0)
    useEffect(() => {
      setState(state => state + 1)
    }, [])
    return children
  }
  
  function B() {
    console.log('B')
    return <C/>
  }
  
  function C() {
    console.log('C')
    return null
  }
  
  function D() {
    console.log('D')
    return null
  }

const Alpha = () => {
    const [state, setState] = useState(0)
    useEffect(() => {
      setState(state => state + 1)
    }, [])
    console.log('App')
    return (
      <div>
        <A><B/></A>
        <D/>
      </div>
    )
}

export default Alpha