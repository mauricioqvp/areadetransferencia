import './styles.css';
import { ReactComponent as DuplicateIcon } from '../../img/rotate.svg';

type Props = {
    id : number;
}

function DuplicateBtn({ id } : Props) {
    return (
        <div className="row">
            <div className="btn btn-primary btn-icon">
                <DuplicateIcon />
                </div>
            <div className="btn btn-primary btn-icon-text">
                Copiar {id}
            </div>
        </div>
    );
}

export default DuplicateBtn;