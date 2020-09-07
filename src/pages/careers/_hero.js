import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './_layout-components/_container'
import { Header, BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/utility'
import { LocationContext } from 'components/layout/location-context.js'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    font-size: var(--text-size-xxl);
    margin-bottom: 2.4rem;
    color: var(--color-white);
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;
`

const JoinHeader = styled(Header)`
    font-size: var(--text-size-header-1);
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

        ${StyledHeader} {
            font-size: 3.6rem;
        }
        ${Subheadline} {
            font-size: 2.4rem;
        }
        ${JoinHeader} {
            font-size: 2.4rem;
        }
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
                    ...GatsbyImageSharpFluid
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
            }}
            dark="0.3"
        >
            <StyledContainer>
                <StyledHeader as="h2">
                    Be part of something <RedBanner>big</RedBanner>.
                </StyledHeader>
                <Subheadline as="h3">
                    We have a huge mission, an incredible team, and rapid growth. But it’s not just
                    about our success — it’s about yours.
                </Subheadline>
                <JoinHeader as="h3">Join and grow with us.</JoinHeader>
                {has_mounted && (
                    <LinkButton
                        secondary="true"
                        to={zoho_url}
                        external
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
