import React from 'react'
import styled from 'styled-components'
import { TImage } from '../data/_data-types'
import device from 'themes/device'

const Wrapper = styled.div`
    padding: 2.4rem 20.2rem;
    padding-bottom: 0.7rem;
    max-width: 60rem;

    @media ${device.laptopL} {
        padding: 2.4rem 10rem;
    }

    @media ${device.mobileL} {
        padding: 2.4rem 10rem 2.1rem;
    }
`

const Image = styled.img<{ width: string }>`
    width: ${({ width }) => width};

    @media ${device.mobileL} {
        width: 110%;
    }
`

const ImageCard = ({ src, alt, width }: TImage) => (
    <Wrapper>
        <Image src={src} alt={alt} width={width} loading="lazy" />
    </Wrapper>
)

export default ImageCard
