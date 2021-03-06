import CardText from 'assets/componets/CardText';
//import axios from 'axios';
import { fetchProducts } from '../../Ferramentas/api';
import './styles.css';
import { BASE_URL } from 'utils/requests';
import { useState, useEffect } from 'react';
import { FrasePage } from 'types/frase';
import Btn from '../../../assets/componets/Btn';
import Pagination from 'assets/componets/Pagination';
import Button from '../../componets/Button';

import InfosProvider from '../../../contexts/infos';

function PickPage() {

    const [page, setPage] = useState<FrasePage>({
        content: [{
            id: 1,
            frases: 'pousada',
            qtdUsos: 2,
            tipo: 0
        },
        {
            id: 2,
            frases: 'pagamento',
            qtdUsos: 3,
            tipo: 2
        }],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    const [pageNumber, setPageNumber] = useState(0);

/*      useEffect(() => {
            fetchProducts(pageNumber)
                .then(response => {
                    const data = response.data as FrasePage;
                    setPage(data);
                });
        }, [pageNumber]); */

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <InfosProvider>
            <Pagination page={page} onChange={handlePageChange} />
            <div className="container">


                <div className="row">
                    {page.content.map(item => (
                        <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <CardText frase={item} />
                        </div>
                    ))}
                </div>
            </div>
        </InfosProvider>
    );
}

export default PickPage;