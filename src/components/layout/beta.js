import React from 'react'
import styled from 'styled-components'
import Info from 'images/svg/information.svg'
import { Text } from 'components/elements/typography'
import { Localize } from 'components/localization'

const Wrapper = styled.div`
    width: 100%;
    min-height: 4.8rem;
    padding: 1.2rem 1rem;
    background-color: var(--color-yellow);
`

const StyledInfo = styled(Info)`
    position: relative;
    margin-right: 0.75rem;
    top: 0.15rem;
`

const BetaBanner = () => (
    <Wrapper>
        <Text align="center">
            <StyledInfo />
            <Localize
                translate_text="<0>Deriv is in beta.</0> It has not been officially released and still undergoing testing. Things may not function as expected."
                components={[<strong key={0} />]}
            />
        </Text>
    </Wrapper>
)

export default BetaBanner
