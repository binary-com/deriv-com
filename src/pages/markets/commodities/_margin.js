import React from 'react'
import styled from 'styled-components'
import { Metals, Energy } from '../sub-markets/_submarkets.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize, LocalizedLink } from 'components/localization'
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
                        <LocalizedLink to="/dmt5/">
                            <DMT5 />
                        </LocalizedLink>
                    </Flex>
                </Descriptions>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for margin trading')}
                </Text>
                <Row jc="flex-start" ai="center" mt="1.6rem" background="rgba(242, 243, 244, 0.3)">
                    <Col max_width="13.2rem">
                        <Text weight="bold" max_width="9.7rem" align="center">
                            {localize('Metals')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 2.4rem 1.6rem" border_left>
                        <Metals />
                    </Col>
                </Row>
                <Row jc="flex-start" ai="center" romve_border_top>
                    <Col max_width="13.2rem">
                        <Text weight="bold" max_width="9.7rem" align="center">
                            {localize('Energy')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 2.4rem 1.6rem" border_left>
                        <Energy />
                    </Col>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default Margin
