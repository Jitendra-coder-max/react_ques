import React from 'react'

const Child = ({setValue}) => {
  return (
    <div>
        <button onClick={() => setValue('placed value')}>Chnage parent</button>
    </div>
  )
}

export default Child