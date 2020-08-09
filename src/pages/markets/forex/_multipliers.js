import React from 'react'
import styled from 'styled-components'
import { MajorPairs } from '../sub-markets/_submarkets.js'
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
    max-width: 12.9rem;
    padding: 0 0.4rem;

    @media ${device.tabletL} {
        max-width: 7rem;
    }
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

    @media ${device.tabletL} {
        grid-template-columns: ${(props) =>
            props.mobile_col_template ? props.mobile_col_template : 'repeat(3, 1fr)'};

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
    text-align: center;

    @media ${device.tabletL} {
        max-width: 4rem;
        font-weight: 600;
    }
`
const Multipliers = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dtrader />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Instruments available for multipliers trading')}
                </StyledText>
                <Row jc="flex-start" ai="center" mt="1.6rem">
                    <Col max_width="13.2rem">
                        <Title weight="bold">{localize('Major pairs')}</Title>
                    </Col>
                    <MarketsList>
                        <MajorPairs />
                    </MarketsList>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Multipliers
