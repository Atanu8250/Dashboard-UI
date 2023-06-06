import React from 'react';
import styles from '@/styles/Login.module.css';

type Props = {
     label: string,
     type: string,
     placeholder: string,
     defaultValue: string
}

function InputElem({ label, type, placeholder, defaultValue }: Props) {
     return (
          <div className={styles["input-grp"]}>
               <label htmlFor={type}>{label}</label>
               <input name={type} type={type} placeholder={placeholder} defaultValue={defaultValue} />
          </div>
     )
}

export default InputElem