import React from 'react'
import PropTypes from 'prop-types'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { isBrowser } from 'common/utility'
import LiveChatIC from 'images/svg/livechat.svg'
import LiveChatHover from 'images/svg/livechat-hover.svg'
import device from 'themes/device'

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

    @media ${device.tabletS} {
        padding: 1rem;
    }
`

const LiveChat = ({ LC_API, is_livechat_interactive, setLiveChatInteractive }) => {
    const [is_livechat_hover, setLivechatHover] = React.useState(false)

    const loadLiveChatScript = (callback) => {
        const livechat_script = document.createElement('script')
        livechat_script.innerHTML = `
            window.__lc = window.__lc || {};
            window.__lc.license = 12049137;
            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
        `
        document.body.appendChild(livechat_script)
        if (callback) callback()
    }

    React.useEffect(() => {
        if (isBrowser()) {
            // The purpose is to load the script after everything is load but not async or defer. Therefore, it will be ignored in the rendering timeline
            setTimeout(() => {
                loadLiveChatScript(() => {
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
                                email: '',
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
                                        ...(landing_company_shortcode && {
                                            landing_company_shortcode,
                                        }),
                                        ...(currency && { currency }),
                                        ...(residence && { residence }),
                                        ...(email && { email }),
                                    }

                                    window.LiveChatWidget.call(
                                        'set_session_variables',
                                        session_variables,
                                    )
                                    if (email) {
                                        window.LiveChatWidget.call('set_customer_email', email)
                                    }
                                    if (first_name && last_name) {
                                        window.LiveChatWidget.call(
                                            'set_customer_name',
                                            `${first_name} ${last_name}`,
                                        )
                                    }
                                }
                            }

                            if (visibility === 'maximized' && !client_information) {
                                if (
                                    window.LiveChatWidget.get('customer_data').status !==
                                    'chatting'
                                ) {
                                    window.LiveChatWidget.call('set_customer_email', ' ')
                                    window.LiveChatWidget.call('set_customer_name', ' ')
                                }
                                window.LiveChatWidget.call(
                                    'set_session_variables',
                                    session_variables,
                                )
                            }
                        })
                    })
                })
            }, 2000)
        }
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

LiveChat.propTypes = {
    is_livechat_interactive: PropTypes.bool,
    LC_API: PropTypes.object,
    setLiveChatInteractive: PropTypes.func,
}

export default LiveChat
