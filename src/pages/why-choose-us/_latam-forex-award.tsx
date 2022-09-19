import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { QueryImage } from 'components/elements'
import { WithIntl } from 'components/localization'
import { Desktop, Mobile } from 'components/containers'

const query = graphql`
    query {
        latam_award: file(relativePath: { eq: "choose-us/latam-award.png" }) {
            ...fadeIn
        }
        latam_award_mobile: file(relativePath: { eq: "choose-us/latam-award-mobile.png" }) {
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
const LatamAward = () => {
    const data = useStaticQuery(query)

    return (
        <>
            <Desktop>
                <ImgWrapper>
                    <StyledQueryImage data={data.latam_award} alt={'Latam Forex Award'} />
                </ImgWrapper>
            </Desktop>
            <Mobile>
                <QueryImage data={data.latam_award_mobile} alt={'Latam Forex Award'} />
            </Mobile>
        </>
    )
}

export default WithIntl()(LatamAward)
