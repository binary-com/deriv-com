import React from 'react'
import styled from 'styled-components'
import { TImage } from '../data/_data-types'
import device from 'themes/device'

const Wrapper = styled.div`
    padding-bottom: 0.7rem;
    max-width: 60rem;
`

const Image = styled.img<{ margin: string; width: string }>`
    ${({ margin }) => (margin ? `margin: ${margin}` : '')};
    width: ${({ width }) => width};

    @media ${device.mobileL} {
        width: 110%;
        padding-right: 1.8rem;
    }
`

const ImageCard = ({ src, alt, margin, width }: TImage) => (
    <Wrapper>
        <Image src={src} alt={alt} margin={margin} width={width} loading="lazy" />
    </Wrapper>
)

export default ImageCard
