import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../_available-platforms.js'
import MarketsAccordion from '../_markets_accordion.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import { OTCGERMAN } from 'components/elements/symbols.js'
import device from 'themes/device'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-22);
`
const Col = styled(Flex)`
    max-width: 12.9rem;

    @media ${device.tabletL} {
        max-width: 10rem;
    }
`
const Row = styled(Flex)``
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
    }
`
const Symbol = styled(Flex)`
    width: fit-content;

    svg {
        width: 32px;
        height: 32px;
        margin-right: 0.8rem;
    }
    ${Text} {
        font-weight: normal;
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: 1px solid var(--color-grey-22);
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    padding: 2.4rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);

        svg {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }
`

const Title = styled(Text)`
    @media ${device.tabletL} {
        text-align: center;
        max-width: 8rem;
        font-weight: 600;
    }
`
const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 2.4rem;
    }
`
const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 1.4rem;
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            margin-top: 1rem;
        }
    }
`
const EuropeDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'The German Index follows the stock performance of the 30 major listed companies in Germany.',
            )}
        </Text>
    </DetailsContainer>
)
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
                <MarketsWrapper direction="column">
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col>
                                    <Title weight="bold">{localize('Europe')}</Title>
                                </Col>
                                <MarketsList>
                                    <Symbol ai="center">
                                        <OTCGERMAN />
                                        <Text>{localize('German Index')}</Text>
                                    </Symbol>
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={EuropeDetails}
                    />
                </MarketsWrapper>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
