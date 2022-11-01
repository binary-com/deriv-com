import React, { useCallback, useEffect, useState } from 'react'
import { StyledDot } from './carousel.styles'
import useCarousel from './use-carousel'
import { ColorPalette } from 'themes/theme.types'

export type NavigationButtonProps = {
    color: ColorPalette
    is_enabled: boolean
    onClick: () => void
}

const NavigationButton = ({ color, is_enabled, onClick }: NavigationButtonProps) => (
    <StyledDot onClick={onClick} color={is_enabled ? color : null} />
)

const Navigation = () => {
    const [slide_count, setSlideCount] = useState(0)
    const [selected, setSelected] = useState(0)
    const {
        embla,
        config: { nav_color },
    } = useCarousel()
    useEffect(() => {
        if (embla) {
            setSlideCount(embla.slideNodes().length)
            embla.on('select', () => {
                setSelected(embla.selectedScrollSnap)
            })
        }
    }, [embla])

    const scrollTo = useCallback(
        (index) => {
            if (!embla) return
            embla.scrollTo(index)
        },
        [embla],
    )

    return (
        <>
            {Array.from(Array(slide_count).keys()).map((item) => {
                return (
                    <NavigationButton
                        key={item}
                        color={nav_color}
                        is_enabled={item === selected}
                        onClick={() => scrollTo(item)}
                    />
                )
            })}
        </>
    )
}

export default Navigation
