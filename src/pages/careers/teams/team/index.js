import React from 'react'
import styled from 'styled-components'
import { RoleBanner } from '../../_layout-components/_banner'
import { SEO, Container } from 'components/containers'
import { BackgroundImage, Text, Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: var(--text-size-m);
    color: var(--color-white);
    max-width: 99.6rem;
`

const Hero = ({ background_image, team_name, team_description }) => (
    <BackgroundImage
        img_name="career-bg.png"
        style={{
            height: '80rem',
            width: '100%',
        }}
    >
        <StyledContainer>
            <StyledHeader as="h1">{team_name}</StyledHeader>
            <Subheadline>{team_description}</Subheadline>
        </StyledContainer>
    </BackgroundImage>
)

const Team = () => {
    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Team')} />
            <Hero
                team_name="Marketing"
                team_description="Fuelled by creativity, our team coordinates a wide range of marketing campaigns to help our business grow. We collaborate with designers, developers, analysts, digital marketers, and business development executives so that our marketing and advertising initiatives can represent the exceptional online trading services that we have to offer."
            />
            <RoleBanner />
        </Layout>
    )
}

export default WithIntl()(Team)
