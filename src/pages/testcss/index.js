import React from 'react'
// import styled, { css } from 'styled-components'
// import PropTypes from 'prop-types'
import { WithIntl } from 'components/localization'
import { Box } from 'components/containers'

//////////////////////////
// export const sizes = {
//     mobileM: 375,
//     mobileS: 320,
// }
// export const mediaqueries = Object.keys(sizes).reduce((accumulator, label) => {
//     accumulator[label] = (...args) => css`
//         @media (max-width: ${sizes[label]}px) {
//             ${css(...args)};
//         }
//     `
//     return accumulator
// }, {})

// export const generateResponsiveStyles = (stylesGenerator) => (props) => {
//     return Object.keys(mediaqueries).reduce((rules, mq) => {
//         if (!props[mq]) return rules
//         const styles = mediaqueries[mq]`
//         ${stylesGenerator(props[mq])}
//         `
//         return [...rules, styles]
//     }, [])
// }

// const baseStyles = ({ top, left, right, bottom }) => css`
//     margin-top: ${top ? top + 'px' : null};
//     margin-right: ${right ? right + 'px' : null};
//     margin-bottom: ${bottom ? bottom + 'px' : null};
//     margin-left: ${left ? left + 'px' : null};
// `
// const responsiveStyles = generateResponsiveStyles(baseStyles)

// export const Root = styled.div`
//     ${baseStyles}
//     ${responsiveStyles}
// `

// const Spacer = ({ children, ...props }) => {
//     return (
//         <Root
//             style={{
//                 backgroundColor: 'red',
//                 height: '300px',
//                 width: '300px',
//                 color: 'white',
//                 fontSize: '40px',
//             }}
//             {...props}
//         >
//             {children}
//         </Root>
//     )
// }

// Spacer.propTypes = {
//     bottom: PropTypes.number,
//     children: PropTypes.node,
//     left: PropTypes.number,
//     mobileM: PropTypes.object,
//     mobileS: PropTypes.object,
//     right: PropTypes.number,
//     top: PropTypes.number,
// }
const UseResponsiveCss = () => {
    return (
        // <Spacer
        //     mobileS={{ left: 10, top: 40 }}
        //     mobileM={{ left: 100, top: 80 }}
        //     left={300}
        //     top={200}
        // >
        //     cool component here
        // </Spacer>

        <Box
            style={{
                backgroundColor: 'red',
                height: '300px',
                width: '300px',
                color: 'white',
                fontSize: '40px',
            }}
            ml="100px"
            pl="80px"
            laptop={{ ml: '40px', pl: '50px' }}
            mobileS={{ ml: '20px' }}
        >
            cool component here
        </Box>
    )
}

export default WithIntl()(UseResponsiveCss)
