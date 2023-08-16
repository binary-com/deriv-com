import React from 'react'
import { boxData } from './data'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import ShadowBox from 'features/components/molecules/shadow-box'

const Potential = () => (
    <Container.Fixed as="section" pt="40x" md={{ pt: '40x' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Flex.Box container="fluid">
            <Flex.Item basis="1-2">
                {boxData.map((item) => {
                    return (
                        <ShadowBox
                            key={item.icon_URL}
                            basis="1-2"
                            icon_URL={item.icon_URL}
                            heading={item.heading}
                            icon_alt={item.icon_alt}
                        />
                    )
                })}
            </Flex.Item>
            <Flex.Item basis="1-2">
                234567jhgf234567jhgf234567jhgf234567jhgf234567jhgf23456 7jhgf23456 7jhgf234567jh
                gf234567jhgf234567jhgf23456 7jhgf234567jhgf2 34567 jhgf234567jhgf23 567jhgf23456
                7jhgf234567jhgf234567 jhgf234567j hgf234567jh gf23456 7jhgf 23456 hgf234 56
                7jhgf234567j hgf234567j hgf234567jhgf234567j hgf234567jhgf234567jhgf234567jhgf
                234567jhgf234567jhgf234567jhgf234567jhgf2 34567jhgf234567j hgf234567jhgf234567jhgf
                234567jhgf234567jhgf234567jhgf234567jhgf23456 7jhgf234567jh
                gf234567jhgf234567jhgf234567jhgf
                234567jhgf234567jhgf234567jhgf234567jhgf234567jhgf23456 7jhgf
            </Flex.Item>
        </Flex.Box>
    </Container.Fixed>
)

export default Potential
