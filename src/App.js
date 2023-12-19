import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import UserModule from './Components/userModule';
import { makeAutoObservable } from 'mobx';

export class UserModalViewStore {
  opened = false;
  constructor() {
    makeAutoObservable(this,undefined,{autoBind:true});
  }
  open() {
    this.opened= true;
  }
  close(){
    this.opened=false;
  }
}

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/users/*' element={<UserModule/>}/>
    <Route path='/' element={<Link to="/users" >Go to the Users</Link>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
