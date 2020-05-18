import React from 'react'
import styled from 'styled-components'
import { SecureGrid, ResponsibleGrid } from './_icon-grid'
import device from 'themes/device'
import { SEO, SectionContainer, Flex, Container } from 'components/containers'
import Layout from 'components/layout/layout'
import { LinkButton } from 'components/form'
import { Divider, Header, Text, Card, StyledLink } from 'components/elements'
import { Localize, localize, WithIntl } from 'components/localization'
import DemoIcon from 'images/svg/demo-account.svg'

const Section = styled(SectionContainer)`
    background-color: ${(props) => props.bgcolor || 'transparent'};
    padding: ${(props) => props.padding || 'transparent'};
`

const StyledCard = styled(Card)`
    height: auto;
`
const StyledHeader = styled(Header)`
    @media ${device.laptop} {
        max-width: 100%;
    }
`

const ListWrapper = styled.div`
    width: 50%;
    max-width: 48.7rem;
    padding-left: ${(props) => props.pl || ''};

    @media ${device.laptop} {
        margin-bottom: ${(props) => props.laptop_mb || ''};
        width: 100%;
    }
`

const StyledFlex = styled(Flex)`
    @media (max-width: 1300px) {
        justify-content: center;
    }
`

const CustomListWrapper = styled(ListWrapper)`
    max-width: 58.8rem;
    margin-left: 3.2rem;

    @media (max-width: 1300px) {
        margin-top: 3.2rem;
    }
`

const StyledText = styled(Text)`
    max-width: 79.2rem;
`

// TODO: uncomment when KID documents are ready
// const ResponsibleText = styled(Text)`
//     font-size: var(--text-size-m);
//     text-align: center;
//     font-weight: 500;
//     max-width: 99.6rem;
//     margin: 4rem auto 0;
// `

// const HighlightText = styled.span`
//     color: var(--color-red);
// `

const StyledUl = styled.ul`
    padding-left: 2.3rem;
`

const StyledList = styled.li`
    list-style-type: disc;
    font-size: 1.8rem;
    margin-top: 0.8rem;
`

const TradingText = styled(Text)`
    margin: 2.4rem 0 4.8rem;
`

const TradingUl = styled.ul`
    padding-left: 1rem;
    margin-bottom: 3.2rem;
`

const TradingList = styled(StyledList)`
    margin-top: 1.6rem;
`

const NewHeader = styled(Header)`
    margin: 2.4rem 0 0.8rem;
`

const ResponsiveHeader = styled(StyledHeader)`
    @media ${device.mobileL} {
        font-size: 5rem;
    }
`

