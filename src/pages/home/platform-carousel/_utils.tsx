import React from 'react'
import type { CSSProperties } from 'react'
import styled from 'styled-components'
import {
    deriv_api_url,
    deriv_app_url,
    deriv_bot_app_url,
    deriv_mt5_app_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
    derivx_android_url,
    derivx_app_url,
    derivx_ios_url,
    dmt5_android_url,
    dmt5_linux_url,
    dmt5_macos_url,
    smarttrader_url,
} from 'common/constants'
import { Header, StyledLink } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
// SVG Icons
import DTraderIcon from 'images/svg/dtrader/dtrader-icon.svg'
import DMT5Icon from 'images/svg/dmt5/dmt5-icon.svg'
import DerivGOIcon from 'images/svg/deriv-go/deriv-go-logo.svg'
import DerivXIcon from 'images/svg/deriv-x/derivx-logo.svg'
import DBotIcon from 'images/svg/dbot/dbot-icon.svg'
import BinaryBotIcon from 'images/svg/binarybot-icon.svg'
import SmartTraderIcon from 'images/svg/custom/smarttrader.svg'
import APIIcon from 'images/svg/api-logo.svg'
import Browser from 'images/svg/app-download/web-browser.svg'
import AppStore from 'images/svg/app-download/app-store.svg'
import GooglePlay from 'images/svg/app-download/google-play.svg'
import Linux from 'images/svg/app-download/linux.svg'
import APK from 'images/svg/app-download/apk.svg'

export const getOSIcon = (type: string) => {
    if (type === 'browser') return Browser
    else if (type === 'app_store') return AppStore
    else if (type === 'google_play') return GooglePlay
    else if (type === 'linux') return Linux
    else if (type === 'apk') return APK
}

export type TPlatformDetails = {
    id?: number
    title: string
    icon: string
    image_key: string
    description: string
    learn_more_link: string
    download_links: Array<{ type: string; url: string }>
}

export const platform_details: TPlatformDetails[] = [
    {
        title: 'Deriv GO',
        icon: DerivGOIcon,
        image_key: 'platforms_deriv_go',
        description: localize('Our best trading experience on your mobile.'),
        learn_more_link: '/landing/deriv-go/',
        download_links: [
            { type: 'app_store', url: deriv_go_ios_url },
            { type: 'google_play', url: deriv_go_playstore_url },
        ],
    },
    {
        title: 'Deriv MT5',
        icon: DMT5Icon,
        image_key: 'platforms_mt5',
        description: localize('The all-in-one CFD trading platform.'),
        learn_more_link: '/dmt5/',
        download_links: [
            { type: 'browser', url: deriv_mt5_app_url },
            { type: 'app_store', url: dmt5_macos_url },
            { type: 'linux', url: dmt5_linux_url },
            { type: 'google_play', url: dmt5_android_url },
        ],
    },
    {
        title: 'DTrader',
        icon: DTraderIcon,
        image_key: 'platforms_dtrader',
        description: localize('Our flagship app for trading options and multipliers.'),
        learn_more_link: '/dtrader/',
        download_links: [{ type: 'browser', url: deriv_app_url }],
    },
    {
        title: 'Deriv X',
        icon: DerivXIcon,
        image_key: 'platforms_derivx',
        description: localize('The CFD trading platform to fit your style.'),
        learn_more_link: '/derivx/',
        download_links: [
            { type: 'browser', url: derivx_app_url },
            { type: 'app_store', url: derivx_ios_url },
            { type: 'google_play', url: derivx_android_url },
        ],
    },
    {
        title: 'DBot',
        icon: DBotIcon,
        image_key: 'platforms_dbot',
        description: localize('Automate your trading. No coding required.'),
        learn_more_link: '/dbot/',
        download_links: [{ type: 'browser', url: deriv_bot_app_url }],
    },
    {
        title: 'SmartTrader',
        icon: SmartTraderIcon,
        image_key: 'platforms_smarttrader',
        description: localize('Our legacy options trading platform.'),
        learn_more_link: smarttrader_url,
        download_links: [{ type: 'browser', url: smarttrader_url }],
    },
    {
        title: 'Binary Bot',
        icon: BinaryBotIcon,
        image_key: 'platforms_binary_bot',
        description: localize('Our classic bot builder and automated trading platform.'),
        learn_more_link: 'https://bot.deriv.com/',
        download_links: [{ type: 'browser', url: 'https://bot.deriv.com/' }],
    },
    {
        title: 'API',
        icon: APIIcon,
        image_key: 'platforms_api',
        description: localize('Build your own apps with our API.'),
        learn_more_link: deriv_api_url,
        download_links: [{ type: 'browser', url: deriv_api_url }],
    },
]

export const getPlatformDetails = (no_of_copies) => {
    const new_details = []
    let current_index = 0

    for (let index = 0; index < no_of_copies; index++) {
        platform_details.forEach((p) => {
            new_details.push({ ...p, id: current_index })
            current_index++
        })
    }

    return new_details
}

export const no_slide_sets = 11

export const getSlideStartingIndex = () => {
    return Math.round((no_slide_sets * 8) / 2 - 2)
}

export const ImageTag = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 16px;
`

const LearnMoreLink = styled(StyledLink)`
    span {
        font-size: 16px;
    }
`

export type PlatformDetailsProps = {
    title: string
    description: string
    learn_more_link: string
    icon?: string
    style?: CSSProperties
    is_from_slider?: boolean
}

export const PlatformContent = ({
    title,
    description,
    learn_more_link,
    is_from_slider = false,
}: PlatformDetailsProps) => {
    return (
        <>
            <Header type={is_from_slider ? 'subtitle-1' : 'subtitle-2'} tablet={{ mb: '8px' }}>
                {title}
            </Header>
            <Header
                as="p"
                type="paragraph-1"
                weight="normal"
                mb={is_from_slider ? 'unset' : '16px'}
                laptopL={{ max_width: is_from_slider ? '288px' : '' }}
            >
                {description}
            </Header>
            <Flex jc="flex-start" tabletL={{ jc: 'center' }}>
                <LearnMoreLink
                    to={learn_more_link}
                    is_external={learn_more_link.includes('https')}
                    mb="9px"
                >
                    <span>{`${localize('Learn more')} >`}</span>
                </LearnMoreLink>
            </Flex>
        </>
    )
}
