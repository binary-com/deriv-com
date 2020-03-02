import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { RoleBanner } from '../../_layout-components/_banner'
import { LinkList } from '../../_layout-components/_link-list'
import { NoOpenPositionsHeader } from '../../_layout-components/_no-open-positions'
import { getTeamByName } from '../../_model-controller/_teams'
import { SEO, Container } from 'components/containers'
import { BackgroundImage, Text, Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { getLocationHash, toHashFormat } from 'common/utility'

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
    height: 100%;
`

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    margin-bottom: 1.6rem;
    color: var(--color-white);
`

const Subheadline = styled(Text)`
    font-size: 2rem;
    color: var(--color-white);
    max-width: 98.4rem;
`

const Hero = ({ background_image, team_name, team_description }) => (
    <BackgroundImage
        img_name={background_image}
        style={{
            height: '64.6rem',
            width: '100%',
        }}
        dark="0.3"
    >
        <StyledContainer>
            <StyledHeader as="h1" font_size="var(--text-size-xl)" align="center">
                {team_name}
            </StyledHeader>
            <Subheadline align="center">{team_description}</Subheadline>
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
    const team_name = getLocationHash()
    const team = getTeamByName(team_name)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize(`Team ${team_name}`)} />
            <Hero
                background_image={team.hero_image}
                team_name={team.display_name}
                team_description={team.description}
            />
            <TeamWrapper>
                <Header as="h2" font-size="var(--text-size-header-1)" align="center">
                    {localize('Open positions')}
                </Header>
                <LinkList
                    list_items={team.positions.map(position => ({
                        text: position.title,
                        to: `jobs/job#${toHashFormat(position.title)}`,
                        middle_text: position.location,
                    }))}
                />
                {!team.positions.length && (
                    <NoOpenPositionsHeader>
                        {localize(
                            `Sorry, there are currently no open positions for ${team.display_name}`,
                        )}
                    </NoOpenPositionsHeader>
                )}
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
