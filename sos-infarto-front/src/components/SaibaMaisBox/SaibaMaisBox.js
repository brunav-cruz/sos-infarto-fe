import './SaibaMaisBox.css';

const SaibaMais = (props) => {

    return(
        <div className='container-saiba-mais'>
            <div className='saiba-mais-titulo-img'>
                <h2>{props.title}</h2>
                <img  src={props.image} alt="cabeça gigante"/>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default SaibaMais