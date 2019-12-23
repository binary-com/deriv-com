import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { Header, Text } from 'components/elements'
import { SEO, SectionContainer, GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
//import device from 'themes/device'
// Icons
//import SVG from 'images/svg/svg.svg'
//import Vanuatu from 'images/svg/footer-vanuatu.svg'
//import MFSA from 'images/svg/mfsa.svg'
//import FSC from 'images/svg/fsc.svg'
//import Labuan from 'images/svg/footer-labuan.svg'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: ${props => props.padding || '0'};
`
const Regulatory = () => (
    <Layout>
        <SEO
            title={localize('Licences and regulations')}
            description={localize(
                'Deriv operates under the jurisdiction of Binary.com which holds multiple licences to comply with regulatory requirements around the world.',
            )}
        />
        <Section>
            <GridContainer>
                <StyledHeader as="h1" align="center" padding="0 0 4rem">
                    {localize('Regulatory information')}
                </StyledHeader>
                <StyledHeader as="h4" align="center" weight="500" maxwidth="105rem" padding="0 2rem 6rem">
                    {localize(
                        'The services offered on Deriv and Binary.com are provided by the Binary Group. The group has several subsidiary companies that are licensed to operate Deriv and Binary.com in their registered jurisdictions.',
                    )}
                </StyledHeader>
                <StyledHeader as="h4" align="center" weight="500" maxwidth="105rem" padding="0 2rem 6rem">
                    {localize(
                        'Since 1999, the group has served traders around the world with integrity and reliability. We always hold ourselves to the highest ethical standards and regulatory requirements.',
                    )}
                </StyledHeader>
            </GridContainer>
        </Section>
        <Section>
            <GridContainer>
                <CssGrid
                    columns="1fr 1fr"
                    columngap="2.4rem"
                    mobilecolumns="1fr"
                    mobilerowgap="2rem"
                >
                    <CssGridColumn>
                        left
                    </CssGridColumn>
                    <CssGridColumn>
                        <Text lh="1.55" margin="0.3rem 0 0">
                            {localize('Links')}
                        </Text>
                    </CssGridColumn>
                </CssGrid>
            </GridContainer>
        </Section>
    </Layout>
)

export default WithIntl()(Regulatory)
