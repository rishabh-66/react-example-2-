import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) => {
  console.log(uName);
  setUsersList((prev)=>{
    return [...prev, {uName, uAge}]
  })
}
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UserList users = {usersList}/>
    </div>
  );
}

export default App;
