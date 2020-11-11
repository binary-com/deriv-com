import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { AboutUs, Trade, TradeTypes, Markets, Legal, Partner, Resources } from './_sitemap-content'
import { GridSubWrapper } from './_sitemap-styles'
import { deriv_app_url } from 'common/utility'
import { SEO, Flex, Show } from 'components/containers'
import { Text } from 'components/elements'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { localize, WithIntl, Localize } from 'components/localization'
import BackgroundPatternSitemap from 'images/common/bg_sitemap.png'
import SitemapTree from 'images/svg/sitemap/sitemap-tree.svg'
import SitemapVTree from 'images/svg/sitemap/sitemap-mobile-tree.svg'
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

export const ContentTitleWrapper = styled(Text)`
    color: var(--color-black-3);
    padding-top: 80px;
    padding-bottom: 24px;
    text-align: center;

    @media ${device.laptopM} {
        padding-top: 40px;
        padding-bottom: 32px;
        font-size: 24px;
        text-align: left;
    }
`

const StyledTree = styled.img`
    margin-right: 40px;
`

const GridWrapper = styled.div`
    display:  grid;
    grid-template-columns: 157px 80px 89px 108px 196px 108px 115px;
    grid-gap: 40px;
    justify-content: center;
`

const LinksCol = styled(Flex)`
    flex-direction: column;
    width: 100%;
    min-width: 100px;
    margin-right: 20px;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }
`

const StyledVTree = styled.img`
    margin-top: 60px;
`

const ContentVWrapper = styled.div`
    display: grid;
    grid-template-rows: 210px 200px 125px 180px 215px 220px 145px;
`

const LinksRow = styled(Flex)`
    flex-direction: column;
    margin-bottom: ${props => props.last_child === "true" ? 'unset' : "32px"};

    div {
        margin-top: 8px;

        :first-child {
            margin-top: 0;
        }
    }
`

const SitemapContent = ({ children }) => {
    return (
        <>
        <Show.Desktop max_width={"laptopM"}>
            <Flex direction="column" ai="center">
            <ContentTitleWrapper size="32px" weight="bold">
                <Localize
                    translate_text="Homepage"
                />
            </ContentTitleWrapper>
            <StyledTree src={SitemapTree} alt="sitemap tree" />
            </Flex>
            <GridWrapper>
                {children.map((child, idx) => (
                    <LinksCol key={idx}>
                        {child}
                    </LinksCol>
                ))}
            </GridWrapper>
        </Show.Desktop>
        <Show.Mobile min_width={"laptopM"}>
            <GridSubWrapper size="74px 200px" style={{justifyContent: 'center'}}>
                <StyledVTree src={SitemapVTree} alt="sitemap vertical tree" />
                <Flex direction="column">
                    <ContentTitleWrapper size="32px" weight="bold">
                        <Localize
                            translate_text="Homepage"
                        />
                    </ContentTitleWrapper>
                    <ContentVWrapper>
                        {children.map((child, idx) => (
                            <LinksRow key={idx}>
                                {child}
                            </LinksRow>
                        ))}
                    </ContentVWrapper>
                </Flex>
            </GridSubWrapper>
        </Show.Mobile>
        </>
    )
}

SitemapContent.propTypes = {
    children: PropTypes.object
}

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
            <SitemapContent>
                <AboutUs />
                <Trade />
                <TradeTypes />
                <Markets />
                <Legal />
                <Partner />
                <Resources />
            </SitemapContent>
            <ContentWrapper>
                <ButtonWrapper type="submit" secondary="true" to={deriv_app_url}>
                        {localize('Start trading now')}
                </ButtonWrapper>
            </ContentWrapper>
        </Layout>
    )
}

export default WithIntl()(Sitemap)