/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/dashboard.module.css';

type Props = {
     data: {
          title: string,
          amount: number,
          icon: string,
          isPrice: boolean,
          bgColor: string,
     }
}

function ViewCard({ data: { title, amount, icon, isPrice, bgColor } }: Props) {
     return (
          <article className={styles['view-card']} style={{ backgroundColor: bgColor }}>
               <div>
                    <img src={icon} alt={`${title}-icon`} />
               </div>

               <div>
                    <p>{title}</p>
                    <h2>{`${(isPrice ? '$' : "") + amount.toLocaleString('en-IN')}`}</h2>
               </div>
          </article>
     )
}

export default ViewCard