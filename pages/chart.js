import React from 'react'
import Head from 'next/head'
import styles from '../styles/chart.module.css'
import {Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend} from 'chart.js';
import {PolarArea} from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'Eating',
    'Drinking',
    'Sleeping',
    'Designing',
    'Coding',
    'Cycling',
    'Running'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 90, 81, 56, 55, 40],
    fill: true,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(255, 99, 132)'
  }, {
    label: 'My Second Dataset',
    data: [28, 48, 40, 19, 96, 27, 100],
    fill: true,
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgb(54, 162, 235)',
    pointBackgroundColor: 'rgb(54, 162, 235)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgb(54, 162, 235)'
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100
      }
    }
  }
};

export default function chart() {
    return (
        <div>
            <Head>
                <title>Chart</title>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
            </Head>
            <div className={styles.chart}>
              <h1 className={styles.heading}>Radar Chart</h1>
                <PolarArea data={data}/>
            </div>
        </div>
    )
}