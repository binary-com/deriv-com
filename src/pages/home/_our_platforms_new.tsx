import React from 'react'
import { Flex, SectionContainer } from 'components/containers'
import WheelSlider from 'components/elements/wheel-carousel'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'

const OurPlatformsNew = () => {
    return (
        <SectionContainer
            background="#f9fbff"
            height="962px"
            tabletL={{ height: 'fit-content', pb: 'unset' }}
        >
            <Flex fd="column">
                <Flex fd="column" ai="center" jc="center" mb="80px">
                    <Header as="h2" align="center" size="4.8rem" type="heading-1" weight="700">
                        {localize('Our platforms')}
                    </Header>
                    <Text size="2.4rem" tablet={{ m: '1.6rem', align: 'center' }}>
                        {localize(
                            'Choose from 8 powerful platforms — each designed with your needs in mind',
                        )}
                    </Text>
                </Flex>
                <Flex ai="start" jc="start" min_height="658px">
                    <Flex width="50%" fd="column" ai="start">
                        <WheelSlider label="test" perspective="right" loop slide_count={60} />
                    </Flex>
                    <Flex width="50%" fd="column">
                        Side
                    </Flex>
                </Flex>
            </Flex>
            <div></div>
        </SectionContainer>
    )
}

export default OurPlatformsNew
