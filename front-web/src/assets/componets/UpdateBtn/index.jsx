import './styles.css';
import { ReactComponent as UpdateIcon } from '../../img/rotate.svg';

function UpdateBtn() {
    return (
        <div className="row">
            <div className="btn btn-primary btn-icon">
                <UpdateIcon />
            </div>
            <div className="btn btn-primary btn-icon-text">
                Copiar
            </div>
        </div>
    );
}

export default UpdateBtn;