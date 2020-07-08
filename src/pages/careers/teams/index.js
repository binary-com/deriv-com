import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { getAlphabeticTeams, team_names } from '../_controller/_teams'
import Card from './_card'
import { SEO, Container, SectionContainer, CssGrid } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { Header, Text } from 'components/elements'

const HeroText = styled(Text)`
    max-width: 86.2rem;
    font-size: var(--text-size-sm);
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

const Teams = () => {
    const teams = getAlphabeticTeams()
    const thumbnails = useStaticQuery(query)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO
                title={localize('Choose your team - Careers | Deriv')}
                description={localize(
                    'Join our team for a challenging and rewarding career. Browse job opportunities in front-end development, IT security, marketing, and more.',
                )}
            />
            <SectionContainer background="black" padding="12rem 0">
                <Container direction="column">
                    <Header
                        as="h1"
                        size="var(--text-size-xl)"
                        color="white"
                        align="center"
                        m="0 0 2.4rem"
                    >
                        Motivated by challenges
                    </Header>
                    <HeroText color="white" align="center">
                        Being part of Deriv requires each of us to rise to different challenges. We
                        look at demanding tasks as opportunities to shine, and we’re not afraid to
                        make big, bold moves to reach our goals. Our success rests on our values of
                        integrity, teamwork, competence, and customer focus.
                    </HeroText>
                </Container>
            </SectionContainer>
            <SectionContainer>
                <Container direction="column" padding="12rem 0">
                    <Header align="center" as="h3" m="0 0 8rem">
                        Choose your team
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
                                img_data={thumbnails[team.name.replace(/-+/g, '')]}
                                to={`/careers/teams/team#${team.name}`}
                                display_team_name={team_names[team.name]}
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
