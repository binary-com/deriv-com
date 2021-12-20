import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { localize } from 'components/localization'
import { SectionContainer, CssGrid } from 'components/containers'
import { Header, QueryImage, ImageWrapper } from 'components/elements'
import device from 'themes/device'
import { ImageDataLike } from 'gatsby-plugin-image'

const query = graphql`
    query {
        jy: file(relativePath: { eq: "about-us/jy.jpg" }) {
            ...fadeIn
        }
        derek: file(relativePath: { eq: "about-us/derek.jpg" }) {
            ...fadeIn
        }
        gary: file(relativePath: { eq: "about-us/gary.jpg" }) {
            ...fadeIn
        }
        jennice: file(relativePath: { eq: "about-us/jennice.jpg" }) {
            ...fadeIn
        }
        jeya: file(relativePath: { eq: "about-us/jeya.jpg" }) {
            ...fadeIn
        }
        joanna: file(relativePath: { eq: "about-us/joanna.jpg" }) {
            ...fadeIn
        }

        louise: file(relativePath: { eq: "about-us/louise.jpg" }) {
            ...fadeIn
        }
        person: file(relativePath: { eq: "about-us/person.jpg" }) {
            ...fadeIn
        }
        rakshit: file(relativePath: { eq: "about-us/rakshit.jpg" }) {
            ...fadeIn
        }
        raunak: file(relativePath: { eq: "about-us/raunak.jpg" }) {
            ...fadeIn
        }
        seema: file(relativePath: { eq: "about-us/seema.jpg" }) {
            ...fadeIn
        }
        shyamala: file(relativePath: { eq: "about-us/shyamala.jpg" }) {
            ...fadeIn
        }
        tom: file(relativePath: { eq: "about-us/tom.jpg" }) {
            ...fadeIn
        }
        waqas: file(relativePath: { eq: "about-us/waqas.jpg" }) {
            ...fadeIn
        }
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0: 
    @media ${device.tablet} {
        padding: 0 16px 40px;
    }
    
`

const StyledCssGrid = styled(CssGrid)`
    margin: 0 40px;
    max-width: 996px;
    @media (max-width: 1050px) {
        max-width: 100%;
    }
    @media ${device.laptop} {
        margin: 0;
    }
`

const StyledHeader = styled(Header)`
    @media ${device.laptop} {
        font-size: 28px;
    }
`

const StyledImageWrapper = styled(ImageWrapper)`
    @media ${device.tablet} {
        width: 104px;
        height: 104px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 88px;
    }
`
const StyledQueryImage = styled(QueryImage)`
    @media ${device.tablet} {
        width: 104px;
        height: 104px;
    }
    @media ${device.mobileL} {
        width: 88px;
        height: 88px;
    }
`

const OurLeadership = () => {
    const leaders_data = useStaticQuery(query)
    const leaders = [
        leaders_data.jy,
        leaders_data.rakshit,
        leaders_data.tom,
        leaders_data.joanna,
        leaders_data.louise,
        leaders_data.shyamala,
        leaders_data.derek,
        leaders_data.seema,
        leaders_data.waqas,
        leaders_data.raunak,
        leaders_data.person,
        leaders_data.jeya,
        leaders_data.gary,
        leaders_data.jennice,
    ]
    return (
        <StyledSectionContainer padding="0 16px 120px" background="var(--color-white)">
            <StyledHeader as="h2" size="48px" align="center" type="page-title">
                {localize('Our leadership')}
            </StyledHeader>
            <StyledCssGrid
                columns="repeat(auto-fill, 120px)"
                column_gap="99px"
                row_gap="80px"
                laptop_columns="repeat(auto-fill, 120px)"
                tablet_columns="repeat(auto-fill, 120px)"
                tablet_column_gap="70px"
                tablet_row_gap="80px"
                mobile_columns="repeat(auto-fill, 88px)"
                mobile_column_gap="24px"
                mobile_row_gap="24px"
            >
                {leaders.map((im: ImageDataLike, index: number) => (
                    <StyledImageWrapper key={index} width="120px" height="120px">
                        <StyledQueryImage
                            width="100%"
                            height="100%"
                            data={im}
                            alt="leader"
                            loading="lazy"
                        />
                    </StyledImageWrapper>
                ))}
            </StyledCssGrid>
        </StyledSectionContainer>
    )
}

export default OurLeadership
