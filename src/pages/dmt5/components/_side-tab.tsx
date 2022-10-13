import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Box, Desktop, Mobile } from 'components/containers'
import { Text, QueryImage } from 'components/elements'
import device, { size } from 'themes/device'
import AppStore from 'images/svg/dmt5/app-store.svg'
import GooglePlay from 'images/svg/dmt5/google-play.svg'
import { LocalizedLink } from 'components/localization'

type ContentProps = {
    children?: React.ReactNode
    selected?: boolean
    is_reverse?: boolean | string
}

type TabProps = {
    children?: React.ReactNode
    is_reverse?: string
    parent_tab?: ObjectConstructor | string
    has_download_button?: boolean
    download_links?: { ios: string; android: string }
    props?: {
        label?: string
        description?: React.ReactElement
        item_width?: string
        mobile_item_width?: string
    }
    has_qr_code?: boolean
}

const query = graphql`
    query {
        qr_code: file(relativePath: { eq: "deriv-x/derivx-footer-qr.png" }) {
            ...fadeIn
        }
    }
`

const DownloadFlex = styled(Flex)`
    @media ${device.tabletS} {
        justify-content: center;
    }
`

const StyledFlex = styled(Flex)`
    @media ${device.tablet} {
        width: unset;
        margin: auto;
    }
`

const StyledText = styled(Text)`
    max-width: ${(props) => props.max_width};

    @media ${device.tablet} {
        font-size: 16px;
        max-width: unset;
    }
`

const TabContent = styled.div<TabProps>`
    width: 100%;
`
const Content = styled.div<ContentProps>`
    flex: 1;
    opacity: ${(props) => (props.selected ? '1' : '0')};
    transition: opacity 1s ease-in;
`
const TabButton = styled.div<ContentProps>`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-left: 1.6rem;
    margin-bottom: 2.4rem;
    cursor: pointer;

    ${Text} {
        font-weight: ${(props) => (props.selected ? 'bold' : 'unset')};
    }
    &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        left: 0;
        top: 0;
        background: ${(props) => (props.selected ? 'var(--color-red)' : 'var(--color-grey-29)')};
        transition: background 0.25s;
    }

    @media ${device.tabletS} {
        margin: 0 16px 16px;
    }
`

const left = css`
    margin-left: 2.4rem;
`
const right = css`
    margin-right: 2.4rem;
`

const TabList = styled.div<ContentProps>`
    max-width: 38rem;
    display: flex;
    flex-direction: column;
    ${(props) => (props.is_reverse ? left : right)}
    @media ${device.tablet} {
        max-width: 50rem;
        margin-right: unset;
    }
    @media ${device.tabletS} {
        max-width: 576px;
        width: 100%;
        margin: 0;
    }
`

const DesktopWrapper = styled(Desktop)`
    flex: 1;
    width: 100%;
`

const MobileWrapper = styled(Mobile)`
    @media ${device.tabletS} {
        margin-bottom: 2.3rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
    @media ${device.mobileL} {
        margin-bottom: 0;
    }
`

const TabPanel = ({ children }: TabProps) => <TabContent role="tabpanel">{children}</TabContent>

const SideTab = ({
    children = '',
    is_reverse = '',
    parent_tab = '',
    has_download_button = false,
    download_links = { ios: '', android: '' },
    has_qr_code = false,
}: TabProps) => {
    const [selected_tab, setSelectedTab] = React.useState(0)
    const [old_parent_tab, setOldParentTab] = React.useState(parent_tab)
    const prevParentRef = React.useRef()
    React.useEffect(() => {
        prevParentRef.current = old_parent_tab
        if (old_parent_tab !== parent_tab) setSelectedTab(0)
    })

    const selectTab = (tabIndex) => {
        setSelectedTab(tabIndex)
        setOldParentTab(parent_tab)
    }

    const data = useStaticQuery(query)

    return (
        <StyledFlex ai="flex-start" direction={is_reverse ? 'row-reverse' : 'row'}>
            <DesktopWrapper breakpoint={size.bp769}>
                {React.Children.map(children, (el, index) => {
                    return (
                        <Content selected={selected_tab === index}>
                            {selected_tab === index ? el : undefined}
                        </Content>
                    )
                })}
            </DesktopWrapper>
            <div>
                <TabList role="tablist" is_reverse={is_reverse}>
                    {React.Children.map(children, (child: TabProps, index) => {
                        const {
                            props: { label, description, item_width, mobile_item_width },
                        } = child
                        return (
                            <>
                                <TabButton
                                    role="tab"
                                    selected={selected_tab === index}
                                    aria-selected={selected_tab === index ? 'true' : 'false'}
                                    onClick={() => selectTab(index)}
                                >
                                    <Text weight="bold">{label}</Text>
                                    <StyledText
                                        max_width={item_width || '36.4rem'}
                                        mobile_max_width={mobile_item_width || item_width}
                                        size="var(--text-size-m)"
                                        mt="0.8rem"
                                    >
                                        {description}
                                    </StyledText>
                                </TabButton>
                                <MobileWrapper breakpoint={size.bp769}>
                                    <Content selected={selected_tab === index}>
                                        {selected_tab === index ? child : undefined}
                                    </Content>
                                </MobileWrapper>
                            </>
                        )
                    })}
                    {has_qr_code && (
                        <Desktop>
                            <Flex jc="flex-start">
                                <QueryImage
                                    data={data['qr_code']}
                                    alt={'qr_code'}
                                    width="108px"
                                    height="108px"
                                />
                            </Flex>
                        </Desktop>
                    )}
                </TabList>
                {has_download_button && (
                    <DownloadFlex mt="1rem" jc="flex-start">
                        <Box mr="1.2rem">
                            <LocalizedLink
                                external
                                to={download_links.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={AppStore} alt="app store" />
                            </LocalizedLink>
                        </Box>

                        <LocalizedLink
                            external
                            to={download_links.android}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={GooglePlay} alt="google play" width="138" height="40" />
                        </LocalizedLink>
                    </DownloadFlex>
                )}
            </div>
        </StyledFlex>
    )
}

SideTab.Panel = TabPanel

export default SideTab
