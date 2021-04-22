import React from "react"
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { SectionContainer, Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements/typography'
import { QueryImage } from 'components/elements'
import device from 'themes/device'

const query = graphql`
    query {
        image: file(relativePath: { eq: "derivx/hero-laptop.png" }) {
            ...backGroundBlur
        }
    }
`

// const StyledFlex = styled(Flex)`
//     width: 620px;
//     height: 561px;

//     @media ${device.tablet}{
//         width: 360px;
//         height: 293px;
//     }
// `

const StyledFlex = styled.div`
    width: 100%;
    max-width: 58rem;
    position: absolute;
    top: 2.3rem;
    right: 12rem;

    @media ${device.laptopM} {
        max-width: 51rem;
    }
    @media ${device.tabletL} {
        max-width: 54rem;
        right: 3rem;
    }
    @media ${device.tablet} {
        position: relative;
    }
    @media ${device.mobileL} {
        max-width: 425px;
        top: 0;
        right: 0;
        margin-bottom: 25px;
    }
`

const Wrapper = styled(Flex)`
    position: relative;
    justify-content: flex-start;
    background-color: var(--color-black);
    height: unset;
    min-height: 60.2rem;
    padding: 2rem 12rem;

    @media ${device.laptopM} {
        height: 52.7rem;
        min-height: unset;
    }
    @media ${device.laptop} {
        height: 56.8rem;
        padding: 2rem 8rem;
    }
    @media ${device.tabletL} {
        height: 53rem;
    }
    @media ${device.tablet} {
        padding: 0 0 40px;
        height: unset;
        flex-direction: column-reverse;
    }
`

const InformationWrapper = styled(Flex)`
    width: 100%;
    max-width: 56.2rem;
    z-index: 1;

    @media (max-width: 1376px) {
        max-width: 52rem;
    }
    @media (max-width: 1270px) {
        max-width: 46rem;
    }
    @media ${device.laptopM} {
        max-width: 40rem;
    }
    @media ${device.laptop} {
        max-width: 38rem;
    }
    @media ${device.tablet} {
        top: 280px;
        max-width: 450px;
        padding: 0 16px;
        margin-top: 20px;
    }
    @media ${device.mobileL} {
        margin-top: 0;
    }
    @media ${device.mobileS} {
        padding: 0 12px;
    }
`

const Hero = () => {
    const data = useStaticQuery(query);
    return (
        <SectionContainer background="black">
            <Wrapper>
                <InformationWrapper fd="column" height="unset">
                    <Header type="sub-section-title" color="white">
                        Deriv X
                        </Header>
                    <Header as="h2" type="display-title" color="white" mt="14px">
                        {localize('The trading platform to fit your style')}
                    </Header>
                    <LinkButton secondary to="/signup/" mt="32px" width="217px">
                        {localize('Create a free demo account')}
                    </LinkButton>
                </InformationWrapper>
                <StyledFlex >
                    <QueryImage
                        data={data.image}
                    />
                </StyledFlex>
            </Wrapper>
        </SectionContainer>

    )
}

export default Hero