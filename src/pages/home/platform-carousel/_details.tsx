import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getOSIcon } from './_utils'
import type { TPlatformDetails } from './_utils'
import { Flex } from 'components/containers'
import { QueryImage, StyledLink } from 'components/elements'

const DownloadLink = styled(StyledLink)`
    margin: 0.4rem;
`

const image_query = graphql`
    query {
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
            ...fadeIn
        }
        platforms_mt5: file(relativePath: { eq: "home/platforms_mt5.png" }) {
            ...fadeIn
        }
        platforms_dtrader: file(relativePath: { eq: "home/platforms_dtrader.png" }) {
            ...homePageHeroFadeIn
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
    data: TPlatformDetails
}

const Details = ({ data: { image_key, download_links } }: DetailsProps) => {
    const images = useStaticQuery(image_query)

    return (
        <Flex width="60%" fd="column" ai="center" jc="end" laptopM={{ width: '50%' }}>
            <Flex max_height="550px" mb="24px">
                <StyledQueryImage height="100%" data={images[image_key]} alt="test" />
            </Flex>
            <Flex>
                {download_links.map((link, index) => {
                    return (
                        <DownloadLink
                            key={index}
                            to={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={getOSIcon(link.type)} loading="lazy" />
                        </DownloadLink>
                    )
                })}
            </Flex>
        </Flex>
    )
}

export default Details
