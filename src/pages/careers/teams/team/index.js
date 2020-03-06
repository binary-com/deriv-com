import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { RoleBanner } from '../../_layout-components/_banner'
import { LinkList } from '../../_layout-components/_link-list'
import { NoOpenPositionsHeader } from '../../_layout-components/_no-open-positions'
import { getTeamByName, team_names } from '../../_controller/_teams'
import { locations } from '../../_model/_locations/_locations'
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
const query = graphql`
    query {
        devops: file(relativePath: { eq: "careers/hero-devops.png" }) {
            ...backGroundBlur
        }
        compliance: file(relativePath: { eq: "careers/hero-compliance.png" }) {
            ...backGroundBlur
        }
        marketing: file(relativePath: { eq: "careers/hero-marketing.png" }) {
            ...backGroundBlur
        }
        qualityassurance: file(relativePath: { eq: "careers/hero-quality-assurance.png" }) {
            ...backGroundBlur
        }
        accountsandpayments: file(relativePath: { eq: "careers/hero-accounts-payments.png" }) {
            ...backGroundBlur
        }
        backend: file(relativePath: { eq: "careers/hero-back-end.png" }) {
            ...backGroundBlur
        }
        businessintelligence: file(relativePath: { eq: "careers/hero-business-intelligence.png" }) {
            ...backGroundBlur
        }
        content: file(relativePath: { eq: "careers/hero-content.png" }) {
            ...backGroundBlur
        }
        cryptodevelopment: file(relativePath: { eq: "careers/hero-crypto-development.png" }) {
            ...backGroundBlur
        }
        customersupport: file(relativePath: { eq: "careers/hero-customer-support.png" }) {
            ...backGroundBlur
        }
        disasterrecovery: file(relativePath: { eq: "careers/hero-disaster-recovery.png" }) {
            ...backGroundBlur
        }
        frontend: file(relativePath: { eq: "careers/hero-front-end.png" }) {
            ...backGroundBlur
        }
        hrrecruitment: file(relativePath: { eq: "careers/hero-hr-recruitment.png" }) {
            ...backGroundBlur
        }
        internalaudit: file(relativePath: { eq: "careers/hero-internal-audit.png" }) {
            ...backGroundBlur
        }
        itadmin: file(relativePath: { eq: "careers/hero-it-admin.png" }) {
            ...backGroundBlur
        }
        productdesign: file(relativePath: { eq: "careers/hero-product-design.png" }) {
            ...backGroundBlur
        }
        projectmanagement: file(relativePath: { eq: "careers/hero-project-management.png" }) {
            ...backGroundBlur
        }
        quants: file(relativePath: { eq: "careers/hero-quants.png" }) {
            ...backGroundBlur
        }
        security: file(relativePath: { eq: "careers/hero-security.png" }) {
            ...backGroundBlur
        }
    }
`

const Hero = ({ name, display_name, team_description }) => {
    if (!name) return null
    const hero_img = useStaticQuery(query)

    return (
        <BackgroundImage
            data={hero_img[name.replace(/-+/g, '')]}
            style={{
                height: '64.6rem',
                width: '100%',
            }}
            dark="0.3"
        >
            <StyledContainer>
                <StyledHeader as="h1" font_size="var(--text-size-xl)" align="center">
                    {display_name}
                </StyledHeader>
                <Subheadline align="center">{team_description}</Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

const TeamWrapper = styled.section`
    padding: 8rem 0;

    ${Header} {
        padding-bottom: 8rem;
    }
`
const Team = () => {
    const team_name = getLocationHash()
    if (!team_name) return null
    const team = getTeamByName(team_name)

    return (
        <Layout type="careers" padding_top="10rem">
            <SEO title={localize(`Team ${team_names[team.name]}`)} />
            <Hero
                background_image={team.hero_image}
                display_name={team_names[team.name]}
                name={team.name}
                team_description={team.description}
            />
            <TeamWrapper>
                <Header as="h2" font-size="var(--text-size-header-1)" align="center">
                    {localize('Open positions')}
                </Header>
                <LinkList
                    list_items={
                        team.positions &&
                        team.positions.map(position => ({
                            text: position.title,
                            to: `careers/jobs/job#${toHashFormat(position.id)}`,
                            middle_text: locations[position.location],
                        }))
                    }
                />
                {team.positions && !team.positions.length && (
                    <NoOpenPositionsHeader>
                        {localize(
                            `Sorry, there are currently no open positions for ${
                                team_names[team.name]
                            }`,
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
    display_name: PropTypes.string,
    name: PropTypes.string,
    team_description: PropTypes.string,
}

export default WithIntl()(Team)
