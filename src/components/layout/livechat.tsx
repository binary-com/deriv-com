import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useLivechat } from 'components/hooks/use-livechat'
import LiveChatIC from 'images/svg/layout/livechat.svg'
import LiveChatHover from 'images/svg/layout/livechat-hover.svg'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { useCountryRule } from 'components/hooks/use-country-rule'

type LiveChatProps = {
    is_banner_shown: boolean
}

type StyledLiveChatTypes = LiveChatProps & {
    is_eu: boolean
    is_rtl: boolean
}

const StyledLiveChat = styled.div<StyledLiveChatTypes>`
    position: fixed;
    bottom: ${(props) => (props.is_eu ? '9rem' : '1.6rem')};
    ${({ is_rtl }) =>
        is_rtl
            ? css`
                  inset-inline-start: 1.6rem;
              `
            : css`
                  inset-inline-end: 1.6rem;
              `}
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    padding: 1.6rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    z-index: 999;
    ${(props) => {
        if (props.is_eu) {
            return css<StyledLiveChatTypes>`
                @media (max-width: 1269px) {
                    bottom: 11rem;
                }
                @media ${device.tabletL} {
                    bottom: 14rem;
                }
                @media ${device.tablet} {
                    bottom: ${(props) => (props.is_banner_shown ? '29rem' : '14rem')};
                    padding: 1rem;
                }
                @media ${device.tabletS} {
                    bottom: ${(props) => (props.is_banner_shown ? '28rem' : '13rem')};
                }
                @media (max-width: 538px) {
                    bottom: ${(props) => (props.is_banner_shown ? '30rem' : '15rem')};
                }
                @media ${device.mobileM} {
                    bottom: ${(props) => (props.is_banner_shown ? '32rem' : '16rem')};
                }
            `
        }
    }}
`

const LiveChat = ({ is_banner_shown }: LiveChatProps) => {
    const [is_livechat_hover, setLivechatHover] = useState(false)
    const [is_livechat_interactive, LC_API] = useLivechat()
    const { is_eu } = useCountryRule()
    const is_rtl = useIsRtl()

    return (
        <>
            {is_livechat_interactive && (
                <StyledLiveChat
                    className="gtm-deriv-livechat"
                    is_banner_shown={is_banner_shown}
                    is_eu={is_eu}
                    is_rtl={is_rtl}
                    onClick={() => {
                        LC_API.open_chat_window()
                    }}
                    onMouseEnter={() => setLivechatHover(true)}
                    onMouseLeave={() => setLivechatHover(false)}
                >
                    <img
                        src={is_livechat_hover ? LiveChatHover : LiveChatIC}
                        width="32"
                        height="32"
                        alt="livechat icon"
                    />
                </StyledLiveChat>
            )}
        </>
    )
}

export default LiveChat
