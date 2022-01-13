import React, { useContext, useState, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Link, navigate } from 'gatsby'
import { matchSorter } from 'match-sorter'
import { combined_filter_type } from '../common/_constants'
import type { TopicType } from '../common/_constants'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import { useAcademyTags } from 'components/hooks/use-academy-tags'
import { LocalizedLink } from 'components/localization'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { slugify, isBrowser } from 'common/utility'
import { DerivStore } from 'store'
import device from 'themes/device'
import AcademyLogo from 'images/svg/blog/academy-logo.svg'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import SearchIcon from 'images/svg/blog/search_icon.svg'
import CloseIcon from 'images/svg/blog/close-icon.svg'
import ArticleIcon from 'images/svg/blog/article-icon.svg'
import VideoIcon from 'images/svg/blog/video-icon.svg'

const overlay_css = css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(14, 14, 14, 0.8);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 12;
    width: 100%;
    height: 100vh;
`
const ParentWrapper = styled(Flex)`
    ${(props) => props.overlay && overlay_css}
`
const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    box-shadow: 0 5px 10px rgba(14, 14, 14, 0.1);
    position: fixed;
    z-index: 70;
    height: 7.2rem;
    top: ${(props) => (props.background ? '0' : '72px')};

    @media ${device.desktopL} {
        top: ${(props) => (props.background ? '0' : '87px')};
    }

    @media ${device.tabletL} {
        top: ${(props) => (props.background ? '0' : '56px')};
        height: 60px;
    }
`
const LogoWrapper = styled.img`
    width: 168px;
    height: 24px;
`
const TopicSectionWrapper = styled(Flex)`
    cursor: pointer;
`
const TopicParent = styled(Flex)`
    display: ${(props) => (props.modal ? 'flex' : 'none')};
    position: relative;
`
const TopicWrapper = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    flex-wrap: wrap;
    height: auto;
    align-items: flex-start;
    z-index: 5;
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
export const styled_link_greyed_css = css`
    pointer-events: none;
    opacity: 0.32;
`
const StyledLink = styled(LocalizedLink)`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-black-3);
    text-decoration: none;
    padding: 8px;

    &:hover {
        background-color: var(--color-grey-31);
    }

    ${(props) => props.greyed && styled_link_greyed_css}
`
const SearchResultRows = styled(Flex)`
    cursor: pointer;
    font-size: 16px;
    margin-top: 4px;
    padding: 8px 16px;
    min-height: 44px;
    height: auto;
    background-color: ${(props) => (props.active ? 'var(--color-grey-30)' : 'unset')};

    &:hover {
        background-color: var(--color-grey-30);
    }

    @media ${device.tabletL} {
        margin-bottom: 16px;
        margin-top: 0;

        &:hover {
            border-radius: 4px;
        }
    }
`
const StyledChevron = styled.img<StyledChevronProps>`
    height: 16px;
    width: 16px;
    transform: ${(props) => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
const HoverChevron = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

const FlexSearchBar = styled(Flex)`
    width: 400px;
    background-color: rgba(236, 241, 247, 0.5);
    border: 2px solid #ecf1f7;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: width 500ms ease;
    ${(props) =>
        props.maximise &&
        css`
            width: 640px;
            background-color: white;
        `}
    ${(props) =>
        props.result_opened &&
        css`
            border-radius: 20px 20px 0 0;
            border-bottom: none;

            @media ${device.tabletL} {
                border-radius: 20px;
                border: 2px solid #ecf1f7;
            }
        `}

    @media ${device.tabletL} {
        width: 100%;
        margin-bottom: 24px;
    }
`

const FormWrapper = styled(Flex)`
    width: 640px;
    position: relative;

    @media ${device.laptopM} {
        width: 400px;
    }

    @media ${device.tabletL} {
        width: 100%;
        max-width: 100%;
    }
`
const FormContainer = styled.form`
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`

const InputWrapper = styled.input`
    margin: 0 auto;
    width: 100%;
    padding: 8px 48px;
    font-size: 16px;
    line-height: 24px;
    border: none;
    outline: none;
    background: transparent;
    transition: background-color 0.25s ease-in;

    &:focus {
        background: var(--color-white);
        padding: 8px 48px;
    }
`

const SearchIconWrapper = styled.img`
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
`
const CloseIconWrapper = styled.img<ElementWithMaximiseProps>`
    display: ${(props) => (props.maximise ? 'block' : 'none')};
    cursor: pointer;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
