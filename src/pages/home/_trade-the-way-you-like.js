import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { SectionContainer } from 'components/containers'
import { OtherPlatform } from 'components/custom/other-platforms.js'

const query = graphql`
    query {
        dtrader_artboard: file(relativePath: { eq: "dtrader_trade.png" }) {
            ...fadeIn
        }
    }
`
const ImageWrapper = styled.div`
    max-width: 65rem;
    margin: 3rem auto 0;
`
const StyledSection = styled(SectionContainer)`
    background: linear-gradient(#efefef, #ffffff);
`
const TradeTheWayYouLike = () => {
    const data = useStaticQuery(query)
    return (
        <StyledSection padding="5rem 2rem">
            <Header as="h2" align="center">
                {localize('Trade the way you like')}
            </Header>
            <Text size="var(--text-size-sm)" mt="2rem" align="center">
                {localize('Choose from three powerful platforms — designed with you in mind')}
            </Text>
            <ImageWrapper>
                <QueryImage data={data['dtrader_artboard']} alt={localize('Dtrader artboard')} />
            </ImageWrapper>
            <OtherPlatform exclude="" is_nav />
        </StyledSection>
    )
}

export default TradeTheWayYouLike
