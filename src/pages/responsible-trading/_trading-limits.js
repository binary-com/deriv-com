import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import { TimelineTick } from 'components/elements/timeline'
import device from 'themes/device'

const ContentWrapper = styled(Flex)`
    justify-content: center;
    flex-direction: row;
    max-width: 80rem;
    width: 100%;
    margin-left: auto;
    margin-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 8rem;

    @media ${device.tablet} {
        flex-direction: column;
        padding-left: 8rem;
        padding-right: 8rem;
        margin: auto;
    }

    @media ${device.tabletS} {
        flex-direction: column;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`
const ContentWrapperRight = styled(ContentWrapper)`
    margin-left: 1rem;
    margin-right: auto;

    @media ${device.tablet} {
        margin: auto;
    }
`

const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    max-width: 52rem !important;

    ${Text} {
        max-width: 97%;
    }

    @media ${device.mobileL} {
        width: 84%;
        padding-left: 0;
        padding-right: 0;
    }
`
const ContactText = styled(Text)`
    @media ${device.tablet} {
        text-align: center;
    }
`
const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    padding-bottom: 1rem;

    @media ${device.tablet} {
        text-align: center;
        font-size: var(--text-size-m);
        padding-right: 2rem;
        padding-left: 2rem;
    }
`

const StyledHeaderTrading = styled(StyledHeader)`
    padding-right: 7rem;
    @media ${device.tablet} {
        padding-right: 5rem;
        padding-left: 5rem;
    }
`
const StyledText = styled(Text)`
    max-width: 97%;
    @media ${device.tablet} {
        text-align: center;
    }
`
const StyledSubHeader = styled(Header)`
    @media ${device.tablet} {
        margin-left: 1.5rem;
    }
`

const TradingLimits = () => {
    return (
        <Flex tablet_direction="column">
            <Flex height="auto">
                <ContentWrapper>
                    <StyledContainer direction="column">
                        <StyledHeaderTrading>
                            {localize('Trading limits and self-exclusion')}
                        </StyledHeaderTrading>
                        <StyledText>
                            {localize(
                                'Online trading is exciting, but it can be addictive. Deriv.com provides you with the opportunity to either self-exclude or set limits on your trading activities on this website.',
                            )}
                        </StyledText>
                        <StyledSubHeader size="2rem" pt="3rem" pb="1rem">
                            {localize('You can:')}
                        </StyledSubHeader>
                        <Text ml="0.8rem">
                            <TimelineTick color="var(--color-red)" pb="1rem">
                                <TimelineTick.Item>
                                    {localize(
                                        'Limit the amount of money you may trade within a specified period.',
                                    )}
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    {localize(
                                        'Limit the losses you may incur within a specified period.',
                                    )}
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    {localize(
                                        'Limit the amount of time you may trade in a session.',
                                    )}
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    {localize(
                                        'Exclude yourself from trading on our website for a definite or indefinite period.',
                                    )}
                                </TimelineTick.Item>
                            </TimelineTick>
                        </Text>
                    </StyledContainer>
                </ContentWrapper>
            </Flex>
            <Flex bg="var(--color-grey-25)">
                <ContentWrapperRight>
                    <StyledContainer direction="column">
                        <StyledHeader>
                            {localize('How trading limits and self-exclusion work')}
                        </StyledHeader>
                        <Text ml="0.8rem">
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
                        <div>
                            <ContactText mt="2rem">
                                <Localize
                                    translate_text="You may <0>contact us</0> to set or adjust your self-exclusion or trading limits."
                                    components={[
                                        <LocalizedLinkText key={0} to="/contact-us/" color="red" />,
                                    ]}
                                />
                            </ContactText>
                        </div>
                    </StyledContainer>
                </ContentWrapperRight>
            </Flex>
        </Flex>
    )
}
export default TradingLimits
