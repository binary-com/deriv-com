import React from 'react'
import { Hero } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import { Localize } from 'components/localization'

const HeroBanner = () => {
    const heading = <Localize translate_text="_t_Our principles_t_" />

    return (
        <Hero.ContentLess title={heading} className="!bg-background-secondary-container">
            <Text className="text-center px-general-xl md:px-general-5xl">
                <Localize translate_text="_t_We are honoured to serve everyone who relies on our products and services, and we only want to offer the best. That’s why our principles and values are so important in defining who we are, why we do what we do, and how we treat our clients and each other. Across our international offices, we are committed to the following principles in everything that we do._t_" />
            </Text>
        </Hero.ContentLess>
    )
}

export default HeroBanner
