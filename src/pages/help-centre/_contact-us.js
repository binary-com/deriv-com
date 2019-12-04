import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'

const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 140px;
    background-color: var(--color-grey-9);
    align-items: center;
`
const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-black-3);
`
export const Contact = () => {
    return (
        <Wrapper>
            <Header as="h2" align="center">
                <Localize
                    translate_text="Didn’t find your answer? <0>Contact Us</0>"
                    components={[<StyledLink key={0} target="_blank" to="/contact-us/" />]}
                />
            </Header>
        </Wrapper>
    )
}
