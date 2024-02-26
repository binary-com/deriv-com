import React from 'react'
import { signup_wrapper, static_nav_logo } from '../signup-academy/signup.module.scss'
import Layout from 'features/components/templates/layout'
import PopUpMenu from './pop-up-menu'
import NavTemplate from 'features/components/templates/navigation/template'
import LogoImage from 'images/common/derivacademy.svg'
import Link from 'features/components/atoms/link'
import Image from 'features/components/atoms/image'

const SignupCompleteAcademy = () => {
    return (
        <Layout>
            <NavTemplate
                has_centered_items
                has_centered_logo
                renderLogo={() => (
                    <Link url={{ type: 'internal', to: '/' }}>
                        <Image src={LogoImage} className={static_nav_logo} />
                    </Link>
                )}
            />
            <PopUpMenu />
        </Layout>
    )
}
export default SignupCompleteAcademy
