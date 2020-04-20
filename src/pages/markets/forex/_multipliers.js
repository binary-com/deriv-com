import React from 'react'
import styled from 'styled-components'
import { MajorPairs, MinorPairs, SmartFX } from '../sub-markets/_submarkets.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
import DTrader from 'images/svg/dtrader-icon.svg'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const Col = styled(Flex)`
    ${(props) => props.border_left && 'border-left: 1px solid #e3e4e5;'}
`
const Row = styled(Flex)`
    border: 1px solid #e3e4e5;
    ${(props) => props.romve_border_top && 'border-top: unset;'}
`
const Multipliers = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <Text align="center">
                        {localize(
                            'Multipliers allow you to trade on leverage while limiting downside risk to your investment. You can maximise your potential profit by several multiples of any market movement without risking more than your initial investment.',
                        )}
                    </Text>
                    <Flex jc="flex-end" ai="center" mt="2rem" pr="8rem">
                        <Text mr="0.8rem">{localize('Available on')}</Text>
                        <LocalizedLink to="/dtrader/">
                            <DTrader />
                        </LocalizedLink>
                    </Flex>
                </Descriptions>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for multipliers')}
                </Text>
                <Row jc="flex-start" ai="center" mt="1.6rem" background="rgba(242, 243, 244, 0.3)">
                    <Col max_width="13.2rem">
                        <Text weight="bold">{localize('Major pairs')}</Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 0.8rem 1.6rem" border_left>
                        <MajorPairs />
                    </Col>
                </Row>
                <Row jc="flex-start" ai="center" romve_border_top>
                    <Col max_width="13.2rem">
                        <Text weight="bold">{localize('Minor pairs')}</Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 0.8rem 1.6rem" border_left>
                        <MinorPairs />
                    </Col>
                </Row>
                <Row
                    jc="flex-start"
                    ai="center"
                    romve_border_top
                    background="rgba(242, 243, 244, 0.3)"
                >
                    <Col max_width="13.2rem">
                        <Text weight="bold">{localize('SmartFX')}</Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 0.8rem 1.6rem" border_left>
                        <SmartFX />
                    </Col>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Multipliers
