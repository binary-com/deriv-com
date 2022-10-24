import React, { forwardRef } from 'react'
import { Container } from './carousel.styles'
import ViewPort from './carousel.viewport'

export type ICarouselBody = React.HtmlHTMLAttributes<HTMLDivElement>

const CarouselBody = (
    { children, ...rest }: React.PropsWithChildren<ICarouselBody>,
    ref: React.ForwardedRef<HTMLDivElement>,
) => {
    return (
        <Container>
            <ViewPort ref={ref} {...rest}>
                {children}
            </ViewPort>
        </Container>
    )
}

export default forwardRef<HTMLDivElement, React.PropsWithChildren<ICarouselBody>>(CarouselBody)
