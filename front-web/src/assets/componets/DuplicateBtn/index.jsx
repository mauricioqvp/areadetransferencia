import './styles.css';
import { ReactComponent as DuplicateIcon } from '../../img/duplic.svg';

function DuplicateBtn() {
    return (
        <div className="row">
            <div className="btn btn-primary btn-icon">
                <DuplicateIcon />
            </div>
            <div className="btn btn-primary btn-icon-text">
                Copiar
            </div>
        </div>
    );
}

export default DuplicateBtn;