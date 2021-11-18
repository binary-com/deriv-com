import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device.js'

const SectionWrapper = styled(SectionContainer)`
    background: var(--color-white);
    padding: 120px 0;
    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

const DBanner = () => {
    return (
        <SectionWrapper>
            <Flex>
                <Header
                    type="heading-3"
                    weight="normal"
                    align="center"
                    max_width="90rem"
                    as="h3"
                    tabletL={{ max_width: '58.8rem' }}
                >
                    We’ve moved our trading platforms to Deriv so we can focus on boosting your
                    trading experience.
                </Header>
            </Flex>
        </SectionWrapper>
    )
}

export default DBanner
