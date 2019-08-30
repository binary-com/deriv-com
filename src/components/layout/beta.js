import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements/typography'
import { Localize } from 'components/localization'

const Wrapper = styled.div`
    width: 100%;
    height: 4.8rem;
    padding: 1.2rem 0;
    background-color: var(--color-yellow);
`

const BetaBanner = () => (
    <Wrapper>
        <Text align="center">
            <Localize
                translate_text="<0>Deriv is in beta.</0> It has not been officially released and still undergoing testing. Things may not function as expected."
                components={[<strong key={0} />]}
            />
        </Text>
    </Wrapper>
)

export default BetaBanner
