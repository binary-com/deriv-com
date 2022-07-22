import React, { useContext, useEffect, useState, useRef, useMemo } from 'react'
import styled, { css } from 'styled-components'
import { Link, navigate } from 'gatsby'
import { matchSorter } from 'match-sorter'
import { combined_filter_type } from '../common/_constants'
import type { TopicType } from '../common/_constants'
import { useDataFilter } from './_utility'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import { useAcademyTags } from 'components/hooks/use-academy-tags'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import { LocalizedLink } from 'components/localization'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { slugify, isBrowser } from 'common/utility'
import { DerivStore } from 'store'
import device from 'themes/device'
import AcademyLogo from 'images/svg/blog/academy-text.svg'
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
    box-shadow: ${(props) =>
        props.hide_box_shadow && props.background
            ? 'inset 0 -1px 0 rgba(14, 14, 14, 0.1)'
            : '0 5px 10px rgba(14, 14, 14, 0.1)'};
    position: fixed;
    z-index: 10;
    height: 7.2rem;
    top: ${(props) => (props.background ? '0' : '72px')};

    @media ${device.desktopL} {
        top: ${(props) => (props.background ? '0' : '87px')};
    }

    @media ${device.tabletL} {
        top: ${(props) => (props.background ? '0' : '7.2rem')};
    }
`
const NavWrapper = styled.div`
    display: flex;
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    height: 7.2rem;

    @media ${device.desktopL} {
        max-width: 1200px;
    }
    @media ${device.tabletL} {
        width: calc(100% - 32px);
    }
`

const LogoWrapper = styled.img`
    width: 186px;
    height: 24px;
`
const TopicSectionWrapper = styled(Flex)`
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
`
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
    max-width: 400px;
    width: 100%;
    background-color: rgba(236, 241, 247, 0.5);
    border: 2px solid #ecf1f7;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: max-width 500ms ease;
    ${(props) =>
        props.maximise &&
        css`
            max-width: 640px;
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
        max-width: 100%;
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
    handleHref: (category: string) => void
}

