import React from 'react'
import renderer from 'react-test-renderer'
import { DerivStore } from '../src/store'
import { LocaleContextWrapper } from '../src/components/localization/locale-context'
import { LocalizedLink } from '../src/components/localization/localized-link'

const deriv_store_mock = {
    is_eu_country: true,
    is_p2p_allowed_country: true,
    crypto_config: {},
    website_status: {},
    website_status_loading: {},
    setWebsiteStatus: {},
}

const locale_mock = {
    locale: 'en',
}

describe('Localized Link Tests', () => {
    describe('External Localized Links', () => {
        it('renders correctly when flag is passed', () => {
            const rendered_link = renderer
                .create(
                    <DerivStore.Provider value={deriv_store_mock}>
                        <LocaleContextWrapper pageContext={locale_mock}>
                            <LocalizedLink to="/">Test Link</LocalizedLink>
                        </LocaleContextWrapper>
                    </DerivStore.Provider>,
                )
                .toJSON()
            expect(rendered_link).toMatchSnapshot()
        })
        describe('EU Countries', () => {
            describe('Modal Tests', () => {
                it('modal is shown for eu country when links are clicked', () => {})
                it('modal is not shown for mail links', () => {})
                it('modal is not shown for deriv app links', () => {})
                it('modal is not shown for binary links', () => {})
                it('modal is not shown for social links', () => {})
                it('modal is not shown for terms and conditions links', () => {})
                it('modals redirects to the correct link', () => {})
            })
            describe('Localization Tests', () => {
                describe('deriv app links redirects to correct localized links', () => {
                    it('correct deriv app localized link', () => {})
                    it('correct binary localized link', () => {})
                    it('correct affiliate localized link', () => {})
                    it('correct terms and conditions localized link', () => {})
                    it('correct social localized link', () => {})
                })
            })
            it('terms and conditions link does not open in a new tab', () => {})
        })
        describe('Non EU Countries', () => {
            it('modal is not shown for non eu countries', () => {})
        })
    })
    describe('Internal Localized Links', () => {
        it('renders correctly when flag is passed', () => {
            const rendered_link = renderer
                .create(
                    <DerivStore.Provider value={deriv_store_mock}>
                        <LocaleContextWrapper pageContext={locale_mock}>
                            <LocalizedLink to="/">Test Link</LocalizedLink>
                        </LocaleContextWrapper>
                    </DerivStore.Provider>,
                )
                .toJSON()
            expect(rendered_link).toMatchSnapshot()
        })
    })
})
