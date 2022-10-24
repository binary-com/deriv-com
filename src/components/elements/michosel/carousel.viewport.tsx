import React, { forwardRef } from 'react'
import styled from 'styled-components'

export type IViewPortProps = React.HtmlHTMLAttributes<HTMLDivElement>

const ViewPortContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

const ViewPort = (
    { children, ...rest }: React.PropsWithChildren<IViewPortProps>,
    ref: React.ForwardedRef<HTMLDivElement>,
) => {
    return (
        <ViewPortContainer ref={ref} {...rest}>
            {children}
        </ViewPortContainer>
    )
}

export default forwardRef<HTMLDivElement, React.PropsWithChildren<IViewPortProps>>(ViewPort)
