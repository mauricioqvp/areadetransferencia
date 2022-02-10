import './styles.css';
import { ReactComponent as UpdateIcon } from '../../img/duplic.svg';

type Props = {
    id: Number;
}

function UpdateBtn({ id }: Props) {
    return (
        <div className="row">
                <div className="btn btn-primary btn-icon">
                    <UpdateIcon />
                </div>
                <div className="btn btn-primary btn-icon-text">
                    Salvar{id}
                </div>
        </div>
    );
}

export default UpdateBtn;