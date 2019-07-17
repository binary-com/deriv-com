import React from 'react'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import { localize, WithIntl } from '../components/localization'
import Hero from 'components/elements/hero'
import Container from 'components/containers/container'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
    background-image: linear-gradient(
        to bottom,
        var(--color-grey-2),
        var(--color-white)
    );
`

const Regulatory = () => (
    <Layout>
        <SEO title={localize('Licences and regulations')} />
        <Hero
            header={localize('Licences and regulations')}
            paragraph={localize(
                'Deriv operates under the jurisdiction of Binary.com.',
            )}
        />
        <StyledContainer></StyledContainer>
    </Layout>
)

export default WithIntl()(Regulatory)
