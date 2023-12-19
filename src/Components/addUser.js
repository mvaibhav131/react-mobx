import { useState } from "react";
import { useUserStore } from "../store/userStore"
import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import "./addUser.scss";

const AddUser = observer(() => {
        const userStore=useUserStore();
        const [firstName,setFirstName]= useState("");
        const [lastName,setLastName]= useState('');
        const [contactNumber,setContactNumber]=useState("");
        const navigate = useNavigate();
    
        const handleSubmit =(e) => {
            e.preventDefault();
            if(firstName.trim() !== "" && lastName.trim() !== "" && contactNumber.trim() !== ""){
                userStore.addUser({firstName,lastName,contactNumber});
                localStorage.setItem('users', JSON.stringify(userStore.users));
                navigate("/users");
            }
        }
    
        return (
            <div className="form-container" >
                <h2>Add User</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" placeholder="Contact Number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                    <button type="submit">Add User</button>
                </form>
                <Link to={"/users"}>Go to the List</Link>
            </div>
        );
     });

 export default AddUser;