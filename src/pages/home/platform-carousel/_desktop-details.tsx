import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { getOSIcon, platform_details } from './utils'
import { Flex } from 'components/containers'
import { QueryImage, StyledLink } from 'components/elements'

const DownloadLink = styled(StyledLink)`
    margin: 0.4rem;
`

type DetailsProps = {
    slide: number
}

const image_query = graphql`
    query {
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
        platforms_deriv_go: file(relativePath: { eq: "home/platforms_deriv_go.png" }) {
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

const Details = ({ slide }: DetailsProps) => {
    const images = useStaticQuery(image_query)
    const image_keys = Object.keys(images)
    const selected_image = images[image_keys[slide]]

    return (
        <Flex width="60%" fd="column" ai="center" jc="end">
            <Flex>
                <QueryImage height="100%" data={selected_image} alt="test" />
            </Flex>
            <Flex>
                {platform_details[slide].download_links.map((link, index) => {
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
