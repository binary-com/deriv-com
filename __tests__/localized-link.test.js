import React from 'react'
import renderer from 'react-test-renderer'
import { DerivStore } from '../src/store'
import { LocaleContextWrapper } from '../src/components/localization/locale-context'
import { LocalizedLink } from '../src/components/localization/localized-link'

const LocalizedLinkMock = () => {
    return (
        <LocaleContextWrapper pageContext={{ locale: 'en' }}>
            <LocalizedLink external>Test Link</LocalizedLink>
        </LocaleContextWrapper>
    )
}

describe('Header', () => {
    it('renders correctly', () => {
        const test = renderer
            .create(
                <DerivStore.Provider
                    value={{
                        is_eu_country: true,
                        is_p2p_allowed_country: true,
                        crypto_config: {},
                        website_status: {},
                        website_status_loading: {},
                        setWebsiteStatus: {},
                    }}
                >
                    <LocalizedLinkMock />
                </DerivStore.Provider>,
            )
            .toJSON()
        expect(test).toMatchSnapshot()
    })
})
