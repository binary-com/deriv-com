import React from 'react'
import styled from 'styled-components'
import TeamCard from './_layout-components/_team-card'
import { getTop4Teams } from './_model-controller/_teams'
import { Container, SectionContainer, CssGrid } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

const StyledHeader = styled(Header)`
    text-align: center;
    margin-bottom: 6.4rem;
`

const FindPlace = () => {
    const [top_teams, setTopTeams] = React.useState([])
    React.useEffect(() => {
        setTopTeams(getTop4Teams())
    }, [])
    return (
        <SectionContainer background="grey-2">
            <Container direction="column">
                <StyledHeader as="h3">{localize('Find your place at Deriv')}</StyledHeader>
                <CssGrid
                    columns="repeat(4, 28.2rem)"
                    rows="388px repeat(4, 0)"
                    column_gap="2.4rem"
                    tablet_columns="repeat(2, 28.2rem)"
                    mobile_columns="28.2rem"
                >
                    {top_teams.map((team, idx) => (
                        <TeamCard
                            key={idx}
                            img_name={team.thumbnail}
                            team_name={team.name}
                            display_team_name={team.display_name}
                            tagline={team.card_description}
                        />
                    ))}
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

export default FindPlace
