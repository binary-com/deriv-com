import React, { forwardRef, ReactNode } from 'react'
import Slides from './carousel.slides'
import { Container } from './carousel.styles'
import ViewPort from './carousel.viewport'

export interface ICarouselBodyProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    render_nav?: () => ReactNode
    render_controls?: () => ReactNode
}

const CarouselBody = forwardRef<HTMLDivElement, React.PropsWithChildren<ICarouselBodyProps>>(
    ({ render_nav, render_controls, children, ...rest }, ref) => {
        return (
            <Container>
                <ViewPort ref={ref} {...rest}>
                    <Slides>{children}</Slides>
                </ViewPort>
                {render_nav?.()}
                {render_controls?.()}
            </Container>
        )
    },
)
CarouselBody.displayName = 'CarouselBody'
export default CarouselBody
