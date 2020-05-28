import React from 'react'
import { Container, SectionContainer } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'

const WhatTodoNext = () => {
    return (
        <SectionContainer>
            <Container direction="column" ai="center">
                <Header as="h3" mb="0.8rem" align="center">
                    {localize('What do I do next?')}
                </Header>
                <Text mb="2rem" align="center">
                    <Localize
                        translate_text="We hope these answers have helped you to know more about <0>Deriv.com</0> and our motivation for the rebranding."
                        components={[<LocalizedLinkText key={0} weight="bold" to="/" />]}
                    />
                </Text>
                <Text align="center">
                    <Localize
                        translate_text="To be clear, this rebranding has been inspired by you. We are thrilled to upgrade you to a new and improved trading experience on <0>Deriv.com</0> where you can trade what you want, when you want, and how you want."
                        components={[<LocalizedLinkText key={0} weight="bold" to="/" />]}
                    />
                </Text>
            </Container>
        </SectionContainer>
    )
}

export default WhatTodoNext
