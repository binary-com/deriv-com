import React from 'react'
import styled from 'styled-components'
import { getAlphabeticTeams } from '../_model-controller/_teams'
import Card from './_card'
import { SEO, Container, SectionContainer, CssGrid } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Header, Text } from 'components/elements'

const HeroText = styled(Text)`
    max-width: 86.2rem;
    font-size: var(--text-size-sm);
`

const Teams = () => {
    const [teams, setTeams] = React.useState([])

    React.useEffect(() => {
        setTeams(getAlphabeticTeams())
    }, [])
    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize('Teams')} />
            <SectionContainer background="black" padding="12rem 0">
                <Container direction="column">
                    <Header as="h2" color="white" align="center" margin="0 0 2.4rem">
                        {localize('Motivated by challenges')}
                    </Header>
                    <HeroText color="white" align="center">
                        {localize(
                            'Being part of Deriv requires each of us to rise to different challenges. We look at demanding tasks as opportunities to shine, and we’re not afraid to make big, bold moves to reach our goals. Our success rests on our values of integrity, teamwork, competence, and customer focus.',
                        )}
                    </HeroText>
                </Container>
            </SectionContainer>
            <SectionContainer>
                <Container direction="column">
                    <Header align="center" as="h3" margin="0 0 8rem">
                        {localize('Choose your team')}
                    </Header>
                    <CssGrid
                        columns="repeat(3, 38.4rem)"
                        row_gap="4rem"
                        column_gap="2.4rem"
                        justify="center"
                        align="center"
                        laptop_columns="repeat(2, 38.4rem)"
                        tablet_columns="repeat(2, 38.4rem)"
                        mobile_columns="38.4rem"
                    >
                        {teams.map((team, idx) => (
                            <Card
                                key={idx}
                                img_name={team.thumbnail}
                                to={`careers/teams/team#${team.name}`}
                                display_team_name={team.display_name}
                                tagline={team.card_description}
                                position_count={team.positions.length}
                            />
                        ))}
                    </CssGrid>
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Teams)
