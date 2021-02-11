import React from 'react'
import styled from 'styled-components'
import { MajorPairs } from '../../markets/instruments/_submarkets.js'
import AvailablePlatforms from '../../markets/components/helper/_available-platforms.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'

const StyledText = styled(Text)`
    @media ${device.tabletL} {
        text-align: left;
    }
`

const Col = styled(Flex)`
    max-width: 12.9rem;
    padding: 0 0.4rem;
`
const Row = styled(Flex)`
    border: 1px solid var(--color-grey-22);
    margin-top: 2.4rem;
    border-radius: 8px;
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    padding: 2.4rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(3, 1fr);

        img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }

    @media ${device.mobileL} {
        grid-template-columns: repeat(2, 1fr);
    }
`

const Title = styled(Text)`
    text-align: center;

    @media ${device.tabletL} {
        font-weight: 600;
    }
`

const StyledTitle = styled(Text)`
    text-align: left;
    font-weight: bold;
`

const Margin = () => {
    return (
        <SectionContainer padding="4rem 0 8rem">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <StyledText mb="12px" align="center">
                    {localize(
                        'Trade Forex with multipliers for high leverage, tight spreads and benefit from multiple opportunities to trade on world events.',
                    )}
                </StyledText>
                <StyledTitle>
                    {localize('Forex pairs available for Multipliers trading')}
                </StyledTitle>
                <Row jc="flex-start" ai="center">
                    <Col>
                        <Title weight="bold">{localize('Major pairs')}</Title>
                    </Col>
                    <MarketsList>
                        <MajorPairs />
                    </MarketsList>
                </Row>
                <AvailablePlatforms dtrader />
            </Flex>
        </SectionContainer>
    )
}

export default Margin
