import styled from 'styled-components'
import Chevron from 'images/svg/carousel-chevron.svg'

export const Embla = styled.div`
    position: relative;
    overflow: hidden;
`

export const EmblaContainer = styled.div`
    display: flex;
    will-change: transform;
    left: 0% !important;
`

export const EmblaSlideInner = styled.div`
    overflow: hidden;
    position: relative;
    padding-left: 10px;
`

export const StyledButtonWrapper = styled.div`
    &:hover {
        cursor: pointer;
    }
`

export const StyledChevron = styled(Chevron)`
    g {
        g {
            fill: ${(props) => (props.black ? 'var(--color-black)' : 'var(--color-white)')};
        }
    }
`

export const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
`
export const ChevronLeft = StyledChevron
