import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography'
import device from 'themes/device'
import { HowItWorksItem } from 'pages/trade-types/components/_style'
import { Localize, localize } from 'components/localization'
import { Flex } from 'components/containers'
import { TString } from 'types/generics'

export type TItem = {
    icon: string
    title: TString
    subtitle: TString
    image_alt: TString
}

type TBoxStyledFlex = {
    items: TItem[]
    containerWidth?: string
    boxsPerRow?: number
}

const StyledText = styled(Header)`
    padding-block-end: 8px;
    font-size: 24px;

    @media ${device.tabletL} {
        font-size: 18px;
    }
`
const OptionFlex = styled(Flex)<{ boxsPerRow: number; containerWidth: string }>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({ boxsPerRow }) => (boxsPerRow > 3 ? 'flex-start' : 'center')};
    gap: 24px;
    inline-size: ${(props) => props.containerWidth || '890px'};
`
const OptionItems = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.8rem;
`
const StyledHowItWorksItem = styled(HowItWorksItem)`
    box-shadow: 0px 12px 16px -4px rgba(14, 14, 14, 0.08), 0px 4px 6px -2px rgba(14, 14, 14, 0.03);
    border-radius: 16px;
    max-inline-size: 282px;
    min-block-size: 332px;

    @media ${device.tabletL} {
        max-inline-size: 328px;
        min-block-size: 216px;
    }
`
const StyledSubText = styled(Header)`
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;

    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
    }
`
const ImageWrapper = styled.div`
    padding-block-end: 26px;

    @media ${device.tabletL} {
        padding-block-end: 16px;
    }
`

const BoxStyledFlex = ({ items, containerWidth, boxsPerRow = 3 }: TBoxStyledFlex) => {
    return (
        <OptionFlex containerWidth={containerWidth} boxsPerRow={boxsPerRow}>
            {items.map(({ title, icon, image_alt, subtitle }) => {
                return (
                    <StyledHowItWorksItem key={title}>
                        <OptionItems>
                            <ImageWrapper>
                                <img src={icon} alt={localize(image_alt)} />
                            </ImageWrapper>
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
        </OptionFlex>
    )
}

export default BoxStyledFlex
