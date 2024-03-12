import NavBar from '../../pages/NavBar/NavBar';
import './PrimeirosSocorros.css';
import massagemCardiaca from '../../assets/massagem-cardiaca.webp'

const PrimeirosSocorros = (props) => {

    return(
        <div>
            <NavBar/>
            <div className='instrucoes'>
                <div className='container-instrucoes'>
                    <h1>Primeiros Socorros</h1>
                    <div className='container-texto'>
                        <img src={massagemCardiaca}  alt="Imagem massagem Cardiaca"/>
                        <ol>
                            <li><b>Chame o Samu pelo 192. </b>É mais seguro que tentar levar a vítima diretamente ao hospital, a menos que o atendente oriente que você mesmo leve o paciente</li>
                            <li>Verifique os sinais de respiração por meio de sons ou movimentos do tórax. Se a pessoa não respira ou sofre para respirar, deite-a de barriga para cima em uma superfície rígida</li>
                            <li>Ajoelhe-se ao lado da vítima, na altura dos ombros dela, e localize o centro do tórax, entre os mamilos</li> 
                            <li>Posicione os braços estendidos com os dedos entrelaçados, colocando uma mão sobre a outra, apoiando-se no centro do peito</li> 
                            <li>Mantenha os braços esticados e use o peso do corpo para fazer compressões rápidas e fortes;</li> 
                            <li>Inicie compressões com a frequência de 100 por minuto (ou seja, 5 compressões a cada 3 segundos), comprimindo o tórax na profundidade de, no mínimo, 5 cm para adultos e crianças e 4 cm para bebês.</li> 
                        </ol>
                        <iframe className='youtube-video' src="https://www.youtube-nocookie.com/embed/VhvGTP_BzPU?start=20&rel=0&iv_load_policy=3" width="450" height="350" title="A YouTube video" frameborder="0" allowfullscreen></iframe>                    </div>                   
                </div>
            </div> 
        </div>

    )
}

export default PrimeirosSocorros