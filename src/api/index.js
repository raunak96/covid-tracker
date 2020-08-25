import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData= async (country)=>{
    let actualUrl= url;
    if(country)
        actualUrl=`${url}/countries/${country}`;
    try {
        const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(actualUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error.response.data);
    }
}

export const fetchDailyData = async ()=>{
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map(dailydata=>({
            confirmed: dailydata.confirmed.total,
            deaths: dailydata.deaths.total,
            date: dailydata.reportDate
        }))
        return modifiedData;
    } catch (error) {
        console.log(error.response.data);
    }
}

export const fetchCountries = async () =>{
    try {
        const {data} = await axios.get(`${url}/countries`);
        return data.countries.map(({name})=>name);
    } catch (error) {
        console.log(error.response.data);
    }
}