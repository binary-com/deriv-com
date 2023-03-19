import React from 'react'
import NavTemplate from '../template'
import MainNavButtons from './main-nav-buttons'
import { mainItems } from './content'
import Image from 'features/components/atoms/image'
import LogoImage from 'images/common/logo.png'

const MainNav = () => {
    return (
        <NavTemplate
            renderLogo={() => <Image src={LogoImage} width={100} height={32} />}
            items={mainItems}
        >
            <MainNavButtons />
        </NavTemplate>
    )
}

export default MainNav
