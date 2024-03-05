import React, { useState } from 'react';
import { Box, Checkbox, FormGroup, FormControlLabel } from "@mui/material";

function RiscoForm() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [groupVisibility, setGroupVisibility] = useState({});

    const toggleGroupVisibility = (groupName) => {
        setGroupVisibility({
            ...groupVisibility,
            [groupName]: !groupVisibility[groupName]
        });
    };

    const handleChange = (event) => {
        const { checked } = event.target;
        setIsChecked(checked);
        setIsChecked2(false);
        toggleGroupVisibility('Dor no peito'); 
    };

    const handleChange2 = (event) => {
        setIsChecked2(event.target.checked);
        toggleGroupVisibility('Dor do tipo que se espalha'); 

    };

    return (
        <div sx={{ top: 0, left: 0, width: '100%', backgroundColor: '#ffffff', zIndex: 999 }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ffffff',
                    width: '50vh',
                    overflow: 'auto',
                    margin: 'auto',
                    padding: '20px',
                    borderRadius: '10px',
                    marginTop: '40px',
                    marginBottom: '40px'
                }}
            >
                <div style={{ fontWeight: '800', fontSize: '23px', fontFamily: 'Arial, sans-serif' }}>
                    O QUE VOCÊ ESTÁ SENTINDO?
                </div>

                <FormGroup sx={{
                    marginTop: '20px',
                    borderRadius: 4,
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: '13px' }}>
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
                    </div>

                    {groupVisibility['Dor no peito'] && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked} defaultnotChecked />}
                                label="Nao sei identificar"
                                style={{ marginLeft: '10px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked} defaultnotChecked />}
                                label="Dor do tipo facada ou pontada"
                                style={{ marginLeft: '10px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked} defaultnotChecked />}
                                label="Dor do tipo queimação"
                                style={{ marginLeft: '10px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked} defaultnotChecked onChange={handleChange2} />}
                                label="Dor do tipo que se espalha (irradia)"
                                style={{ marginLeft: '10px' }}
                            />

                            
                        </div>
                    )}
                     {groupVisibility['Dor do tipo que se espalha'] && (
                        <div style={{ display: 'flex', flexDirection: 'column' }}>

                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                                label="Para os Braços"
                                style={{ marginLeft: '20px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                                label="Para o estomago"
                                style={{ marginLeft: '20px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                                label="Para o queixo"
                                style={{ marginLeft: '20px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox disabled={!isChecked2} defaultnotChecked />}
                                label="Para as costas"
                                style={{ marginLeft: '20px' }}
                            />

                            </div>
                            )}

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
        </div>
    );
}

export default RiscoForm;
