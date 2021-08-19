/* eslint-disable no-unused-vars */
import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import TeamCard from './_layout-components/_team-card'
import { Container, CssGrid, SectionContainer } from 'components/containers'
import { Text, Header } from 'components/elements'
import device from 'themes/device'

const DiffHeader = styled(Header)`
    margin-bottom: 6.4rem;
    font-size: 48px;
    line-height: 60px;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`
const StyledCssGrid = styled(CssGrid)`
    justify-content: center;
`

const query = graphql`
    {
        technologyEngineering: file(relativePath: { eq: "careers/technology-engineering.png" }) {
            ...fadeIn
        }
        peopleeating: file(relativePath: { eq: "careers/people-eating.jpg" }) {
            ...fadeIn
        }
    }
`

const JoinYourTeam = () => {
    const data = useStaticQuery(query)

    return (
        <SectionContainer padding="12rem 0 0 0">
            <Container direction="column">
                <DiffHeader as="h3" type="section-title" align="center">
                    Join Your Team?
                </DiffHeader>
            </Container>
            <StyledCssGrid
                columns="repeat(3, 384px)"
                column_gap="2.4rem"
                laptop_columns="repeat(2, 28.2rem)"
                laptop_row_gap="2.4rem"
                tablet_columns="28.2rem"
                tablet_row_gap="2.4rem"
                mobile_columns="90%"
                mobile_row_gap="2.4rem"
            >
                <TeamCard
                    key={1}
                    img_data={data.technologyEngineering}
                    to={`careers/teams/team#/`}
                    display_team_name={'Technology & Engineering'}
                    tagline={
                        'We develop and fortify our website, platforms, and app architecture that power our users’ experience.'
                    }
                />
                <TeamCard
                    key={2}
                    img_data={data.technologyEngineering}
                    to={`careers/teams/team#/`}
                    display_team_name={'name'}
                    tagline={'describtion'}
                />
                <TeamCard
                    key={2}
                    img_data={data.technologyEngineering}
                    to={`careers/teams/team#/`}
                    display_team_name={'name'}
                    tagline={'describtion'}
                />
                <TeamCard
                    key={2}
                    img_data={data.technologyEngineering}
                    to={`careers/teams/team#/`}
                    display_team_name={'name'}
                    tagline={'describtion'}
                />
                <TeamCard
                    key={2}
                    img_data={data.technologyEngineering}
                    to={`careers/teams/team#/`}
                    display_team_name={'name'}
                    tagline={'describtion'}
                />
                <TeamCard
                    key={2}
                    img_data={data.technologyEngineering}
                    to={`careers/teams/team#/`}
                    display_team_name={'name'}
                    tagline={'describtion'}
                />
            </StyledCssGrid>
        </SectionContainer>
    )
}

export default JoinYourTeam
