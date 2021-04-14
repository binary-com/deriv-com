/* eslint-disable no-console */
import React from 'react'
import styled from 'styled-components'
import { localize } from 'components/localization'
import { Text } from 'components/elements/typography'
import { SectionContainer, Container, Flex } from 'components/containers'

const HeadingText = styled(Text)`
    font-weight: bold;
    font-size: 48px;
    border-right: 1px solid;
    padding-right: 24px;
`

const selling_points = [
    {
        title: "100+",
        subtitle: "tradable assets",
    },
    {
        title: "24/7",
        subtitle: "trading",
    },
    {
        title: "Zero",
        subtitle: "commission",
    },
]

const SellingPoints = () => {
    return (
        <SectionContainer>
            <Container>
                <Flex>
                    {selling_points.map((index) => {
                        return (
                            <Flex key={index}>
                                <HeadingText>
                                    {localize(index.title)}
                                </HeadingText>
                                <Text pl="24px" m="auto 0">
                                    {localize(index.subtitle)}
                                </Text>
                            </Flex>
                        )
                    })}
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default SellingPoints