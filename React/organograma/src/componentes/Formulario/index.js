import "./Formulario.css"
import CampoTexto from '../CampoTexto';
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = () => {

    const times = [
        "Programação", "Front-end", "Data Science", "Devops","UX e Designe" , "Mobile", "inovação e gestão"
    ]

    const[nome, setNome] = useState('');
    const[cargo, setCargo] = useState('');
    const[imagem, setImagem] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Form submetido =>", nome, cargo, imagem);
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} label="nome"
                    placeholder="digite o seu nome">
                    valor={nome};
                    aoAlterado{valor => setNome(valor)}
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true} label="Cargo" 
                    placeholder="digite o seu cargo">
                    valor={cargo};
                    aoAlterado{valor => setCargo(valor)}
                </CampoTexto>
                <CampoTexto
                    label="imagem" 
                    placeholder="digite o endereço da sua imagem">
                    valor={imagem};
                    aoAlterado{valor => setImagem(valor)}
                 </CampoTexto>
                <ListaSuspensa obrigatorio={true} label="time" itens = {times}/>
                <Botao> Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario
