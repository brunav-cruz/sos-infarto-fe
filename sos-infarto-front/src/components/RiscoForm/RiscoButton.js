import React from 'react';
import { Button } from "@mui/material";

function RiscoButton(){
    return(
        <Button variant="contained" color="success"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 'auto',
                marginBottom: '40px',
                width: '40%',
                height: '100px',
                fontSize: '20px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
            }}
        >
            RESULTADO
        </Button>
    );
}

export default RiscoButton;