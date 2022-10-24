import React from 'react'
import styled from 'styled-components'
import MarketsFoldCarousel from './_markets-carousel/_markets_fold.carousel'
import { Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'

const FoldWrapper = styled(SectionContainer)`
    max-width: 100%;
    padding: 120px 20px;

    @media ${device.tablet} {
        padding: 40px 0 12px;
    }
`

const FoldContainer = styled(Flex)`
    margin: 0 auto;
`

const MarketsFold = () => {
    return (
        <FoldWrapper id="market-fold">
            <FoldContainer direction="column">
                <Flex width="100%" jc="center">
                    <Header type="heading-1" align="center" mb="40px" tablet={{ mb: '24px' }}>
                        <Localize translate_text="Markets" />
                    </Header>
                </Flex>
                <MarketsFoldCarousel />
            </FoldContainer>
        </FoldWrapper>
    )
}

export default MarketsFold
