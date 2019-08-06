import styled from 'styled-components'
import device from 'themes/device'

const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: ${props => (props.align ? props.align : 'center')};
    justify-content: ${props => (props.justify ? props.justify : 'center')};
    flex-direction: ${props => (props.direction ? props.direction : 'row')};
    width: 80%;

    @media ${device.desktop} {
        max-width: 1024px;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

export const FlexGridContainer = styled(Container)`
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: ${props =>
        props.justify ? props.justify : 'space-between'};
    width: 100%;

    & > * {
        flex-shrink: 0;
        width: ${props => (props.content_width ? props.content_width : '48%')};
        margin: ${props => (props.gap ? props.gap : '0 1.5rem')};
    }

    /*  Handle no margin on every grid size,
        for example there are six items, grid size = 3, therefore 1st and 4th will have margin left: 0;
        and the 3rd and 6th will have margin-right: 0;
    */
    & > :nth-child(${props => props.grid}n + 1) {
        margin-left: 0;
    }
    /* stylelint-disable-next-line no-duplicate-selectors */
    & > :nth-child(${props => parseInt(props.grid) - 1}n + 1) {
        &:not(:first-child) {
            margin-right: 0;
        }
    }
`

export const SectionContainer = styled.section`
    width: 100%;
    padding: 8rem 0;
`

export default Container
