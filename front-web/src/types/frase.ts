export type Frase = {
    id: number;
    frases: string;
    qtdUsos: number;
    tipo: number;
}

export type FrasePage = {
    content: Frase[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}