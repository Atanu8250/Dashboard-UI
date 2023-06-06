/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react';
import styles from '@/styles/Login.module.css';
import { signIn } from 'next-auth/react';

type Props = {
     logo: string,
     title: string,
}

function AuthProvider({ logo, title }: Props) {

     return (
          <button className={styles['auth-provider']} onClick={() => signIn()}>
               <bdi>
                    <img src={logo} alt={`${title}-icon`} width={14} height={14} />
               </bdi>
               <p>Sign in with {title}</p>
          </button>
     )
}

export default AuthProvider