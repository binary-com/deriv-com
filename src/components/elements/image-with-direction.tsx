import React from 'react'
import styled from 'styled-components'
import { useIsRtl } from 'components/hooks/use-isrtl'

export type TImageWithDirection = {
    is_rtl: boolean
}

const StyledImage = styled.img<TImageWithDirection>`
    transform: ${({ is_rtl }) => {
        return is_rtl ? 'scaleX(-1)' : null
    }};
`

type TImageProps = React.ComponentProps<typeof StyledImage>

const ImageWithDireciton = (props: TImageProps) => {
    const is_rtl = useIsRtl()

    return <StyledImage is_rtl={is_rtl} {...props} />
}

ImageWithDireciton.displayName = 'ImageWithDireciton'

export default ImageWithDireciton
