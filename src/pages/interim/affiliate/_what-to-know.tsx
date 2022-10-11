import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer } from 'components/containers'
import { Header, LocalizedLinkText, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { affiliate_signin_url, login_url } from 'common/constants'

const Span = styled(Text).attrs({ as: 'span' })`
    font-size: var(--text-size-m);
`

const WhatToKnow = () => {
    return (
        <SectionContainer>
            <Container direction="column" ai="center">
                <Header as="h3" type="section-title" mb="0.8rem" align="center">
                    {localize('What you need to know')}
                </Header>
                <Text size="var(--text-size-m)" align="center">
                    {localize(
                        'As part of our rebranding exercise, your affiliate login URL will change.',
                    )}
                </Text>
                <Text align="center" size="var(--text-size-m)">
                    <Localize
                        translate_text="The new affiliate login URL will change to <0>{{login_url}}</0> and you will automatically be redirected to this address on <1>3 June 2020 (Wednesday)</1>."
                        values={{ login_url }}
                        components={[
                            <LocalizedLinkText
                                key={1}
                                external
                                to={affiliate_signin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="red"
                                size="24px"
                                type="affiliate_sign_in"
                            />,
                            <Span key={1} weight="bold" />,
                        ]}
                    />
                </Text>
            </Container>
        </SectionContainer>
    )
}

export default WhatToKnow
