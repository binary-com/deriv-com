import React from 'react'
import { market_news_data } from './_markets_news_data'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Text } from 'components/elements/typography'

const MarketNews = () => {
    return (
        <SectionContainer>
            <Container>
                {market_news_data.map((data, index) => {
                    return (
                        <Flex key={index} fd="column">
                            <Text>
                                {data.report_type}
                            </Text>
                            <Text>
                                {data.date}
                            </Text>
                            <Text>
                                {data.read_time}
                            </Text>
                        </Flex>
                    )
                })}
            </Container>
        </SectionContainer>
    )
}

export default MarketNews