import { useState } from "react";
import { Container, Table, Button} from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const [questao, setQuestao] = useState("");

    function inserirDuvida(){
        props.candidatoSelecionado.questionamentos.push(questao);
    }

    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            <img src={props.candidatoSelecionado.avatar}/>
            <p>Eu sou: {props.candidatoSelecionado.nome}</p>
            <p>"email": {props.candidatoSelecionado.email}</p>
            <p>Essas são minhas propostas</p>
            <ul>{props.candidatoSelecionado.propostas.map((proposta)=>{
                return <li>{proposta}</li>
            })}</ul>
            <br />
            <h2>Dúvidas?</h2>
            <label> Insira sua dúvida aqui:</label>
            <input type="text" id="duvida" value={questao} onChange={()=>{
                setQuestao(evento.currentTarget.value);
            }}/>
            <Button onClick={()=>{
                inserirDuvida();
            }}>perguntar</Button>
            <Table striped bordered hover>
                <thread>
                    <tr>
                        <th>Dúvidas dos eleitores</th>
                    </tr>
                </thread>
                <tbody>
                    {props.candidatoSelecionado.questionamentos.map((questao)=>{
                        return <tr><td>{questao}</td></tr>
                    })}
                </tbody>
            </Table>

            <Button onClick={
                ()=>{
                    props.setDetalharCandidato(false);
                }
            }>Voltar</Button>
        </Container>
    );
}