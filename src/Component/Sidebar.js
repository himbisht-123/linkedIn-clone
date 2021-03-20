import React from 'react'
import '../Styling/Sidebar.css';
import {Avatar} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/counter/userSlice';

function Sidebar() {
  const user=useSelector(selectUser);
  const recentItem=(topic)=>(
    <div className="sidebar-recentItem">
     <span className="sidebar-hash">#</span>
     <p>{topic}</p>
    </div>
  )
    return (
        <div className="sidebar">
           <div className="sidebar-top">
             <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?islib=rb-1.2.1&ixid=MXwxMjA3fD88MHxleH8sb3JlLWZlZWR8MXx8fGVufD88fHw%3D&w=1000&q=80" alt=""></img>
              <Avatar src={user.photoUrl} className="sidebar-avatar">{user?.email[0]}</Avatar>
              <h2>{user.displayName}</h2>
              <h4>{user.email}</h4>
           </div>
           <div className="sidebar-stats">
              <div className="sidebar-stat">
              <p>Who viewed you</p>
              <p className="sidebar-statNumber">2,543</p>
              </div>
              <div className="sidebar-stat">
              <p>Views on post</p>
              <p className="sidebar-statNumber">2,442</p>
              </div>
              </div>

              <div className="sidebar-button">
               <p>Recent</p>
               {recentItem('reactjs')}
               {recentItem('reactjs')}
               {recentItem('reactjs')}
               {recentItem('reactjs')}
               {recentItem('reactjs')}

              </div>
            </div> 
        
    )
}

export default Sidebar
