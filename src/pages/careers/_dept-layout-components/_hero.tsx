import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './_career-container'
import { HeaderProps } from './_dept-layout.types'
import { Header, BackgroundImage } from 'components/elements'
import device from 'themes/device'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

type HeaderDataProps = {
    data: HeaderProps
}

const query = graphql`
    query {
        back_end_bg: file(relativePath: { eq: "careers-2/back-end-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        business_excellence_bg: file(relativePath: { eq: "careers-2/business-excellence-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        compliance_bg: file(relativePath: { eq: "careers-2/compliance-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        cs_bg: file(relativePath: { eq: "careers-2/cs-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        security_bg: file(relativePath: { eq: "careers-2/security-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        finance_bg: file(relativePath: { eq: "careers-2/finance-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        front_end_bg: file(relativePath: { eq: "careers-2/front-end-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        internal_audit_bg: file(relativePath: { eq: "careers-2/internal-audit-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        marketing_bg: file(relativePath: { eq: "careers-2/marketing-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        payments_bg: file(relativePath: { eq: "careers-2/payments-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        human_resources_bg: file(relativePath: { eq: "careers-2/human-resources-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        product_bg: file(relativePath: { eq: "careers-2/product-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        pm_bg: file(relativePath: { eq: "careers-2/pm-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        software_testing_bg: file(relativePath: { eq: "careers-2/software-testing-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        trading_operations_bg: file(relativePath: { eq: "careers-2/trading-operations-bg.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
        business_intelligence_bg: file(
            relativePath: { eq: "careers-2/business-intelligence-bg.png" }
        ) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
            }
        }
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
    color: var(--color-white);

    @media ${device.tablet} {
        text-align: start;
    }
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;

    @media ${device.tablet} {
        text-align: start;
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

const Hero = (header_data: HeaderDataProps) => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize(768)
    const image_height = is_mobile ? '560px' : '660px'

    return (
        <BackgroundImage
            data={data[header_data.data.background]}
            alt="Deriv careers"
            child_style={{ height: image_height }}
            image_opacity="0.3"
        >
            <StyledContainer>
                <StyledHeader align="center" as="h1" type="display-title">
                    {header_data.data.title}
                </StyledHeader>
                <Subheadline align="center" as="h3" type="subtitle-1" weight="400">
                    {header_data.data.subtitle}
                </Subheadline>
            </StyledContainer>
        </BackgroundImage>
    )
}

export default Hero
