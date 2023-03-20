import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements/typography'
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
}
const StyledText = styled(Header)`
    font-size: 24px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 18px;
    }
`
const OptionGrid = styled(Grid)`
    grid-gap: 2.4rem;
    max-width: 890px;
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
const BoxStyledGrid: React.FC<TProps> = ({ items }) => {
    return (
        <OptionGrid>
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
