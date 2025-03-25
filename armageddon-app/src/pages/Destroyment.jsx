import {Header} from "../components/header/Header";
import {useContext} from "react";
import {AsteroidContext} from "../components/asteroids-context/AsteroidsContext";
import {AsteroidCard} from "../components/AsteroidCard/AsteroidCard";

export const Destroyment = () =>{

    const {destroyment} = useContext(AsteroidContext)
    return <div>
        <Header/>
        {destroyment.map(item=><AsteroidCard key={item.id} {...item}/>)}
    </div>
}