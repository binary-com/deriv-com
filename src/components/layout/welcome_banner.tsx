import React, { useState } from 'react'
import styled from 'styled-components'
import { Text, Header } from 'components/elements'
import device from 'themes/device'
import ukbanner from 'images/common/eu-uk-welcome-banner/uk_banner.png'
import eubanner from 'images/common/eu-uk-welcome-banner/eu_banner.png'
import eubannerMobile from 'images/common/eu-uk-welcome-banner/eu_mobile.png'
import ukbannerMobile from 'images/common/eu-uk-welcome-banner/uk_mobile.png'
import closeBanner from 'images/common/eu-uk-welcome-banner/close_icon.png'

const countriesBanner = {
    uk: ukbanner,
    eu: eubanner,
    euMobile: eubannerMobile,
    ukMobile: ukbannerMobile,
}

const BannerWrapper = styled.section<{ country: string }>`
    background-color: #3c77ae;
    width: 83%;
    min-height: 9.4rem;
    height: fit-content;
    padding: 1.7rem;
    border-radius: 8px;
    position: fixed;
    z-index: 100;
    top: 81%;
    left: 12%;
    margin-top: -50px;
    margin-left: -50px;
    background-image: url(${(props) => countriesBanner[props.country]});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;

    @media (max-width: 826px) {
        padding: 0.8rem 0;
        height: 12.4rem;
    }
    @media (max-width: 710px) {
        height: 10.8rem;
    }

    @media ${device.tabletL} {
        background-image: url(${(props) => countriesBanner[`${props.country}Mobile`]});
        border-radius: 0;
        width: 100%;
        margin-top: 0;
        margin-left: 0;
        left: 0;
        padding: 1.7rem;
        top: 69%;
        height: fit-content;
    }
`
const StyledHeader = styled(Header)`
    font-size: 24px;
    line-height: 36px;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 18px;
        line-height: 26px;
    }
`

const TextWrapper = styled.div`
    @media ${device.tabletL} {
        max-width: 80%;
    }
`
const StyledText = styled(Text)`
    font-size: 20px;
    line-height: 30px;
    font-weight: normal;
    color: var(--color-white);
    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
    }
`
const BannerClose = styled.div`
    background-image: url(${closeBanner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    width: 18px;
    height: 18px;
    float: right;

    @media ${device.tabletL} {
        margin-top: 20px;
    }
`

export const WelcomeBanner = () => {
    const [is_welcome_banner_dismissed, setWelcomeBanner] = useState(
        localStorage.getItem('is_welcome_banner_dismissed'),
    )

    const handleBannerDismiss = () => {
        setWelcomeBanner('yes')
        localStorage.setItem('is_welcome_banner_dismissed', 'yes')
    }

    if (
        (window.location.hostname.includes('uk') || window.location.hostname.includes('eu')) &&
        !is_welcome_banner_dismissed
    ) {
        const country = window.location.hostname.split('.').slice(0, -2).join('.')

        return (
            <BannerWrapper country={country}>
                <BannerClose onClick={handleBannerDismiss} />
                <TextWrapper>
                    <StyledHeader as="h3" type="subtitle-2">
                        Welcome to the new Deriv {country.toUpperCase()} website, designed with your
                        needs in mind.
                    </StyledHeader>
                    <StyledText as="h3" type="subtitle-2">
                        Stay up to date with products and services tailored just for you.
                    </StyledText>
                </TextWrapper>
            </BannerWrapper>
        )
    }
    return <></>
}
