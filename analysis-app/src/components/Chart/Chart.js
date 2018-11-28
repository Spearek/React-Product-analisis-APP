import React from 'react';
import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2';


const chart = () => {

    const chartData = {
        labels:['Warsaw','Łódź','Kraków','Wrocław','Poznań'],
        datasets:[{
            label:'Population',
            data:[
                1702139,
                768755,
                755050,
                634893,
                570352
            ],
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'

        }]
    }

    return (

    <Bar
        data={chartData}
        options={{
            title: {
                display:true,
                text:'Largest Cities in Poland',
                fontSize:25
            },
            legend:{
                display:false,
                position:'right',
                labels:{
                    fontColor:'black'
                }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0,

                }
            },
            tooltips:{
                enabled:true
            }
        }}
    />  
    )
    
}


export default chart;