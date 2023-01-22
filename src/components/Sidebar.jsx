import React from 'react'
import ChatIcons from './ChatIcons'
import Navbar from './Navbar'
import Search from './Search'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar />
        <Search />
        <ChatIcons />
    </div>
  )
}

export default Sidebar