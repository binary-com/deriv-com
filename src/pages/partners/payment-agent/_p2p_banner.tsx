import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize, Localize } from 'components/localization'
import banner from 'images/common/p2p/banner.png'
import bannerBG from 'images/common/p2p/gradient_bg.png'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 1200px;
    padding: 0 0 80px 0;

    @media ${device.tabletL} {
        width: 90%;
        padding-bottom: 0;
    }
`
const MainWrapper = styled(Flex)`
    border-radius: 10px;
    height: 350px;
    background-image: url(${banner}), url(${bannerBG});
    background-repeat: no-repeat, no-repeat;
    background-size: 486px 280px, cover;
    background-position: bottom right;
    @media ${device.laptopM} {
        height: 360px;
    }
    @media (max-width: 1100px) {
        height: 330px;
    }
    @media ${device.laptopM} {
        background-size: 433px 305px, cover;
    }
    @media ${device.tabletL} {
        height: 536px;
        width: 100%;
        background-size: 296px 180px, cover;
        background-position: bottom center;
    }
    @media (max-width: 355px) {
        height: 580px;
    }
`
const LeftWrapper = styled(Flex)`
    padding: 56px 0 56px 102px;
    justify-content: flex-start;
    @media ${device.laptopM} {
        padding: 55px 0 55px 60px;
    }
    @media (max-width: 1100px) {
        padding: 55px 0 55px 32px;
    }
    @media ${device.tabletL} {
        padding: 40px 32px 0;
        justify-content: center;
        align-items: flex-start;
    }
`
const LeftChild = styled(Flex)`
    flex-direction: column;
    max-width: 490px;

    @media ${device.laptopM} {
        max-width: 514px;
    }
    @media (max-width: 1100px) {
        max-width: 480px;
    }
    @media ${device.tabletL} {
        height: unset;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 32px;
        line-height: 40px;
    }
`

const Subtitle = styled(Header)`
    min-width: 588px;

    @media (max-width: 1100px) {
        min-width: 264px;
        margin-bottom: 24px;
    }
    @media (max-width: 355px) {
        min-width: calc(100% - 16px);
    }
`

const StyledLinkButton = styled(LinkButton)`
    width: fit-content;
`

const P2PBanner = () => {
    return (
        <StyledSection>
            <MainWrapper>
                <LeftWrapper>
                    <LeftChild>
                        <StyledHeader
                            as="h3"
                            type="heading-3"
                            color="white"
                            mb="16px"
                            tabletL={{
                                max_width: '378px',
                            }}
                        >
                            {localize('Looking for Deriv P2P instead?')}
                        </StyledHeader>
                        <Subtitle as="h4" type="subtitle-1" weight="none" color="white" mb="24px">
                            <Localize
                                translate_text="We offer a <0>peer-to-peer payment service</0> where you can make deposits and withdrawals in minutes via exchanges with fellow traders."
                                components={[
                                    <Header key={0} as="span" type="subtitle-1" color="red" />,
                                ]}
                            />
                        </Subtitle>
                        <StyledLinkButton
                            secondary="true"
                            to="/p2p/"
                            external="true"
                            target="_blank"
                            rel="noopener noreferrer"
                            tabletL={{
                                pb: '30px',
                            }}
                        >
                            Learn more
                        </StyledLinkButton>
                    </LeftChild>
                </LeftWrapper>
            </MainWrapper>
        </StyledSection>
    )
}
export default P2PBanner
