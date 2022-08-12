import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import { useState } from "react";
const AddUser=(props)=>{
    const [enteredUserName,setUserName]=useState('');
    const[enteredAge,setAge]=useState('');
    const addUserNameHandler=(event)=>{
        setUserName(event.target.value);
    }
    const addAgeHandler=(event)=>{
        setAge(event.target.value);
    }
    const addUserHandler=(event)=>{
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            return;
        }
        if(+enteredAge<1){
            return;
        }
        console.log(enteredUserName,enteredAge);
        setUserName('');
        setAge('');
    }
return(
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={addUserNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={addAgeHandler} />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
)
}

export default AddUser;