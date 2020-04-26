import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../_available-platforms.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { OTCGERMAN } from 'components/elements/symbols.js'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    padding: 4rem 0 8rem 0;

    @media ${device.tabletL} {
        padding: 3rem 0;
    }
`
const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
    }
`
const Col = styled(Flex)`
    ${(props) => props.border_left && 'border-left: 1px solid #e3e4e5;'}
    max-width: 13.2rem;

    @media ${device.tabletL} {
        max-width: 8.75rem;
    }
`
const Row = styled(Flex)`
    border: 1px solid #e3e4e5;
    ${(props) => props.romve_border_top && 'border-top: unset;'}
`
const AvailableTradeText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        margin: 2rem 0;
    }
`
const TitleText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 1.5rem;
    }
`
const MarketContainer = styled(Col)`
    @media ${device.tabletL} {
        max-width: fit-content;
    }
`
const Margin = () => {
    return (
        <StyledSection>
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dmt5 />
                </Descriptions>
                <AvailableTradeText weight="bold" mt="2.4rem">
                    {localize('Instruments available for margin trading')}
                </AvailableTradeText>
                <Row jc="flex-start" ai="center" background="rgba(242, 243, 244, 0.3)">
                    <Col>
                        <TitleText weight="bold" max_width="9.7rem" align="center">
                            {localize('Europe')}
                        </TitleText>
                    </Col>
                    <MarketContainer
                        wrap="wrap"
                        jc="flex-start"
                        p="2rem 7px"
                        border_left
                        ai="center"
                    >
                        <OTCGERMAN />
                        <Text>{localize('German Index')}</Text>
                    </MarketContainer>
                </Row>
            </Flex>
        </StyledSection>
    )
}

export default Margin
