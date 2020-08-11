import React from 'react'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { isBrowser } from 'common/utility'
import LiveChatIC from 'images/svg/livechat.svg'
import LiveChatHover from 'images/svg/livechat-hover.svg'

const StyledLiveChat = styled.div`
    position: fixed;
    bottom: 1.6rem;
    right: 1.6rem;
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 1.6rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    z-index: 9999;
`

const LiveChat = () => {
    const LC_API = (isBrowser() && window.LC_API) || {}
    const [is_livechat_hover, setLivechatHover] = React.useState(false)
    const [is_livechat_interactive, setLiveChatInteractive] = React.useState(false)

    React.useEffect(() => {
        window.LiveChatWidget.on('ready', () => {
            setLiveChatInteractive(true)

            window.LiveChatWidget.on('visibility_changed', ({ visibility }) => {
                const domain = window.location.hostname.includes('deriv.com')
                    ? 'deriv.com'
                    : 'binary.sx'
                const client_information = Cookies.get('client_information', {
                    domain,
                })
                // only visible to CS
                let session_variables = {
                    loginid: '',
                    landing_company_shortcode: '',
                    currency: '',
                    residence: '',
                }

                if (client_information) {
                    const {
                        loginid,
                        email,
                        landing_company_shortcode,
                        currency,
                        residence,
                        first_name,
                        last_name,
                    } = JSON.parse(client_information)

                    if (visibility === 'maximized' && client_information) {
                        session_variables = {
                            ...(loginid && { loginid }),
                            ...(landing_company_shortcode && { landing_company_shortcode }),
                            ...(currency && { currency }),
                            ...(residence && { residence }),
                        }

                        window.LiveChatWidget.call('set_session_variables', session_variables)
                        if (email) window.LiveChatWidget.call('set_customer_email', email)
                        if (first_name && last_name)
                            window.LiveChatWidget.call(
                                'set_customer_name',
                                `${first_name} ${last_name}`,
                            )
                    }
                }

                if (visibility === 'maximized' && !client_information) {
                    window.LiveChatWidget.call('set_customer_email', ' ')
                    window.LiveChatWidget.call('set_customer_name', ' ')
                    window.LiveChatWidget.call('set_session_variables', session_variables)
                }
            })
        })
    }, [])

    return (
        <>
            {is_livechat_interactive && (
                <StyledLiveChat
                    className="gtm-deriv-livechat"
                    onClick={() => {
                        LC_API.open_chat_window()
                    }}
                    onMouseEnter={() => setLivechatHover(true)}
                    onMouseLeave={() => setLivechatHover(false)}
                >
                    {is_livechat_hover ? <LiveChatHover /> : <LiveChatIC />}
                </StyledLiveChat>
            )}
        </>
    )
}

export default LiveChat
