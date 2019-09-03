import React from 'react'
import PropTypes from 'prop-types'
import { I18nextProvider } from 'react-i18next'
import i18next from './config'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { BinarySocketGeneral } from 'common/websocket/socket_general'
import { NetworkMonitorBase } from 'common/websocket/network_base'
import { LocalStore } from 'common/storage'
import { toISOFormat } from 'common/utility'

// HOC that pre renders a page with the translated language
// Without this HOC the page will be translated on the client side dynamically

// Make sure that language is passed on
const initializeWebsocket = lang => {
    if (typeof LocalStore !== 'undefined') {
        if (!(LocalStore.get('i18n') === 'ach')) {
            LocalStore.set('i18n', lang)

            const binary_socket = BinarySocketBase.get()
            if (!binary_socket || BinarySocketBase.hasReadyState(2, 3)) {
                NetworkMonitorBase.init(BinarySocketGeneral)
            } else {
                binary_socket.close()
                NetworkMonitorBase.init(BinarySocketGeneral)
            }

            if (!LocalStore.get('date_first_contact')) {
                BinarySocketBase.wait('time').then(response => {
                    LocalStore.set(
                        'date_first_contact',
                        toISOFormat(new Date(response.time * 1000)),
                    )
                })
            }
        }
    }
}

export const WithIntl = () => WrappedComponent => {
    const WrapWithIntl = ({ pageContext }, props) => {
        if (pageContext) {
            const current_language = pageContext.locale
            if (current_language && current_language !== i18next.language) {
                i18next.changeLanguage(current_language)
                initializeWebsocket(current_language)
            }
        }
        WrapWithIntl.propTypes = {
            pageContext: PropTypes.shape({
                locale: PropTypes.string,
            }),
        }
        return (
            <I18nextProvider i18n={i18next}>
                <WrappedComponent {...props} language={i18next.language} />
            </I18nextProvider>
        )
    }
    return WrapWithIntl
}
