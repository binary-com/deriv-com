import React from 'react'
import styled from 'styled-components'
import { TImage } from '../data/_data-types'
import device from 'themes/device'

const Wrapper = styled.div<{ padding: string }>`
    padding: 2.4rem 20.2rem;
    padding: ${({ padding }) => padding};
    padding-bottom: 0.7rem;
    max-width: 60rem;

    @media ${device.laptopL} {
        padding: ${({ padding }) => padding};
    }

    @media ${device.mobileL} {
        padding: ${({ padding }) => padding};
    }
`

const Image = styled.img<{ width: string }>`
    width: ${({ width }) => width};

    @media ${device.mobileL} {
        width: 110%;
    }
`

const ImageCard = ({ src, alt, width, padding }: TImage) => (
    <Wrapper padding={padding || '2.4rem 20.2rem'}>
        <Image src={src} alt={alt} width={width} loading="lazy" />
    </Wrapper>
)

export default ImageCard
