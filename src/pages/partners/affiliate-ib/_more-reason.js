import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize } from 'components/localization'
import device from 'themes/device'
import GlobalAffiliate from 'images/svg/global-affiliate-support.svg'
import ProvenReferral from 'images/svg/proven-referral-tools.svg'
import HighValue from 'images/svg/high-value-partnership.svg'

const Reason = styled.div`
    width: 38.4rem;
    margin-top: 4rem;

    &:nth-child(2) {
        margin-right: 2.4rem;
        margin-left: 2.4rem;

        @media ${device.mobileL} {
            margin-right: 0;
            margin-left: 0;
        }
    }
    h4 {
        margin-top: 1.6rem;
    }
`
const StyledFlex = styled(Flex)`
    margin-top: -2rem;

    @media ${device.tabletS} {
        justify-content: center;
    }
`
const StyledSection = styled(SectionContainer)`
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
`

const MoreReason = () => {
    return (
        <StyledSection>
            <Container direction="column">
                <Header as="h3" size="3.6rem" align="center" mb="2rem">
                    {localize('More reasons to join')}
                </Header>
                <StyledFlex wrap="wrap" jc="center">
                    <Reason>
                        <img src={HighValue} alt="high value partnership" />
                        <Header as="h4" lh="1.5">
                            {localize('High-value partnership')}
                        </Header>
                        <Text>
                            {localize(
                                'Join a proven referral programme that’s designed to help you succeed in every way possible.',
                            )}
                        </Text>
                    </Reason>
                    <Reason>
                        <img src={ProvenReferral} alt="proven referral tools" />
                        <Header as="h4" lh="1.5">
                            {localize('Proven creative materials')}
                        </Header>
                        <Text>
                            {localize(
                                'Use a broad and tested selection of banners, emails, videos, and text ads to drive traffic to our site.',
                            )}
                        </Text>
                    </Reason>
                    <Reason>
                        <img src={GlobalAffiliate} alt="global affiliate support" />
                        <Header as="h4" lh="1.5">
                            {localize('Global affiliate support')}
                        </Header>
                        <Text>
                            {localize(
                                'Got questions? Need help? Call or email a dedicated team of affiliate managers for all the answers.',
                            )}
                        </Text>
                    </Reason>
                </StyledFlex>
            </Container>
        </StyledSection>
    )
}

export default MoreReason
