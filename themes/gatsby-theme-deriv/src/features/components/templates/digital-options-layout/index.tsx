import React from 'react'
import OptionsLayout from '../options-layout'
import { AvailableDigitalOptionsData } from './data'
import Flex from 'features/components/atoms/flex-box'
import AvailableOptions from 'features/components/organisms/available-options'
import { BuildVariantType } from 'features/types'

type DigitalOptionsLayoutProps = React.PropsWithChildren<unknown> & BuildVariantType

const DigitalOptionsLayout = ({ children, region }: DigitalOptionsLayoutProps) => {
    return (
        <OptionsLayout
            region={region}
            heading="_t_What are digital options?_t_"
            description="_t_Digital options allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct._t_"
        >
            <Flex.Box justify="center" align="center" direction="col">
                <AvailableOptions
                    heading={'_t_Digital options available on Deriv_t_'}
                    items={AvailableDigitalOptionsData}
                />
                {children}
            </Flex.Box>
        </OptionsLayout>
    )
}

export default DigitalOptionsLayout
