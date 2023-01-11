import React from 'react'
import { Menu, MenuItem, View, Divider } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

const MainMenu = () => {

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <Menu menuAlign="start" className="menu">
            <MenuItem>
                Instructions
            </MenuItem>
            <MenuItem>
                Dashboard
            </MenuItem>
            <MenuItem
            >
                Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={signOut}>
                Log Out
            </MenuItem>
        </Menu>
    )
}

export default MainMenu
