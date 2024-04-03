import React from 'react'
import DP2HeroContent from './content'
import DP2HeroBanner from './banner'
import Flex from 'features/components/atoms/flex-box'
import DP2HeroContainer from 'features/components/templates/hero-banners/p2p'

const DP2Hero = () => {
    return (
        <DP2HeroContainer
            container="fixed"
            style={{ direction: 'ltr' }}
            pt="35x"
            pb="15x"
            md={{
                padding_block: '0x',
            }}
        >
            <Flex.Box
                container="fluid"
                align="center"
                gap="15x"
                direction="col-reverse"
                md={{
                    direction: 'row',
                    justify: 'start',
                    gap: '20x',
                }}
            >
                <DP2HeroContent />
                <DP2HeroBanner />
            </Flex.Box>
        </DP2HeroContainer>
    )
}

export default DP2Hero
