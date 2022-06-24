import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Home } from '@mui/icons-material'
import DesktopAccessDisabledIcon from '@mui/icons-material/DesktopAccessDisabled';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import StorageIcon from '@mui/icons-material/Storage';

const LayoutMenuLateral = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs: "none", sm: "block"}}}>
        <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Inicio" />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Equipos" />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <DesktopWindowsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Equipos Activados" />
                    </ListItemButton>
                    
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon>
                            <DesktopAccessDisabledIcon />
                        </ListItemIcon>
                        <ListItemText primary="Equipos Desactivados" />
                    </ListItemButton>
                    
                </ListItem>
            </List>
        </Box>

    </Box>
  )
}

export default LayoutMenuLateral