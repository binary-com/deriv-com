import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { SectionContainer } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'

const query = graphql`
    query {
        margin_piechart: file(relativePath: { eq: "trade-types/margin-piechart.png" }) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled.div`
    width: 100%;
    margin-bottom: 3.2rem;
`
const WhatIsMargin = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('What is margin?')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'Margin is a deposit required to open a leveraged position – that is a position larger than your capital investment. So margin trading allows you to purchase larger units of an asset at a fraction of the cost in order to increase your market exposure even if you are trading with limited capital.',
                        )}
                    </Text>
                    <ImageWrapper>
                        <QueryImage
                            data={data['margin_piechart']}
                            alt="Trade types margin market"
                        />
                    </ImageWrapper>
                    <Text mb="4rem">
                        {localize(
                            'This means that with the same capital, you will be able to buy more of an asset. The result is a more substantial profit when you win a trade and of course, a more significant loss when you lose. ',
                        )}
                    </Text>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatIsMargin
