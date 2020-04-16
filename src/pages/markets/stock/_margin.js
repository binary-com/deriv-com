import React from 'react'
import styled from 'styled-components'
import { Americas, AsiaOceania, Europe } from '../sub-markets/_submarkets.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import DMT5 from 'images/svg/dmt5-icon.svg'

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
const Margin = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <Text align="center">
                        {localize(
                            'Margin trading allows you to purchase larger units of an asset at a fraction of the cost while amplifying your potential profit, but similarly increasing your potential loss.',
                        )}
                    </Text>
                    <Flex jc="flex-end" ai="center" mt="2rem" pr="8rem">
                        <Text mr="0.8rem">{localize('Available on')}</Text>
                        <DMT5 />
                    </Flex>
                </Descriptions>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for margin trading')}
                </Text>
                <Row jc="flex-start" ai="center" mt="1.6rem" background="rgba(242, 243, 244, 0.3)">
                    <Col max_width="13.2rem">
                        <Text weight="bold" max_width="9.7rem" align="center">
                            {localize('Americas')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.7rem 0 2.7rem 1.6rem" border_left>
                        <Americas />
                    </Col>
                </Row>
                <Row jc="flex-start" ai="center" romve_border_top>
                    <Col max_width="13.2rem">
                        <Text weight="bold" max_width="9.7rem" align="center">
                            {localize('Asia/Oceania')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="3.2rem 0 3.2rem 1.6rem" border_left>
                        <AsiaOceania />
                    </Col>
                </Row>
                <Row
                    jc="flex-start"
                    ai="center"
                    romve_border_top
                    background="rgba(242, 243, 244, 0.3)"
                >
                    <Col max_width="13.2rem">
                        <Text weight="bold" max_width="9.7rem" align="center">
                            {localize('Europe')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="0.8rem 0 2.4rem 1.6rem" border_left>
                        <Europe />
                    </Col>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
