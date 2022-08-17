import React from 'react'
import { Flex, SectionContainer } from 'components/containers'
import PlatformCarousel from 'pages/home/platform-carousel/_platform-carousel'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { useCountryRule } from 'components/hooks/use-country-rule'

const OurPlatforms = () => {
    const { is_row } = useCountryRule()

    return (
        <SectionContainer
            background="#f9fbff"
            height="fit-content"
            tabletL={{ height: 'fit-content', pb: 'unset' }}
            padding="8rem 0 0 0"
        >
            <Flex fd="column" tabletL={{ width: '90%' }}>
                <Flex fd="column" ai="center" jc="center" mb="8rem" tabletL={{ mb: '24px' }}>
                    <Header
                        as="h2"
                        align="center"
                        size="4.8rem"
                        type="heading-1"
                        tablet={{ mb: '8px' }}
                    >
                        {localize('Our platforms')}
                    </Header>
                    <Header
                        as="p"
                        type="subtitle-1"
                        weight="normal"
                        align="center"
                        mobileM={{ max_width: '328px' }}
                    >
                        <Localize
                            translate_text="Choose from {{platforms_no}} powerful platforms — each designed with your needs in mind."
                            values={{ platforms_no: is_row ? '8' : '2' }}
                        />
                    </Header>
                </Flex>
                <PlatformCarousel />
            </Flex>
            <div></div>
        </SectionContainer>
    )
}

export default OurPlatforms
