import React from 'react'
import styled from 'styled-components'
import { DesktopSitemap } from './_desktop-sitemap'
import { MobileSitemap } from './_mobile-sitemap'
import { deriv_app_url } from 'common/utility'
import { SEO } from 'components/containers'
import { Text } from 'components/elements'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'
import BackgroundPatternSitemap from 'images/common/bg_sitemap.png'
import device from 'themes/device'

const HeroWrapper = styled.div`
    height: 34.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px) {
        height: 262px;
    }
`

const BackgroundWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.background_pattern});
    background-size: cover;
    background-position: center center;
`

const HeroTitleWrapper = styled(Text)`
    position: absolute;
    color: var(--color-white);

    @media ${device.laptopM} {
        font-size: 40px;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const ButtonWrapper = styled(LinkButton)`
    text-align: center;
    margin-top: 53px;
    margin-bottom: 80px;
    padding: 11px 30px;
    font-size: 14px;

    @media ${device.laptop} {
        margin-top: 42px;
        margin-bottom: 40px;
    }
`

const Sitemap = () => {
    return (
        <Layout>
            <SEO
                title={localize('Sitemap | Navigation map to Deriv.com | Deriv')}
                description={localize(
                    'A map to help you find the information needed by navigating through our website',
                )}
            />
            <HeroWrapper>
                <BackgroundWrapper
                    background_pattern={BackgroundPatternSitemap}
                />
                <HeroTitleWrapper size="64px" weight="bold">
                    <Localize
                        translate_text="Sitemap"
                    />
                </HeroTitleWrapper>
            </HeroWrapper>
            <ContentWrapper>
                <DesktopSitemap />
                <MobileSitemap />
                <ButtonWrapper type="submit" secondary="true" to={deriv_app_url}>
                        {localize('Start trading now')}
                </ButtonWrapper>
            </ContentWrapper>
        </Layout>
    )
}

export default WithIntl()(Sitemap)