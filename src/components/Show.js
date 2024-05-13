import React, { useState } from 'react';


const Show = () => {


    const [show, setShow] = useState(false);

   const handleClick = () => {

    setShow(!show)
   }

    return(
        <div>
            {/* <button onClick={() => setShow(!show)}>{show? 'hide': 'show'}</button> */}
            <button onClick={handleClick}>{show? 'hide': 'show'}</button>

            {show && <h1>show</h1>}
        </div>
    )
}

export default Show;