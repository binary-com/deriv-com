import React from 'react'
import Cookies from 'js-cookie'
import { isBrowser, livechat_client_id, livechat_license_id } from 'common/utility'

const url_params = new URLSearchParams(window.location.search)
const is_livechat_query = url_params.get('is_livechat_open')

export const useLivechat = () => {
    const [is_livechat_interactive, setLiveChatInteractive] = React.useState(false)
    const LC_API = (isBrowser() && window.LC_API) || {}
    const [is_logged_in, setLoggedIn] = React.useState(false)
    const CustomerSdk = React.useRef(null)

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
        let cookie_interval = null
        let script_timeout = null
        if (isBrowser()) {
            const domain = window.location.hostname.includes('deriv.com')
                ? 'deriv.com'
                : 'binary.sx'
            import('@livechat/customer-sdk').then((CSDK) => {
                CustomerSdk.current = CSDK
            })
            const checkCookie = (() => {
                let lastCookie = document.cookie // 'static' memory between function calls
                return function () {
                    const currentCookie = document.cookie
                    if (currentCookie != lastCookie) {
                        const client_information = Cookies.get('client_information', {
                            domain,
                        })
                        if (client_information) {
                            setLoggedIn(true)
                        } else {
                            setLoggedIn(false)
                        }
                        lastCookie = currentCookie // store latest cookie
                    }
                }
            })()

            cookie_interval = setInterval(checkCookie, 500)

            // The purpose is to load the script after everything is load but not async or defer. Therefore, it will be ignored in the rendering timeline
            script_timeout = setTimeout(() => {
                loadLiveChatScript(() => {
                    window.LiveChatWidget.on('ready', () => {
                        setLiveChatInteractive(true)
                        if (is_livechat_query?.toLowerCase() === 'true') {
                            window.LC_API.open_chat_window()
                        }
                    })
                })
            }, 2000)
        }

        return () => {
            clearInterval(cookie_interval)
            clearTimeout(script_timeout)
        }
    }, [])

    React.useEffect(() => {
        if (isBrowser()) {
            let customerSDK = null
            const domain = window.location.hostname.includes('deriv.com')
                ? 'deriv.com'
                : 'binary.sx'
            if (CustomerSdk.current) {
                customerSDK = CustomerSdk.current.init({
                    licenseId: livechat_license_id,
                    clientId: livechat_client_id,
                })
            }
            if (is_livechat_interactive) {
                window.LiveChatWidget.on('ready', () => {
                    let session_variables = {
                        loginid: '',
                        landing_company_shortcode: '',
                        currency: '',
                        residence: '',
                        email: '',
                    }
                    if (is_logged_in) {
                        const client_information = Cookies.get('client_information', {
                            domain,
                        })
                        const {
                            loginid,
                            email,
                            landing_company_shortcode,
                            currency,
                            residence,
                            first_name,
                            last_name,
                        } = JSON.parse(client_information)

                        session_variables = {
                            ...(loginid && { loginid }),
                            ...(landing_company_shortcode && {
                                landing_company_shortcode,
                            }),
                            ...(currency && { currency }),
                            ...(residence && { residence }),
                            ...(email && { email }),
                        }

                        window.LiveChatWidget.call('set_session_variables', session_variables)
                        if (email) {
                            window.LiveChatWidget.call('set_customer_email', email)
                        }
                        if (first_name && last_name) {
                            window.LiveChatWidget.call(
                                'set_customer_name',
                                `${first_name} ${last_name}`,
                            )
                        }
                    } else {
                        if (window.LiveChatWidget.get('chat_data')) {
                            const chatID = window.LiveChatWidget.get('chat_data').chatId
                            customerSDK?.deactivateChat({ chatId: chatID })
                        }
                        window.LiveChatWidget.call('set_customer_email', ' ')
                        window.LiveChatWidget.call('set_customer_name', ' ')
                    }

                    const url_params = new URLSearchParams(window.location.search)
                    const is_livechat_query = url_params.get('is_livechat_open')
                    if (is_livechat_query?.toLowerCase() === 'true') {
                        window.LC_API.open_chat_window()
                    }
                })
            }
        }
    }, [is_logged_in, CustomerSdk])

    return [is_livechat_interactive, LC_API]
}
