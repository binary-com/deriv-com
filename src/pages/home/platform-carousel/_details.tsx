import React from 'react'
import styled from 'styled-components'
import { getOSIcon } from './_utils'
import type { TPlatformDetails } from './_utils'
import { Flex } from 'components/containers'
import { StyledLink } from 'components/elements'

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

type DetailsProps = {
    slide: number
    platform_details: TPlatformDetails[]
}

const Details = ({ slide, platform_details }: DetailsProps) => {
    const selected_platform = platform_details && platform_details[slide]

    return (
        <Flex width="60%" fd="column" ai="center" jc="end" laptopM={{ width: '50%' }}>
            <Flex max_height="550px" mb="24px">
                {selected_platform?.image_key}
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
                                <img
                                    src={getOSIcon(link.type)}
                                    alt="platform icon"
                                    loading="lazy"
                                />
                            </DownloadLink>
                        )
                    })}
                </StyledFlex>
            </Flex>
        </Flex>
    )
}

export default Details
