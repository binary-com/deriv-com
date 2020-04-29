import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../_available-platforms.js'
import { MajorPairs, MinorPairs, ExoticPairs } from '../sub-markets/_submarkets.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-22);
`
const Col = styled(Flex)`
    border-left: 1px solid var(--color-grey-22);
`
const Row = styled(Flex)`
    border: 1px solid var(--color-grey-22);
    margin-top: 2.4rem;
    border-radius: 8px;
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    padding: 2.4rem;
    grid-row-gap: 1.6rem;
`
const Margin = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dmt5 />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Instruments available for margin trading')}
                </StyledText>
                <Row jc="flex-start" ai="center">
                    <Col max_width="12.9rem">
                        <Text weight="bold">{localize('Major pairs')}</Text>
                    </Col>
                    <MarketsList>
                        <MajorPairs />
                    </MarketsList>
                </Row>
                <Row jc="flex-start" ai="center">
                    <Col max_width="12.9rem">
                        <Text weight="bold">{localize('Minor pairs')}</Text>
                    </Col>
                    <MarketsList>
                        <MinorPairs />
                    </MarketsList>
                </Row>
                <Row jc="flex-start" ai="center">
                    <Col max_width="12.9rem">
                        <Text weight="bold">{localize('Exotic pairs')}</Text>
                    </Col>
                    <MarketsList>
                        <ExoticPairs />
                    </MarketsList>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
