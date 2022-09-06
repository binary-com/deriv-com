import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, SectionContainer, Box, Desktop, Mobile } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import AppStore from 'images/svg/dmt5/app-store.svg'
import GooglePlay from 'images/svg/dmt5/google-play.svg'
import GooglePlayMobile from 'images/svg/dmt5/google-play-mobile.svg'
import MacOS from 'images/svg/dmt5/macos.svg'
import MoreInfo from 'images/svg/dmt5/more-info.svg'
import Windows from 'images/svg/dmt5/windows.svg'
import device from 'themes/device'
import {
    dmt5_mac_app_url,
    dmt5_windows_url,
    dmt5_android_url,
    dmt5_ios_url,
} from 'common/constants'

type ImageWrapperProps = {
    mt?: string
}

const query = graphql`
    query {
        mobile_phone: file(relativePath: { eq: "dmt5/mobile-phone.png" }) {
            ...fadeIn
        }
    }
`

const DownloadLinkWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
`
const Section = styled(SectionContainer)`
    display: flex;
    height: 30rem;
    padding: 0 12rem 0;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--color-grey-25);

    @media ${device.laptopL} {
        padding: 0 1rem 0;
    }
    @media ${device.tabletL} {
        padding: 40px 0 0;
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`
const Separator = styled.div`
    width: 2px;
    height: 100%;
    background-color: rgba(133, 147, 164, 0.16);

    @media ${device.tabletL} {
        width: 100%;
        height: 1px;
        margin-top: 40px;
    }
`

const ImageWrapper = styled.div<ImageWrapperProps>`
    margin-top: 4rem;
    width: 38.4rem;
    position: relative;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`
const StyledInfo = styled.img`
    margin-top: 0.5rem;
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 20px;
    }
`

const DownloadApp = () => {
    const data = useStaticQuery(query)

    return (
        <Section>
            <Flex
                jc="flex-start"
                tablet_jc="center"
                fd="column"
                width="100%"
                max_width="38.2rem"
                mt="4rem"
                height="auto"
                tabletL={{ mt: '0', pl: '10px', pr: '10px' }}
            >
                <Desktop>
                    <StyledHeader as="h4" type="subtitle-1">
                        {localize('Desktop')}
                    </StyledHeader>
                    <Flex mt="0.8rem" jc="flex-start" height="auto">
                        <DownloadLinkWrapper>
                            <LocalizedLink
                                external
                                to={dmt5_windows_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Windows} alt="windows" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_mac_app_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={MacOS} alt="macos" />
                            </LocalizedLink>
                        </DownloadLinkWrapper>
                    </Flex>

                    <StyledHeader mt="2.4rem" as="h4" type="subtitle-1">
                        {localize('Mobile')}
                    </StyledHeader>
                    <Flex mt="0.8rem" jc="flex-start">
                        <Box mr="0.8rem">
                            <LocalizedLink
                                external
                                to={dmt5_ios_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={AppStore} alt="app store" />
                            </LocalizedLink>
                        </Box>
                        <LocalizedLink
                            external
                            to={dmt5_android_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GooglePlay} alt="google play" width="138" height="40" />
                        </LocalizedLink>
                    </Flex>
                </Desktop>

                <Mobile>
                    <StyledHeader as="h4">{localize('Mobile')}</StyledHeader>
                    <Flex mt="0.8rem" jc="flex-start">
                        <Box mr="0.8rem">
                            <LocalizedLink
                                external
                                to={dmt5_ios_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={AppStore} alt="appstore mobile" />
                            </LocalizedLink>
                        </Box>
                        <LocalizedLink
                            external
                            to={dmt5_android_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={GooglePlayMobile}
                                alt="google play mobile"
                                width="138"
                                height="40"
                            />
                        </LocalizedLink>
                    </Flex>
                    <StyledHeader mt="2.4rem" as="h4">
                        {localize('Desktop')}
                    </StyledHeader>
                    <Flex mt="0.8rem" jc="flex-start" height="auto">
                        <DownloadLinkWrapper>
                            <LocalizedLink
                                external
                                to={dmt5_windows_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Windows} alt="windows" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_mac_app_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={MacOS} alt="macos" />
                            </LocalizedLink>
                        </DownloadLinkWrapper>
                    </Flex>
                </Mobile>
            </Flex>

            <Separator />

            <Flex
                height="auto"
                ml="5.6rem"
                max_width="31rem"
                mt="10.8rem"
                mr="5.6rem"
                ai="flex-start"
                tabletL={{ max_width: '290px', mt: '40px' }}
                laptopM={{ mr: '2px', ml: '2px' }}
            >
                <StyledInfo src={MoreInfo} alt="more info" />
                <Text width="100%" ml="1.6rem" size="var(--text-size-m)">
                    <Localize
                        translate_text="For mobile app sign-ups, set the broker code to <0>Deriv Limited</0>."
                        components={[<strong key={0} />]}
                    />
                </Text>
            </Flex>
            <ImageWrapper mt="4rem">
                <QueryImage data={data['mobile_phone']} alt="DMT5 mobile app" />
            </ImageWrapper>
        </Section>
    )
}

export default DownloadApp
