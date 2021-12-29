import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, StyledLink } from 'components/elements'
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
    margin: 20px;
    margin-left: 5px;
    cursor: pointer;
    img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        opacity: 0.3;
    }

    @media ${device.laptopM} {
        margin-left: 0;
    }
`

const UnselectedTitle = styled.span`
    font-weight: 700;
    font-size: 18px;
    margin-top: 4px;
    opacity: 0.3;
`

const PlatformIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 24px;
    margin-left: 16px;

    @media ${device.laptopM} {
        width: 36px;
        height: 36px;
    }
    @media ${device.tablet} {
        width: 40px;
        height: 40px;
        margin-left: 6px;
    }
`

const SelectedPlatform = styled.div`
    grid-row: 4;
    display: flex;
    align-items: flex-start;
    width: 350px;
    height: 181px;
    padding-top: 16px;
    margin: 20px 0;
    background: #ffffff;
    box-shadow: 0px 16px 20px rgba(131, 131, 131, 0.15), 0px 0px 20px rgba(131, 131, 131, 0.15);
    border-radius: 6px;

    @media ${device.laptopM} {
        width: 320px;
        height: 165px;
        margin: 5px;
        align-self: center;
    }

    @media ${device.tabletL} {
        width: 274px;
        height: 142px;
    }
`

const SelectedTitle = styled.span`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;

    @media ${device.tabletL} {
        margin-bottom: 12px;
    }
    @media ${device.tablet} {
        margin-bottom: 10px;
    }
`

const Description = styled(Header)`
    font-weight: 400;
    max-width: 290px;
    margin-bottom: 16px;

    @media ${device.laptopM} {
        margin-bottom: 13px;
    }
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 12px;
    }
`

const LinkWrapper = styled(StyledLink)`
    a {
        font-size: 16px;
    }
    @media ${device.tabletL} {
        a {
            font-size: 14px;
            line-height: 20px;
        }
    }
    @media ${device.tablet} {
        width: calc(100% - 70px);
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
            <Flex
                fd="column"
                ai="flex-start"
                width="unset"
                height="unset"
                pt="10px"
                mr="20px"
                laptopM={{ pt: '9px' }}
                tablet={{ width: '230px', pt: '0.5rem' }}
            >
                <SelectedTitle>{title}</SelectedTitle>
                <Description as="p" type="paragraph-1">
                    {description}
                </Description>
                <LinkWrapper>
                    <StyledLink to={learn_more_link} weight="350" margin="0 8px 0 0">
                        <span style={{ marginRight: '0.4rem' }}>Learn more </span>
                        {`>`}
                    </StyledLink>
                </LinkWrapper>
            </Flex>
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
