import React from 'react';
import { useUserStore } from '../store/userStore';
import { observer } from 'mobx-react-lite';
import './userList.scss';
import { Link } from 'react-router-dom';

const UserList = observer(() => {
  const userStore = useUserStore();
  const storedData = JSON.parse(localStorage.getItem('users'));

  const handleDeleteUser = (index) => {
    userStore.deleteUser(index); 
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <ul>
        {storedData.map((user, index) => (
          <li key={index}>
            <div className="user-details">
              <span>{user.firstName} {user.lastName} - {user.contactNumber}</span>
              <button onClick={() => handleDeleteUser(index)} className="delete-button">Delete</button>
            </div>
          </li>
        ))}
      </ul>
       <Link to={"/"}>Add New User</Link>
    </div>
  );
});

export default UserList;
