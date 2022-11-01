import styled from 'styled-components'
import device from 'themes/device'

type ImageType = {
    width: string
}

export const ImageWrapper = styled.div`
    padding: 2.4rem 20.2rem;
    max-width: 60rem;

    @media ${device.laptopL} {
        padding: 2.4rem 10rem;
    }

    @media ${device.mobileL} {
        padding: 2.4rem 10rem 2.1rem;
    }
`

export const Image = styled.img<ImageType>`
    width: ${({ width }) => width};

    @media ${device.mobileL} {
        width: 110%;
    }
`
