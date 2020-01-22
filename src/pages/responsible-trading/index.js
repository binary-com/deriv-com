import React from 'react'
import styled from 'styled-components'
import { IconGrid } from './_icon-grid'
import device from 'themes/device'
import { SEO, SectionContainer, GridContainer, Flex, Container } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header, Text } from 'components/elements'
import { Localize, LocalizedLink, localize, WithIntl } from 'components/localization'
import Warning from 'images/svg/regulatory-warnings.svg'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    a {
        color: var(--color-red);
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }

    max-width: ${props => props.maxwidth || '100%'};
    padding: ${props => props.padding || '0'};

    @media ${device.laptop} {
        max-width: 100%;
    }
`

const WarningIcon = styled(Warning)`
    margin-bottom: 2.4rem;
`

const Ol = styled.ol`
    list-style-type: decimal;
    font-weight: bold;
    padding-left: 2rem;

    li {
        padding-left: 0.3rem;
    }
    span {
        font-weight: normal;
    }
    > *:not(:last-child) {
        padding-bottom: 1rem;
    }
`

const UL = styled.ul`
    list-style-type: disc;
    padding-left: 2rem;

    li {
        max-width: 56.8rem;
    }
    > *:not(:last-child) {
        padding-bottom: 1.6rem;
    }
    @media ${device.laptop} {
        li {
            padding-bottom: 1.6rem;
        }
    }
`

const ListWrapper = styled.div`
    width: 50%;
    padding-left: ${props => props.pl || ''};

    @media ${device.laptop} {
        margin-bottom: ${props => props.laptop_mb || ''};
        width: 100%;
    }
`

const ResponsibleTrading = () => {
    return (
        <Layout>
            <SEO
                title={localize('Responsible trading')}
                description={localize(
                    'Practise responsible trading by understanding the risks involved and how you can manage them by setting limits on your trading activity.',
                )}
            />
            <Section>
                <GridContainer>
                    <StyledHeader as="h1" align="center" padding="0 0 4rem">
                        {localize('Responsible trading')}
                    </StyledHeader>
                    <StyledHeader
                        as="h2"
                        align="center"
                        weight="500"
                        maxwidth="105rem"
                        padding="0 2rem 6rem"
                        font_size="var(--text-size-m)"
                    >
                        {localize(
                            'Online trading is exciting, but it is a risky activity and can turn into an addiction. Here are some guidelines to help you manage online trading risks.',
                        )}
                    </StyledHeader>
                </GridContainer>
                <IconGrid />
            </Section>
            <Divider />
            <Section>
                <StyledHeader as="h2" font_size="3.6rem" lh="4.5rem" align="center">
                    {localize('Written limits and self-exclusion')}
                </StyledHeader>
                <Container direction="column">
                    <Flex m="4rem 0" jc="space-between" wrap="wrap">
                        <ListWrapper laptop_mb="4rem">
                            <StyledHeader
                                maxwidth="48.6rem"
                                font_size="var(--text-size-sm)"
                                weight="bold"
                                lh="1.5"
                            >
                                <Localize
                                    translate_text="With Deriv, you can self-exclude yourself or set limits on your trading activities through our site. You may also <0>contact us</0> to state the limits you wish to set."
                                    components={[<LocalizedLink key={0} to="/contact-us/" />]}
                                />
                            </StyledHeader>
                        </ListWrapper>
                        <ListWrapper pl="1rem">
                            <Ol>
                                <Text as="li" weight="bold">
                                    <span>
                                        {localize(
                                            'Limit the amount of money you may trade within a specified period.',
                                        )}
                                    </span>
                                </Text>
                                <Text as="li" weight="bold">
                                    <span>
                                        {localize(
                                            'Limit the losses you may incur within a specified period.',
                                        )}
                                    </span>
                                </Text>
                                <Text as="li" weight="bold">
                                    <span>
                                        {localize(
                                            'Limit the amount of time you may trade in a session.',
                                        )}
                                    </span>
                                </Text>
                                <Text as="li" weight="bold">
                                    <span>
                                        {localize(
                                            'Exclude yourself from trading on our website for a definite or indefinite period.',
                                        )}
                                    </span>
                                </Text>
                            </Ol>
                        </ListWrapper>
                    </Flex>
                </Container>
                <Container direction="column">
                    <StyledHeader font_size="2.8rem" as="h3" align="center">
                        {localize('How it works')}
                    </StyledHeader>
                    <Flex jc="space-between" wrap="wrap" mt="4rem">
                        <ListWrapper>
                            <UL>
                                <Text as="li">
                                    {localize(
                                        'The first three limits may only be removed or increased after 24 hours of receiving the notice. You must confirm that you wish to amend the limit.',
                                    )}
                                </Text>
                                <Text as="li">
                                    {localize(
                                        'There’s a minimum period of six months for self-exclusion. You have the option to extend it to a total of five years immediately without any cooling-off period.',
                                    )}
                                </Text>
                                <Text as="li">
                                    {localize(
                                        'When you’ve set your self-exclusion period, we will refund your account balance to you.',
                                    )}
                                </Text>
                            </UL>
                        </ListWrapper>
                        <ListWrapper pl="1rem">
                            <UL>
                                <Text as="li">
                                    {localize(
                                        'At the end of the self-exclusion period, the self-exclusion will remain in place until you take action.',
                                    )}
                                </Text>
                                <Text as="li">
                                    {localize(
                                        'If you do not wish to renew the self-exclusion and you make a request to trade again, there will be a cooling-off period of one day before you are allowed access to our site. Please note that email is insufficient and your request must be made by phone.',
                                    )}
                                </Text>
                            </UL>
                        </ListWrapper>
                    </Flex>
                </Container>
            </Section>
            <Divider />
            <Section>
                <GridContainer align="center">
                    <WarningIcon />
                    <Header as="h2" font_size="3.6rem" align="center">
                        {localize('Other warnings and regulatory disclosures')}
                    </Header>
                    <Flex jc="center">
                        <StyledHeader
                            as="h5"
                            align="center"
                            weight="400"
                            maxwidth="99rem"
                            lh="2.4rem"
                            padding="0.8rem 0 0"
                        >
                            <Localize
                                translate_text="Online trading can incur losses as well as gains. Prices may vary due to changes in the market which may impact the return on your investment. The products that we offer are ‘complex products’ and may not be suitable for everyone. Trading on our products carries a high level of risk and you risk losing all of your invested capital. Please refer to the <0>Key Information Documents</0> on our website to understand all the risks involved before you start trading."
                                components={[<LocalizedLink key={0} to="/regulatory/" />]}
                            />
                        </StyledHeader>
                    </Flex>
                </GridContainer>
            </Section>
        </Layout>
    )
}

export default WithIntl()(ResponsibleTrading)
