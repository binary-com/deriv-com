import React from 'react'
import styled from 'styled-components'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'
import { SectionContainer } from 'components/containers'
import { OtherPlatform } from 'components/custom/other-platforms.js'

const Subtitle = styled(Text)`
    margin-top: 2rem;
    text-align: center;
`
const ImageWrapper = styled.div`
    max-width: 65rem;
    margin: 3rem auto 0;
`
const StyledSection = styled(SectionContainer)`
    background: linear-gradient(#efefef, #ffffff);
`
const TradeTheWayYouLike = () => {
    return (
        <StyledSection padding='5rem 2rem'>
            <Header font_size='3rem' align='center'>{localize('Trade the way you like')}</Header>
            <Subtitle secondary>{localize('Choose from three powerful platforms -- designed with you in mind')}</Subtitle>
            <ImageWrapper><Image img_name='dtrader-artboard.png' /></ImageWrapper>
            <OtherPlatform exclude="" is_nav />
        </StyledSection>
    )
}

export default TradeTheWayYouLike
