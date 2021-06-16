import React, {useState} from "react";
import { Line } from 'react-chartjs-2';



function SevenDays(props) {
    const [state, ] = useState(props.forecast.slice(0,8))
    const [clickedElement, setClickedElement] = useState('');
    const genData = () => ({
        labels: state.map(x => `${x.day} | ${x.date}`),
        datasets: [
          {
            label: 'Highest Tempature (°F)',
            data: state.map(x => parseInt(x.high)),
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
          {
            label: 'Lowest Tempature (°F)',
            data: state.map(x => parseInt(x.low)),
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
          },
        ],
      });

      const options = {
        scales: {
          yAxes: 
            {
              type: 'linear',
              display: true,
              position: 'left',
              id: 'y-axis-1',
            }
        },
      };

      const data = genData();

 
      const getElementAtEvent = element => {
        if (!element.length) return;
    
        const { n, index } = element[0];
        setClickedElement(
          state[index]
        );
      };
    
    return (
        <>  <div id='chart'>
                <Line 
                data={data} 
                options={options} 
                getElementAtEvent={getElementAtEvent}
                />
            </div>
            
                {clickedElement ? (
            <div className='text-center'>       
            <h3>{clickedElement.day} | {clickedElement.date}</h3>
            <h4>Low: {clickedElement.low}°F | High: {clickedElement.high}°F</h4>
            <h5>{clickedElement.text}</h5>
            </div>) : null}
            
        </>
    )
}


export default SevenDays