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
        accountsAndPayments: file(relativePath: { eq: "careers/accounts-and-payments.png" }) {
            ...fadeIn
        }
        compliance: file(relativePath: { eq: "careers/compliance.png" }) {
            ...fadeIn
        }
        customerSupport: file(relativePath: { eq: "careers/customer_support.png" }) {
            ...fadeIn
        }
        marketing: file(relativePath: { eq: "careers/marketing.png" }) {
            ...fadeIn
        }
        operations: file(relativePath: { eq: "careers/operations.png" }) {
            ...fadeIn
        }
        paymentOperations: file(relativePath: { eq: "careers/payment-operations.png" }) {
            ...fadeIn
        }
        productDesignAndDevelopment: file(
            relativePath: { eq: "careers/product-design-and-development.png" }
        ) {
            ...fadeIn
        }
        recruitmentAndHR: file(relativePath: { eq: "careers/recruitment-and-HR.png" }) {
            ...fadeIn
        }
    }
`

const JoinYourTeam = () => {
    const data = useStaticQuery(query)

    const join_your_team_data = [
        {
            img_data: data.technologyEngineering,
            to: 'careers/teams/technology-engineering/',
            display_team_name: 'Technology & Engineering',
            tagline:
                'We develop and fortify our website, platforms, and app architecture that power our users’ experience.',
        },
        {
            img_data: data.marketing,
            to: 'careers/teams/marketing/',
            display_team_name: 'Marketing',
            tagline:
                'We conceptualise and implement creative marketing solutions to help our business grow.',
        },
        {
            img_data: data.operations,
            to: 'careers/teams/operations/',
            display_team_name: 'Operations',
            tagline:
                'We support all the teams in our organisation so that we’re able to achieve our goals without roadblocks and hiccups.',
        },
        {
            img_data: data.customerSupport,
            to: 'careers/teams/customer-support/',
            display_team_name: 'Customer Support',
            tagline:
                'We care about providing helpful solutions to our clients to make their trading experience with us even better.',
        },
        {
            img_data: data.recruitmentAndHR,
            to: 'careers/teams/recruitment-hr/',
            display_team_name: 'Recruitment & HR',
            tagline:
                'We bring in go-getters, link them with the right opportunities, and support them in every way to help them grow.',
        },
        {
            img_data: data.productDesignAndDevelopment,
            to: 'careers/teams/product-design-development/',
            display_team_name: 'Product Design & Development',
            tagline:
                'We are the brains behind the creation of the platforms and products that drive the success of our business.',
        },
        {
            img_data: data.compliance,
            to: 'careers/teams/compliance/',
            display_team_name: 'Compliance',
            tagline:
                'We navigate the legal and regulatory environment to help our business maintain the highest ethical standards.',
        },
        {
            img_data: data.accountsAndPayments,
            to: 'careers/teams/accounts-payments/',
            display_team_name: 'Accounts & Payments',
            tagline:
                'We’re all about helping the company make good decisions about money so we can stay on course to fulfil our vision.',
        },
        {
            img_data: data.paymentOperations,
            to: 'careers/teams/payment-operations/',
            display_team_name: 'Payment Operations',
            tagline:
                'We make it easy for clients to trade from anywhere in the world, with any currency. ',
        },
    ]

    return (
        <SectionContainer padding="12rem 0">
            <Container direction="column">
                <DiffHeader as="h3" type="section-title" align="center">
                    Join Your Team?
                </DiffHeader>
            </Container>
            <StyledCssGrid
                columns="repeat(3, 384px)"
                column_gap="2.4rem"
                laptop_columns="repeat(3, 384px)"
                laptop_row_gap="2.4rem"
                tablet_columns="28.2rem"
                tablet_row_gap="2.4rem"
                mobile_columns="90%"
                mobile_row_gap="2.4rem"
            >
                {join_your_team_data.map((item, index) => {
                    return (
                        <TeamCard
                            key={index}
                            img_data={item.img_data}
                            to={item.to}
                            display_team_name={item.display_team_name}
                            tagline={item.tagline}
                        />
                    )
                })}
            </StyledCssGrid>
        </SectionContainer>
    )
}

export default JoinYourTeam
