import React from 'react'
import styled from 'styled-components'
import { Metals, Energy } from '../sub-markets/_submarkets.js'
import AvailablePlatforms from '../_available-platforms.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const Col = styled(Flex)`
    max-width: 14.9rem;
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
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    padding: 2.4rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(2, 1fr);
        padding: 2rem;

        svg {
            width: 24px;
            height: 24px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }

    @media ${device.mobileL} {
        grid-template-columns: repeat(1, 1fr);
    }
`
const Title = styled(Text)`
    @media ${device.tabletL} {
        text-align: center;
        font-weight: 600;
    }
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
                <Row jc="flex-start" ai="center" mt="1.6rem">
                    <Col max_width="14.2rem">
                        <Title weight="bold" align="center">
                            {localize('Metals')}
                        </Title>
                    </Col>
                    <MarketsList>
                        <Metals />
                    </MarketsList>
                </Row>
                <Row jc="flex-start" ai="center">
                    <Col max_width="14.2rem">
                        <Title weight="bold" align="center">
                            {localize('Energy')}
                        </Title>
                    </Col>
                    <MarketsList>
                        <Energy />
                    </MarketsList>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
