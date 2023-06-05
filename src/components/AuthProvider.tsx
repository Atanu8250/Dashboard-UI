/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '@/styles/page.module.css';

type Props = {
     logo: string,
     title: string
}

function AuthProvider({ logo, title }: Props) {
     return (
          <button className={styles['auth-provider']}>
               <bdi>
                    <img src={logo} alt={`${title}-icon`} width={14} height={14} />
               </bdi>
               <p>Sign in with {title}</p>
          </button>
     )
}

export default AuthProvider