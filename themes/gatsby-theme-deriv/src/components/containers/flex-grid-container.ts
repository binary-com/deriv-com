import styled from 'styled-components'
import Container from './container'
import device from 'themes/device'

type FlexGridContainerType = {
    content_width?: string | number
    mobile_content_width?: string | number
    gap?: string
    mobile_gap?: string
    grid?: string
    justify?: string
}

const FlexGridContainer = styled(Container)<FlexGridContainerType>`
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: ${(props) => (props.justify ? props.justify : 'space-between')};
    width: 100%;

    & > * {
        flex-shrink: 0;
        width: ${(props) => (props.content_width ? props.content_width : '48%')};
        margin: ${(props) => (props.gap ? props.gap : '0 1.5rem')};

        @media ${device.tabletL} {
            margin: ${(props) => (props.mobile_gap ? props.mobile_gap : '1.5rem 0')};
            width: ${(props) => (props.mobile_content_width ? props.mobile_content_width : '48%')};
        }
    }

    /*  Handle no margin on every grid size,
        for example there are six items, grid size = 3, therefore 1st and 4th will have margin left: 0;
        and the 3rd and 6th will have margin-right: 0;
    */
    & > :nth-child(${(props) => props.grid}n + 1) {
        margin-left: 0;
    }
    /* stylelint-disable-next-line no-duplicate-selectors */
    & > :nth-child(${(props) => parseInt(props.grid) - 1}n + 1) {
        &:not(:first-child) {
            margin-right: 0;
        }
    }
`

export default FlexGridContainer
