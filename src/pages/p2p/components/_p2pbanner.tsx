import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Container, Desktop, Mobile } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { LinkButton, Button } from 'components/form'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
import { Background } from 'components/elements/background-image'
import { mobileOSDetect } from 'common/os-detect'
import { p2p_playstore_url, p2p_applestore_url } from 'common/constants'

type P2PBannerProps = {
    title: string
}

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
    width: min-content;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 2.4rem;
    border: unset;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 42px;
    }
    @media (max-width: 460px) {
        margin-bottom: 2rem;
    }
`
const ButtonDerivP2P = styled(Button)`
    padding: 1.5rem 1.6rem;
    height: 40px;
    margin: 15px auto;
    width: 100%;
    white-space: nowrap;

    @media ${device.tabletL} {
        padding: 0 16px;
        margin: 26px auto;
        font-size: 14px;
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
        font-size: 24px;
        margin-top: 40px;
    }
    @media ${device.mobileL} {
        margin-top: 60px;
    }
`

const StyledText = styled(Text)`
    margin-bottom: 60px;
    font-size: 2.4rem;
    text-align: center;
    line-height: 36px;

    @media ${device.tabletL} {
        font-size: 18px;
        margin-bottom: 30px;
        padding: 16px;
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

const P2PBanner = ({ title }: P2PBannerProps) => {
    const data = useStaticQuery(query)
    const handleExternalLink = () => {
        let link = ''
        if (mobileOSDetect() === 'Android') {
            link = p2p_playstore_url
        }
        if (mobileOSDetect() === 'iOS') {
            link = p2p_applestore_url
        }

        window.open(link, '_blank')
    }
    return (
        <div>
            <StyledText>
                <Localize
                    translate_text="Want to learn more about Deriv P2P? Head to our <0>Help Centre</0>"
                    components={[
                        <LocalizedLinkText
                            to={'/help-centre/deriv-p2p/#what-is-deriv-p2p'}
                            size={24}
                            target="_blank"
                            color="blue"
                            key={0}
                        />,
                    ]}
                />
            </StyledText>
            <Desktop>
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
                                secondary
                                external
                                to="/cashier/p2p"
                                type="deriv_app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {localize('Try Deriv P2P now')}
                            </TryButton>
                        </InformationWrapper>
                    </Wrapper>
                </Background>
            </Desktop>
            <Mobile>
                <Background
                    style={{ height: '402px', backgroundPosition: '40% 50%' }}
                    data={data['p2p_banner_mobile']}
                >
                    <Wrapper>
                        <InformationWrapper height="unset" direction="column">
                            <StyledHeader as="h3" weight={500}>
                                {title}
                            </StyledHeader>
                            <Mobile>
                                <ButtonDerivP2P secondary onClick={handleExternalLink}>
                                    {localize('Try Deriv P2P now')}
                                </ButtonDerivP2P>
                            </Mobile>
                        </InformationWrapper>
                    </Wrapper>
                </Background>
            </Mobile>
        </div>
    )
}

export default P2PBanner
