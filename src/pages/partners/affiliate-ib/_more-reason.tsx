import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { Localize } from 'components/localization'
import device from 'themes/device'
import GlobalAffiliate from 'images/svg/partners/global-affiliate-support.svg'
import Advertise from 'images/svg/partners/advertise.svg'
import HighValue from 'images/svg/partners/high-value-partnership.svg'

type StyledContainerProps = {
    mw: string
}
const StyledContainer = styled(Container)<StyledContainerProps>`
    align-items: flex-start;
    max-width: 1200px;

    @media ${device.laptopM} {
        width: 84%;
    }

    @media ${device.tabletL} {
        align-items: center;
    }
`
const ReasonHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 24px;
    }
`
const Reason = styled.div`
    margin-top: 4rem;
    width: 384px;

    &:nth-child(2) {
        @media ${device.mobileL} {
            margin-right: 0;
            margin-left: 0;
        }
    }
    h4 {
        margin-top: 1.6rem;
    }

    @media ${device.tabletS} {
        text-align: center;

        h4 {
            text-align: center;
            font-size: 18px;
        }
        p {
            text-align: center;
            font-size: 14px;
        }
    }
    @media ${device.laptopL} {
        width: auto;
    }
`
const StyledFlex = styled(Flex)`
    margin-top: -2rem;
    gap: 24px;

    @media ${device.tabletL} {
        display: block;
        justify-content: center;
        flex-wrap: wrap;
        width: auto;
    }
`
const StyledSection = styled(SectionContainer)`
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);

    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const MoreReason = () => {
    return (
        <StyledSection>
            <StyledContainer direction="column" mw="0">
                <ReasonHeader as="h3" size="3.2rem" align="center" mb="2rem">
                    <Localize translate_text="_t_More reasons to join_t_" />
                </ReasonHeader>
                <StyledFlex jc="center">
                    <Reason>
                        <img src={HighValue} alt="Partnership" />
                        <Header as="h4" type="sub-section-title" lh="1.5" mb="8px">
                            <Localize translate_text="_t_High-value partnership_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_Join a proven referral programme that’s designed to help you succeed in every way possible._t_" />
                        </Text>
                    </Reason>
                    <Reason>
                        <img src={Advertise} alt="Speaker" />
                        <Header as="h4" type="sub-section-title" lh="1.5" mb="8px">
                            <Localize translate_text="_t_Proven creative materials_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_Use a broad and tested selection of banners, emails, videos, and text ads to drive traffic to our site._t_" />
                        </Text>
                    </Reason>
                    <Reason>
                        <img src={GlobalAffiliate} alt="Support team" />
                        <Header as="h4" type="sub-section-title" lh="1.5" mb="8px">
                            <Localize translate_text="_t_Global affiliate support_t_" />
                        </Header>
                        <Text>
                            <Localize translate_text="_t_Got questions? Need help? Call or email a dedicated team of affiliate managers for all the answers._t_" />
                        </Text>
                    </Reason>
                </StyledFlex>
            </StyledContainer>
        </StyledSection>
    )
}

export default MoreReason
