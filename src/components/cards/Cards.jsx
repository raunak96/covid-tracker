import React from 'react';
import {Grid} from '@material-ui/core';
import styles from "./Cards.module.css";
import CardComponent from '../card/CardComponent';

const Cards = ({data:{confirmed,deaths,recovered,lastUpdate}}) => {
    const arr = [
		{ type: "Infected", value: confirmed.value },
		{ type: "Recovered", value: recovered.value },
		{ type: "Deaths", value: deaths.value },
	];
    return (
       <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            {
                arr.map((item,ind)=>(<CardComponent key={ind} {...item} lastUpdate={lastUpdate} />))
            }
            </Grid>
       </div>
    );
};

export default Cards;