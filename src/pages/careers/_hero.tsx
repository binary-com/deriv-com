import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './_layout-components/_career_container'
import { Header, BackgroundImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/constants'
import { LocationContext } from 'components/layout/location-context'
import device from 'themes/device'

const StyledHeader = styled(Header)`
    margin-bottom: 2.4rem;
    color: var(--color-white);
    text-align: center;
    font-weight: bold;
    font-size: 80px;
    line-height: 100px;

    @media ${device.tablet} {
        text-align: left;
        font-size: 40px;
        line-height: 50px;
    }
`

const Subheadline = styled(Header)`
    color: var(--color-white);
    max-width: 99.6rem;
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    line-height: 30px;

    @media ${device.tablet} {
        text-align: left;
        font-size: 18px;
        line-height: 26px;
    }
`

const JoinHeader = styled(Header)`
    margin-bottom: 40px;
    margin-top: 3.2rem;
    text-align: center;
    color: var(--color-white);
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;

    @media ${device.tablet} {
        text-align: left;
        font-size: 18px;
        line-height: 26px;
    }
`

const StyledContainer = styled(Container)`
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 60%;

    @media ${device.tablet} {
        padding: 0 2rem;
        align-items: flex-start;
        width: 100%;
    }
`
const StyledLinkButton = styled(LinkButton)`
    padding: 20px 24px;
    font-size: 20px;
    font-weight: bold;
`

const query = graphql`
    query {
        image: file(relativePath: { eq: "careers/career-landing-screen.jpg" }) {
            ...heroImage
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
                    We are Deriv
                </StyledHeader>
                <Subheadline as="h3" type="section-title">
                    We have a huge mission, an incredible team, and rapid growth. But it’s not just
                    about our success — it’s about yours, too.
                </Subheadline>
                <JoinHeader as="h3" type="section-title" size="3.6rem">
                    Join and grow with us.
                </JoinHeader>
                {has_mounted && (
                    <StyledLinkButton
                        secondary
                        to={zoho_url}
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        See our open positions
                    </StyledLinkButton>
                )}
            </StyledContainer>
        </BackgroundImage>
    )
}
export default Hero
