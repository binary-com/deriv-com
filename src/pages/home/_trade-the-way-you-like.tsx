import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Header, Text, QueryImage } from 'components/elements'
import { localize } from 'components/localization'
import { SectionContainer } from 'components/containers'
import { OtherPlatform } from 'components/custom/other-platforms'
import { SizeMixin, MarginMixin } from 'themes/mixins'

type TradeTheWayYouLikeProps = {
    is_ppc_redirect: boolean
}

const ImageWrapper = styled.div`
    ${SizeMixin({ max_width: '65rem' })}
    ${MarginMixin({ all: '3rem auto 0' })}
`

const StyledSection = styled(SectionContainer)`
    background: linear-gradient(var(--color-grey-11), var(--color-white));
`

const query = graphql`
    query {
        dtrader_artboard: file(relativePath: { eq: "home/dtrader_trade_home.png" }) {
            ...fadeIn
        }
    }
`

const TradeTheWayYouLike = ({ is_ppc_redirect }: TradeTheWayYouLikeProps) => {
    const data = useStaticQuery(query)
    return (
        <StyledSection padding="5rem 2rem">
            <Header as="h3" type="section-title" align="center">
                {localize('Trade the way you like')}
            </Header>
            <Text size="var(--text-size-sm)" mt="2rem" align="center">
                {localize('Choose from three powerful platforms — designed with you in mind')}
            </Text>
            <ImageWrapper>
                <QueryImage
                    data={data['dtrader_artboard']}
                    alt={localize('Dtrader artboard')}
                    loading="eager"
                />
            </ImageWrapper>
            <OtherPlatform exclude="" is_nav is_ppc_redirect={is_ppc_redirect} />
        </StyledSection>
    )
}

export default TradeTheWayYouLike
