import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import TeamCard from './_layout-components/_team-card'
import { getDisplayTeams, team_names } from './_controller/_teams'
import { Container, SectionContainer, CssGrid } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'

const StyledHeader = styled(Header)`
    text-align: center;
    margin-bottom: 6.4rem;
`

export const fadeInFixed = graphql`
    fragment fadeInFixed on File {
        childImageSharp {
            fixed(width: 282, height: 144) {
                ...GatsbyImageSharpFixed_noBase64
                originalName
            }
        }
    }
`

const query = graphql`
    query {
        devops: file(relativePath: { eq: "careers/team-devops.png" }) {
            ...fadeInFixed
        }
        compliance: file(relativePath: { eq: "careers/team-compliance.jpg" }) {
            ...fadeInFixed
        }
        marketing: file(relativePath: { eq: "careers/team-marketing.jpg" }) {
            ...fadeInFixed
        }
        qualityassurance: file(relativePath: { eq: "careers/team-quality-assurance.jpg" }) {
            ...fadeInFixed
        }
        accountsandpayments: file(relativePath: { eq: "careers/team-accounts-payments.png" }) {
            ...fadeInFixed
        }
        backend: file(relativePath: { eq: "careers/team-back-end.png" }) {
            ...fadeInFixed
        }
        businessintelligence: file(relativePath: { eq: "careers/team-business-intelligence.png" }) {
            ...fadeInFixed
        }
        content: file(relativePath: { eq: "careers/team-content.jpg" }) {
            ...fadeInFixed
        }
        cryptodevelopment: file(relativePath: { eq: "careers/team-crypto-development.png" }) {
            ...fadeInFixed
        }
        customersupport: file(relativePath: { eq: "careers/team-customer-support.png" }) {
            ...fadeInFixed
        }
        disasterrecovery: file(relativePath: { eq: "careers/team-disaster-recovery.jpg" }) {
            ...fadeInFixed
        }
        frontend: file(relativePath: { eq: "careers/team-front-end.png" }) {
            ...fadeInFixed
        }
        hrrecruitment: file(relativePath: { eq: "careers/team-hr-recruitment.jpg" }) {
            ...fadeInFixed
        }
        internalaudit: file(relativePath: { eq: "careers/team-internal-audit.jpg" }) {
            ...fadeInFixed
        }
        itadmin: file(relativePath: { eq: "careers/team-it-admin.jpg" }) {
            ...fadeInFixed
        }
        productdesign: file(relativePath: { eq: "careers/team-product-design.png" }) {
            ...fadeInFixed
        }
        projectmanagement: file(relativePath: { eq: "careers/team-project-management.png" }) {
            ...fadeInFixed
        }
        quants: file(relativePath: { eq: "careers/team-quants.png" }) {
            ...fadeInFixed
        }
        security: file(relativePath: { eq: "careers/team-security.jpg" }) {
            ...fadeInFixed
        }
    }
`

const FindPlace = () => {
    const top_teams = getDisplayTeams()
    const thumbnails = useStaticQuery(query)

    return (
        <SectionContainer style={{ backgroundColor: 'rgba(242,243,244,0.3)' }}>
            <Container direction="column">
                <StyledHeader as="h3">Find your place at Deriv</StyledHeader>
                <CssGrid
                    columns="repeat(4, 282px)"
                    column_gap="2.4rem"
                    laptop_columns="repeat(2, 282px)"
                    laptop_row_gap="2.4rem"
                    tablet_columns="282px"
                    tablet_row_gap="2.4rem"
                    mobile_columns="282px"
                    mobile_row_gap="2.4rem"
                >
                    {top_teams.map((team, idx) => (
                        <TeamCard
                            key={idx}
                            img_data={thumbnails[team.name.replace(/-+/g, '')]}
                            to={`/careers/teams/team#${team.name}/`}
                            display_team_name={team_names[team.name]}
                            tagline={team.card_description}
                        />
                    ))}
                </CssGrid>
                <LinkButton style={{ marginTop: '4.2rem' }} to="/careers/teams/" flat="true">
                    View all teams
                </LinkButton>
            </Container>
        </SectionContainer>
    )
}

export default FindPlace
