import styles from "./Card.module.css";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import React, {useContext} from "react";
import {AsteroidCardContentContaier} from "./AsteroidCardContent/AsteroidCardContentContaier";

type AsteroidCardProps = {
  name: string;
  date: string;
  distance: {
    kilometers: number;
    lunar: number;
  };
  size: number;
  isDangerous: boolean;
};

export const AsteroidCard = (props: AsteroidCardProps) => {
  const { name, date, distance, size, isDangerous } = props;

  return (
    <div>
      <div className={isDangerous ? styles.cardRed : styles.regularCard}>
        <AsteroidCardImage />
        <AsteroidCardContentContaier
          name={name}
          date={date}
          distance={distance}
          size={size}
         />
        <AsteroidCardAction isDangerous={isDangerous} />
      </div>
    </div>
  );
};
