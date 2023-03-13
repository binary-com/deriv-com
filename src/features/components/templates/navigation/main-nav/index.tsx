import React from 'react'
import NavTemplate from '../template'
import MainNavButtons from './main-nav-buttons'
import { mainItems } from './content'
import NavLogo from 'features/components/molecules/nav-logo'

const MainNav = () => {
    return (
        <NavTemplate
            renderLogo={() => <NavLogo />}
            renderButtons={(scrolled) => <MainNavButtons scrolled={scrolled} />}
            items={mainItems}
        />
    )
}

export default MainNav
