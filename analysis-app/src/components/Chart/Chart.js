import React from 'react';
import {Bar, Doughnut, Line, Pie, HorizontalBar} from 'react-chartjs-2';
import classes from './Chart.module.css'


const chart = (props) => {

    let chartHeight = 150;

    if (window.innerWidth <=600){
        chartHeight = 250;
    }


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
                left:0,
                right:0,
                bottom:50,
                top:0,

            }
        },
        tooltips:{
            enabled:true
        }
    }

    let chartType = null;

    switch (props.type) {
        case ('bar'):
            chartType = <div className={classes.chart}>
                           <Bar
                            data={chartData}
                            options={chartOptions}
                                                    /> 
                        </div>;
            break;
        case ('horizontal'):
                        chartType = <div className={classes.chart}>
                           <HorizontalBar
                            data={chartData}
                            options={chartOptions}
                            height={chartHeight}
                                                    /> 
                        </div>;
            break;
        case ('line'):
            console.log(chartData.datasets[0].backgroundColor);
            chartData.datasets[0].backgroundColor = 'transparent';
            chartData.datasets[0].borderColor = 'orange';
            chartData.datasets[0].borderWidth = 2;
            
            chartType = <div className={classes.chart}>
                           <Line
                            data={chartData}
                            options={chartOptions}
                            height={chartHeight}
                                                    /> 
                        </div>; 
            break;
        case ('pie'):
            chartType = <div className={classes.chart}>
                           <Pie
                            data={chartData}
                            options={chartOptions}
                                                    /> 
                        </div>; 
            break;           
        case ('doughnut'):
            chartType = <div className={classes.chart}>
                           <Doughnut
                            data={chartData}
                            options={chartOptions}
                                                    /> 
                        </div>; 
            break;  
        default:
            chartType = null;
    }

    
    return (
    chartType
    )
    
}


export default chart;