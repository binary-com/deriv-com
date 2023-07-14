import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'

const SectionWrapper = styled(SectionContainer)`
    background: var(--color-white);
    padding: 80px 120px;
    @media ${device.tabletL} {
        padding: 40px 16px;
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
                <StyledHeader type="section-title" weight="normal">
                    <Localize translate_text="_t_Trade synthetics with our new jump indices and take advantage of the constant volatility with a twist — price jumps._t_" />
                </StyledHeader>
            </Flex>
        </SectionWrapper>
    )
}

export default DBanner
