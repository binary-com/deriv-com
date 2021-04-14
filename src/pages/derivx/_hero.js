import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import {SectionContainer, Container, Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements/typography'
import { BackgroundImage } from 'components/elements'

const query = graphql`
    query {
        image: file(relativePath: { eq: "derivx/hero-laptop.png" }) {
            ...backGroundBlur
        }
    }
`

const Hero = () => {
    const data = useStaticQuery(query);
    return (
        <SectionContainer background="black">
            <Container>
                <Flex fd="column" width="588px">
                    <Header type="sub-section-title" color="white">
                        Deriv X
                    </Header>
                    <Header as="h2" type="display-title" color="white" mt="14px">
                        {localize('The trading platform to fit your style')}
                    </Header>
                    <LinkButton secondary to="/signup/" mt="32px" width="217px">
                        {localize('Create a free demo account')}
                    </LinkButton>
                </Flex>
                <Flex jc = "flex-end">
                    <BackgroundImage
                        data={data.image}
                        style={{
                            height: '546px',
                            width: '605px',
                            backgroundColor: '#0e0e0e',
                        }}
                    />
                </Flex>
            </Container>
        </SectionContainer>

    )
}

export default Hero