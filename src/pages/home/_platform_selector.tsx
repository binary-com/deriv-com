import React from 'react'
import styled from 'styled-components'
import { StyledLink, Text } from 'components/elements'
import device from 'themes/device.js'

export type Platform = {
    title: string
    icon: string
    description: string
    learn_more_link: string
    download_links?: {
        Browser?: string
        AppStore?: string
        GooglePlay?: string
        Linux?: string
        APK?: string
    }
}

type PlatformSelectorProps = {
    platforms: Array<Platform>
    selected_index: number
    selectIndex: React.Dispatch<React.SetStateAction<number>>
}

const ContentContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 3fr 1fr 1fr 1fr 1fr;
`

const UnselectedPlatform = styled.div`
    align-self: start;
    display: flex;
    align-items: center;
    width: 160px;
    margin: 2rem;
    margin-left: 0;
    cursor: pointer;
    img {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
        opacity: 0.3;
    }

    @media ${device.laptopM} {
        margin-left: 0;
    }
`

const UnselectedTitle = styled.span`
    font-weight: 700;
    font-size: 1.8rem;
    margin-top: 0.4rem;
    opacity: 0.3;
`

const PlatformIcon = styled.img`
    width: 4rem;
    height: 4rem;
    margin-right: 2.4rem;
    margin-left: 1.6rem;

    @media ${device.laptopM} {
        width: 3.6rem;
        height: 3.6rem;
    }
    @media ${device.tablest} {
        width: 4rem;
        height: 4rem;
        margin-left: 0.6rem;
    }
`

const SelectedPlatform = styled.div`
    grid-row: 4;
    display: flex;
    align-items: flex-start;
    width: 350px;
    height: 181px;
    padding-top: 1.6rem;
    margin: 2rem 0;
    background: #ffffff;
    box-shadow: 0px 16px 20px rgba(131, 131, 131, 0.15), 0px 0px 20px rgba(131, 131, 131, 0.15);
    border-radius: 6px;

    @media ${device.laptopM} {
        width: 320px;
        height: 165px;
        margin: 0.5rem;
        align-self: center;
    }

    @media ${device.tabletL} {
        width: 274px;
        height: 142px;
    }
`

const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 1rem;
    margin-right: 2rem;

    @media ${device.laptopM} {
        padding-top: 0.9rem;
    }

    @media ${device.tablet} {
        width: 230px;
        padding-top: 0.5rem;
    }
`

const SelectedTitle = styled.span`
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.5rem;

    @media ${device.tablet} {
        margin-bottom: 1rem;
    }
`

const Description = styled(Text)`
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    max-width: 290px;
    margin-bottom: 1.6rem;

    @media ${device.laptopM} {
        margin-bottom: 1.3rem;
    }
`

const LinkWrapper = styled(StyledLink)`
    a {
        font-size: 1.6rem;
    }
    @media ${device.tablet} {
        width: calc(100% - 7rem);
        text-align: center;
    }
`

export const PlatformDetails = ({
    title,
    icon,
    description,
    learn_more_link,
}: Platform): React.ReactElement => {
    return (
        <>
            <PlatformIcon src={icon} alt="platform" />
            <CardDetails>
                <SelectedTitle>{title}</SelectedTitle>
                <Description>{description}</Description>
                <LinkWrapper>
                    <StyledLink to={learn_more_link} weight="350">
                        Learn more {'>'}
                    </StyledLink>
                </LinkWrapper>
            </CardDetails>
        </>
    )
}

export const PlatformSelector = ({
    platforms,
    selected_index,
    selectIndex,
}: PlatformSelectorProps): React.ReactElement => {
    return (
        <ContentContainer>
            {platforms.map((platform, index) =>
                index === selected_index ? (
                    <SelectedPlatform key={index}>
                        <PlatformDetails
                            title={platform.title}
                            icon={platform.icon}
                            description={platform.description}
                            learn_more_link={platform.learn_more_link}
                        />
                    </SelectedPlatform>
                ) : (
                    <UnselectedPlatform key={index} onClick={() => selectIndex(index)}>
                        <PlatformIcon src={platform.icon} alt="platform" />
                        <UnselectedTitle>{platform.title}</UnselectedTitle>
                    </UnselectedPlatform>
                ),
            )}
        </ContentContainer>
    )
}
