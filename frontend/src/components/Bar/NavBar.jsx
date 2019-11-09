import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Appointment</Button>
                    <Button color="inherit">Health</Button>
                    <Button color="inherit">Chat</Button>
                    <Button color="outlined">Wallet</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;