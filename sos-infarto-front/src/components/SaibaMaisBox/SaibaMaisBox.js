import './SaibaMaisBox.css';
import logoHospital from '../../assets/medlogo.png'

const SaibaMais = (props) => {

    return(
        <div className='container-saiba-mais'>
            <div className='saiba-mais-titulo-img'>
                <h2>{props.title}</h2>
                <img  src={logoHospital} alt="cabeça gigante"/>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default SaibaMais