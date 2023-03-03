import React from 'react'
import * as styles from './nav-logo.module.scss'
import LogoOnly from 'images/svg/layout/logo-deriv-only.svg'
import GetTrading from 'images/svg/layout/get-trading.svg'

const NavLogo = () => {
    return (
        <div className={styles.nav_logo}>
            <img src={LogoOnly} alt="deriv logo" className={styles.nav_logo_main} />
            <div className={styles.nav_logo_description}>
                <span className={styles.nav_logo_description_line} />
                <img src={GetTrading} alt="get trading" />
            </div>
        </div>
    )
}

export default NavLogo
