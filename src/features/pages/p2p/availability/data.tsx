import React from 'react'
import { SmartPlatform } from './types'
import Link from 'features/components/atoms/link'
import DesktopImage from 'images/svg/p2p/p2p-desktop.svg'
import MobileImage from 'images/svg/p2p/p2p-mobile.svg'
import DesktopImageForMobile from 'images/svg/p2p/p2p-desktop-for-mobile.svg'
import MobileImageForMobile from 'images/svg/p2p/p2p-mobile-for-mobile.svg'
import Login from 'common/login'

const handleLogin = () => {
    Login.redirectToLogin()
}

export const platforms: SmartPlatform[] = [
    {
        id: 0,
        data: {
            header: '_t_On your computer_t_',
            icon_src: DesktopImage,
            mobile_icon_src: DesktopImageForMobile,
            list: [
                {
                    text: '_t_<0>Log in</0> to your Deriv account. Don’t have one? <1>Sign up</1> for free._t_',
                    components: [
                        <Link
                            textcolor="brand"
                            key={0}
                            onClick={handleLogin}
                            url={{
                                type: 'internal',
                                to: '/',
                            }}
                        />,
                        <Link
                            textcolor="brand"
                            key={1}
                            url={{
                                type: 'internal',
                                to: '/signup/',
                            }}
                        />,
                    ],
                },
                {
                    text: '_t_Go to <0>Cashier</0> > Deriv P2P and register._t_',
                    components: [
                        <Link
                            textcolor="brand"
                            key={1}
                            url={{
                                type: 'internal',
                                to: '/',
                            }}
                        />,
                    ],
                },
                {
                    text: '_t_Start connecting with fellow traders to make deposits and withdrawals._t_',
                },
            ],
            button: {
                text: '_t_Try Deriv P2P now<_t_',
                url: { type: 'internal', to: '/our-principles/' },
            },
        },
    },
    {
        id: 1,
        data: {
            header: '_t_On your mobile_t_',
            icon_src: MobileImage,
            mobile_icon_src: MobileImageForMobile,
            list: [
                {
                    text: '_t_Download Deriv P2P._t_',
                },
                {
                    text: '_t_Register for Deriv P2P by logging into your Deriv account in the app._t_',
                },
                {
                    text: '_t_Start connecting with fellow traders to make deposits and withdrawals._t_',
                },
            ],
        },
    },
]
