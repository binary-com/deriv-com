import React from 'react'
import styled from 'styled-components'
import { IconGrid } from './_icon-grid'
import { SEO, SectionContainer, GridContainer } from 'components/containers'
import Layout from 'components/layout/layout'
import { Divider, Header } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: ${props => props.padding || '0'};
`

const WhyChooseUs = () => {
    return (
        <Layout>
            <SEO title={localize('Why choose Deriv')} description={localize('Why choose deriv')} />
            <Section>
                <GridContainer>
                    <StyledHeader as="h1" align="center" lh="7.2rem">
                        {localize('Why choose Deriv')}
                    </StyledHeader>
                    <StyledHeader
                        as="h4"
                        align="center"
                        weight="normal"
                        lh="3rem"
                        padding="1.6rem 0 0"
                    >
                        {localize(
                            'Client trust is our highest priority, and that’s why millions of users choose us. Here are some of the things that make us a leading online trading service provider.',
                        )}
                    </StyledHeader>
                </GridContainer>
            </Section>
            <Divider />
            <Section>
                <IconGrid />
            </Section>
        </Layout>
    )
}

export default WithIntl()(WhyChooseUs)
