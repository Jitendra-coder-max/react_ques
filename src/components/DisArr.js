import React from 'react'

const DisArr = () => {

    const Users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
      ];
  return (
    <div>

        <ul>
            {Users.map((user) => (
     <li  style={{listStyleType:'none'}} key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default DisArr