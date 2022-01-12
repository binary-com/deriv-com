import React, { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { useLivechat } from 'components/hooks/use-livechat'
import LiveChatIC from 'images/svg/layout/livechat.svg'
import LiveChatHover from 'images/svg/layout/livechat-hover.svg'
import device from 'themes/device'
import { DerivStore } from 'store'
import { isBrowser } from 'common/utility'
import InitialLoader from 'components/elements/dot-loader'

const StyledLiveChat = styled.div`
    position: fixed;
    bottom: ${(props) => (props.is_eu_country ? '9rem' : '1.6rem')};
    right: 1.6rem;
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 1.6rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    z-index: 999;
    ${(props) => {
        if (props.is_eu_country) {
            return css`
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

const LiveChat = ({ is_banner_shown }) => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const is_livechat_query = url_params.get('is_livechat_open')
    const [is_loading, setIsLoading] = useState(false)
    const [is_livechat_hover, setLivechatHover] = useState(false)
    const [first_load_open, setFirstLoadOpen] = useState(false)
    const [is_livechat_interactive, LC_API] = useLivechat(first_load_open)
    const { is_eu_country } = useContext(DerivStore)

    useEffect(() => {
        if (is_livechat_interactive) {
            setIsLoading(false)
        }
    }, [is_livechat_interactive])

    useEffect(() => {
        if (is_livechat_query?.toLowerCase() === 'true') {
            if (is_livechat_interactive) LC_API.open_chat_window()
            else setFirstLoadOpen(true)
        }
    }, [])

    return (
        <StyledLiveChat
            className="gtm-deriv-livechat"
            is_banner_shown={is_banner_shown}
            is_eu_country={is_eu_country}
            onClick={() => {
                if (is_livechat_interactive) LC_API.open_chat_window()
                else {
                    setFirstLoadOpen(true)
                    setIsLoading(true)
                }
            }}
            onMouseEnter={() => setLivechatHover(true)}
            onMouseLeave={() => setLivechatHover(false)}
        >
            {!is_loading ? (
                <img
                    src={is_livechat_hover ? LiveChatHover : LiveChatIC}
                    width="32"
                    height="32"
                    alt="livechat icon"
                />
            ) : (
                <div style={{ width: '32px', height: '32px' }}>
                    <InitialLoader
                        style={{ position: 'absolute', marginTop: '-28px', marginLeft: '-5px' }}
                    />
                </div>
            )}
        </StyledLiveChat>
    )
}

LiveChat.propTypes = {
    is_banner_shown: PropTypes.bool,
    is_livechat_interactive: PropTypes.bool,
    LC_API: PropTypes.object,
    setLiveChatInteractive: PropTypes.func,
}

export default LiveChat
