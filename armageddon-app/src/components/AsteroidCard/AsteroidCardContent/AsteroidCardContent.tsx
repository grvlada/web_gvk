import styles from './AsteroidCardContent.module.css';
import {useContext} from "react";
import {AsteroidContext} from "../../asteroids-context/AsteroidsContext";

type AsteroidCardContentProps = {
    name: string;
    date: string;
    distance: {
        kilometers : number;
        lunar: number;
    },
    size: number;
    DistanceLuna: boolean;
}

export const AsteroidCardContent = (props: AsteroidCardContentProps) => {
    const {name, date, distance, size, DistanceLuna} = props;


    return (<div>
        <div className={styles.contentName}>{`${name}`}</div>
        <div className={styles.contentWrapper}>
            <div className={styles.detail}>{`Дата: ${date}`}</div>
            <div className={styles.detail}>{DistanceLuna ? `Расстояние: ${Math.round(distance.kilometers)} в км` : `Расстояние: ${distance.lunar} в дистанциях до луны`}</div>
            <div className={styles.detail}>{`Размер: ${size} м`}</div>
        </div>
    </div>)
}