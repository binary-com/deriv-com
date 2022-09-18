import styled from 'styled-components'

export type TImageWithDirection = {
    is_rtl: boolean
}

const ImageWithDireciton = styled.img<TImageWithDirection>`
    transform: ${({ is_rtl }) => {
        return is_rtl ? 'scaleX(-1)' : null
    }};
`

export default ImageWithDireciton
