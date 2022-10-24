import React from 'react'
import styled from 'styled-components'
import { TMarketModel, TUseStaticMarketImagesQuery } from './_type'
import { Header, QueryImage, Text } from 'components/elements'
import { LocalizedLink, Localize, localize } from 'components/localization'
import { Flex } from 'components/containers'
import { TColor } from 'themes/theme.types'
import device from 'themes/device'

const ItemWrapper = styled.div`
    z-index: 4;
    height: 320px;
    position: relative;
`

const StyledDescription = styled(Text)`
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.01);
    z-index: 2;
    color: white;
`

const CarouselItemImage = styled(QueryImage)`
    position: absolute;
    width: 220px;
    top: 91px;
    right: 31px;
    transition: ease-in 0.3s;
    z-index: 3;
`

const CarouselItemContainer = styled(Flex)<{ gradient_start: TColor; gradient_end: TColor }>`
    position: relative;
    border-radius: 8px;
    color: white;
    overflow: hidden;
    padding: 32px 32px 0;
    width: 400px;
    z-index: 1;
    background: linear-gradient(
        233.94deg,
        ${(props) => props.gradient_start} 2.4%,
        ${(props) => props.gradient_end} 81.78%
    );

    ${StyledDescription} {
        visibility: hidden;
    }

    @media (min-width: 768px) {
        &:hover {
            ${StyledDescription} {
                visibility: visible;
            }
            ${CarouselItemImage} {
                top: 220px;
            }
        }
    }

    @media (min-width: 1440px) {
        padding: 1.6rem 1.6rem 0;
    }
    @media ${device.desktop} {
        width: 282px;
    }
`

const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    z-index: 40;
`

type TCaroselItemProps = {
    item: TMarketModel
    image_data: TUseStaticMarketImagesQuery
}

const MarketFoldCarouselItem = ({ item, image_data }: TCaroselItemProps) => {
    const { header, description, img_name, gradient_start, gradient_end, to } = item

    return (
        <ItemWrapper>
            <StyledLink to={to}>
                <CarouselItemContainer
                    direction="column"
                    jc="flex-start"
                    gradient_start={gradient_start}
                    gradient_end={gradient_end}
                >
                    <Header color="white" type="subtitle-1" mb="8px">
                        <Localize translate_text={header} />
                    </Header>
                    <StyledDescription lh="24px" type="paragraph-1">
                        <Localize translate_text={description} />
                    </StyledDescription>
                    <CarouselItemImage data={image_data[img_name]} alt={localize(header)} />
                </CarouselItemContainer>
            </StyledLink>
        </ItemWrapper>
    )
}

export default MarketFoldCarouselItem
