import React, { useEffect, useState } from "react";
import styles from "./CountryPicker.module.css";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../api";
const CountryPicker = ({handleCountryChange}) => {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        const getCountries = async ()=>{
            setCountries(await fetchCountries());
        }

        getCountries();
    },[])
	return !!countries.length ? (
        <FormControl className={styles.formControl}>
            <NativeSelect onChange={handleCountryChange}>
                <option value="">Global</option>
                {
                countries.map((country,ind)=>(
                    <option key={ind} value={country}>{country}</option>
                ))
            }
            </NativeSelect>
            
        </FormControl>
    ):null;
};

export default CountryPicker;
