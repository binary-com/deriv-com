import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { WithIntl } from 'components/localization'

// function unitizedPx(number) {
//     return number + 'px'
// }
const baseStyles = ({ top, left, right, bottom }) => css`
    margin-top: ${top ? top + 'px' : null};
    margin-right: ${right ? right + 'px' : null};
    margin-bottom: ${bottom ? bottom + 'px' : null};
    margin-left: ${left ? left + 'px' : null};
`

export const Root = styled.div`
    ${({ top, left, right, bottom, sm, md, lg, xl }) => `
        ${baseStyles({ top, left, right, bottom })}
        ${sm && baseStyles(sm)}
        ${md && baseStyles(md)}
        ${lg && baseStyles(lg)}
        ${xl && baseStyles(xl)}
      `}
`

const Spacer = ({ top, left, bottom, right, children, sm, md, lg, xl }) => {
    return (
        <Root
            style={{
                backgroundColor: 'red',
                height: '300px',
                width: '300px',
                color: 'white',
                fontSize: '40px',
            }}
            top={top}
            left={left}
            bottom={bottom}
            right={right}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        >
            {children}
        </Root>
    )
}

Spacer.propTypes = {
    bottom: PropTypes.number,
    children: PropTypes.node,
    left: PropTypes.number,
    lg: PropTypes.object,
    md: PropTypes.object,
    right: PropTypes.number,
    sm: PropTypes.object,
    top: PropTypes.number,
    xl: PropTypes.object,
}
const UseResponsiveCss = () => {
    return (
        <Spacer md={{ bottom: 10, left: 200 }} left={300}>
            cool component here
        </Spacer>
    )
}

export default WithIntl()(UseResponsiveCss)
