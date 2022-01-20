import { ReactComponent as TransferImg } from '../../img/transfer.svg';
import { ReactComponent as PencilImg } from '../../img/pencil.svg';
import { ReactComponent as GetOutImg } from '../../img/getout.svg';
import './styles.css';

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="transferArea-nav-content">
                    <h1><TransferImg /> Área de Transferência</h1>
                    <div className="transferArea-contact-container">
                        <a href="#Editar" target="_blank" rel="noreferrer">
                            <p className="transferArea-contact-link">
                                <div className="transferArea-icon">
                                    <PencilImg />
                                </div>
                                Editar frases
                            </p>
                        </a>
                        <a href="#Sair" target="_blank" rel="noreferrer">
                            <p className="transferArea-contact-link">
                            <div className="transferArea-icon">
                                <GetOutImg />
                            </div>
                                Sair
                            </p>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;