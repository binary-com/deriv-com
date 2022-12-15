import '@testing-library/jest-dom'
import TestRenderer from 'react-test-renderer'
import { LocaleContextWrapper } from '../../localization/locale-context'
import { LocalizedLink } from 'components/localization'

describe('LinkText', () => {
    test('should navigate to url1 when link is clicked', () => {
        const url1 = 'https://www.deriv.com'
        const testRenderer = TestRenderer.create(
            <LocaleContextWrapper pageContext={{ locale: 'en', pathname: 'deriv.com/en/' }}>
                <LocalizedLink to={url1}>This is a link</LocalizedLink>
            </LocaleContextWrapper>,
        )
        const testInstance = testRenderer.root

        expect(testInstance.findByType(LocalizedLink).props.to).toBe('https://www.deriv.com')
    })
})
