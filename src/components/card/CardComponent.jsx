import React from 'react';
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';  /* For animation of numbers from 0 to specified values */
import styles from "./CardComponent.module.css"
const CardComponent = ({type,value,lastUpdate}) => {
    return (
        <Grid item component={Card} xs={12} md={3} className={`${styles.card} ${styles[type.toLowerCase()]}`} >
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{type}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of active cases of Covid-19</Typography>
            </CardContent>
        </Grid>
    );
};

export default CardComponent;