import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './_career-container'
import { HeaderProps } from './_dept-layout.types'
import { Header, BackgroundImage } from 'components/elements'
import device from 'themes/device'

const StyledBackGroundImage = styled(BackgroundImage)`
    height: 660px;

    @media ${device.tablet} {
        height: 560px;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
    color: var(--color-white);

    @media ${device.tablet} {
        text-align: left;
    }
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;

    @media ${device.tablet} {
        text-align: left;
    }
`

const StyledContainer = styled(Container)`
    max-width: 984px;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    @media ${device.tablet} {
        padding: 0 2rem;
    }
`

const query = graphql`
    query {
        back_end_bg: file(relativePath: { eq: "careers-2/back-end-bg.png" }) {
            ...fadeIn
        }
        business_excellence_bg: file(relativePath: { eq: "careers-2/business-excellence-bg.png" }) {
            ...fadeIn
        }
        compliance_bg: file(relativePath: { eq: "careers-2/compliance-bg.png" }) {
            ...fadeIn
        }
        cs_bg: file(relativePath: { eq: "careers-2/cs-bg.png" }) {
            ...fadeIn
        }
        security_bg: file(relativePath: { eq: "careers-2/security-bg.png" }) {
            ...fadeIn
        }
        finance_bg: file(relativePath: { eq: "careers-2/finance-bg.png" }) {
            ...fadeIn
        }
        front_end_bg: file(relativePath: { eq: "careers-2/front-end-bg.png" }) {
            ...fadeIn
        }
        internal_audit_bg: file(relativePath: { eq: "careers-2/internal-audit-bg.png" }) {
            ...fadeIn
        }
        marketing_bg: file(relativePath: { eq: "careers-2/marketing-bg.png" }) {
            ...fadeIn
        }
        payments_bg: file(relativePath: { eq: "careers-2/payments-bg.png" }) {
            ...fadeIn
        }
        people_management_bg: file(relativePath: { eq: "careers-2/people-management-bg.png" }) {
            ...fadeIn
        }
        product_bg: file(relativePath: { eq: "careers-2/product-bg.png" }) {
            ...fadeIn
        }
        pm_bg: file(relativePath: { eq: "careers-2/pm-bg.png" }) {
            ...fadeIn
        }
        software_testing_bg: file(relativePath: { eq: "careers-2/software-testing-bg.png" }) {
            ...fadeIn
        }
        trading_operations_bg: file(relativePath: { eq: "careers-2/trading-operations-bg.png" }) {
            ...fadeIn
        }
    }
`

type HeaderDataProps = {
    data: HeaderProps
}

const Hero = (header_data: HeaderDataProps) => {
    const data = useStaticQuery(query)
    return (
        <StyledBackGroundImage
            data={data[header_data.data.background]}
            alt={'Deriv careers'}
            style={{
                backgroundSize: `cover`,
                backgroundColor: 'var(--color-black)',
                maxWidth: '100%',
            }}
            dark="0.3"
        >
            <StyledContainer>
                <StyledHeader align="center" as="h1" type="display-title">
                    {header_data.data.title}
                </StyledHeader>
                <Subheadline align="center" as="h3" type="subtitle-1" weight="400">
                    {header_data.data.subtitle}
                </Subheadline>
            </StyledContainer>
        </StyledBackGroundImage>
    )
}
export default Hero
