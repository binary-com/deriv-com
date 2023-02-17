import React, { HTMLProps } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'components/containers'
import device from 'themes/device'

type MarketsAccordionProps = HTMLProps<HTMLDivElement> & {
    renderTitle: () => JSX.Element
}

const Wrapper = styled.div`
    border: 1px solid var(--color-grey-22);
    border-radius: 8px;
`
const Title = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const Details = styled(Box)`
    border-radius: 0 0 8px 8px;
    border-top: 1px solid var(--color-grey-22);
    padding: 0.8rem 2.4rem 2.4rem 2.4rem;

    @media ${device.tabletL} {
        padding: 1rem 1rem 2rem 1rem;
    }
`

const MarketsAccordion = ({ renderTitle, children }: MarketsAccordionProps) => {
    return (
        <Wrapper>
            <Title>{renderTitle()}</Title>
            <Details background="var(--color-white)">{children}</Details>
        </Wrapper>
    )
}

export default MarketsAccordion
