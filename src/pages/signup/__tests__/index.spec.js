import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useStaticQuery } from 'gatsby'
import { QueryParamProvider } from 'use-query-params'
import { LocaleContextWrapper } from '../../../components/localization/locale-context'
import { DerivProvider } from '../../../store/index'
import NewSignup from '../index.tsx'

// mock all functions that are required in signup page.
jest.mock('common/utility', () => ({
    __esModule: true,
    isBrowser: jest.fn(() => true),
    getDateFromToday: jest.fn(() => '2020-01-01'),
    getDomain: jest.fn(() => 'binary.sx'),
    getClientInformation: jest.fn(() => {
        return {}
    }),
    queryParamData: jest.fn(() => ''),
    getWindowWidth: jest.fn(() => '1920'),
    getLocalizedUrl: jest.fn(() => 'https://binary.sx/en/signup'),
    replaceLocale: jest.fn(() => 'https://binary.sx/en/signup?lang=zh-cn'),
    getLanguage: jest.fn(() => null),
    isNullUndefined: jest.fn(() => true),
    isLocalhost: jest.fn(() => true),
    isEuDomain: jest.fn(() => true),
    isUkDomain: jest.fn(() => true),
}))

// mock the qraphql query used in seo.js
useStaticQuery.mockReturnValue({
    site: {
        siteMetadata: {
            title: `Gatsby Starter Blog`,
            description: `A starter blog demonstrating what Gatsby can do.`,
            social: {
                twitter: `kylemathews`,
            },
        },
    },
})

describe('NewSignUp', () => {
    it('must contain create demo account Button', () => {
        render(
            <DerivProvider value={{ is_eu_country: true }}>
                <LocaleContextWrapper pageContext={{ locale: 'en', pathname: '/en/signup' }}>
                    <QueryParamProvider>
                        <NewSignup />,
                    </QueryParamProvider>
                </LocaleContextWrapper>
            </DerivProvider>,
        )
        const singup_button = screen.getByRole('button', {
            name: /Create demo account/i,
        })
        expect(singup_button).toBeInTheDocument()
    })
})
