import React from 'react'
import { Menu, MenuItem, View, Divider } from '@aws-amplify/ui-react';


const MainMenu = () => {
  return (
          <Menu menuAlign="start" className="menu">
              <MenuItem onClick={() => alert('You Clicked Me!')}>
                  Instructions
              </MenuItem>
              <MenuItem onClick={() => alert('Go To Dashboard')}>
                  Dashboard
              </MenuItem>
              <MenuItem onClick={() => alert('Show Profile')}>
                  Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => alert("Your're Logged Out")}>
                  Log Out
              </MenuItem>
          </Menu>
  )
}

export default MainMenu