`

const Line = styled.div`
    height: 1px;
    width: 100%;
    border-bottom: 1px solid var(--color-grey-5);
    margin-bottom: 16px;
`

const SearchSuggestionWrapper = styled(Flex)`
    width: 640px;
    background: white;
    height: auto;
    z-index: 120;
    position: absolute;
    top: 34px;
    padding: 8px 24px 12px;
    border: 2px solid #ecf1f7;
    border-top: unset;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media ${device.tabletL} {
        position: relative;
        top: unset;
        padding: 0;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        align-items: flex-start;
        border: none;
    }
`
const IconWrapper = styled.img`
    width: 16px;
    height: 20px;

    @media ${device.tabletL} {
        height: 16px;
    }
`
const DesktopWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`
const DetailsWrapper = styled(Flex)`
    height: auto;
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: ${(props) => (props.is_expanded ? '180px' : '0')};

    :nth-last-child(-n + 2) {
        max-height: ${(props) => (props.is_expanded ? '110px' : '0')};
    }
`
const TopicMobileParentWrapper = styled(Flex)`
    display: ${(props) => (props.is_mobile_expanded ? 'none' : 'flex')};
`

type SearchBannerProps = {
    hidden?: boolean
}

type ElementWithMaximiseProps = {
    maximise?: boolean
    result_opened?: boolean
}

type StyledChevronProps = {
    expanded?: boolean
}

type SearchBarProps = {
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
    setHideMobileTopic?: React.Dispatch<React.SetStateAction<boolean>>
}

type TopicItemsAccordionProps = {
    items?: TopicType
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
    handleGreyed: (category: string) => void
    handleHref: (category: string) => void
}

