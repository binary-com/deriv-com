import React from 'react'
import * as styles from './loading.module.scss'

const Loading = () => (
    <div className={styles.spinner}>
        <span className={styles.spinner_inner_1}></span>
        <span className={styles.spinner_inner_2}></span>
        <span className={styles.spinner_inner_3}></span>
    </div>
)

export default Loading
