import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { QueryImage } from 'components/elements'
import { WithIntl } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        africa_award: file(relativePath: { eq: "choose-us/africa_award.png" }) {
            ...fadeIn
        }
        africa_award_mobile: file(relativePath: { eq: "choose-us/africa_award_mobile.png" }) {
            ...fadeIn
        }
    }
`

const ImgWrapper = styled.div`
    position: relative;
    max-height: 1050px;
    max-width: 1680px;
    left: 50%;
    transform: translateX(-50%);
`
const StyledQueryImage = styled(QueryImage)`
    .gatsby-image-wrapper [data-main-image] {
        object-fit: contain !important;
    }
`
const AfricaAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Desktop>
                <ImgWrapper>
                    <StyledQueryImage data={data.africa_award} alt={'Africa Forex Award'} />
                </ImgWrapper>
            </Desktop>
            <Mobile>
                <QueryImage data={data.africa_award_mobile} alt={'Africa Forex Award'} />
            </Mobile>
        </>
    )
}

export default WithIntl()(AfricaAward)
