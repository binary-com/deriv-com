import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Show } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'
import { Background } from 'components/elements/background-image'

const Wrapper = styled(Container)`
    padding-left: 8rem;
    height: 34rem;
    justify-content: flex-start;
    background-color: transparent;

    @media ${device.tabletL} {
        justify-content: center;
        align-items: flex-start;
        height: 402px;
        padding-left: 0;
        padding-right: 0;
    }
    @media ${device.laptopM} {
        padding-left: 80px;
    }
    @media ${device.tabletL} {
        height: unset;
        padding: 0 16px 40px 16px;
    }
    @media ${device.mobileL} {
        padding: 0 0 40px 0;
    }
`
const TryButton = styled(LinkButton)`
    padding: 14px 16px;
    width: 125px;
    font-size: 14px;
    margin-top: 2.4rem;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
        white-space: nowrap;
    }
    @media (max-width: 460px) {
        margin-bottom: 2rem;
    }
`
const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 48.6rem;
    z-index: 1;

    @media (max-width: 1376px) {
        max-width: 44rem;
    }
    @media ${device.tabletL} {
        max-width: 576px;
        margin-top: 2.5rem;
        align-items: center;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 576px;
        padding: 0 0;
    }
`
const StyledHeader = styled(Header)`
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 1.25;
    color: var(--color-white);

    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
    @media ${device.tabletL} {
        font-size: 40px;
        text-align: center;
        margin-top: 40px;
    }
    @media ${device.tabletS} {
        font-size: 32px;
        margin-top: 20px;
    }
    @media ${device.mobileL} {
        margin-top: 0;
    }
`

const query = graphql`
    query {
        p2p_banner: file(relativePath: { eq: "p2p/p2p_banner.png" }) {
            ...fadeIn
        }
        p2p_banner_mobile: file(relativePath: { eq: "p2p/p2p_banner_mobile.png" }) {
            ...fadeIn
        }
    }
`

const P2PBanner = ({ title }) => {
    const data = useStaticQuery(query)

    return (
        <div>
            <Show.Desktop min_width="992">
                <Background
                    style={{ height: '340px', backgroundPosition: '20% 20%' }}
                    data={data['p2p_banner']}
                >
                    <Wrapper>
                        <InformationWrapper height="unset" direction="column">
                            <StyledHeader as="h3" weight={500}>
                                {title}
                            </StyledHeader>
                            <TryButton
                                secondary="true"
                                to="/cashier/P2P"
                                external="true"
                                is_deriv_app_link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Try DP2P now')}
                            </TryButton>
                        </InformationWrapper>
                    </Wrapper>
                </Background>
            </Show.Desktop>
            <Show.Mobile>
                <Background
                    style={{ height: '402px', backgroundPosition: '40% 50%' }}
                    data={data['p2p_banner_mobile']}
                >
                    <Wrapper>
                        <InformationWrapper height="unset" direction="column">
                            <StyledHeader as="h3" weight={500}>
                                {title}
                            </StyledHeader>
                            <TryButton
                                secondary="true"
                                to="/cashier/P2P"
                                external="true"
                                is_deriv_app_link
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Try DP2P now')}
                            </TryButton>
                        </InformationWrapper>
                    </Wrapper>
                </Background>
            </Show.Mobile>
        </div>
    )
}

P2PBanner.propTypes = {
    image_name: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default P2PBanner