const SearchBanner = ({ hidden }: SearchBannerProps) => {
    const [is_mobile] = useBrowserResize(768)
    const [video_tags, blog_tags] = useAcademyTags()
    const [modal_opened, setModal] = useState(false)
    const [hide_mobile_topic, setHideMobileTopic] = useState(false)

    const openModal = () => {
        setModal(!modal_opened)
    }

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
            return `/academy/search?type=video&category=${slugify(category)}`
        }
        if (isBrowser() && window.location.pathname.includes('/academy/blog')) {
            return `/academy/search?type=article&category=${slugify(category)}`
        }
        return `/academy/search?category=${slugify(category)}`
    }

    return (
        <ParentWrapper overlay={modal_opened}>
            <MainWrapper fd="column" background={hidden}>
                <Container height="7.2rem">
                    <Flex ai="center" jc="space-between">
                        <Link to="/academy">
                            <LogoWrapper src={AcademyLogo} />
                        </Link>
                        <Flex ai="center" max_width="751px" jc="flex-end">
                            <DesktopWrapper height="auto">
                                <Flex height="auto" jc="flex-end" style={{ position: 'relative' }}>
                                    <SearchBar setModal={setModal} />
                                </Flex>
                            </DesktopWrapper>

                            <TopicSectionWrapper
                                ml="40px"
                                width="auto"
                                max_width="auto"
                                ai="center"
                                onClick={openModal}
                            >
                                <Header
                                    as="h3"
                                    type="paragraph-1"
                                    weight="normal"
                                    mr="10px"
                                    color="--color-black-3"
                                >
                                    Topics
                                </Header>
                                <HoverChevron>
                                    <StyledChevron
                                        src={Chevron}
                                        alt="chevron"
                                        expanded={modal_opened}
                                    />
                                </HoverChevron>
                            </TopicSectionWrapper>
                        </Flex>
                    </Flex>
                </Container>
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

export const SearchBar = ({ setModal, setHideMobileTopic }: SearchBarProps) => {
    const [is_mobile_separator] = useBrowserResize(992)
    const { academy_data } = useContext(DerivStore)
    const [search_input, setSearchInput] = useState('')
    const [search_query, setSearchQuery] = useState('')

    const [search_input_touched, setSearchInputTouched] = useState(false)
    const [result_opened, setSuggestionBoxOpened] = useState(false)
    const [focus_index, updateFocusIndex] = useState(-1)
    // const redirect_link_arr = []

    const input_ref = useRef<HTMLInputElement>()

    const combined_data = [...academy_data.blog, ...academy_data.videos]
    let data_to_render
    const handleFilterSearch = (e) => {
        setSearchInput(e.target.value)
        is_mobile_separator && setHideMobileTopic(true)

        if (is_mobile_separator && e.target.value === '') handleBlur()
    }

    useDebouncedEffect(
        () => {
            if (search_input !== '') {
                setSearchQuery(search_input.toLowerCase())
                setSuggestionBoxOpened(true)
            } else {
                setSearchQuery('')
                setSuggestionBoxOpened(false)
            }
        },
        [search_input],
        300,
    )

    if (search_query !== '') {
        data_to_render = matchSorter(combined_data, search_query.trim(), {
            keys: [
                'blog_title',
                'video_title',
                { threshold: matchSorter.rankings.EQUAL, key: 'tags.*.tags_id.tag_name' },
            ],
        })
    } else data_to_render = null

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search_input && focus_index === -1)
            navigate(`/academy/search?q=${encodeURI(search_input)}`)
        setSearchInput('')
        updateFocusIndex(-1)
        setSuggestionBoxOpened(false)
        input_ref.current.blur()
    }

    const handleFocus = () => {
        setSearchInputTouched(true)
        !is_mobile_separator && setModal(false)
    }

    const handleBlur = () => {
        setSuggestionBoxOpened(false)
        setSearchInputTouched(false)
        setSearchQuery('')
        setSearchInput('')
        updateFocusIndex(-1)
        is_mobile_separator && setHideMobileTopic(false)
    }

    // const handleSearchClick = (e) => {
    //     e.preventDefault()
    //     navigate(`/academy/search?q=${encodeURI(search_input)}`)
    // }

    const handleNavigation = (e) => {
        // if (result_opened) {
        //     switch (e.key) {
        //         case 'Enter':
        //             if (focus_index !== -1) {
        //                 navigate(redirect_link_arr[focus_index])
        //             }

        //             break
        //         case 'ArrowUp':
        //             e.preventDefault()
        //             if (focus_index == -1) {
        //                 updateFocusIndex(5)

        //                 if (data_to_render < 5) {
        //                     updateFocusIndex(data_to_render.length)
        //                 }
        //             }
        //             if (focus_index > -1) {
        //                 updateFocusIndex(focus_index - 1)
        //             }
        //             break
        //         case 'ArrowDown':
        //             e.preventDefault()
        //             if (focus_index < 6 - 1) {
        //                 updateFocusIndex(focus_index + 1)
        //             }
        //             if (focus_index == 5) {
        //                 updateFocusIndex(-1)
        //             }
        //             if (data_to_render < 5) {
        //                 if (focus_index == data_to_render.length) {
        //                     updateFocusIndex(-1)
        //                 }
        //             }
        //             break
        //     }
        // }
        if (e.key === 'Escape') {
            handleBlur()
            input_ref.current.blur()
        }
    }

    return (
        <>
            <FormWrapper fd="column" ai="flex-start" height="auto">
                <FormContainer
                    role="search"
                    aria-label="Academy"
                    spellCheck={false}
                    onSubmit={handleSubmit}
                >
                    <FlexSearchBar
                        jc="flex-start"
                        ai="center"
                        maximise={search_input_touched}
                        result_opened={result_opened}
                    >
                        <SearchIconWrapper
                            src={SearchIcon}
                            alt="search_icon"
                            onSubmit={handleSubmit}
                        ></SearchIconWrapper>
                        <InputWrapper
                            type="text"
                            placeholder="What would you like to search?"
                            onChange={handleFilterSearch}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={search_input}
                            ref={input_ref}
                            onKeyDown={handleNavigation}
                        ></InputWrapper>
                        <CloseIconWrapper
                            maximise={search_input_touched}
                            src={CloseIcon}
                            alt="close icon"
                            onClick={handleBlur}
                        />
                    </FlexSearchBar>
                </FormContainer>
                {search_query && (
                    <DesktopWrapper>
                        <SearchSuggestionWrapper max_width="100%" fd="column">
                            <Line />
                            {/* <SearchResultRows
                                jc="flex-start"
                                ai="center"
                                active={focus_index === -1}
                                style={{ color: 'var(--color-blue-3)' }}
                                onMouseDown={handleSearchClick}
                            >{`Search for: ${search_query}`}</SearchResultRows> */}

                            {data_to_render &&
                                data_to_render.slice(0, 6).map((post, idx) => {
                                    const icon = post.blog_title ? ArticleIcon : VideoIcon
                                    const icon_alt = post.blog_title ? 'article icon' : 'video icon'
                                    const redirect_link = post.slug
                                        ? `/academy/blog/posts/${post.slug}/`
                                        : `/academy/videos/?t=${slugify(post.video_title)}`
                                    // redirect_link_arr.push(redirect_link)
                                    const handleMouseDown = (e) => {
                                        e.preventDefault()
                                        navigate(redirect_link)
                                    }

                                    return (
                                        <SearchResultRows
                                            key={post.blog_title || post.video_title}
                                            jc="flex-start"
                                            ai="center"
                                            onMouseDown={handleMouseDown}
                                            // active={focus_index === idx}
                                        >
                                            {
                                                <>
                                                    <IconWrapper src={icon} alt={icon_alt} />
                                                    <Header
                                                        as="h3"
                                                        type="paragraph-1"
                                                        weight="normal"
                                                        ml="8px"
                                                        pt="4px"
                                                    >
                                                        {post.blog_title
                                                            ? post.blog_title
                                                            : post.video_title}
                                                    </Header>
                                                </>
                                            }
                                        </SearchResultRows>
                                    )
                                })}
                        </SearchSuggestionWrapper>
                    </DesktopWrapper>
                )}
            </FormWrapper>
            <MobileWrapper>
                <SearchSuggestionWrapper max_width="100%" fd="column">
                    {/* {search_query && (
                        <SearchResultRows
                            jc="flex-start"
                            ai="center"
                            active={focus_index === -1}
                            style={{ color: 'var(--color-blue-3)' }}
                        >{`Search for: ${search_query}`}</SearchResultRows>
                    )} */}
                    {data_to_render &&
                        data_to_render.slice(0, 4).map((post, idx) => {
                            const icon = post.blog_title ? ArticleIcon : VideoIcon
                            const icon_alt = post.blog_title ? 'article icon' : 'video icon'
                            const redirect_link = post.slug
                                ? `/academy/blog/posts/${post.slug}/`
                                : `/academy/videos/?t=${slugify(post.video_title)}`
                            // redirect_link_arr.push(redirect_link)
                            const handleMouseDown = (e) => {
                                e.preventDefault()
                                navigate(redirect_link)
                            }

                            return (
                                <SearchResultRows
                                    key={post.blog_title || post.video_title}
                                    jc="flex-start"
                                    ai="center"
                                    onMouseDown={handleMouseDown}
                                    // active={focus_index === idx}
                                    tabletL={{ ai: 'flex-start' }}
                                >
                                    {
                                        <>
                                            <IconWrapper src={icon} alt={icon_alt} />
                                            <Header
                                                as="h3"
                                                type="paragraph-1"
                                                weight="normal"
                                                ml="8px"
                                                pt="4px"
                                                tabletL={{ ml: '10px', pt: '0' }}
                                            >
                                                {post.blog_title
                                                    ? post.blog_title
                                                    : post.video_title}
                                            </Header>
                                        </>
                                    }
                                </SearchResultRows>
                            )
                        })}
                </SearchSuggestionWrapper>
            </MobileWrapper>
        </>
    )
}

