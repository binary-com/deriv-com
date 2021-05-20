import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Show, Box } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { isUK } from 'common/country-base'
import { Localize, localize } from 'components/localization'
import { TimelineTick } from 'components/elements/timeline'
import device from 'themes/device'
import { useWebsiteStatus } from 'components/hooks/website-status-hooks'

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

    @media ${device.desktop} {
        max-width: ${(props) => props.max_width};
    }
`
const StyledHeader = styled(Header)`
    font-size: 3.6rem;
    padding-bottom: 4rem;

    @media ${device.tablet} {
        text-align: center;
        font-size: var(--text-size-m);
        padding-right: 2rem;
        padding-left: 2rem;
    }
`

const StyledHeaderTrading = styled(StyledHeader)`
    max-width: 44rem;
    padding-right: 7rem;
    padding-bottom: 0.8rem;

    @media ${device.tablet} {
        padding-right: 5rem;
        padding-left: 5rem;
    }
`
const StyledText = styled(Text)`
    max-width: 44rem;
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
    const [website_status] = useWebsiteStatus()
    const current_client_country = website_status?.clients_country || ''
    return (
        <Flex tablet_direction="column">
            <Flex height="auto">
                <ContentWrapper>
                    <StyledContainer direction="column" max_width="46.3rem">
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
                        <Box ml="0.8rem" max_width="44rem">
                            <TimelineTick color="var(--color-red)" pb="1rem">
                                <TimelineTick.Item>
                                    <Text>
                                        {localize(
                                            'Limit the amount of money you may trade within a specified period.',
                                        )}
                                    </Text>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Text>
                                        {localize(
                                            'Limit the losses you may incur within a specified period.',
                                        )}
                                    </Text>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Text>
                                        {localize(
                                            'Limit the amount of time you may trade in a session.',
                                        )}
                                    </Text>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Text>
                                        {localize(
                                            'Exclude yourself from trading on our website for a definite or indefinite period.',
                                        )}
                                    </Text>
                                </TimelineTick.Item>
                            </TimelineTick>
                        </Box>
                        <div>
                            <Text mt="1.4rem">
                                <Localize
                                    translate_text="If you wish to self-exclude or set limits on your trading activities, <0>go to account settings</0>."
                                    components={[
                                        <LocalizedLinkText
                                            to="/account/self-exclusion"
                                            type="deriv_app"
                                            external="true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            color="red"
                                            key={0}
                                        />,
                                    ]}
                                />
                            </Text>
                        </div>
                    </StyledContainer>
                </ContentWrapper>
            </Flex>
            <Flex bg="var(--color-grey-25)">
                <ContentWrapperRight>
                    <StyledContainer direction="column" max_width="47.9rem">
                        <StyledHeader max_width="38.4rem">
                            {localize('How trading limits and self-exclusion work')}
                        </StyledHeader>
                        <div>
                            {/* TODO: enable these self exclusion notes when new Backend API is ready */}
                            {/* <Show.NonEU>
                                <Text ml="0.8rem" max_width="44rem">
                                    <TimelineTick color="var(--color-red)" pb="1rem">
                                        <TimelineTick.Item>
                                            {localize(
                                                'You have full control over your trading limits. You can set, remove, increase, or decrease limits on your stake amount, losses incurred, and duration of trading sessions at any time.',
                                            )}
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            {localize(
                                                'If you wish to bar yourself from trading on our site, set self-exclusion limits. There’s a minimum period of 6 months for self-exclusion after which you may extend it to a total of 5 years or resume trading immediately after expiration.',
                                            )}
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            {localize(
                                                'When you’ve set your self-exclusion period, we will refund your account balance.',
                                            )}
                                        </TimelineTick.Item>
                                    </TimelineTick>
                                </Text>
                            </Show.NonEU> */}

                            {/* <Show.Eu> */}
                            <Box ml="0.8rem" max_width="44rem">
                                <TimelineTick color="var(--color-red)" pb="1rem">
                                    <TimelineTick.Item>
                                        <Text>
                                            {localize(
                                                'Daily limits may be removed or increased after 24 hours of receiving the notice. Confirmation is required to amend the limits.',
                                            )}
                                        </Text>
                                    </TimelineTick.Item>
                                    <TimelineTick.Item>
                                        <Text>
                                            {localize(
                                                'There’s a minimum period of 6 months for self-exclusion. You have the option to extend it to a total of 5 years immediately without any cooling-off period.',
                                            )}
                                        </Text>
                                    </TimelineTick.Item>
                                    <TimelineTick.Item>
                                        <Text>
                                            {localize(
                                                'When you’ve set your self-exclusion period, we will refund your account balance to you.',
                                            )}
                                        </Text>
                                    </TimelineTick.Item>
                                    <TimelineTick.Item>
                                        <Text>
                                            {localize(
                                                'At the end of the self-exclusion period, the self-exclusion will remain in place until you take action.',
                                            )}
                                        </Text>
                                    </TimelineTick.Item>
                                    <TimelineTick.Item>
                                        <Text>
                                            {isUK(current_client_country)
                                                ? localize(
                                                      'If you do not wish to renew the self-exclusion and you make a request to trade again, there will be a cooling-off period of 1 day before you are allowed access to our site. Please note that you must contact our Customer Support team by calling + 447723580049. It is not enough to send an email.',
                                                  )
                                                : localize(
                                                      'If you do not wish to renew the self-exclusion and you make a request to trade again, there will be a cooling-off period of 1 day before you are allowed access to our site.',
                                                  )}
                                        </Text>
                                    </TimelineTick.Item>
                                </TimelineTick>
                            </Box>
                            {/* </Show.Eu> */}
                        </div>
                        <div>
                            <Show.NonEU>
                                <Text mt="1.4rem">
                                    <Localize
                                        translate_text="If you wish to reduce or remove the self-exclusion period, contact <0>Customer Support</0>."
                                        components={[
                                            <LocalizedLinkText
                                                to="/contact_us/"
                                                color="red"
                                                key={0}
                                            />,
                                        ]}
                                    />
                                </Text>
                            </Show.NonEU>
                            <Show.Eu>
                                <Text mt="1.4rem">
                                    <Localize
                                        translate_text="You may <0>contact us</0> to set or adjust your self-exclusion or trading limits."
                                        components={[
                                            <LocalizedLinkText
                                                to="/contact_us/"
                                                color="red"
                                                key={0}
                                            />,
                                        ]}
                                    />
                                </Text>
                            </Show.Eu>
                        </div>
                    </StyledContainer>
                </ContentWrapperRight>
            </Flex>
        </Flex>
    )
}
export default TradingLimits
