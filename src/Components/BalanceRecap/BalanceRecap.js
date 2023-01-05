import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const BalanceRecap = () => {
    const [balance, setBalance] = useState(0);

  

    const handleBalance = (e) => {
        setBalance(e.target.value);
    }

    return (
        <div>
            <Box sx={{
                width: '10rem',
                height: '150px',
                backgroundColor: '#e6e6e6',
                borderRadius: '.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '1rem',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                color: '#471e4b',
                border: '2px solid #6a2c70;'
            }}>
                <h3>Balance</h3>
                <AccountBalanceIcon
                    sx={{
                        fontSize: 40,
                        color: '#471e4b',
                    }} onChange={handleBalance} />
                <h2>$0.00</h2>
            </Box>
        </div>
    )
}

export default BalanceRecap