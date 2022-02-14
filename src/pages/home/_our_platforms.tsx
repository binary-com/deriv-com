import React from 'react'
import { getPlatformDetails } from './platform-carousel/_utils'
import { Flex, SectionContainer } from 'components/containers'
import PlatformCarousel from 'pages/home/platform-carousel/_platform-carousel'
import { Header } from 'components/elements'
import { localize } from 'components/localization'

const OurPlatforms = () => {
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
                        {localize(
                            `Choose from ${
                                getPlatformDetails().length
                            } powerful platforms — each designed with your needs in mind`,
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
