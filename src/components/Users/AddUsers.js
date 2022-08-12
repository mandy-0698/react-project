import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser=(props)=>{
    const [error,setError]=useState();
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
            setError({
                title: "Invalid input",
                message: "Enter valid name and age"
            })
            return;
        }
        if(+enteredAge<1){
            setError({
                title: 'Invalid age',
                message: 'Enter age>0'
            })
            return;
        }
        // console.log(enteredUserName,enteredAge);
        const newUser={
            name: enteredUserName,
            age:enteredAge,
            id:Math.random().toString()
        }
        props.addList(newUser);
        setUserName('');
        setAge('');
    }
    const errorHandler=()=>{
        setError(null);
        setUserName('');
        setAge('');
    }
return(
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={addUserNameHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={addAgeHandler} />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
)
}

export default AddUser;