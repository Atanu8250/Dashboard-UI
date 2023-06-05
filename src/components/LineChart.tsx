import React from 'react';
import styles from '@/styles/LineChart.module.css';
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement } from "chart.js";
import { Line } from 'react-chartjs-2';
import { LineData } from '@/lib/LineChartData';

ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
     ArcElement
);


function LineChart() {
     return (
          <section className={styles.container}>
               <h3>Activities</h3>
               <div>
                    <select className={styles['select-time']}>
                         <option value="">May - June 2021</option>
                         <option value="">April - May 2021</option>
                         <option value="">March - April 2021</option>
                         <option value="">Feb - March 2021</option>
                    </select>

                    <div className={styles['line-chart']}>
                         <Line data={LineData.data} options={LineData.options} />
                    </div>
               </div>
          </section>
     )
}

export default (LineChart);