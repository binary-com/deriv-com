import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import TeamCard from './_layout-components/_team-card'
import { getTop4Teams, team_names } from './_controller/_teams'
import { Container, SectionContainer, CssGrid } from 'components/containers'
import { Header, StyledLink } from 'components/elements'
import { localize } from 'components/localization'

const StyledHeader = styled(Header)`
    text-align: center;
    margin-bottom: 6.4rem;
`

const query = graphql`
    query {
        devops: file(relativePath: { eq: "careers/team-devops.png" }) {
            ...fadeIn
        }
        compliance: file(relativePath: { eq: "careers/team-compliance.jpg" }) {
            ...fadeIn
        }
        marketing: file(relativePath: { eq: "careers/team-marketing.jpg" }) {
            ...fadeIn
        }
        qualityassurance: file(relativePath: { eq: "careers/team-quality-assurance.jpg" }) {
            ...fadeIn
        }
        accountsandpayments: file(relativePath: { eq: "careers/team-accounts-payments.png" }) {
            ...fadeIn
        }
        backend: file(relativePath: { eq: "careers/team-back-end.png" }) {
            ...fadeIn
        }
        businessintelligence: file(relativePath: { eq: "careers/team-business-intelligence.png" }) {
            ...fadeIn
        }
        content: file(relativePath: { eq: "careers/team-content.jpg" }) {
            ...fadeIn
        }
        cryptodevelopment: file(relativePath: { eq: "careers/team-crypto-development.png" }) {
            ...fadeIn
        }
        customersupport: file(relativePath: { eq: "careers/team-customer-support.png" }) {
            ...fadeIn
        }
        disasterrecovery: file(relativePath: { eq: "careers/team-disaster-recovery.jpg" }) {
            ...fadeIn
        }
        frontend: file(relativePath: { eq: "careers/team-front-end.png" }) {
            ...fadeIn
        }
        hrrecruitment: file(relativePath: { eq: "careers/team-hr-recruitment.jpg" }) {
            ...fadeIn
        }
        internalaudit: file(relativePath: { eq: "careers/team-internal-audit.jpg" }) {
            ...fadeIn
        }
        itadmin: file(relativePath: { eq: "careers/team-it-admin.jpg" }) {
            ...fadeIn
        }
        productdesign: file(relativePath: { eq: "careers/team-product-design.png" }) {
            ...fadeIn
        }
        projectmanagement: file(relativePath: { eq: "careers/team-project-management.png" }) {
            ...fadeIn
        }
        quants: file(relativePath: { eq: "careers/team-quants.png" }) {
            ...fadeIn
        }
        security: file(relativePath: { eq: "careers/team-security.jpg" }) {
            ...fadeIn
        }
    }
`

const FindPlace = () => {
    const top_teams = getTop4Teams()
    const thumbnails = useStaticQuery(query)

    return (
        <SectionContainer style={{ backgroundColor: 'rgba(242,243,244,0.3)' }}>
            <Container direction="column">
                <StyledHeader as="h3">{localize('Find your place at Deriv')}</StyledHeader>
                <CssGrid
                    columns="repeat(4, 28.2rem)"
                    column_gap="2.4rem"
                    laptop_columns="repeat(2, 28.2rem)"
                    laptop_row_gap="2.4rem"
                    tablet_columns="28.2rem"
                    tablet_row_gap="2.4rem"
                    mobile_columns="28.2rem"
                    mobile_row_gap="2.4rem"
                >
                    {top_teams.map((team, idx) => (
                        <TeamCard
                            key={idx}
                            img_data={thumbnails[team.name.replace(/-+/g, '')]}
                            to={`careers/teams/team#${team.name}/`}
                            display_team_name={team_names[team.name]}
                            tagline={team.card_description}
                        />
                    ))}
                </CssGrid>
                <StyledLink
                    style={{ marginTop: '4.2rem' }}
                    size="var(--text-size-xs)"
                    weight="bold"
                    to="/careers/teams/"
                >
                    {localize('View all teams')}
                </StyledLink>
            </Container>
        </SectionContainer>
    )
}

export default FindPlace
