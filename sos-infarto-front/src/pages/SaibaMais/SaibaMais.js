import React from 'react';
import NavBar from '../NavBar/NavBar';
import SaibaMaisBox from '../../components/SaibaMaisBox/SaibaMaisBox'
import './SaibaMais.css'
  
let saibaMaisText = [
    "Dor no peito que se irradia pela mandíbula e/ou pelos ombros ou braços (mais frequentemente do lado esquerdo do corpo); Ocorrência de suor, falta de ar, náuseas, vômito, tontura e desfalecimento; Ansiedade, agitação e sensação de morte iminente.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor massa, laoreet in metus id, porta gravida lectus. Aliquam risus arcu, ultrices non ipsum sed, varius commodo libero. Praesent ac vestibulum magna, ultricies tincidunt elit. Cras vulputate justo ut interdum eleifend. Fusce semper risus eu erat tincidunt, eu feugiat nunc ornare. Integer aliquam nibh eu dictum laoreet.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tortor massa, laoreet in metus id, porta gravida lectus. Aliquam risus arcu, ultrices non ipsum sed, varius commodo libero. Praesent ac vestibulum magna, ultricies tincidunt elit. Cras vulputate justo ut interdum eleifend. Fusce semper risus eu erat tincidunt, eu feugiat nunc ornare. Integer aliquam nibh eu dictum laoreet."
  ]

function SaibaMais() {

    return (
        <div>
            <NavBar/>
            <div className='saibaMais'>
                <SaibaMaisBox title = 'O infarto' text = {saibaMaisText[1]}/>
                <SaibaMaisBox title = "A presença" text = {saibaMaisText[1]}/>
                <SaibaMaisBox title = "Causa Incomum" text = {saibaMaisText[1]}/>
            </div>
        </div>

    );
}




export default SaibaMais;