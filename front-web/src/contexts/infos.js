import { useState, createContext } from "react";

export const InfosContext = createContext({});

function InfosProvider({children}){

    return(
        <InfosContext.Provider>
            {children}
        </InfosContext.Provider>
    );
}

export default InfosProvider;