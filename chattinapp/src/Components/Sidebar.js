import React from 'react'
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
      <ConversationItem/>
     </div>

    </div>
  )
}

export default Sidebar;