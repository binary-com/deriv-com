import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import eubanner from 'images/common/eu-uk-welcome-banner/eu_banner.png'
import eubannerMobile from 'images/common/eu-uk-welcome-banner/eu_mobile.png'
import closeBanner from 'images/svg/close.svg'

const BannerWrapper = styled.section<{ offset_height: number }>`
    background-color: #3c77ae;
    width: 90%;
    max-width: 1200px;
    min-height: 98px;
    height: fit-content;
    padding: 1.7rem;
    border-radius: 8px;
    position: fixed;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 24px;
    background-image: url(${eubanner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;
    bottom: ${(props) => props.offset_height}px;

    @media ${device.tablet} {
        background-image: url(${eubannerMobile});
        border-radius: 0;
        width: 100%;
        padding: 16px;
        height: fit-content;
        margin-bottom: 0;
        bottom: 86px;
    }

    @media (max-width: 540px) {
        bottom: 112px;
    }
`
const TextWrapper = styled.div`
    @media ${device.tabletL} {
        padding: 8px;
    }

    @media ${device.tablet} {
        max-width: 80%;
        padding: 0;
    }
`
const BannerClose = styled.div`
    background-image: url(${closeBanner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 25px;
    height: 25px;
    float: right;

    @media ${device.tablet} {
        margin-top: 20px;
    }
`
type baseProps = {
    offsetHeight: number
}
type currentProps = {
    base: baseProps
}
type CFDWarningRefProps = {
    current: currentProps
}
type WelcomeBannerProps = {
    cfd_warning_ref: CFDWarningRefProps
}

export const WelcomeBanner = ({ cfd_warning_ref }: WelcomeBannerProps) => {
    const [is_welcome_banner_dismissed, setWelcomeBannerDismissed] = useState(null)
    const [country, setCountry] = useState(null)
    const offset_height =
        cfd_warning_ref?.current && cfd_warning_ref?.current?.base
            ? cfd_warning_ref?.current?.base.offsetHeight
            : 74

    // using useEffect to set the values to help prevent vercel build error
    useEffect(() => {
        setWelcomeBannerDismissed(localStorage.getItem('is_welcome_banner_dismissed'))

        // commented this part to find a work around for QA to test using the test link
        // setCountry(window.location.hostname.split('.').slice(0, -2).join('.'))
        setCountry(localStorage.getItem('current_domain'))
    }, [])

    const handleBannerDismiss = () => {
        setWelcomeBannerDismissed('yes')
        localStorage.setItem('is_welcome_banner_dismissed', 'yes')
    }

    if (country === 'eu' && !is_welcome_banner_dismissed) {
        return (
            <BannerWrapper offset_height={offset_height}>
                <BannerClose onClick={handleBannerDismiss} />
                <TextWrapper>
                    <Header as="h3" type="subtitle-1" color="white">
                        <Localize
                            translate_text={`Welcome to the new Deriv ${country.toUpperCase()} website, designed with your
                        needs in mind.`}
                        />
                    </Header>
                    <Header as="h3" type="subtitle-2" color="white" weight="normal">
                        <Localize translate_text="Stay up to date with products and services tailored just for you." />
                    </Header>
                </TextWrapper>
            </BannerWrapper>
        )
    }
    return <></>
}
