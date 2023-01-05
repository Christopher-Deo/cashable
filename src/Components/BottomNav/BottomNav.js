// React imports
import React, { useState, useEffect } from 'react'

// Material UI imports
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
// local imports
import './BottomNav.css'


export default function BottomNav() {
    const [value, setValue] = useState(0);


    useEffect(() => {
        console.log(value);

    }, [value,]
    )

    return (
        <Box sx={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            position: 'fixed',
            zIndex: 100,
        }}>

            <BottomNavigation
                className='bottomNav'
                style={{
                    backgroundColor: '#161925',
                    height: '3rem',
                }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >

                <a href="https://github.com/Christopher-Deo" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        label="github"
                        icon={<GitHubIcon />} />
                </a>
                <a href="https://www.linkedin.com/in/christopherdeo/" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        // label="linkedIn"
                        icon={<LinkedInIcon />} />
                </a>
                <a href="https://twitter.com/webdevdeo" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{
                            color: 'whitesmoke'
                        }}
                        // label="twitter"
                        icon={<TwitterIcon />} />
                </a>


                <a href="https://christopherdeo.com/" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        // label="portfolio"
                        icon={<LanguageIcon />} />
                </a>
                <a href="mailto:chris@christopherdeo.com" target="_blank" rel="noreferrer">
                    <BottomNavigationAction
                        style={{ color: 'whitesmoke' }}
                        // label="contact"
                        icon={<EmailIcon />} />
                </a>
            </BottomNavigation >
        </Box>
    );
}

