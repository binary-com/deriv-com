import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TDownloadLink } from '../types'
import { getOsIconPlatform } from '../utils'
import { StyledLink } from 'components/elements'
import { Flex } from 'components/containers'
import useMediaQuery from 'components/hooks/use-media-query'
import device from 'themes/device'

const DownloadLink = styled(StyledLink)`
    margin: 0.4rem;
`
const StyledFlex = styled(Flex)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    max-width: 630px;
    margin-bottom: 20px;
`

type TPlatformCarouselBadgesProps = {
    badges: TDownloadLink[] | ((is_mobile: boolean) => TDownloadLink[])
}

const PlatformCarouselBadges = ({ badges }: TPlatformCarouselBadgesProps) => {
    const is_mobile = useMediaQuery(device.tabletL)

    const download_link_badges = useMemo(() => {
        return typeof badges === 'function' ? badges(is_mobile) : badges
    }, [is_mobile, badges])

    return (
        <Flex
            ai="flex-start"
            jc="center"
            fw="wrap"
            width="unset"
            tabletL={{ m: '3.2rem 3.8rem' }}
            mobileL={{ m: '32px 0 40px' }}
        >
            <StyledFlex>
                {download_link_badges.map((link) => (
                    <DownloadLink
                        key={link.type}
                        external
                        type={link?.link_type}
                        to={link?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={getOsIconPlatform(link.type)} alt={link.type} />
                    </DownloadLink>
                ))}
            </StyledFlex>
        </Flex>
    )
}

export default PlatformCarouselBadges
