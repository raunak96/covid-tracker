import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import logo from "./assets/covid.png";
import loader from "./assets/loader.gif";

const App = () => {
	const [data,setData] = useState({});
	const [country, setCountry] = useState('');
	useEffect(()=>{
		const getData = async ()=>{
			setData(await fetchData(country));
		}
		getData();
	},[country]);

	const handleCountryChange = async (e)=>{
		setCountry(e.target.value);
	}
	return (
		<div className={styles.container}>
			<img src={logo} alt="covid-19" className={styles.image} />
			{!!Object.keys(data).length ? (<Cards data={data} />):(<img src={loader} alt="loading"/>)}
			<CountryPicker handleCountryChange={handleCountryChange} />
			<Chart data={data} country={country} />
		</div>
	);
};

export default App;
