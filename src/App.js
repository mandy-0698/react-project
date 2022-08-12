import React,{useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';
function App() {
 const [userList,setUserList]=useState([{
  name:'',
  age:'',
  id:'1'
 }])
 
 const gatherList=(newUser)=>{
  console.log(newUser);
  //  userList.push(newUser);
  //  setUserList(userList);
  setUserList((prevUsersList)=>{
    return [...prevUsersList,newUser]
  })
  console.log(userList);
 }
  return (
    <div>
     <AddUser addList={gatherList}/>
     <UsersList users={userList}/>
    </div>
  );
}

export default App;
