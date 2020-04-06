import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import { Text, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'

const Wrapper = styled.div`
    background: var(--color-black);
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 4.8rem 0;
    z-index: 200;
`

const CookieBanner = ({ onAccept }) => {
    return (
        <Wrapper>
            <Container direction="column">
                <Text color="white" mb="2.4rem">
                    <Localize
                        translate_text="Our website uses cookies to give you the best user experience. For more information, <0>view our policy</0>."
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/terms-and-conditions/"
                                color="red"
                                weight="bold"
                            />,
                        ]}
                    />
                </Text>
                <Button secondary onClick={onAccept}>
                    {localize('Accept')}
                </Button>
            </Container>
        </Wrapper>
    )
}

CookieBanner.propTypes = {
    onAccept: PropTypes.func,
}

export default CookieBanner
