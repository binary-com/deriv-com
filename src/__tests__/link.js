import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { expect, jest, test } from '@jest/globals'
import { localized_link_url } from '../common/constants'
import { LocaleContext } from '../components/localization/locale-context'
import { LocalizedLink } from '../components/localization/localized-link'

configure({ adapter: new Adapter() })

// Test Case 1 - Correct URL return for different "type" props
Object.keys(localized_link_url).forEach((type) => {
    test(`LocalizedLink type ${type} should output ${localized_link_url[type]}`, () => {
        // Arrange - Setup Context and Props
        const locale_context = { locale: 'en' }
        jest.spyOn(LocaleContext, 'useContext').mockImplementation(() => locale_context)

        // Act - Shallow render component passing in props
        const link_wrapper = shallow(
            <LocalizedLink
                to=""
                type={type}
                external="true"
                target="_blank"
                rel="noopener noreferrer"
            />,
        )

        // Assert - Check if the href matches expected values
        const link_href = link_wrapper.find('<a>').prop('href')
        expect(link_href).toEqual(localized_link_url[type])
    })
})
