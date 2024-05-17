import React, { useEffect, useState } from 'react'

const Effect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("effect")
        
  const timer = setInterval(() f
},1000)

 return () => clearInterval(timer)

    },[])
  return (
    <div>Effect<h1>{count}</h1>
<button onClick={() => setCount(count+1)}>Click here</button>
    </div>
  )
}

export default Effect