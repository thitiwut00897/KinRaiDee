import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import { useHistory } from 'react-router';

const Appbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const handleRecommend = () => {
        history.push('/');
        setAnchorEl(null);
    }

    const handleUserManagement = () => {
        history.push('/user');
        setAnchorEl(null);
    }

    const handleVegetableManagement = () => {
        history.push('/vegetable');
        setAnchorEl(null);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <img src='earth.png' alt='logo' style={{ width: '44px', height: '44px', margin: '12px 12px 12px 0' }} />
                    <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                        Admin
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon
                            onClick={handleMenu}
                        />
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleRecommend}>Recommend Menu</MenuItem>
                            <MenuItem onClick={handleVegetableManagement}>Vegetable Management</MenuItem>
                            <MenuItem onClick={handleUserManagement}>User Management</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbar;