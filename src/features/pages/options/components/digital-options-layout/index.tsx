import React from 'react'
import OptionsLayout from '../options-layout'
import { AvailableDigitalOptionsData } from './data'

const DigitalOptionsLayout: React.FC = ({ children }) => {
    return (
        <OptionsLayout
            heading="_t_Digital options available on Deriv_t_"
            items={AvailableDigitalOptionsData}
        >
            {children}
        </OptionsLayout>
    )
}

export default DigitalOptionsLayout
