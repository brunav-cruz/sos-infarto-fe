import React from 'react';
import NavBar from '../NavBar/NavBar';
import SaibaMaisBox from '../../components/SaibaMaisBox/SaibaMaisBox'
import './SaibaMais.css'
import infartoImg from '../../assets/saibaMais1.png'
import presencaImg from '../../assets/saibaMais2.png'
import incomumImg from '../../assets/saibaMais3.png'
  
let infartoTexto = "Ocorre quando uma ou mais artérias que levam oxigênio ao coração (chamadas artérias coronárias) são obstruídas abruptamente por um coágulo de sangue formado em cima de uma placa de gordura (ateroma) existente na parede interna da artéria"
let presencaTexto = "De placas de gordura no sangue é chamada de aterosclerose (placa de colesterol). O paciente que possui placas de aterosclerose com algum grau de obstrução na luz de uma artéria tem a chamada DAC – doença arterial coronariana. Conforme a placa de gordura (ateroma) cresce, ela leva à obstrução cada vez maior da coronária e pode levar ao sintoma de dor no peito aos esforços (angina). Em geral, uma pessoa tem sintoma de dor no peito aos esforços quando a obstrução é maior que 70%."
let incomumTexto = "São espasmos de uma artéria coronária, que podem ser capazes de interromper o fluxo de sangue a uma parte do músculo cardíaco. Drogas, como a cocaína, podem causar tal espasmo. Um ataque cardíaco também pode ocorrer devido a uma ruptura na artéria do coração, ou coágulos que viajaram de outras partes do corpo pelo sangue. Infarto também pode ocorrer se o fluxo sanguíneo para o coração é severamente diminuído, em situações como a pressão arterial muito baixa (choque).n"

function SaibaMais() {

    return(
        <div>
            <NavBar/>
            <div className='saibaMais'>
                <SaibaMaisBox title = 'O infarto' text = {infartoTexto} image={infartoImg}/>
                <SaibaMaisBox title = "A presença" text = {presencaTexto} image={presencaImg}/>
                <SaibaMaisBox title = "Causa Incomum" text = {incomumTexto} image={incomumImg}/>
            </div>
        </div>

    );
}




export default SaibaMais;