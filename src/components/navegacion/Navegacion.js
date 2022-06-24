import { AppBar, Box, styled, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import {AccountCircle, Menu as MenuIcon} from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

const Navegacion = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>Protype</Typography>
                <MenuIcon sx={{display:{xs:"block", sm:"none"}}} />
                <Icons>
                    <Avatar sx={{width: 30, height: 30}} onClick={e => setOpen(true)} src={<AccountCircle />} />
                </Icons>
                <UserBox>
                    <Avatar sx={{width: 30, height: 30}} onClick={e => setOpen(true)} src={<AccountCircle />} />
                    <Typography variant="span">Alex</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positined-menu"
                aria-labelledby='demo-positined-button'
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={e=> setOpen(false)}
            >
                <MenuItem>Perfil</MenuItem>
                <MenuItem>Mi Cuenta</MenuItem>
                <MenuItem>Salir</MenuItem>
            </Menu>
        </AppBar>

    )
}

export default Navegacion