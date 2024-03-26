import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import { Grid, HowItWorksItem } from 'pages/trade-types/components/_style'
import { Flex } from 'components/containers'
import { TString } from 'types/generics'
import { Localize, localize } from 'components/localization'

type TBoxStyledGridItem = {
    icon: string
    title: TString
    subtitle: TString
    image_alt: TString
}

type TBoxStyledGrid = {
    items: TBoxStyledGridItem[]
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

const BoxStyledGrid = ({ items, containerWidth, boxsPerRow = '3' }: TBoxStyledGrid) => {
    return (
        <OptionGrid containerWidth={containerWidth} boxsPerRow={boxsPerRow}>
            {items.map(({ icon, image_alt, title, subtitle }) => {
                return (
                    <StyledHowItWorksItem key={title}>
                        <OptionItems>
                            <div>
                                <img src={icon} alt={localize(image_alt)} />
                            </div>
                            <StyledText>
                                <Localize translate_text={title} />
                            </StyledText>
                        </OptionItems>
                        <StyledSubText as="p" type="paragraph-1">
                            <Localize translate_text={subtitle} />
                        </StyledSubText>
                    </StyledHowItWorksItem>
                )
            })}
        </OptionGrid>
    )
}

export default BoxStyledGrid
