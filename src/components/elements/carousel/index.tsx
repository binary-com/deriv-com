import React, { useMemo } from 'react'
import type { EmblaCarouselType } from 'embla-carousel-react'
import Controls from './carousel.controls'
import Provider from './carousel.provider'
import ViewPort from './carousel.viewport'
import Body from './carousel.body'
import { TCarouselMode, TCarouselConfig } from './carousel.types'
import Slides from './carousel.slides'
import { Slide, Container } from './carousel.styles'
import NavigationContainer from './carousel.navigation-container'
import Navigation from './carousel.navigation'
import CarouselNav from './carousel.nav'

export interface ICarouselProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    embla: EmblaCarouselType
    mode?: TCarouselMode
    config?: TCarouselConfig
}

const carousel_default_config: TCarouselConfig = {
    controls_active_color: '#ff2244',
    controls_offset: -30,
    nav_color: 'orange',
    nav_offset: -30,
    nav_placement: 'end',
    mode: 'horizontal',
}

const Carousel = ({ children, embla, config, ...rest }: ICarouselProps) => {
    const carousel_config = useMemo(() => {
        return { ...carousel_default_config, ...config }
    }, [config])

    return (
        <div {...rest}>
            <Provider embla={embla} config={carousel_config}>
                {children}
            </Provider>
        </div>
    )
}
Carousel.Container = Container
Carousel.ViewPort = ViewPort
Carousel.Body = Body
Carousel.Slides = Slides
Carousel.Controls = Controls
Carousel.NavigationContainer = NavigationContainer
Carousel.Navigation = Navigation
Carousel.Slide = Slide
Carousel.Nav = CarouselNav

export default Carousel
