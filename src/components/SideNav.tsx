/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/dashboard.module.css';

type Props = {
     title: string,
     icon: string
}

function SideNav({ title, icon }: Props) {
     return (
          <button className={styles.nav}>
               <bdi>
                    <img src={icon} alt={`${title} icon`} />
               </bdi>
               <p>{title}</p>
          </button>
     )
}

export default SideNav