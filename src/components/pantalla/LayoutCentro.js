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
        <Card sx={{margin: 5, }}>
            <CardHeader 
                title="Diagnostico de Equipo" 
                subheader="Por favor llenar el formulario"
                
                
            />
            
                
            
            <CardContent>
                
                <Typography variant="body2" color="text.secondary">
                    En este vista veremos las opciones de crear , ver los diagnosticos acerca de la informacion acerca sobre la identificacion del equipo, inspeccion visual, revision , pruebas tecnicas, accesorios y observaciones de los equipos.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            <Tooltip onClick={e => setOpen(true)} title="Agregar Diagnostico" sx={{position: "fixed", bottom: 20, left: {xs: "calc(50% - 25px)", md: 30}}}>
                <Fab color="primary" aria-label='add'>
                    <Add />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
               <Box  bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Stack spacing={2}>
                        
                        <Typography variant="h6" color="gray" textAlign="center">Formulario del Diagnostico del equipo : </Typography>
                        
                        
                            <Typography variant="body2">
                                1. Identificacion del equipo :
                            </Typography>
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

                        
                        
                            
                            
                            
                        
                    </Stack>
                
                <hr />
                
                
                    
                
                
                
                </Box> 
                    
            </StyledModal>  
                
               
                
                </CardActions>
        </Card>
    </Box>
  )
}

export default LayoutCentro