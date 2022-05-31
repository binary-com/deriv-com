import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Flex } from 'components/containers'
import { Button } from 'components/form'
import { Text } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { deriv_com_url } from 'common/constants'

// const FadeInDown = keyframes`
//     from {
//         opacity: 0;
//         transform: translateY(0);
//     }
//     to {
//         opacity: 1;
//         transform: translateY(-18.4rem);
//     }
// `
// const FadeOutUp = keyframes`
//     from {
//         opacity: 1;
//         transform: translateY(-18.4rem);
//     }
//     to {
//         opacity: 0;
//         transform: translateY(0);
//     }
// `

// const Wrapper = styled.div`
//     position: absolute;
//     width: 384px;
//     height: 172px;
//     gap: 24px;
//     min-height: 188px;
//     padding: 24px;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     transition: translate 0.3s ease-in-out, opacity 0.3s ease-in-out;
//     z-index: 200;
//     border-radius: 8px;
//     box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08), 0px 24px 24px rgba(0, 0, 0, 0.08);
//     background-color: var(--color-white);
//     animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
//     animation-fill-mode: both;
//     animation-duration: 0.3s;

//     @media ${device.laptopM} {
//         bottom: -7rem;
//     }
//     @media (max-width: 1269px) {
//         bottom: -6rem;
//     }
//     @media ${device.tabletL} {
//         bottom: -4rem;
//     }
//     @media ${device.tablet} {
//         width: 100%;
//         height: 14.6rem;
//         padding: 16px;
//         left: unset;
//         border-radius: unset;
//         min-height: unset;
//         bottom: -6.1rem;
//     }
//     @media (max-width: 711px) {
//         bottom: -7.7rem;
//     }
//     @media (max-width: 539px) {
//         bottom: -4.5rem;
//     }
//     @media ${device.mobileS} {
//         bottom: -4.5rem;
//         height: 16.8rem;
//     }
// `

// const StyledButton = styled(Button)`
//     @media ${device.tablet} {
//         font-size: 1.4rem;
//         padding: 3px 8px;
//     }
// `

// const StyledText = styled(Text)`
//     height: 60px;
//     width: 336px;
//     left: 0px;
//     top: 0px;
//     border-radius: nullpx;
//     font-size: 14px;
//     margin-bottom: 16px;
//     font-family: 'IBM Plex Sans';
//     font-style: normal;
//     font-weight: 400;
//     line-height: 20px;

//     @media ${device.tablet} {
//         font-size: 12px;
//         margin-bottom: 8px;
//     }
//     @media ${device.mobileL} {
//         font-size: 10px;
//         margin-bottom: 8px;
//     }
// `

// const StyledButtonText = styled(Text)`
//     /* label */

//     width: 93px;
//     height: 20px;

//     /* desktop/paragraph/P2 - bold */

//     font-family: 'IBM Plex Sans';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 14px;
//     line-height: 20px;
//     /* identical to box height, or 143% */

//     text-align: center;

//     /* dark/1 - prominent (text) */

//     color: #ffffff;

//     /* Inside auto layout */

//     flex: none;
//     order: 0;
//     flex-grow: 0;
// `
// const RedirectNonEuLogin = () => {
//     window.location.href = `https://${deriv_com_url}`
//     //
// }
// const NonEuRedirectPopUp = ({ is_open }) => {
//     return (
//         <Wrapper id="euwe" is_open={is_open}>
//             <StyledText>
//                 <Localize translate_text="It seems you’re not in the EU, so we’re taking you to our website for non-EU visitors, where you can log in or sign up (if you don’t have a Deriv account)." />
//             </StyledText>
//             <Flex>
//                 <StyledButtonText>
//                     <StyledButton secondary onClick={RedirectNonEuLogin} mr="-24rem">
//                         {localize('Take me there')}
//                     </StyledButton>
//                 </StyledButtonText>
//             </Flex>
//         </Wrapper>
//     )
// }

// NonEuRedirectPopUp.propTypes = {
//     is_open: PropTypes.bool,
// }

const NonEuRedirectPopUp = ({ is_open }) => {
    return 'test'
    // <Wrapper id="euwe" is_open={is_open}>
    //     <StyledText>
    //         <Localize translate_text="It seems you’re not in the EU, so we’re taking you to our website for non-EU visitors, where you can log in or sign up (if you don’t have a Deriv account)." />
    //     </StyledText>
    //     <Flex>
    //         <StyledButtonText>
    //             <StyledButton secondary onClick={RedirectNonEuLogin} mr="-24rem">
    //                 {localize('Take me there')}
    //             </StyledButton>
    //         </StyledButtonText>
    //     </Flex>
    // </Wrapper>
}

export default NonEuRedirectPopUp
