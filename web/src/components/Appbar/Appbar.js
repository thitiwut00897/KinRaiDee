import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Appbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();
    const { user, logout } = useAuth();

    const handleRecommend = () => {
        history.push('/');
        setAnchorEl(null);
    }

    const handleUserManagement = () => {
        history.push('/users');
        setAnchorEl(null);
    }

    const handleVegetableManagement = () => {
        history.push('/vegetable');
        setAnchorEl(null);
    }

    const handleLogout = () => {
        logout();
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
                    <img src='earth.png' alt='logo' style={{ width: '44px', height: '44px', margin: '12px 12px 12px 0', cursor: 'pointer' }} onClick={() => history.push('/')} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'white', fontSize: "30px", cursor: 'default' }}>
                        Admin
                    </Typography>
                    {user && <IconButton edge="start" color="white" aria-label="menu" size="medium">
                        <MenuIcon
                            onClick={handleMenu}
                        />
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleRecommend}>Recommend Menu</MenuItem>
                            <MenuItem onClick={handleVegetableManagement}>Vegetable Management</MenuItem>
                            <MenuItem onClick={handleUserManagement}>User Management</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </IconButton>}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Appbar;