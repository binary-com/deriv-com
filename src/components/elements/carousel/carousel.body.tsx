import React, { forwardRef, ReactNode } from 'react'
import Slides from './carousel.slides'
import { Container } from './carousel.styles'
import ViewPort from './carousel.viewport'

export interface ICarouselBody extends React.HtmlHTMLAttributes<HTMLDivElement> {
    render_nav?: () => ReactNode
    render_controls?: () => ReactNode
}

const CarouselBody = (
    { render_nav, render_controls, children, ...rest }: React.PropsWithChildren<ICarouselBody>,
    ref: React.ForwardedRef<HTMLDivElement>,
) => {
    return (
        <Container>
            <ViewPort ref={ref} {...rest}>
                <Slides>{children}</Slides>
            </ViewPort>
            {render_nav?.()}
            {render_controls?.()}
        </Container>
    )
}

export default forwardRef<HTMLDivElement, React.PropsWithChildren<ICarouselBody>>(CarouselBody)
