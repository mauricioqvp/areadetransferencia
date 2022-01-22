import CardText from 'assets/componets/CardText';
import './styles.css';

function PickPage() {

    const movie = {
        id: 1,
        frase: "*Mensagem Padrão:* Deixamos a critério do hóspede, decidir a data de depósito, conforme for melhor para ele. Mas, procuramos orientar que a reserva somente fica efetivada, mediante o envio do comprovante de depósito. Em períodos de muita procura isto pode causar a perda da vaga.",
        tipo: "Gentileza",
        qtdUsos: 2
    };

    return (
        <div className="container">
            <div className="row">
                    <CardText  text="mauricio" />
                    <CardText  text={ movie.frase} />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
                    <CardText  text="mauricio" />
            </div>
        </div>
    );
}

export default PickPage;