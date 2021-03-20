import React, { useEffect } from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Sidebar from './Component/Sidebar';
import Header from './Component/Header';
import Feed from './Component/Feed';
import {  useSelector,useDispatch } from 'react-redux';
import {selectUser} from './features/counter/userSlice';
import Login from './Component/Login';
import {logout,login} from './features/counter/userSlice';
import {auth} from './firebase';
import Widgets from './Component/Widgets';
function App() {

  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        }))
      }
      else{
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
     <Header></Header>
     {!user?(<Login/>):
      (<div className="app-body">
      
      <Sidebar/>
      <Feed/> 
      <Widgets/>
    </div>)
    }
   
      
    </div>
  );
}

export default App;
