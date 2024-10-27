import React from 'react'
import styles from "@/components/layout/AccounDetails/style.module.css"
import Login from './Login/index';
import Register from './Register/index';

const AccounDetails = () => {
  return (
    <div className={styles.container}>

        <Login/>
        <Register/>

    </div>
  )
}

export default AccounDetails;