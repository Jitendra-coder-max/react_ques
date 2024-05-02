import React from 'react';
import './Arr.css'
const Arr = () => {

    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];
    return(
        <>
        <div className='container'>
            <ul className="list">{users.map((user) =><li key={user.id}><h1>{user.name}</h1></li>)}</ul></div>

        </>
    )
}

export default Arr;