import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TPlatformModel } from '../types'
import ItemHeroImage from './item_hero.image'
import CarouselItemDetail from './carousel_item.detail'
import PlatformCarouselBadges from './carousel.badges'
import device from 'themes/device'
import useCarousel from 'components/elements/michosel/use-carousel'

export const CarouselItemWrapper = styled.div`
    width: 380px;
    height: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-inline: 24px;
    @media ${device.tabletL} {
        display: block;
        width: 100%;
        height: 100%;
    }
`

const HeroImageContainer = styled.div`
    height: 55vw;
    display: flex;
`

type TPlatformCarouselItem = {
    item: TPlatformModel
}

const PlatformCarouselItem = ({ item }: TPlatformCarouselItem) => {
    const { image_key, title, description, icon, learn_more_link, download_links } = item
    const {
        config: { mode },
    } = useCarousel()

    const is_horizontal = useMemo(() => {
        return mode === 'horizontal'
    }, [mode])

    return (
        <CarouselItemWrapper>
            {is_horizontal && (
                <HeroImageContainer>
                    <ItemHeroImage image_key={image_key} />
                </HeroImageContainer>
            )}
            <CarouselItemDetail
                learn_more_link={learn_more_link}
                title={title}
                description={description}
                icon={icon}
            />

            {is_horizontal && <PlatformCarouselBadges badges={download_links} />}
        </CarouselItemWrapper>
    )
}

export default PlatformCarouselItem
