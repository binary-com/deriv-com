import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const SectionWrapper = styled(SectionContainer)`
    background: var(--color-white);
    padding: 120px 0;
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`
const StyledHeader = styled(Header)`
    text-align: center;
    max-width: 1200px;
    @media ${device.tabletL} {
        max-width: 58.8rem;
    }
`

const DBanner = () => {
    return (
        <SectionWrapper>
            <Flex>
                <StyledHeader type="heading-3" weight="normal">
                    {localize(
                        'We’ve moved our trading platforms to Deriv so we can focus onboosting your trading experience.',
                    )}
                </StyledHeader>
            </Flex>
        </SectionWrapper>
    )
}

export default DBanner