const ResponsibleTrading = () => {
    return (
        <Layout>
            <SEO
                title={localize('Secure and responsible online trading guidelines')}
                description={localize(
                    'Read our guidelines on secure and responsible trading. Understand the risks involved in online trading and how you can manage them.',
                )}
            />
            <Section>
                <Container direction="column">
                    <ResponsiveHeader as="h1" align="center" pb="1.6rem">
                        {localize('Secure and responsible trading')}
                    </ResponsiveHeader>
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize(
                            'Trading online can be exciting, but it’s important to be reminded that there are risks involved. We encourage all our users to secure their accounts and trade responsibly to experience the best in online trading.',
                        )}
                    </StyledText>
                    <StyledHeader
                        as="h3"
                        align="center"
                        max_width="105rem"
                        pt="2.4rem"
                        size="var(--text-size-m)"
                    >
                        {localize('Here are some guidelines for a safe trading experience.')}
                    </StyledHeader>
                </Container>
            </Section>
            <Divider height="2px" />
            <Section>
                <StyledHeader as="h2" align="center" pb="4rem" size="var(--text-size-header-1)">
                    {localize('Securing your account')}
                </StyledHeader>
                <SecureGrid />
            </Section>
            <Divider height="2px" />
            <Section>
                <StyledHeader as="h2" align="center" pb="4rem" size="var(--text-size-header-1)">
                    {localize('Trading responsibly')}
                </StyledHeader>
                <ResponsibleGrid />
                {/* TODO: show when KID documents are ready */}
                {/* <ResponsibleText>
                    <Localize
                        translate_text="For more details on our products and the risks involved in online trading, read our key information documents (KIDs) on <0>commodities</0>, <0>forex</0>, and <0>cryptocurrencies</0>."
                        components={[<HighlightText key={0} color="red" />]}
                    />
                </ResponsibleText> */}
            </Section>
            <Section bgcolor="var(--color-grey-8)">
                <Container direction="column">
                    <StyledFlex m="4rem 0" jc="space-between" wrap="wrap">
                        <ListWrapper laptop_mb="4rem">
                            <StyledHeader
                                max_width="36rem"
                                size="var(--text-size-header-1)"
                                align="center"
                                m="0 auto"
                            >
                                <Localize translate_text="Trading limits and self-exclusion" />
                            </StyledHeader>
                            <TradingText align="center">
                                {localize(
                                    'Online trading is exciting but it can be addictive. There are various limits that you can set on your account to limit your trading activity.',
                                )}
                            </TradingText>
                            <StyledCard width="100%" padding="3.2rem">
                                <Text size="var(--text-size-sm)" weight="bold">
                                    {localize('You can:')}
                                </Text>
                                <StyledUl>
                                    <StyledList>
                                        <Text>
                                            {localize(
                                                'Limit the amount of money you may trade within a specified period.',
                                            )}
                                        </Text>
                                    </StyledList>
                                    <StyledList>
                                        <Text>
                                            {localize(
                                                'Limit the losses you may incur within a specified period.',
                                            )}
                                        </Text>
                                    </StyledList>
                                    <StyledList>
                                        <Text>
                                            {localize(
                                                'Limit the amount of time you may trade in a session.',
                                            )}
                                        </Text>
                                    </StyledList>
                                    <StyledList>
                                        <Text>
                                            {localize(
                                                'Exclude yourself from trading on our website for a definite or indefinite period.',
                                            )}
                                        </Text>
                                    </StyledList>
                                </StyledUl>
                            </StyledCard>
                        </ListWrapper>
                        <CustomListWrapper>
                            <StyledHeader as="h5" size="var(--text-size-header-2)" mb="3.2rem">
                                {localize('How trading limits and self-exclusion work')}
                            </StyledHeader>
                            <TradingUl>
                                <TradingList>
                                    <Text>
                                        {localize(
                                            'The first three limits may only be removed or increased after 24 hours of receiving the notice. You must confirm that you wish to amend the limit.',
                                        )}
                                    </Text>
                                </TradingList>
                                <TradingList>
                                    <Text>
                                        {localize(
                                            'There’s a minimum period of six months for self-exclusion. You have the option to extend it to a total of five years immediately without any cooling-off period.',
                                        )}
                                    </Text>
                                </TradingList>
                                <TradingList>
                                    <Text>
                                        {localize(
                                            'When you’ve set your self-exclusion period, we will refund your account balance to you.',
                                        )}
                                    </Text>
                                </TradingList>
                                <TradingList>
                                    <Text>
                                        {localize(
                                            'At the end of the self-exclusion period, the self-exclusion will remain in place until you take action.',
                                        )}
                                    </Text>
                                </TradingList>
                                <TradingList>
                                    <Text>
                                        {localize(
                                            'If you do not wish to renew the self-exclusion and you make a request to trade again, there will be a cooling-off period of one day before you are allowed access to our site. Please note that email is insufficient and your request must be made by phone.',
                                        )}
                                    </Text>
                                </TradingList>
                            </TradingUl>
                            <Text align="center">
                                <Localize
                                    translate_text="You may <0>contact us</0> to set or adjust your self-exclusion or trading limits."
                                    components={[
                                        <StyledLink
                                            size="var(--text-size-s)"
                                            weight="bold"
                                            to="/contact-us"
                                            key={0}
                                        />,
                                    ]}
                                />
                            </Text>
                        </CustomListWrapper>
                    </StyledFlex>
                </Container>
            </Section>
            <Section padding="4rem 0">
                <Container>
                    <Flex ai="center" direction="column">
                        <DemoIcon />
                        <NewHeader as="h4" size="var(--text-size-header-1)" align="center">
                            {localize('New to trading?')}
                        </NewHeader>
                        <StyledHeader as="h5" align="center" weight="400" lh="2.4rem" mb="4rem">
                            {localize(
                                'Use our demo account and learn how to trade by using risk-free virtual funds.',
                            )}
                        </StyledHeader>
                        <LinkButton secondary="true" to="/signup/">
                            {localize('Create free demo account')}
                        </LinkButton>
                    </Flex>
                </Container>
            </Section>
        </Layout>
    )
}

export default WithIntl()(ResponsibleTrading)
