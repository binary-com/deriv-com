import React from 'react'
import Layout from 'features/components/templates/layout'
import { nav_logo } from './signup-academy-complete.module.scss'
import PopUpMenu from './pop-up-menu'
import NavTemplate from 'features/components/templates/navigation/template'
import LogoImage from 'images/common/deriv_academy.svg'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'
import { BuildVariantType } from 'features/types'

const SignupCompleteAcademy = ({region}: BuildVariantType) => {
    return (
        <Layout region={region}>
            <NavTemplate
                has_centered_items
                has_centered_logo
                renderLogo={() => (
                    <Link url={{ type: 'internal', to: '/' }}>
                        <Image src={LogoImage} className={nav_logo} />
                    </Link>
                )}
            />
            <PopUpMenu />
        </Layout>
    )
}
export default SignupCompleteAcademy
