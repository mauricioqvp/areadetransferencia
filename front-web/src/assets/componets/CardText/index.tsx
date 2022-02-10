import { useState } from 'react';
import { Frase, FrasePage } from 'types/frase';
import DuplicateBtn from '../DuplicateBtn';
import UpdateBtn from '../UpdateBtn';
import { makerequest } from '../../../utils/request';
import './styles.css';

type Props = {
    frase: Frase;
}

function CardText({ frase }: Props) {

    const [formData, setFormData] = useState<Frase>({
        id : -1,
        frases : 'mauricio',
        qtdUsos : 0,
        tipo : 0
    });


    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const nome = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data, [nome]: value , id : frase.id}));
        //setFormData(value);
        console.log(formData);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        makerequest({ url: `/frases/${frase.id}`,  method : 'PUT' , data: formData});
    }

    return (
        <div className="transferArea-form-container">
            <div className="transferArea-card-bottom-container">
                <form className="transferArea-form" onSubmit={handleSubmit}>
                    <div className="form-group transferArea-form-group">
                        <label htmlFor="email">Categoria: {`${frase.tipo}`}</label>
                        <input type="text" 
                            name="frases" 
                            className="texto" 
                            id="caixa-texto" 
                            placeholder={frase.frases}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn btn-primary my-3">
                        Submeter
                    </button>
                    <div className="transferArea-form-btn-container">
                        <DuplicateBtn id={frase.id} />
                        <UpdateBtn  id={frase.id} />
                    </div>
                </form >
            </div >
        </div >
    );
}

export default CardText;