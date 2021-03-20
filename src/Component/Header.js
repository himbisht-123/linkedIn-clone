import React from 'react'
import '../Styling/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import {logout} from '../features/counter/userSlice';
import {auth} from '../firebase';


function Header() {
  
  const dispatch=useDispatch();
   const logoutApp=()=>{
     dispatch(logout())
     auth.signOut();
   }
    return (
        <div className="header">
          
          <div className="header-left">
            <img src="https://image.flaticon.com/icons/png/128/174/174857.png" alt=""></img>
            <div className="header-search">
            <SearchIcon/>
                <input type="text" placeholder="Search"></input>
                
            </div>
          </div>
          <div className="header-right">
            <HeaderOption title="Home" Icon={HomeIcon}/>
            <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
            <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
            <HeaderOption title="Messaging" Icon={ChatIcon}/>
            <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
            <HeaderOption  avatar={true} title="me"
            onClick={logoutApp}
            />
          </div>  
        </div>
    )
}
 
export default Header
