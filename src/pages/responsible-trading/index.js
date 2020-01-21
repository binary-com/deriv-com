import React from 'react'
import styled from 'styled-components'
import { IconGrid } from './_icon-grid'
import { SEO, SectionContainer, GridContainer } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header } from 'components/elements'
import { Localize, LocalizedLink, localize, WithIntl } from 'components/localization'
// TODO: uncomment when self-exclusion is added to deriv.app
// import Checked from 'images/svg/checklist.svg'
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
    margin: 0 auto;
    padding: ${props => props.padding || '0'};
`
// TODO: uncomment when self-exclusion is added to deriv.app
// const CheckedIcon = styled(Checked)`
//     max-width: 100%;
// `
const WarningIcon = styled(Warning)`
    margin-bottom: 2.4rem;
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
                        as="h4"
                        align="center"
                        weight="500"
                        maxwidth="105rem"
                        padding="0 2rem 6rem"
                    >
                        {localize(
                            'Online trading is exciting, but it is a risky activity and can turn into an addiction. Here are some guidelines to help you manage online trading risks.',
                        )}
                    </StyledHeader>
                </GridContainer>
                <IconGrid />
            </Section>
            <Divider />
            {/* TODO: uncomment when self-exclusion is added to deriv.app */}
            {/*
            <Section>
                <GridContainer>
                    <CssGrid
                        columns="1fr 1fr"
                        column_gap="26rem"
                        row_gap="1.6rem"
                        tablet_column_gap="6rem"
                        mobile_columns="1fr"
                        mobile_row_gap="2rem"
                    >
                        <CssGridColumn align="center">
                            <StyledHeader font_size="3.6rem" lh="4.5rem">
                                {localize('Written limits and self-exclusion')}
                            </StyledHeader>
                            <StyledHeader as="h4" weight="500" lh="3.6rem" padding="1.8rem 0 0">
                                {localize(
                                    'With Deriv, you have the option to implement limits on your trading activities.',
                                )}
                            </StyledHeader>
                        </CssGridColumn>
                        <CssGridColumn align="center">
                            <CssGrid
                                columns="2.4rem 1fr"
                                column_gap="1.6rem"
                                row_gap="1.6rem"
                                mobile_columns="2.4rem 1fr"
                                mobile_row_gap="2rem"
                            >
                                <CssGridColumn>
                                    <CheckedIcon />
                                </CssGridColumn>
                                <CssGridColumn>
                                    <Text lh="1.55" margin="0.3rem 0 0">
                                        {localize('Limit the amount of money you trade')}
                                    </Text>
                                </CssGridColumn>
                                <CssGridColumn>
                                    <CheckedIcon />
                                </CssGridColumn>
                                <CssGridColumn>
                                    <Text lh="1.55" margin="0.3rem 0 0">
                                        {localize('Limit the losses you might incur')}
                                    </Text>
                                </CssGridColumn>
                                <CssGridColumn>
                                    <CheckedIcon />
                                </CssGridColumn>
                                <CssGridColumn>
                                    <Text lh="1.55" margin="0.3rem 0 0">
                                        {localize('Limit the amount of time you spend trading')}
                                    </Text>
                                </CssGridColumn>
                                <CssGridColumn>
                                    <CheckedIcon />
                                </CssGridColumn>
                                <CssGridColumn>
                                    <Text lh="1.55" margin="0.3rem 0 0">
                                        {localize('Block yourself from trading on our website')}
                                    </Text>
                                </CssGridColumn>
                            </CssGrid>
                        </CssGridColumn>
                    </CssGrid>
                </GridContainer>
            </Section> */}
            <Section>
                <GridContainer align="center">
                    <WarningIcon />
                    <Header font_size="3.6rem" align="center">
                        {localize('Other warnings and regulatory disclosures')}
                    </Header>
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
                </GridContainer>
            </Section>
        </Layout>
    )
}

export default WithIntl()(ResponsibleTrading)
