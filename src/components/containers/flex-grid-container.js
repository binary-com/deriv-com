import styled from 'styled-components'
import PropTypes from 'prop-types'
import Container from './container'
import device from 'themes/device'
import { SizeMixin, MarginMixin } from 'themes/mixins'

const FlexGridContainer = styled(Container)`
    flex-wrap: wrap;
    align-items: stretch;
    align-content: stretch;
    justify-content: ${(props) => (props.justify ? props.justify : 'space-between')};
    ${SizeMixin({ width: '100%' })}

    & > * {
        flex-shrink: 0;
        inline-size: ${(props) => (props.content_width ? props.content_width : '48%')};
        ${MarginMixin({ all: '0 1.5rem' })}

        @media ${device.tabletL} {
            ${MarginMixin({ all: '1.5rem 0' })}
            ${(props) =>
                SizeMixin({
                    width: props.mobile_content_width ? props.mobile_content_width : '48%',
                })}
        }
    }

    /*  Handle no margin on every grid size,
        for example there are six items, grid size = 3, therefore 1st and 4th will have margin left: 0;
        and the 3rd and 6th will have margin-right: 0;
    */
    & > :nth-child(${(props) => props.grid}n + 1) {
        ${MarginMixin({ start: '0' })}
    }
    /* stylelint-disable-next-line no-duplicate-selectors */
    & > :nth-child(${(props) => parseInt(props.grid) - 1}n + 1) {
        &:not(:first-child) {
            ${MarginMixin({ end: '0' })}
        }
    }
`

export default FlexGridContainer

FlexGridContainer.propTypes = {
    content_width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gap: PropTypes.string,
    grid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    justify: PropTypes.string,
}
