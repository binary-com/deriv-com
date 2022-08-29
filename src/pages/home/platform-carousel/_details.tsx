import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getOSIcon } from './_utils'
import type { TPlatformDetails } from './_utils'
import { Flex } from 'components/containers'
import { QueryImage, StyledLink } from 'components/elements'

const StyledFlex = styled(Flex)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    max-width: 630px;
    margin-bottom: 20px;
`
const DownloadLink = styled(StyledLink)`
    margin: 0.4rem;
`

export const image_query = graphql`
    query {
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_mt5_eu: file(relativePath: { eq: "home/platforms_mt5_eu.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_mt5_uk: file(relativePath: { eq: "home/platforms_mt5_uk.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
        }
        platforms_dtrader_eu: file(relativePath: { eq: "home/platforms_dtrader_eu.png" }) {
            ...fadeIn
        }
        platforms_dtrader_uk: file(relativePath: { eq: "home/platforms_dtrader_uk.png" }) {
            ...fadeIn
        }
        platforms_derivx: file(relativePath: { eq: "home/platforms_derivx.png" }) {
            ...fadeIn
        }
        platforms_dbot: file(relativePath: { eq: "home/platforms_dbot.png" }) {
            ...fadeIn
        }
        platforms_smarttrader: file(relativePath: { eq: "home/platforms_smarttrader.png" }) {
            ...fadeIn
        }
        platforms_binary_bot: file(relativePath: { eq: "home/platforms_binary_bot.png" }) {
            ...fadeIn
        }
        platforms_api: file(relativePath: { eq: "home/platforms_api.png" }) {
            ...fadeIn
        }
    }
`

const StyledQueryImage = styled(QueryImage)`
    .gatsby-image-wrapper [data-main-image] {
        object-fit: contain !important;
    }
`

type DetailsProps = {
    slide: number
    platform_details: TPlatformDetails[]
}

const Details = ({ slide, platform_details }: DetailsProps) => {
    const images = useStaticQuery(image_query)
    const selected_platform = platform_details && platform_details[slide]

    return (
        <Flex width="60%" fd="column" ai="center" jc="end" laptopM={{ width: '50%' }}>
            <Flex max_height="550px" mb="24px">
                <StyledQueryImage
                    height="100%"
                    data={images[selected_platform?.image_key]}
                    alt="test"
                />
            </Flex>
            <Flex>
                <StyledFlex>
                    {selected_platform?.download_links.is_desktop?.map((link, index) => {
                        return (
                            <DownloadLink
                                key={link.type}
                                external
                                type={link?.link_type}
                                to={link?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={getOSIcon(link.type)} loading="lazy" />
                            </DownloadLink>
                        )
                    })}
                </StyledFlex>
            </Flex>
        </Flex>
    )
}

export default Details
