import React, {createContext, FC, useState} from "react";
import {RouterProvider} from "react-router-dom";

export const AsteroidContext = createContext(null);

type AsteroidsContextProviderProps = {
    children ?: React.ReactNode;
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [DistanceLuna, setLunaDist] = useState(false);
    
     return (
       <AsteroidContext.Provider
           value={{
               onlyDangerous,
               setOnlyDangerous,
               DistanceLuna,
               setLunaDist
       }}
       >
         {children}
       </AsteroidContext.Provider>
     );
}