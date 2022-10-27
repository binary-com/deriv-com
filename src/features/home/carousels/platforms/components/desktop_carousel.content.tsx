import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { EmblaCarouselType } from 'embla-carousel-react'
import { TPlatformModel, TPlatformSmartContent } from '../types'
import PlatformCarouselBadges from './carousel.badges'
import ItemHeroImage from './item_hero.image'

const DetailContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const HeroImageContainer = styled.div`
    max-height: 550px;
    height: 100%;
    display: flex;
`

type TPlatformContentDetailsProps = {
    item?: TPlatformModel
    items: TPlatformSmartContent[]
    embla: EmblaCarouselType
}

const PlatformContentContainer = ({ items, embla }: TPlatformContentDetailsProps) => {
    const [selected, setSelected] = useState<TPlatformModel>(items[0].data)

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                setSelected(items[embla.selectedScrollSnap()].data)
            })
            embla.on('scroll', () => {
                setSelected(items[embla.selectedScrollSnap()].data)
            })
        }
    }, [embla, items])

    return (
        <DetailContainer>
            <HeroImageContainer>
                <ItemHeroImage image_key={selected.image_key} />
            </HeroImageContainer>
            <PlatformCarouselBadges badges={selected.download_links} />
        </DetailContainer>
    )
}

export default PlatformContentContainer
