import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import { Grid, HowItWorksItem } from 'pages/trade-types/components/_style'
import { Flex } from 'components/containers'

type TItem = {
    icon: string
    title: JSX.Element
    subtitle: JSX.Element
    image_alt: string
}

type TProps = {
    items: TItem[]
    containerWidth: string
    boxsPerRow: string
}
const StyledText = styled(Header)`
    font-size: 24px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 18px;
    }
`
const OptionGrid = styled(Grid)<{ boxsPerRow: string; containerWidth: string }>`
    grid-gap: 2.4rem;
    grid-template-columns: ${(props) => `repeat(${props.boxsPerRow}, 1fr)` || `repeat(3, 1fr)`};
    max-width: ${(props) => props.containerWidth || '890px'};
    @media ${device.tablet} {
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }
    @media ${device.mobileL} {
        grid-template-columns: 1fr;
    }
`

const OptionItems = styled(Flex)`
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    margin-bottom: 0.8rem;
`
const StyledSubText = styled(Header)`
    font-size: 16px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const BoxStyledGrid: React.FC<TProps> = ({ items, containerWidth, boxsPerRow = 3 }) => {
    return (
        <OptionGrid containerWidth={containerWidth} boxsPerRow={boxsPerRow}>
            {items.map((item, index) => {
                return (
                    <HowItWorksItem key={index}>
                        <OptionItems>
                            <div>
                                <img src={item.icon} alt={item.image_alt} />
                            </div>
                            <StyledText>{item.title}</StyledText>
                        </OptionItems>
                        <StyledSubText weight="400">{item.subtitle}</StyledSubText>
                    </HowItWorksItem>
                )
            })}
        </OptionGrid>
    )
}

export default BoxStyledGrid
