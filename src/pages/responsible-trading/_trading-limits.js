import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { TimelineTick } from 'components/elements/timeline'
import device from 'themes/device'

const ContentWrapper = styled(Flex)`
    justify-content: center;
    padding-left: 9rem;
    padding-right: 9rem;
    flex-direction: row;
    max-width: 155rem;
    margin: auto;

    @media ${device.mobileS} {
        flex-direction: column;
        padding: 0;
    }

    @media ${device.tablet} {
        flex-direction: column;
        padding-left: 8rem;
        padding-right: 8rem;
    }

    @media ${device.tabletS} {
        flex-direction: column;
        padding-left: 3rem;
        padding-right: 3rem;
    }
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 3.5rem;
    padding-right: 3.5rem;

    @media ${device.tabletL} {
        padding: 4rem;
    }

    @media ${device.mobileL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const TradingLimits = () => {
    return (
        <SectionContainer>
            <ContentWrapper>
                <StyledContainer direction="column">
                    <Header size="3.6rem" align="left" pb="1rem">
                        {localize('Trading limits and self-exclusion')}
                    </Header>
                    <Text>
                        {localize(
                            'Online trading is exciting, but it can be addictive. Deriv.com provides you with the opportunity to either self-exclude or set limits on your trading activities on this website.',
                        )}
                    </Text>
                    <Header size="2rem" pt="3rem" pb="1rem">
                        {localize('You can:')}
                    </Header>
                    <Text>
                        <TimelineTick color="var(--color-red)" pb="1rem">
                            <TimelineTick.Item>
                                {localize(
                                    'Limit the amount of money you may trade within a specified period.',
                                )}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize('Limit the amount of time you may trade in a session.')}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize(
                                    'Exclude yourself from trading on our website for a definite or indefinite period.',
                                )}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize(
                                    'Limit the amount of money you may trade within a specified period.',
                                )}
                            </TimelineTick.Item>
                        </TimelineTick>
                    </Text>
                </StyledContainer>
                <StyledContainer direction="column">
                    <Header size="3.6rem" align="left" pb="1rem">
                        {localize('How trading limits and self-exclusion work')}
                    </Header>
                    <Text>
                        <TimelineTick color="var(--color-red)" pb="1rem">
                            <TimelineTick.Item>
                                {localize(
                                    'Daily limits may be removed or increased after 24 hours of receiving the notice. Confirmation is required to amend the limits.',
                                )}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize(
                                    'There’s a minimum period of 6 months for self-exclusion. You have the option to extend it to a total of 5 years immediately without any cooling-off period.',
                                )}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize(
                                    'When you’ve set your self-exclusion period, we will refund your account balance to you.',
                                )}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize(
                                    'At the end of the self-exclusion period, the self-exclusion will remain in place until you take action.',
                                )}
                            </TimelineTick.Item>
                            <TimelineTick.Item>
                                {localize(
                                    'If you do not wish to renew the self-exclusion and you make a request to trade again, there will be a cooling-off period of 1 day before you are allowed access to our site. Please note that email is insufficient and your request must be made by phone.',
                                )}
                            </TimelineTick.Item>
                        </TimelineTick>
                    </Text>
                    <Text align="center" mt="2rem">
                        <Localize
                            translate_text="You may <0>contact us</0> to set or adjust your self-exclusion or trading limits."
                            components={[
                                <LocalizedLinkText key={0} to="/contact-us/" color="red" />,
                            ]}
                        />
                    </Text>
                </StyledContainer>
            </ContentWrapper>
        </SectionContainer>
    )
}
export default TradingLimits
