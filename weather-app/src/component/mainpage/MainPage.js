import React, {useState} from "react";
var data = require('../../api/weather.json'); 

function MainPage() {
    const [state, ] = useState(data.query.results.channel)
    console.log(state)
    const forecast= state.item.forecast
    const todayForecast = forecast[0]
    console.log(forecast)
    return (
        <>
            <header style={{backgroundColor: '#020c36', color: 'white', padding: '15px'}}>
                <h1>{state.location.city}, {state.location.region}, {state.location.country}</h1>
            </header>
            <div className='current-weather'>
                <div className='pocket'>
                    {state.item.condition.text}
                    <h2>{todayForecast.high}</h2>
                    <h3>{todayForecast.low}</h3>
                </div>
            </div>
        </>
    )
}


export default MainPage