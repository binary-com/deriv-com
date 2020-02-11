import React from 'react'
import styled from 'styled-components'
import { SecureGrid, ResponsibleGrid } from './_icon-grid'
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
    max-width: ${props => props.maxwidth || '100%'};
    padding: ${props => props.padding || '0'};

    @media ${device.laptop} {
        max-width: 100%;
    }
`

const WarningIcon = styled(Warning)`
    margin-bottom: 2.4rem;
`

const ListWrapper = styled.div`
    width: 50%;
    padding-left: ${props => props.pl || ''};

    @media ${device.laptop} {
        margin-bottom: ${props => props.laptop_mb || ''};
        width: 100%;
    }
`
const StyledText = styled(Text)`
    max-width: 79.2rem;
`

const ResponsibleText = styled(Text)`
    font-size: var(--text-size-m);
    text-align: center;
    font-weight: 500;
    max-width: 99.6rem;
    margin: 4rem auto 0;
`

const HighlightText = styled.span`
    color: var(--color-red);
`

const ResponsibleTrading = () => {
    return (
        <Layout>
            <SEO
                title={localize('Secure and responsible trading')}
                description={localize(
                    'Practise responsible trading by understanding the risks involved and how you can manage them by setting limits on your trading activity.',
                )}
            />
            <Section>
                <Container direction="column">
                    <StyledHeader as="h1" align="center" padding="0 0 1.6rem">
                        {localize('Secure and responsible trading')}
                    </StyledHeader>
                    <StyledText size="var(--text-size-m)" align="center">
                        {localize(
                            'Trading online can be exciting, but it’s important to be reminded that there are risks involved. We encourage all our users to secure their accounts and trade responsibly to experience the best in online trading.',
                        )}
                    </StyledText>
                    <StyledHeader
                        as="h3"
                        align="center"
                        weight="bold"
                        maxwidth="105rem"
                        padding="2.4rem 0 0"
                        font_size="var(--text-size-m)"
                    >
                        {localize('Here are some guidelines for a safe trading experience.')}
                    </StyledHeader>
                </Container>
            </Section>
            <Divider height="2px" />
            <Section>
                <StyledHeader
                    as="h2"
                    align="center"
                    padding="0 0 4rem"
                    font_size="var(--text-size-header-1)"
                >
                    {localize('Securing your account')}
                </StyledHeader>
                <SecureGrid />
            </Section>
            <Divider height="2px" />
            <Section>
                <StyledHeader
                    as="h2"
                    align="center"
                    padding="0 0 4rem"
                    font_size="var(--text-size-header-1)"
                >
                    {localize('Trading responsibly')}
                </StyledHeader>
                <ResponsibleGrid />
                <ResponsibleText>
                    <Localize
                        translate_text="For more details on our products and the risks involved in online trading, read our key information documents (KIDs) on <0>commodities</0>, <0>forex</0>, and <0>cryptocurrencies</0>."
                        components={[<HighlightText key={0} color="red" />]}
                    />
                </ResponsibleText>
            </Section>
            <Section bgcolor="var(--color-grey-8)">
                <Container direction="column">
                    <Flex m="4rem 0" jc="space-between" wrap="wrap">
                        <ListWrapper laptop_mb="4rem">
                            <StyledHeader
                                maxwidth="48.6rem"
                                font_size="var(--text-size-header-1)"
                                align="center"
                            >
                                <Localize translate_text="Trading limits and self-exclusion" />
                            </StyledHeader>
                        </ListWrapper>
                        <ListWrapper>
                            <StyledHeader maxwidth="58.8rem" font_size="var(--text-size-sm)">
                                <Localize translate_text="Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world Hello world " />
                            </StyledHeader>
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
                            maxwidth="99.6rem"
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
