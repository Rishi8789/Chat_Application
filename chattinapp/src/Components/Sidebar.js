import React, { useState } from 'react'
import "./myStyles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';

const Sidebar = () => {

  const[conversation,setConversation]= useState([
    {
      name:"Task1",
      lastMessage:"Last Message #1",
      timeStamp:"today"
    }
    ,
    {
      name:"Task2",
      lastMessage:"Last Message #2",
      timeStamp:"today"
    }
    ,
    {
      name:"Task3",
      lastMessage:"Last Message #3",
      timeStamp:"today"
    }
  ])

  return (
    <div className='sidebar-container'>

     <div className='sb-header'>
    <div>
    <IconButton>          
     <AccountCircleIcon/>
     </IconButton>
    </div>

    <div>
     <IconButton>
      <PersonAddAlt1Icon/>
     </IconButton>
     <IconButton>
      <GroupAddIcon/>
     </IconButton>
     <IconButton>
      <AddCircleIcon/>
     </IconButton>
     <IconButton>
      <NightlightIcon/>
     </IconButton>
     </div>

     </div>
     <div className='sb-search'>

      <IconButton>
        <SearchIcon/>
      </IconButton>

      <input className='search-box' placeholder='Search'/>

     </div>
     <div className='sb-conversation'>
     {
      conversation.map((conversation)=>{
        return   <ConversationItem props={conversation} key={conversation.name}/>
      })
     }
    
     </div>

    </div>
  )
}

export default Sidebar;