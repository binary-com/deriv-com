import React from 'react'
import { localize, WithIntl } from 'components/localization'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import Hero from 'components/elements/hero.js'
import { Header } from 'components/elements/typography.js'
import styled from 'styled-components'
import Button from 'components/form/button'

import { OurLocations } from './_our-locations'
import { OurNumbers } from './_our-numbers'
import { OurGoals } from './_our-goals'
import { MobileOnly, LaptopOnly } from '../../components/containers/device-only'

const Goahead = styled.div`
    text-align: center;
    ${Header} {
        padding: 4rem 2rem;
        font-size: 6rem;
    }
`
const AccountButton = styled(Button)`
    width: 90%;
    max-width: 32rem;
    margin-bottom: 3.6rem;
`
const About = () => (
    <Layout>
        <SEO title={localize('About us')} />
        <LaptopOnly>
            <Hero
                header={localize('About us')}
                paragraph={localize(
                    'Deriv is a new trading platform created by the Binary Group, a multi-award winning pioneer in online trading. It’s built upon 20 years of experience, customer focus, and technical innovation. With our powerful yet simple trading experience and tools, new and professional traders alike can understand risk and make better trading decisions.',
                )}
            />
        </LaptopOnly>
        <MobileOnly>
            <Hero
                header={localize('About us')}
                paragraph={localize(
                    'Deriv is the latest innovation by the Binary Group, powered by 20 years of experience, customer focus, and technical innovation.',
                )}
            />
        </MobileOnly>
        <OurGoals />
        <OurNumbers />
        <OurLocations />
        <MobileOnly>
            <Goahead>
                <Header as="h1" align="center" lh="1.1">
                    Go ahead, experience it for yourself.
                </Header>
                <AccountButton secondary>{localize('Create a free account')}</AccountButton>
            </Goahead>
        </MobileOnly>
    </Layout>
)

export default WithIntl()(About)
