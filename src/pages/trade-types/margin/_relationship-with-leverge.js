import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { SectionContainer, Show } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        margin_relationship_piechart: file(
            relativePath: { eq: "trade-types/margin-relationship-piechart.png" }
        ) {
            ...fadeIn
        }
        margin_mobile_relationship_piechart: file(
            relativePath: { eq: "trade-types/margin-mobile-relationship-piechart.png" }
        ) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled.div`
    width: 100%;
`
const RelationshipWithLeverge = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <SectionContainer background="white" padding="0 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" mb="0.8rem">
                        {localize('The relationship between margin and leverage')}
                    </Header>
                    <Text mb="0.8rem">
                        {localize(
                            'These terms, often used interchangeably in online trading, differ somewhat in meaning. Just like margin, leverage allows you to control a trading position that is larger than your capital.',
                        )}
                    </Text>
                    <Text mb="3.2rem">
                        {localize(
                            'However, while leverage is expressed in ratios such as 50:1, 100:1, 400:1, margin is expressed as a percentage of the amount required to open a position, for instance, 2%, 1%, and 0.25%.',
                        )}
                    </Text>
                </SmallContainer>
                <Show.Desktop max_width={680}>
                    <SmallContainer direction="column" ai="flex-start">
                        <ImageWrapper>
                            <QueryImage
                                data={data['margin_relationship_piechart']}
                                alt="Trade types margin market"
                            />
                        </ImageWrapper>
                    </SmallContainer>
                </Show.Desktop>
                <Show.Mobile min_width={680}>
                    <ImageWrapper>
                        <QueryImage
                            data={data['margin_mobile_relationship_piechart']}
                            alt="Trade types margin market"
                        />
                    </ImageWrapper>
                </Show.Mobile>
                <SmallContainer direction="column" ai="flex-start">
                    <Text mt="3.2rem">
                        {localize(
                            'Based on the margin allowed, you will be able to ascertain the maximum leverage that you can utilise in your trading.',
                        )}
                    </Text>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default RelationshipWithLeverge
