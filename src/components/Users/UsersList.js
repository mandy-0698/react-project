import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UsersList=(props)=>{
   
    return(
        <Card className={classes.users}>
           <ul>
            {props.users.map((user)=>(
            <li key={user.id}>
           {user.id!=='1' && `${user.name} (${user.age} years old)` } 
            </li>
            ))}
           </ul>
        </Card>
    )
}

export default UsersList;