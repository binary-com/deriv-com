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
                                }

                                window.LiveChatWidget.call(
                                    'set_session_variables',
                                    session_variables,
                                )
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
            })
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

export default LiveChat
