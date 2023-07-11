import React from 'react'
import DigitalOptionsLayout from '../../components/digital-options-layout'
import OptionsContent from '../../components/options-content'
import OptionsFaq from '../../components/options-faq'
import { digitsContentItems, digitsFAQ } from './data'

const DigitsDigitalOptionsPage = () => {
    return (
        <DigitalOptionsLayout>
            <OptionsContent items={digitsContentItems} />
            <OptionsFaq faqs={digitsFAQ} />
        </DigitalOptionsLayout>
    )
}

export default DigitsDigitalOptionsPage
