import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RoleBanner } from '../../_layout-components/_banner'
import { LinkList } from '../../_layout-components/_link-list'
import { NoOpenPositionsHeader } from '../../_layout-components/_no-open-positions'
// import { getTeamByName } from '../../_model-controller.js/_teams'
import { SEO, Container } from 'components/containers'
import { BackgroundImage, Text, Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
// import { getLocationHash } from 'common/utility'

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: 2rem;
    color: var(--color-white);
    max-width: 79.2rem;
`

const Hero = ({ background_image, team_name, team_description }) => (
    <BackgroundImage
        img_name={background_image}
        style={{
            height: '80rem',
            width: '100%',
        }}
    >
        <StyledContainer>
            <StyledHeader as="h1" font_size="var(--text-size-xl)" align="center">
                {team_name}
            </StyledHeader>
            <Subheadline>{team_description}</Subheadline>
        </StyledContainer>
    </BackgroundImage>
)

const TeamWrapper = styled.section`
    padding: 8rem 0;

    ${Header} {
        padding-bottom: 8rem;
    }
`
const Team = () => {
    // const team_name = getLocationHash()
    // const team = getTeamByName(team_name)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Team')} />
            <Hero
                background_image="career-bg.png"
                team_name="Marketing"
                team_description="Fuelled by creativity, our team coordinates a wide range of marketing campaigns to help our business grow. We collaborate with designers, developers, analysts, digital marketers, and business development executives so that our marketing and advertising initiatives can represent the exceptional online trading services that we have to offer."
            />
            <TeamWrapper>
                <Header as="h2" font-size="var(--text-size-header-1)" align="center">
                    Positions in Marketing
                </Header>
                <LinkList
                    list_items={[
                        {
                            text: 'Global Affiliate Manager',
                            to: '/marketing/',
                            middle_text: 'Dubai, United Arab Emirates',
                        },
                        {
                            text: 'Marketing Executive',
                            to: '/marketing/',
                            middle_text: 'Dubai, United Arab Emirates',
                        },
                        {
                            text: 'Social Media Manager',
                            to: '/marketing/',
                            middle_text: 'Labuan, Malaysia',
                        },
                        {
                            text: 'SEO Specialist',
                            to: '/marketing/',
                            middle_text: 'Asunción',
                        },
                    ]}
                />
                <NoOpenPositionsHeader>
                    Sorry, there are currently no open positions in Malta.
                </NoOpenPositionsHeader>
            </TeamWrapper>
            <RoleBanner />
        </Layout>
    )
}

Hero.propTypes = {
    background_image: PropTypes.string,
    team_description: PropTypes.string,
    team_name: PropTypes.string,
}

export default WithIntl()(Team)
