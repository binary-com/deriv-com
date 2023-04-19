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
    containerWidth?: string
    boxsPerRow?: string
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
    grid-template-columns: ${(props) => `repeat(${props.boxsPerRow}, 1fr)`};
    max-width: ${(props) => props.containerWidth || '890px'};
    @media ${device.tabletL} {
        grid-gap: 3rem;
        grid-template-columns: 1fr 1fr;
    }
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
const StyledHowItWorksItem = styled(HowItWorksItem)`
    box-shadow: 0px 12px 16px -4px rgba(14, 14, 14, 0.08), 0px 4px 6px -2px rgba(14, 14, 14, 0.03);
    border-radius: 16px;
`
const StyledSubText = styled(Header)`
    color: var(--color-black-9);
    font-weight: normal;

    @media ${device.tabletL} {
        font-size: 14px;
    }
`
const BoxStyledGrid: React.FC<TProps> = ({ items, containerWidth, boxsPerRow = '3' }) => {
    return (
        <OptionGrid containerWidth={containerWidth} boxsPerRow={boxsPerRow}>
            {items.map((item, index) => {
                return (
                    <StyledHowItWorksItem key={index}>
                        <OptionItems>
                            <div>
                                <img src={item.icon} alt={item.image_alt} />
                            </div>
                            <StyledText>{item.title}</StyledText>
                        </OptionItems>
                        <StyledSubText as="p" type="paragraph-1">
                            {item.subtitle}
                        </StyledSubText>
                    </StyledHowItWorksItem>
                )
            })}
        </OptionGrid>
    )
}

export default BoxStyledGrid
