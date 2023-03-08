import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { Localize } from 'components/localization'
import { TimelineTick } from 'components/elements/timeline'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'

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
    const { is_non_eu, is_eu } = useRegion()
    return (
        <Flex tablet_direction="column">
            <Flex height="auto">
                <ContentWrapper>
                    <StyledContainer direction="column" max_width="46.3rem">
                        <StyledHeaderTrading>
                            <Localize translate_text="_t_Trading limits and self-exclusion_t_" />
                        </StyledHeaderTrading>
                        <StyledText>
                            <Localize translate_text="_t_Online trading is exciting, but it can be addictive. Deriv.com provides you with the opportunity to either self-exclude or set limits on your trading activities on this website._t_" />
                        </StyledText>
                        <StyledSubHeader size="2rem" pt="3rem" pb="1rem">
                            <Localize translate_text="_t_You can:_t_" />
                        </StyledSubHeader>
                        <Box ml="0.8rem" max_width="44rem">
                            <TimelineTick color="var(--color-red)" pb="1rem">
                                <TimelineTick.Item>
                                    <Text>
                                        <Localize translate_text="_t_Limit the amount of money you may trade within a specified period._t_" />
                                    </Text>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Text>
                                        <Localize translate_text="_t_Limit the losses you may incur within a specified period._t_" />
                                    </Text>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Text>
                                        <Localize translate_text="_t_Limit the amount of time you may trade in a session._t_" />
                                    </Text>
                                </TimelineTick.Item>
                                <TimelineTick.Item>
                                    <Text>
                                        <Localize translate_text="_t_Exclude yourself from trading on our website for a definite or indefinite period._t_" />
                                    </Text>
                                </TimelineTick.Item>
                            </TimelineTick>
                        </Box>
                        <div>
                            <Text mt="1.4rem">
                                <Localize
                                    translate_text="_t_If you wish to self-exclude or set limits on your trading activities, <0>go to account settings</0>._t_"
                                    components={[
                                        <LocalizedLinkText
                                            to="/account/self-exclusion"
                                            type="deriv_app"
                                            external
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
                            <Localize translate_text="_t_How trading limits and self-exclusion work_t_" />
                        </StyledHeader>
                        <div>
                            {is_non_eu && (
                                <Text ml="0.8rem" max_width="44rem">
                                    <TimelineTick color="var(--color-red)" pb="1rem">
                                        <TimelineTick.Item>
                                            <Localize translate_text="_t_You have full control over your trading limits. You can set, remove, increase, or decrease limits on your stake amount, losses incurred, and duration of trading sessions at any time._t_" />
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Localize translate_text="_t_If you wish to bar yourself from trading on our site, set self-exclusion limits. There’s a minimum period of 6 months for self-exclusion after which you may extend it to a total of 5 years or resume trading immediately after expiration._t_" />
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Localize translate_text="_t_When you’ve set your self-exclusion period, we will refund your account balance._t_" />
                                        </TimelineTick.Item>
                                    </TimelineTick>
                                </Text>
                            )}
                            {is_eu && (
                                <Box ml="0.8rem" max_width="44rem">
                                    <TimelineTick color="var(--color-red)" pb="1rem">
                                        <TimelineTick.Item>
                                            <Text>
                                                <Localize translate_text="_t_You can set limits to your trading in your account settings. Limits may be strengthened at any time._t_" />
                                            </Text>
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Text>
                                                <Localize translate_text="_t_Customer Support can only remove or weaken your trading limits after 24 hours of receiving the request._t_" />
                                            </Text>
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Text>
                                                <Localize translate_text="_t_You can also completely exclude yourself from trading for a specified period in your account settings. The minimum period of self-exclusion is 6 months. You have the option to extend it to a total of 5 years immediately without any cooling-off period._t_" />
                                            </Text>
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Text>
                                                <Localize translate_text="_t_When you’ve set your self-exclusion period, we will refund your account balance to you._t_" />
                                            </Text>
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Text>
                                                <Localize translate_text="_t_If you don’t ask for a removal of self-exclusion after the expiry, it is not removed automatically._t_" />
                                            </Text>
                                        </TimelineTick.Item>
                                        <TimelineTick.Item>
                                            <Text>
                                                <Localize translate_text="_t_If you wish to resume trading when your self-exclusion expires and once you have made a request to remove self-exclusion, there will be a cooling-off period of 24 hours before you are allowed access to our site._t_" />
                                            </Text>
                                        </TimelineTick.Item>
                                    </TimelineTick>
                                </Box>
                            )}
                        </div>
                        <div>
                            {is_non_eu && (
                                <Text mt="1.4rem">
                                    <Localize
                                        translate_text="_t_If you wish to reduce or remove the self-exclusion period, contact <0>Customer Support</0>._t_"
                                        components={[
                                            <LocalizedLinkText
                                                to="/contact_us/"
                                                color="red"
                                                key={0}
                                            />,
                                        ]}
                                    />
                                </Text>
                            )}
                        </div>
                    </StyledContainer>
                </ContentWrapperRight>
            </Flex>
        </Flex>
    )
}
export default TradingLimits
