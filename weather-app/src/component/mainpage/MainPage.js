import React, {useState} from "react";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import SevenDays from "../sevendays/SevenDays";
var data = require('../../api/weather.json'); 

function MainPage() {
    const [state, ] = useState({
        main: data.query.results.channel,
        forecast: data.query.results.channel.item.forecast,
        todayForecast: data.query.results.channel.item.forecast[0]
    })
    
    //<span>Wind Speed: {state.main.wind.speed} | Humidity: {state.main.atmosphere.humidity} | Pressure: {state.main.atmosphere.pressure} | Sunrise: {state.main.astronomy.sunrise} | Sunset: {state.main.astronomy.sunset}</span>

    console.log(state.main)
    console.log(state.forecast)

    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
    return (
        <>
            <header style={{backgroundColor: '#020c36', color: 'white', padding: '15px'}}>
                <h1>{state.main.location.city}, {state.main.location.region}, {state.main.location.country}</h1>
            </header>
            <div className='current-weather'>
                <div className='pocket'>
                    <h5>{state.main.item.condition.text}</h5>
                    <h2>{state.todayForecast.high}</h2>
                    <h3>{state.todayForecast.low}</h3>
                </div>
                <MDBBtn onClick={toggleShow}>More Info</MDBBtn>
                <MDBCollapse show={showShow}>
                    <span>Wind Speed: {state.main.wind.speed} | Humidity: {state.main.atmosphere.humidity} | Pressure: {state.main.atmosphere.pressure} | Sunrise: {state.main.astronomy.sunrise} | Sunset: {state.main.astronomy.sunset}</span>
               </MDBCollapse>
            </div>
            <SevenDays forecast={state.forecast} />
        </>
    )
}


export default MainPage