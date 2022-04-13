import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useStaticQuery } from 'gatsby'
import { LocaleContextWrapper } from '../../../components/localization/locale-context'
import { DerivProvider } from '../../../store/index'
import NewSignup from '../index.tsx'

beforeEach(() => {
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
})

const contextValue = {
    is_eu_country: true,
}

describe('NewSignUp', () => {
    it('it should contain ddd', () => {
        render(
            <DerivProvider value={{ contextValue }}>
                <LocaleContextWrapper pageContext={{ locale: 'en', pathname: '/en/signup' }}>
                    <NewSignup />,
                </LocaleContextWrapper>
            </DerivProvider>,
        )
        const Element = screen.getByText(/ddd/i)
        expect(Element).toBeInTheDocument()
    })
})
