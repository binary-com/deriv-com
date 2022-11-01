import styled from 'styled-components'
import { ReactComponent as Chevron } from 'images/svg/careers/carousel-chevron.svg'

export const Container = styled.div`
    position: relative;
`

export const Slide = styled.div`
    position: relative;
`

const StyledChevron = styled(Chevron)`
    height: 24px;
    width: 24px;
`

export const ChevronRight = styled(StyledChevron)`
    transform: rotate(180deg);
    right: 0;
`
export const ChevronLeft = styled(StyledChevron)`
    left: 0;
`

export const StyledDot = styled.div`
    cursor: pointer;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    padding: 0;
    outline: 0;
    border: 0;
    background-color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-grey-21)')};
`
