import "./CampoTexto.css"

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
       let valor = console.log(evento.target.value);
        console.log(valor)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )

}

export default CampoTexto;