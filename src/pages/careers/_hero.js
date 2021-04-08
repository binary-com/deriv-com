import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './_layout-components/_container'
import { Header, BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/constants'
import { LocationContext } from 'components/layout/location-context.js'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;
`

const JoinHeader = styled(Header)`
    margin-bottom: 4.8rem;
    margin-top: 3.2rem;
    color: var(--color-white);
`

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: flex-start;
    height: 100%;

    @media ${device.tablet} {
        padding: 0 2rem;
    }
`

const RedBanner = styled.span`
    color: var(--color-red);
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "careers/career-landing-screen.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 2048) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                    originalName
                }
            }
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query)

    const { has_mounted } = React.useContext(LocationContext)

    return (
        <BackgroundImage
            data={data.image}
            alt={'Deriv careers'}
            style={{
                height: '90vh',
                width: '100vw',
                backgroundSize: `cover`,
                backgroundColor: 'var(--color-black)',
                maxWidth: '100%',
            }}
            dark="0.3"
        >
            <StyledContainer>
                <StyledHeader as="h1" type="display-title">
                    Be part of something <RedBanner>big</RedBanner>.
                </StyledHeader>
                <Subheadline as="h3" type="section-title">
                    We have a huge mission, an incredible team, and rapid growth. But it’s not just
                    about our success — it’s about yours.
                </Subheadline>
                <JoinHeader as="h3" type="section-title" size="3.6rem">
                    Join and grow with us.
                </JoinHeader>
                {has_mounted && (
                    <LinkButton
                        secondary="true"
                        to={zoho_url}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View open positions
                    </LinkButton>
                )}
            </StyledContainer>
        </BackgroundImage>
    )
}
export default Hero
