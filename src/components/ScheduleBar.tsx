import React from 'react';
import styles from '@/styles/ScheduleBar.module.css';

type Props = {
     data: {
          title: string,
          dateAndTime: string,
          location: string,
          stripeColor: string
     }
}

function ScheduleBar({ data: { title, dateAndTime, location, stripeColor } }: Props) {
     
     const cardStyle = {
          '--stripe-color': stripeColor
     } as React.CSSProperties;

     return (
          <article style={cardStyle} className={styles.event}>
               <h4>{title}</h4>
               <p>{dateAndTime}</p>
               <p>{location}</p>
          </article>
     )
}

export default ScheduleBar