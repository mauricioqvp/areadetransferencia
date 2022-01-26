import { Frase } from 'types/frase';
import './styles.css';

type Props = {
    frase: Frase;
}

function CardText({ frase }: Props) {
    return (
        <div className="transferArea-form-container">
            <div className="transferArea-card-bottom-container">
                <form className="transferArea-form">
                    <div className="form-group transferArea-form-group">
                        <label htmlFor="email">Categoria: Gentileza</label>
                        <textarea 
                            name="message" 
                            className="texto" 
                            id="caixa-texto" 
                            value={`${frase.frases}`}
                            // ONCHANGE
                        >
                        </textarea>
                    </div>
                    <div className="transferArea-form-btn-container">
                        <button type="submit" className="btn btn-primary transferArea-btn">Copiar</button>
                        <button type="submit" className="btn btn-primary transferArea-btn">Atualizar</button>
                    </div>
                </form >
            </div >
        </div >
    );
}

export default CardText;