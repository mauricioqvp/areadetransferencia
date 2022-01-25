import CardText from 'assets/componets/CardText';
import axios from 'axios';
import './styles.css';
import { BASE_URL } from 'utils/requests.ts';

function PickPage() {

    const conteudo = {
        id: 1,
        frase: "*Mensagem Padrão:* Deixamos a critério do hóspede, decidir a data de depósito, conforme for melhor para ele. Mas, procuramos orientar que a reserva somente fica efetivada, mediante o envio do comprovante de depósito. Em períodos de muita procura isto pode causar a perda da vaga.",
        tipo: "Gentileza",
        qtdUsos: 2
    };

    // FORMA ERRADA
    axios.get(`${BASE_URL}/frases?size=12&page=0`)
        .then(response => {
            console.log(response.data);
        });

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text={conteudo.frase} />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <CardText text="mauricio" />
                </div>
            </div>
        </div>
    );
}

export default PickPage;