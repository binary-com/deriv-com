import React from 'react'
import renderer from 'react-test-renderer'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LocalizedLink } from '../src/components/localization/localized-link'
import { MockProvider } from '../__mocks__/localized_link'

describe('Localized Link Tests', () => {
    describe('External Localized Links', () => {
        it('renders correctly when flag is passed', () => {
            const rendered_link = renderer
                .create(
                    <MockProvider>
                        <LocalizedLink external to="/">
                            Test Link
                        </LocalizedLink>
                    </MockProvider>,
                )
                .toJSON()
            expect(rendered_link).toMatchSnapshot()
        })
        describe('EU Countries', () => {
            describe('Modal Tests', () => {
                it('modal is shown for eu country when links are clicked for supported links', () => {
                    render(
                        <MockProvider>
                            <LocalizedLink external to="/">
                                Link
                            </LocalizedLink>
                        </MockProvider>,
                    )
                    userEvent.click(screen.getByText('Link'))
                })
                it('modal is not shown for mail links', () => {})
                it('modal is not shown for deriv app links', () => {})
                it('modal is not shown for binary links', () => {})
                it('modal is not shown for social links', () => {})
                it('modal is not shown for terms and conditions links', () => {})
                it('modals redirects to the correct link', () => {})
            })
            describe('Localization Tests', () => {
                it('correct deriv app localized link', () => {})
                it('correct binary localized link', () => {})
                it('correct affiliate localized link', () => {})
                it('correct terms and conditions localized link', () => {})
                it('correct social localized link', () => {})
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
                    <MockProvider>
                        <LocalizedLink internal to="/">
                            Test Link
                        </LocalizedLink>
                    </MockProvider>,
                )
                .toJSON()
            expect(rendered_link).toMatchSnapshot()
        })
    })
})
