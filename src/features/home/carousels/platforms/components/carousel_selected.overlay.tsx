import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TPlatformModel, TPlatformSmartContent } from '../types'
import { CarouselItemWrapper } from './carousel.item'
import CarouselItemDetail from './carousel_item.detail'
import useCarousel from 'components/elements/carousel/use-carousel'

const SelectedItemContainer = styled(CarouselItemWrapper)`
    position: absolute;
    top: 30%;
    background-color: var(--color-white);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: rgba(131, 131, 131, 0.15) 0 16px 20px, rgba(131, 131, 131, 0.15) 0 0 20px;
    z-index: 4;
`

type TSelectedOverlayProps = {
    visible_data: TPlatformSmartContent[]
}

const SelectedOverlay = ({ visible_data }: TSelectedOverlayProps) => {
    const [item, setItem] = useState<TPlatformModel>(() => {
        const index = embla?.selectedScrollSnap() ?? 0
        return visible_data[index].data
    })
    const { embla } = useCarousel()

    useEffect(() => {
        if (embla) {
            embla.on('select', () => {
                const index = embla.selectedScrollSnap()
                setItem(visible_data[index].data)
            })
        }
    }, [embla, visible_data])

    return (
        <SelectedItemContainer>
            {item && (
                <CarouselItemDetail
                    title={item.title}
                    icon={item.icon}
                    description={item.description}
                    learn_more_link={item.learn_more_link}
                    is_from_slider
                />
            )}
        </SelectedItemContainer>
    )
}

export default SelectedOverlay
