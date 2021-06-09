import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Flex, Show, Box } from 'components/containers'
import { Text } from 'components/elements'
import device from 'themes/device'
import AppStore from 'images/svg/app-store.svg'
import GooglePlay from 'images/svg/google-play.svg'
import { LocalizedLink } from 'components/localization'

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
        max-width: unset;
    }
`

const TabContent = styled.div`
    width: 100%;
`
const Content = styled.div`
    flex: 1;
    opacity: ${(props) => (props.selected ? '1' : '0')};
    transition: opacity 1s ease-in;
`
const TabButton = styled.div`
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
    &:last-child {
        margin-bottom: 0;
    }

    @media ${device.tabletS} {
        margin: 0 16px 16px;
    }
`

const TabList = styled.div`
    max-width: 38rem;
    display: flex;
    flex-direction: column;
    ${(props) =>
        props.is_reverse
            ? css`
                  margin-left: 2.4rem;
              `
            : css`
                  margin-right: 2.4rem;
              `}
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

const Desktop = styled(Show.Desktop)`
    flex: 1;
    width: 100%;
`

const Mobile = styled(Show.Mobile)`
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

const TabPanel = ({ children }) => (
    <TabContent role="tabpanel" tabindex="0">
        {children}
    </TabContent>
)

TabPanel.propTypes = {
    children: PropTypes.node,
}
const Tabs = ({ children, is_reverse, parent_tab, has_download_button, download_links }) => {
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

    return (
        <StyledFlex ai="flex-start" direction={is_reverse ? 'row-reverse' : 'row'}>
            <Desktop max_width={'bp769'}>
                {React.Children.map(children, (el, index) => {
                    return (
                        <Content selected={selected_tab === index}>
                            {selected_tab === index ? el : undefined}
                        </Content>
                    )
                })}
            </Desktop>
            <div>
                <TabList role="tablist" is_reverse={is_reverse}>
                    {React.Children.map(children, (child, index) => {
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
                                <Mobile min_width={'bp769'}>
                                    <Content selected={selected_tab === index}>
                                        {selected_tab === index ? child : undefined}
                                    </Content>
                                </Mobile>
                            </>
                        )
                    })}
                </TabList>
                {has_download_button && (
                    <DownloadFlex mt="1rem" jc="flex-start">
                        <Box mr="1.2rem">
                            <LocalizedLink
                                external="true"
                                to={download_links.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={AppStore} alt="app store" />
                            </LocalizedLink>
                        </Box>

                        <LocalizedLink
                            external="true"
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

Tabs.Panel = TabPanel
Tabs.propTypes = {
    children: PropTypes.node,
    download_links: PropTypes.object,
    has_download_button: PropTypes.bool,
    is_reverse: PropTypes.bool,
    parent_tab: PropTypes.string,
    tab_break: PropTypes.string,
}

export default Tabs
