import React from 'react'
import { Flex, SectionContainer } from 'components/containers'
import PlatformCarousel from 'pages/home/platform-carousel/_platform-carousel'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { getCountryRule } from 'components/containers/visibility'

const OurPlatforms = () => {
    const { is_row } = getCountryRule()

    return (
        <SectionContainer
            background="#f9fbff"
            height="fit-content"
            tabletL={{ height: 'fit-content', min_height: '663px', pb: 'unset' }}
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
                        {is_row
                            ? localize(
                                  'Choose from 8 powerful platforms — each designed with your needs in mind',
                              )
                            : localize(
                                  'Choose from 2 powerful platforms — each designed with your needs in mind',
                              )}
                    </Header>
                </Flex>
                <PlatformCarousel />
            </Flex>
            <div></div>
        </SectionContainer>
    )
}

export default OurPlatforms
