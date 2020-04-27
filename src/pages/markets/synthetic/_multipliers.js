import React from 'react'
import styled from 'styled-components'
import AvailablePlatforms from '../_available-platforms.js'
import { ContinuousIndices } from '../sub-markets/_submarkets.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import device from 'themes/device'
const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const Col = styled(Flex)`
    ${(props) => props.border_left && 'border-left: 1px solid #e3e4e5;'}
`
const Row = styled(Flex)`
    border: ${(props) => (props.remove_border ? '' : '1px solid #e3e4e5')};
    ${(props) => props.romve_border_top && 'border-top: unset;'}
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
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
                    {localize('Instruments available for multipliers')}
                </StyledText>
                <Row jc="flex-start" ai="center" mt="1.6rem" background="rgba(242, 243, 244, 0.3)">
                    <Col max_width="13.2rem">
                        <Text weight="bold" align="center">
                            {localize('Continuous indices')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2rem 0 2.4rem 1.6rem" border_left>
                        <CssGrid columns="1fr 1fr 1fr" row_gap="1.6rem">
                            <ContinuousIndices />
                        </CssGrid>
                    </Col>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Multipliers