const TopicItemsAccordion = ({
    items,
    setModal,
    handleGreyed,
    handleHref,
}: TopicItemsAccordionProps) => {
    const [is_expanded, setExpanded] = useState(false)

    const toggleExpand = () => {
        setExpanded(!is_expanded)
    }

    const handleModal = () => {
        setModal(false)
    }

    return (
        <>
            <Flex
                mb="16px"
                fd="column"
                height="auto"
                style={{
                    borderBottom: '1px solid var(--color-grey-7)',
                }}
                onClick={toggleExpand}
            >
                <Flex jc="space-between" align="center" p="8px">
                    <Header as="h3" type="paragraph-2" color="grey-5" width="auto">
                        {items.type.toUpperCase()}
                    </Header>
                    <HoverChevron>
                        <StyledChevron src={Chevron} alt="chevron" expanded={is_expanded} />
                    </HoverChevron>
                </Flex>
            </Flex>
            <DetailsWrapper is_expanded={is_expanded} fd="column">
                {items.items.map((item, idx) => {
                    return (
                        <StyledLink
                            key={idx}
                            to={handleHref(item.title)}
                            onClick={handleModal}
                            greyed={handleGreyed(item.title)}
                        >
                            {item.title}
                        </StyledLink>
                    )
                })}
            </DetailsWrapper>
        </>
    )
}
