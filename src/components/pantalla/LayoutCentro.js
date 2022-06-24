import { Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Fab, IconButton, Modal, Paper, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Add, AddCircleOutline, MenuBookOutlined } from '@mui/icons-material';
import DatePicker from "@mui/lab/DatePicker";

const LayoutCentro = () => {
    const [open, setOpen] = useState(false);
    const StyledModal = styled(Modal)({
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    });

    const UserBox = styled(Box)({
      display: "flex",
      alignItems: "center",
      gap: "10px",
      marginBottom: "20px"
      
    })
  return (
    <Box flex={4} p={2}>     
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                <Button onClick={e => setOpen(true)} color="success" startIcon={<AddCircleIcon />}>
                    <Typography variant='button'>IDENTIFICACION DE EQUIPO</Typography>
                </Button>
                <Button color="secondary" startIcon={<AddCircleIcon />}>
                    <Typography variant="button">INSPECCION VISUAL</Typography>
                </Button>
            </Stack>
        </Stack>
        <StyledModal
            open={open}
            onClose={e => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box  bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                <Stack spacing={2}>
                        
                    <Typography variant="h6" color="gray" textAlign="center">Formulario de Identificacion del equipo : </Typography>
                        
                            <Stack direction="row" spacing={2}>
                                <TextField 
                                    id="outlined-required"
                                    label="Tipo de equipo"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Marca"
                                />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    id="outlined-required"
                                    label="Modelo"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Potencia"
                                />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    id="outlined-required"
                                    label="N° de serie"
                                />
                                <TextField 
                                    id="outlined-required"
                                    label="Fecha de revision"    
                                />
                            </Stack>
                            <Stack direction="row" spacing={2} >
                                <TextField
                                    id="outlined-required"
                                    label="Configuracion 1/1 -3/1 - 3/3"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Modelo de baterias"
                                />
                            </Stack>
                            <Stack direction="row" spacing={2}>
                                <TextField
                                    id="outlined-required"
                                    label="N° de baterias"
                                />
                                <TextField
                                    id="outlined-required"
                                    label="Capacidad del equipo"
                                />
                            </Stack>
                            <Stack alignContent="center" spacing={2}>
                                <Button size='median' variant='contained' 
                                    sx={{backgroundColor: "green", borderColor: "green", color:"white", ":hover": {backgroundColor: "green", borderColor: "green", color:"white"}}} >
                                    Guardar Cambios
                                </Button>
                            </Stack>
                    </Stack>
                </Box> 
                    
        </StyledModal>  
    </Box>
  )
}

export default LayoutCentro