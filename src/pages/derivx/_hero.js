import React from "react"
import { localize } from 'components/localization'
import {SectionContainer, Container, Flex } from 'components/containers'
import { LinkButton } from 'components/form'
import { Header } from 'components/elements/typography'

const Hero = () => {
    return (
        <SectionContainer background="black">
            <Container>
                <Flex fd="column" width="588px">
                    <Header type="sub-section-title">
                        Deriv X
                    </Header>
                    <Header as="h2" type="display-title">
                        {localize('The trading platform\n to fit your style')}
                    </Header>
                    <LinkButton secondary to="/signup/">
                        {localize('Create a free demo account')}
                    </LinkButton>
                </Flex>
            </Container>
        </SectionContainer>

    )
}

export default Hero