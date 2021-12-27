import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import TeamCard from './_layout-components/_team-card'
import { Container, CssGrid, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const DiffHeader = styled(Header)`
    margin-bottom: 5rem;
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
        backendDevelopment: file(relativePath: { eq: "careers/Back-end-Development.png" }) {
            ...fadeIn
        }
        businessExcellence: file(relativePath: { eq: "careers/Business-Excellence.png" }) {
            ...fadeIn
        }
        customerSupport: file(relativePath: { eq: "careers/Customer-Support.png" }) {
            ...fadeIn
        }
        cyberSecurityIT: file(relativePath: { eq: "careers/Cyber-Security-IT.png" }) {
            ...fadeIn
        }
        financeAccounts: file(relativePath: { eq: "careers/Finance-Accounts.png" }) {
            ...fadeIn
        }
        frontendDevelopment: file(relativePath: { eq: "careers/Front-end-Development.png" }) {
            ...fadeIn
        }
        internalAudit: file(relativePath: { eq: "careers/Internal-Audit.png" }) {
            ...fadeIn
        }
        legalCompliance: file(relativePath: { eq: "careers/Legal-Compliance.png" }) {
            ...fadeIn
        }
        marketingGlobalPartnerships: file(
            relativePath: { eq: "careers/Marketing-Global-Partnerships.png" }
        ) {
            ...fadeIn
        }
        paymentSolutionsIntegration: file(
            relativePath: { eq: "careers/Payment-Solutions-Integration.png" }
        ) {
            ...fadeIn
        }
        peopleManagement: file(relativePath: { eq: "careers/People-Management.png" }) {
            ...fadeIn
        }
        productDesignUX: file(relativePath: { eq: "careers/Product-Design-UX.png" }) {
            ...fadeIn
        }
        projectManagement: file(relativePath: { eq: "careers/Project-Management.png" }) {
            ...fadeIn
        }
        softwareTesting: file(relativePath: { eq: "careers/Software-Testing.png" }) {
            ...fadeIn
        }
        tradingOperations: file(relativePath: { eq: "careers/Trading-Operations.png" }) {
            ...fadeIn
        }
    }
`

const JoinYourTeam = () => {
    const data = useStaticQuery(query)

    const join_your_team_data = [
        {
            img_data: data.backendDevelopment,
            to: '/careers/back-end/',
            img_alt: 'Back-end development jobs at Deriv',
            display_team_name: 'Back-end Development',
            tagline:
                'We develop and fortify our website, platforms, and app architecture that power our users’ experience.',
        },
        {
            img_data: data.marketingGlobalPartnerships,
            to: '/careers/marketing/',
            img_alt: 'Marketing and global partnership jobs at Deriv',
            display_team_name: 'Marketing & Global Partnerships',
            tagline:
                'We conceptualise and implement creative marketing solutions to help our business grow.',
        },
        {
            img_data: data.cyberSecurityIT,
            to: '/careers/cyber-security-it/',
            img_alt: 'Cyber security and IT jobs at Deriv',
            display_team_name: 'Cyber Security & IT',
            tagline:
                'We support all the teams in our organisation to achieve our goals without roadblocks and hiccups.',
        },
        {
            img_data: data.customerSupport,
            to: '/careers/customer-support/',
            img_alt: 'Customer support jobs at Deriv',
            display_team_name: 'Customer Support',
            tagline:
                'We care about providing helpful solutions to our clients to make their trading experience with us even better.',
        },
        {
            img_data: data.peopleManagement,
            to: '/careers/people-management/',
            img_alt: 'People management jobs at Deriv',
            display_team_name: 'People Management',
            tagline:
                'We bring in go-getters, link them with the right opportunities, and support them in every way to help them grow.',
        },
        {
            img_data: data.productDesignUX,
            to: '/careers/product-design/',
            img_alt: 'Product design and UX jobs at Deriv',
            display_team_name: 'Product Design & UX',
            tagline: 'We create design and user experiences that make trading with us enjoyable.',
        },
        {
            img_data: data.legalCompliance,
            to: '/careers/legal-compliance/',
            img_alt: 'Legal and compliance jobs at Deriv',
            display_team_name: 'Legal & Compliance',
            tagline:
                'We navigate the legal and regulatory environment to help our business maintain the highest ethical standards.',
        },
        {
            img_data: data.financeAccounts,
            to: '/careers/finance-accounts/',
            img_alt: 'Finance and account jobs at Deriv',
            display_team_name: 'Finance & Accounts',
            tagline: 'We’re all about helping the company make good decisions about money.',
        },
        {
            img_data: data.paymentSolutionsIntegration,
            to: '/careers/payment-solutions/',
            img_alt: 'Payment solutions and integration jobs at Deriv',
            display_team_name: 'Payment Solutions & Integration',
            tagline:
                'We make it easy for clients to trade from anywhere in the world, with any currency.',
        },
        {
            img_data: data.frontendDevelopment,
            to: '/careers/front-end/',
            img_alt: 'Front-end development jobs at Deriv',
            display_team_name: 'Front-end Development',
            tagline: 'We code creative and user-friendly web pages and platforms.',
        },
        {
            img_data: data.tradingOperations,
            to: '/careers/trading-operations/',
            img_alt: 'Trading operations jobs at Deriv',
            display_team_name: 'Trading Operations',
            tagline:
                'We work behind the scenes to make sure trading operations are functioning as they should.',
        },
        {
            img_data: data.softwareTesting,
            to: '/careers/software-testing/',
            img_alt: 'Software testing jobs at Deriv',
            display_team_name: 'Software Testing',
            tagline:
                'We look after the quality of our websites and trading platforms to deliver a world-class experience.',
        },
        {
            img_data: data.businessExcellence,
            to: '/careers/business-excellence/',
            img_alt: 'Business excellence jobs at Deriv',
            display_team_name: 'Business Excellence',
            tagline:
                'We improve company-wide performance by helping teams optimise their processes and resources.',
        },
        {
            img_data: data.internalAudit,
            to: '/careers/internal-audit/',
            img_alt: 'Internal audit jobs at Deriv',
            display_team_name: 'Internal Audit',
            tagline:
                'We provide independent evaluations of the company to reduce risk and improve operations.',
        },
        {
            img_data: data.projectManagement,
            to: '/careers/project-management/',
            img_alt: 'Project management jobs at Deriv',
            display_team_name: 'Project Management',
            tagline:
                'We take care of collaboration details to ensure that projects are completed in a timely, efficient manner.',
        },
    ]

    return (
        <SectionContainer padding="8rem 0">
            <Container direction="column">
                <DiffHeader as="h3" type="section-title" align="center">
                    Join your team
                </DiffHeader>
            </Container>
            <StyledCssGrid
                columns="repeat(3, 26%)"
                column_gap="2.4rem"
                laptop_columns="repeat(3, 26%)"
                laptop_row_gap="2.4rem"
                tablet_columns="repeat(2, 40%)"
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
                            img_alt={item.img_alt}
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
