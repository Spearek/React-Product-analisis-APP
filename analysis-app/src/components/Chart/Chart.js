import React from 'react';
import {Bar, Doughnut, Line, Pie} from 'react-chartjs-2';


const chart = (props) => {

    const chartData = {
        labels:['Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sep.','Oct.','Nov.','Dec.'],
        datasets:[{
            label:'Quantity',
            data:props.data,
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(200, 30, 44, 0.6)',
                'rgba(190, 77, 25, 0.6)',
                'rgba(213, 103, 103, 0.6)',
                'rgba(22, 192, 113, 0.6)',
                'rgba(180, 229, 21, 0.6)',
                'rgba(36, 27, 192, 0.6)',
                'rgba(244, 62, 129, 0.6)'],
                
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'

        }]
    }
    const chartOptions = {
        title: {
            display:true,
            text:props.chartTitle,
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
                bottom:50,
                top:0,

            }
        },
        tooltips:{
            enabled:true
        }
    }

    return (

    <Bar
        data={chartData}
        options={chartOptions}
    />  
    )
    
}


export default chart;