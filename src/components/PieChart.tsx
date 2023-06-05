import React from 'react';
import styles from '@/styles/PieChart.module.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from "react-chartjs-2";
import { PieData } from '@/lib/PieChartData';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
     return (
          <section className={styles['pie-chart-section']}>
               <div>
                    <h3>Top products</h3>
                    <select className={styles['select-time']}>
                         <option value="">May - June 2021</option>
                         <option value="">April - May 2021</option>
                         <option value="">March - April 2021</option>
                         <option value="">Feb - March 2021</option>
                    </select>
               </div>

               <div className={styles['pie-chart']}>
                    <Pie data={PieData.data} options={PieData.Options} />
               </div>
          </section>
     )
}

export default PieChart