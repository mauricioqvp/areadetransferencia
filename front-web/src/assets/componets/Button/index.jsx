import { ReactComponent as DuplicateIcon } from '../../img/rotate.svg';
import './styles.css';

function Button() {
    return (
        <div className="btn-new-icon">
                <div className="left">
                    <DuplicateIcon />
                </div>
                <div className="right">
                    Copiar
                </div>

        </div>
    );
}

export default Button;