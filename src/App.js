import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStoreProvider } from './store/userStore';
import AddUser from './Components/addUser';
import UserList from './Components/userList';

function App() {
  return (
   <BrowserRouter>
   <UserStoreProvider>
   <Routes>
    <Route path='/' element={<AddUser/>}/>
    <Route path='/users' element={<UserList/>} />
   </Routes>
   </UserStoreProvider>
   </BrowserRouter>
  );
}

export default App;
