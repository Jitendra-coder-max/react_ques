import React, { useEffect, useState } from "react";
import axios from "axios";
const Fetcha = () => {
  const [users, setusers] = useState([]);
  const [newUser, setNewUser] = useState({ id: null, name: "", email: "" });

  useEffect(() => {
    const fetchApi = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

      setusers(res.data);
      console.log(res);
    };

    fetchApi();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      const filteredUsers = users.filter((user) => user.id !== id);
      setusers(filteredUsers);
    } catch (error) {
      console.error("error deleting user", error);
    }
  };

  const addData = async () => {
    try {
      const res = await axios.post(
        `https://jsonplaceholder.typicode.com/users/`,
        newUser
      );
      const newUserWithId = { ...res.data, id: users.length + 1 };
      // setusers([...users,newUserWithId])
      setusers((prev) => [...prev, newUserWithId]);
    //   setNewUser({ id: null, name: "", email: "" });
    setNewUser({ id: null, name: "", email: "" });
    } catch (error) {
      console.error("Error adding user", error);
    }
  };

  const updateUserHandle = async () => {
    try {
      await axios.put(
        `https://jsonplaceholder.typicode.com/users/${newUser.id}`,
        newUser
      );

      const updatedUser = users.map((user) =>
        user.id === newUser.id ? newUser : user
      );

      setusers(updatedUser);
      setNewUser({ id: null, name: "", email: "" });
    } catch (error) {
      console.error("error upadate", error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const updateUser = (id) => {
    const userToUpdate = users.find((user) => user.id === id);

    setNewUser(userToUpdate);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        Fetch
        <table border={1}>
          <tr>
            <th>Name</th>
            <th>email</th>
          </tr>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user.id)}> delete</button>
                <button onClick={() => updateUser(user.id)}> Update</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={addData}>Add</button>
        <button onClick={updateUserHandle}>Update User</button>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={newUser.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          value={newUser.email}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Fetcha;
