import React, { useState } from 'react';
import { Box, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

function RiscoForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    //const [showOtherCheckboxes, setShowOtherCheckboxes] = useState(false);

    

    const handleChange = (event) => {
        const { checked } = event.target;
        setIsChecked(checked);
        setIsChecked2(false); 

        
    };

    const handleChange2 = (event) => {
        setIsChecked2(event.target.checked);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0',
                width: '40%',
                height: '100%',
                overflowY: 'auto',
                margin: 'auto',
                padding: '20px',
                borderRadius:'10px',
                marginTop: '40px',
                marginBottom: '40px'
            }}
        >
            <h1>
                O que você está sentindo?
            </h1>
            <FormGroup sx={{ 
                borderRadius: 4, 
                display: 'flex', 
                flexDirection: 'column' 
                }}>
                <FormControlLabel
                    control={
                        <Checkbox
                            defaultChecked
                            checked={isChecked}
                            onChange={handleChange}
                        />
                    }
                    label="Dor no peito (Dor retroesternal ou precordial)"
                />
                
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked} defaultnotChecked />}
                    label="Nao sei identificar"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked} defaultnotChecked />}
                    label="Dor do tipo facada ou pontada"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked} defaultnotChecked />}
                    label="Dor do tipo queimação"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked} defaultnotChecked onChange={handleChange2}/>}
                label="Dor do tipo que se espalha (irradia)"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                    label="Para os Braços"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                    label="Para o estomago"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                    label="Para o queixo"
                />
                <FormControlLabel
                    control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                    label="Para as costas"
                />
                <FormControlLabel
                    control={<Checkbox defaultnotChecked />}
                    label="Sudorese (suor aumentado)"
                />
                <FormControlLabel
                    control={<Checkbox defaultnotChecked />}
                    label="Náusea"
                />
                <FormControlLabel
                    control={<Checkbox defaultnotChecked />}
                    label="Vômito"
                />
                <FormControlLabel
                    control={<Checkbox defaultnotChecked />}
                    label="Dificuldade para Respirar"
                />
                <FormControlLabel
                    control={<Checkbox defaultnotChecked />}
                    label="Tontura"
                />
            </FormGroup> 
        </Box>
    );
}

export default RiscoForm;