const SearchBar = ({ setModal, setHideMobileTopic }: SearchBarProps) => {
    const [is_mobile_separator] = useBrowserResize(992)
    const { academy_data } = useContext(DerivStore)
    const [search_input, setSearchInput] = useState('')
    const [search_query, setSearchQuery] = useState('')

    const [search_input_touched, setSearchInputTouched] = useState(false)
    const [result_opened, setSuggestionBoxOpened] = useState(false)
    const [focus_index, updateFocusIndex] = useState(-1)
    let redirect_link_arr: string[] = []

    const input_ref = useRef<HTMLInputElement>()

    const combined_data = useDataFilter([...academy_data.blog, ...academy_data.videos])

    let data_to_render
    const handleFilterSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        is_mobile_separator && setHideMobileTopic(true)

        if (is_mobile_separator && e.target.value === '') handleBlur()
    }

    const search_bar_ref = React.useRef()

    useDebouncedEffect(
        () => {
            if (search_input !== '') {
                setSearchQuery(search_input.toLowerCase())
                setSuggestionBoxOpened(true)
            } else {
                setSearchQuery('')
                setSuggestionBoxOpened(false)
                updateFocusIndex(-1)
            }
        },
        [search_input],
        300,
    )

    if (search_query !== '') {
        data_to_render = matchSorter(combined_data, search_query.trim(), {
            keys: [
                { threshold: matchSorter.rankings.CONTAINS, key: 'blog_title' },
                { threshold: matchSorter.rankings.CONTAINS, key: 'video_title' },
            ],
        })
        data_to_render.forEach((post) => {
            const redirect_link = post.slug
                ? `/academy/blog/posts/${post.slug}/`
                : `/academy/videos/?t=${slugify(post.video_title)}`
            redirect_link_arr.push(redirect_link)
        })
    } else data_to_render = null

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (search_input && focus_index === -1)
            navigate(`/academy/search?q=${encodeURI(search_input)}`)
        setSearchInput('')
        updateFocusIndex(-1)
        setSuggestionBoxOpened(false)
        is_mobile_separator && setModal(false)
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
        redirect_link_arr = []
        is_mobile_separator && setHideMobileTopic(false)
    }

    const handleSearchClick = (e) => {
        e.preventDefault()
        navigate(`/academy/search?q=${encodeURI(search_input)}`)
    }

    const handleNavigation = (e: React.KeyboardEvent) => {
        if (result_opened) {
            switch (e.key) {
                case 'Enter':
                    if (focus_index !== -1) {
                        navigate(redirect_link_arr[focus_index])
                    }

                    break
                case 'ArrowUp':
                    e.preventDefault()
                    if (focus_index == -1) {
                        updateFocusIndex(5)

                        if (redirect_link_arr.length < 5) {
                            updateFocusIndex(redirect_link_arr.length - 1)
                        }
                    }
                    if (focus_index > -1) {
                        updateFocusIndex(focus_index - 1)
                    }
                    break
                case 'ArrowDown':
                    e.preventDefault()
                    if (focus_index < 6 - 1) {
                        updateFocusIndex(focus_index + 1)
                    }
                    if (focus_index == 5) {
                        updateFocusIndex(-1)
                    }
                    if (redirect_link_arr.length < 5) {
                        if (focus_index == redirect_link_arr.length - 1) {
                            updateFocusIndex(-1)
                        }
                    }
                    break
            }
        }
        if (e.key === 'Escape') {
            handleBlur()
            input_ref.current.blur()
        }
    }

    const getHighlightedTitle = (text: string, highlight: string) => {
        // Split on highlight term and include term into parts, ignore case
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
        return (
            <span>
                {parts.map((part, i) => (
                    <span
                        key={i}
                        style={
                            part.toLowerCase() === highlight.toLowerCase()
                                ? { fontWeight: 'bold' }
                                : {}
                        }
                    >
                        {part}
                    </span>
                ))}
            </span>
        )
    }
    const onClickIcon = () => {
        navigate(`/academy/search?q=${encodeURI(search_input)}`)
        setSearchInput('')
        is_mobile_separator && setModal(false)
    }

    const getResultTitles = (item) =>
        item.blog_title
            ? getHighlightedTitle(item.blog_title, search_query)
            : getHighlightedTitle(item.video_title, search_query)

    useOutsideClick(search_bar_ref, () => handleBlur())

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
                        ref={search_bar_ref}
                    >
                        <SearchIconWrapper
                            src={SearchIcon}
                            alt="search_icon"
                            onClick={onClickIcon}
                        ></SearchIconWrapper>
                        <InputWrapper
                            type="text"
                            placeholder="I want to know about..."
                            onChange={handleFilterSearch}
                            onFocus={handleFocus}
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
                            <SearchResultRows
                                jc="flex-start"
                                ai="center"
                                active={focus_index === -1}
                                style={{ color: 'var(--color-blue-3)' }}
                                onMouseDown={handleSearchClick}
                            >{`Search for: ${search_query}`}</SearchResultRows>

                            {data_to_render &&
                                data_to_render.slice(0, 6).map((post, idx: number) => {
                                    const icon = post.blog_title ? ArticleIcon : VideoIcon
                                    const icon_alt = post.blog_title ? 'article icon' : 'video icon'
                                    const handleMouseDown = (e: React.KeyboardEvent) => {
                                        e.preventDefault()
                                        navigate(redirect_link_arr[idx])
                                    }

                                    return (
                                        <SearchResultRows
                                            key={post.blog_title || post.video_title}
                                            jc="flex-start"
                                            ai="center"
                                            onMouseDown={handleMouseDown}
                                            active={focus_index === idx}
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
                                                        {getResultTitles(post)}
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
                    {search_query && (
                        <SearchResultRows
                            jc="flex-start"
                            ai="center"
                            active={focus_index === -1}
                            style={{ color: 'var(--color-blue-3)' }}
                        >{`Search for: ${search_query}`}</SearchResultRows>
                    )}
                    {data_to_render &&
                        data_to_render.slice(0, 4).map((post, idx: number) => {
                            const icon = post.blog_title ? ArticleIcon : VideoIcon
                            const icon_alt = post.blog_title ? 'article icon' : 'video icon'
                            const handleMouseDown = (e: React.MouseEvent) => {
                                e.preventDefault()
                                navigate(redirect_link_arr[idx])
                            }

                            return (
                                <SearchResultRows
                                    key={post.blog_title || post.video_title}
                                    jc="flex-start"
                                    ai="center"
                                    onMouseDown={handleMouseDown}
                                    active={focus_index === idx}
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
                                                {getResultTitles(post)}
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

const TopicItemsAccordion = ({ items, setModal, handleHref }: TopicItemsAccordionProps) => {
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
                        <StyledLink key={idx} to={handleHref(item.title)} onClick={handleModal}>
                            {item.title}
                        </StyledLink>
                    )
                })}
            </DetailsWrapper>
        </>
    )
}

const SearchBanner = ({ hidden }: SearchBannerProps) => {
    const [is_mobile] = useBrowserResize(768)
    const [modal_opened, setModal] = useState(false)
    const [hide_mobile_topic, setHideMobileTopic] = useState(false)
    const [blog_post_url, setBlogPostURL] = useState(false)
    const { is_eu, is_uk } = useCountryRule()

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
                <NavWrapper>
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
                </NavWrapper>
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
