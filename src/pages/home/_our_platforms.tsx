import React from 'react'
import { Flex, SectionContainer } from 'components/containers'
import PlatformCarousel from 'pages/home/platform-carousel/_platform-carousel'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

const OurPlatforms = () => {
    const { is_row } = useRegion()

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
                        <Localize translate_text="_t_Our platforms_t_" />
                    </Header>
                    <Header
                        as="p"
                        type="subtitle-1"
                        weight="normal"
                        align="center"
                        mobileM={{ max_width: '328px' }}
                    >
                        <Localize
                            translate_text="_t_Choose from {{platforms_no}} powerful platforms — each designed with your needs in mind._t_"
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
