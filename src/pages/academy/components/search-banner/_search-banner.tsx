import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { combined_filter_type } from '../../common/_constants'
import { ParentWrapper, StyledLink, MobileWrapper, MainWrapper } from './_search-styled'
import SearchNav from './_search-nav'
import SearchBar from './_search-bar'
import TopicItemsAccordion from './_topic-items-accordion'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { useAcademyTags } from 'components/hooks/use-academy-tags'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { getCountryRule } from 'components/containers/visibility'
import { slugify, isBrowser } from 'common/utility'
import device from 'themes/device'
import Chevron from 'images/svg/custom/chevron-thick.svg'

type SearchBannerProps = {
    hidden?: boolean
}

export const fadeKeyframes = css`
    animation: fade 0.4s ease-in-out;
    @keyframes fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`
const TopicParent = styled(Flex)`
    display: ${(props) => (props.modal ? 'flex' : 'none')};
    z-index: ${(props) => (props.modal ? '100' : 'unset')};
    position: relative;
    ${(props) => props.modal && fadeKeyframes}
`
const TopicWrapper = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
    height: auto;
    align-items: flex-start;
    z-index: 100;
    background: var(--color-white);
    padding: 32px 0;

    @media ${device.tabletL} {
        padding: 24px 0;
    }
`
const TopicItemsParentWrapper = styled(Container)`
    flex-wrap: wrap;
`
const TopicItemWrapper = styled(Flex)`
    max-width: 250px;
    padding: 16px;
    height: auto;

    @media ${device.laptopM} {
        max-width: 50%;
    }

    @media ${device.tabletL} {
        display: ${(props) => (props.is_mobile_expanded ? 'none' : 'flex')};
    }
`

const TopicMobileParentWrapper = styled(Flex)`
    display: ${(props) => (props.is_mobile_expanded ? 'none' : 'flex')};
`

const SearchBanner = ({ hidden }: SearchBannerProps) => {
    const [is_mobile] = useBrowserResize(768)
    const [video_tags, blog_tags] = useAcademyTags()
    const [modal_opened, setModal] = useState(false)
    const [hide_mobile_topic, setHideMobileTopic] = useState(false)
    const [blog_post_url, setBlogPostURL] = useState(false)
    const { is_eu, is_uk } = getCountryRule()

    // Filter out restricted categories from the combined filter type array based on geolocation
    useEffect(() => {
        combined_filter_type.forEach((type) => {
            type.items = type.items.filter((obj) => {
                if (is_eu) return obj.is_visible_eu
                if (is_uk) return obj.is_visible_uk
                return obj
            })
        })
    }, [is_uk, is_eu])

    useEffect(() => {
        const currentLocation = window.location.pathname.split('/').slice(0, 4).join('/') + '/'
        if (currentLocation == '/academy/blog/posts/') {
            setBlogPostURL(true)
        }

        document.body.style.background = 'var(--color-white)'
    }, [])

    useEffect(() => {
        document.body.style.overflow = modal_opened ? 'hidden' : 'unset'
    }, [modal_opened])

    const openModal = () => {
        setModal(!modal_opened)
    }

    // Grey out any categories that don't have any results for respective videos/blog
    const handleGreyed = (category) => {
        if (isBrowser() && window.location.pathname.includes('/academy/videos')) {
            if (video_tags.includes(category)) return false
            return true
        }
        if (isBrowser() && window.location.pathname.includes('/academy/blog')) {
            if (blog_tags.includes(category)) return false
            return true
        }
        return false
    }

    const handleHref = (category) => {
        if (isBrowser() && window.location.pathname.includes('/academy/videos')) {
            return `/academy/search?type=video&category=${encodeURIComponent(slugify(category))}`
        }
        if (isBrowser() && window.location.pathname.includes('/academy/blog')) {
            return `/academy/search?type=article&category=${encodeURIComponent(slugify(category))}`
        }
        return `/academy/search?category=${encodeURIComponent(slugify(category))}`
    }

    return (
        <ParentWrapper overlay={modal_opened}>
            <MainWrapper fd="column" background={hidden} hide_box_shadow={blog_post_url}>
                <SearchNav
                    setModal={setModal}
                    openModal={openModal}
                    Chevron={Chevron}
                    modal_opened={modal_opened}
                />
                <Flex style={{ position: 'relative' }} height="0">
                    <TopicParent modal={modal_opened}>
                        <TopicWrapper jc="space-evenly" fd="row">
                            <MobileWrapper style={{ height: 'auto' }}>
                                <Flex
                                    height="auto"
                                    jc="flex-end"
                                    style={{ position: 'relative' }}
                                    tabletL={{
                                        height: '100%',
                                        jc: 'flex-start',
                                        fd: 'column',
                                        p: '0 16px',
                                    }}
                                >
                                    <SearchBar
                                        setModal={setModal}
                                        setHideMobileTopic={setHideMobileTopic}
                                    />
                                </Flex>
                            </MobileWrapper>
                            {is_mobile ? (
                                <TopicMobileParentWrapper
                                    fd="column"
                                    m="0 16px"
                                    is_mobile_expanded={hide_mobile_topic}
                                >
                                    {combined_filter_type.map((filter, index) => {
                                        return (
                                            <>
                                                <TopicItemsAccordion
                                                    key={index}
                                                    items={filter}
                                                    setModal={setModal}
                                                    handleGreyed={handleGreyed}
                                                    handleHref={handleHref}
                                                />
                                            </>
                                        )
                                    })}
                                </TopicMobileParentWrapper>
                            ) : (
                                <TopicItemsParentWrapper jc="space-evenly" ai="flex-start">
                                    {combined_filter_type.map((filter, index) => {
                                        return (
                                            <TopicItemWrapper
                                                key={index}
                                                fd="column"
                                                is_mobile_expanded={hide_mobile_topic}
                                            >
                                                <Header
                                                    as="h3"
                                                    type="paragraph-2"
                                                    align="left"
                                                    color="grey-5"
                                                    p="8px"
                                                    mb="8px"
                                                    style={{ borderBottom: '1px solid #D6DADB' }}
                                                >
                                                    {filter.type.toUpperCase()}
                                                </Header>
                                                {filter.items.map((item, idx) => {
                                                    return (
                                                        <StyledLink
                                                            key={idx}
                                                            to={handleHref(item.title)}
                                                            onClick={() => setModal(false)}
                                                            greyed={handleGreyed(item.title)}
                                                        >
                                                            {item.title}
                                                        </StyledLink>
                                                    )
                                                })}
                                            </TopicItemWrapper>
                                        )
                                    })}
                                </TopicItemsParentWrapper>
                            )}
                        </TopicWrapper>
                    </TopicParent>
                </Flex>
            </MainWrapper>
        </ParentWrapper>
    )
}

export default SearchBanner
