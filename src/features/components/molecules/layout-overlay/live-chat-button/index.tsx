import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Script } from 'gatsby'
import FloatingButton from '../floating-button'
import LiveChatIC from 'images/svg/layout/chat-normal.svg'
import LiveChatHover from 'images/svg/layout/chat-hover.svg'
import useAuthCheck from 'components/hooks/use-auth-check'
import { getClientInformation, getDomain, getUTMData, isBrowser } from 'common/utility'
import useBreakpoints from 'components/hooks/use-breakpoints'

const LiveChatButton = () => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const is_livechat_query = url_params.get('is_livechat_open')

    const [is_livechat_interactive, setIsLivechatInteractive] = useState(false)
    const [is_script_loaded, setIsScriptLoaded] = useState(false)
    const LC_API = useRef<typeof window.LC_API>()

    const [is_logged_in] = useAuthCheck()
    const { is_mobile } = useBreakpoints()

    const onLiveChatReady = useCallback(() => {
        setIsLivechatInteractive(true)
        LC_API.current = window.LC_API

        // we open and close the window to trigger the widget to listen for new events
        window.LC_API.open_chat_window()
        window.LC_API.hide_chat_window()

        const domain = getDomain()
        const utm_data = getUTMData(domain)
        const client_information = getClientInformation(domain)
        const url_params = new URLSearchParams(window.location.search)

        const { utm_source, utm_medium, utm_campaign } = utm_data || {}

        const {
            loginid,
            email,
            landing_company_shortcode,
            currency,
            residence,
            first_name,
            last_name,
        } = client_information || {}

        /* the session variables are sent to CS team dashboard to notify user has logged in
        and also acts as custom variables to trigger targeted engagement */
        const session_variables = {
            is_logged_in: is_logged_in,
            loginid: loginid ?? '',
            landing_company_shortcode: landing_company_shortcode ?? '',
            currency: currency ?? '',
            residence: residence ?? '',
            email: email ?? '',
            platform: url_params.get('platform') ?? '',
            utm_source: utm_source ?? '',
            utm_medium: utm_medium ?? '',
            utm_campaign: utm_campaign ?? '',
        }

        window.LiveChatWidget.call('set_session_variables', session_variables)

        if (is_logged_in) {
            if (email) {
                window.LiveChatWidget.call('set_customer_email', email)
            }
            if (first_name && last_name) {
                window.LiveChatWidget.call('set_customer_name', `${first_name} ${last_name}`)
            }
        } else {
            // clear name and email fields after chat has ended
            window.LC_API.on_chat_ended = () => {
                window.LiveChatWidget.call('set_customer_email', ' ')
                window.LiveChatWidget.call('set_customer_name', ' ')
            }
        }

        // open chat widget when there is an incoming greeting/announcement
        window.LiveChatWidget.on('new_event', (event) => {
            if (event.greeting) {
                window.LC_API.open_chat_window()
            }
        })

        if (is_livechat_query?.toLowerCase() === 'true') {
            window.LC_API.open_chat_window()
        }
    }, [is_livechat_query, is_logged_in])

    useEffect(() => {
        if (isBrowser()) {
            window.LiveChatWidget.on('ready', onLiveChatReady)
        }
        return () => {
            if (isBrowser()) {
                window.LiveChatWidget.off('ready', onLiveChatReady)
            }
        }
    }, [onLiveChatReady])

    return (
        <>
            <Script
                id="first-unique-id"
                dangerouslySetInnerHTML={{
                    __html: `
                window.__lc = window.__lc || {};
                window.__lc.license = 12049137;
                ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))
            `,
                }}
                onLoad={() => setIsScriptLoaded(true)}
            />

            {is_livechat_interactive ? (
                <FloatingButton
                    className="gtm-deriv-livechat"
                    onClick={() => LC_API.current.open_chat_window()}
                >
                    {(has_hover) => (
                        <img
                            src={has_hover ? LiveChatHover : LiveChatIC}
                            width={is_mobile ? '20' : '32'}
                            height={is_mobile ? '20' : '32'}
                            alt="livechat icon"
                        />
                    )}
                </FloatingButton>
            ) : null}
        </>
    )
}

export default LiveChatButton
