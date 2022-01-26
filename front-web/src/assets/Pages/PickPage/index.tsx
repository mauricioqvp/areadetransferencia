import CardText from 'assets/componets/CardText';
import axios from 'axios';
import './styles.css';
import { BASE_URL } from 'utils/requests';
import { useState, useEffect } from 'react';
import { FrasePage } from 'types/frase';

function PickPage() {

    const [page, setPage] = useState<FrasePage>({
        content: [],
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

    useEffect(() => {
        axios.get(`${BASE_URL}/frases?size=12&page=${pageNumber}&sort=qtdUsos,desc`)
            .then(response => {
                const data = response.data as FrasePage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <div className="container">
            <div className="row">
                {page.content.map(item => (
                    <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <CardText frase={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PickPage;