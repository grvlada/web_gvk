import React, {createContext, FC, useState} from "react";
import {RouterProvider} from "react-router-dom";

export const AsteroidContext = createContext(null);

type AsteroidsContextProviderProps = {
    children ?: React.ReactNode;
}

export const AsteroidsContextProvider: FC<AsteroidsContextProviderProps> = ({children})=>{

    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [DistanceLuna, setLunaDist] = useState(false);

    const [destroyment, setDestoyment] = useState([]);



    const addAsteroid=(asteroid)=>{
        setDestoyment([...destroyment.filter(item=>item.id !== asteroid.id), asteroid])
    }

    const deleteAsteroid=(asteroid)=>{
        setDestoyment([...destroyment.filter(item=>item.id !== asteroid.id)])
    }

     return (
       <AsteroidContext.Provider
           value={{
               onlyDangerous,
               setOnlyDangerous,
               DistanceLuna,
               setLunaDist,
               addAsteroid,
               destroyment,
       }}
       >
         {children}
       </AsteroidContext.Provider>
     );
}