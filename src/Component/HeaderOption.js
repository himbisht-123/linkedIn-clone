import React from 'react'
import '../Styling/HeaderOption.css';
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';
function HeaderOption({avatar,title,Icon,onClick}) {

  const user=useSelector(selectUser);
    return (
        <div onClick={onClick} className="headerOption">
          {Icon && <Icon className="headerOption-icon"/>}
          {avatar && (<Avatar className="headerOption-icon" src={user?.photoUrl}>{user?.email[0]}</Avatar>)}
          <h3 className="headerOption-title">{title}</h3>
            
        </div>
    )
}

export default HeaderOption
