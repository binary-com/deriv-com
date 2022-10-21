import React, { useContext, useState, useRef } from 'react'
import { navigate } from 'gatsby'
import { matchSorter } from 'match-sorter'
import styled, { css } from 'styled-components'
import { useDataFilter } from '../_utility'
import {
    SearchResultRows,
    SearchSuggestionWrapper,
    IconWrapper,
    DesktopWrapper,
    MobileWrapper,
} from './_search-styled'
import { useOutsideClick } from 'components/hooks/use-outside-click'
import SearchIcon from 'images/svg/blog/search_icon.svg'
import CloseIcon from 'images/svg/blog/close-icon.svg'
import ArticleIcon from 'images/svg/blog/article-icon.svg'
import VideoIcon from 'images/svg/blog/video-icon.svg'
import { DerivStore } from 'store'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import device from 'themes/device'
import { Flex } from 'components/containers'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { slugify } from 'common/utility'
import { Header } from 'components/elements'

type ElementWithMaximiseProps = {
    is_maximise?: boolean
    result_opened?: boolean
}

type SearchBarProps = {
    setModal?: React.Dispatch<React.SetStateAction<boolean>>
    setHideMobileTopic?: React.Dispatch<React.SetStateAction<boolean>>
}

const FlexSearchBar = styled(Flex)<{ is_maximise: boolean }>`
    max-width: 400px;
    width: 100%;
    background-color: rgba(236, 241, 247, 0.5);
    border: 2px solid #ecf1f7;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    transition: max-width 500ms ease;
    ${(props) =>
        props.is_maximise &&
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
    display: ${(props) => (props.is_maximise ? 'block' : 'none')};
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

    const handleSearchClick = (e: React.MouseEvent) => {
        e.preventDefault()
        navigate(`/academy/search?q=${encodeURI(search_input)}`)
    }

    const handleNavigation = (e: React.KeyboardEvent) => {
        if (result_opened) {
            if (e.key === 'Enter') {
                focus_index !== -1 && navigate(redirect_link_arr[focus_index])
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault()
                focus_index === -1 && updateFocusIndex(5)
                redirect_link_arr.length < 5 && updateFocusIndex(redirect_link_arr.length - 1)
                focus_index > -1 && updateFocusIndex(focus_index - 1)
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                focus_index < 6 - 1 && updateFocusIndex(focus_index + 1)
                focus_index == 5 && updateFocusIndex(-1)
                redirect_link_arr.length < 5 &&
                    focus_index == redirect_link_arr.length - 1 &&
                    updateFocusIndex(-1)
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
                        is_maximise={search_input_touched}
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
                            is_maximise={search_input_touched}
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
                                is_active={focus_index === -1}
                                style={{ color: 'var(--color-blue-3)' }}
                                onMouseDown={handleSearchClick}
                            >{`Search for: ${search_query}`}</SearchResultRows>

                            {data_to_render?.slice(0, 6).map((post, idx: number) => {
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
                                        is_active={focus_index === idx}
                                    >
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
                            is_active={focus_index === -1}
                            style={{ color: 'var(--color-blue-3)' }}
                        >{`Search for: ${search_query}`}</SearchResultRows>
                    )}
                    {data_to_render?.slice(0, 4).map((post, idx: number) => {
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
                                is_active={focus_index === idx}
                                tabletL={{ ai: 'flex-start' }}
                            >
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
                            </SearchResultRows>
                        )
                    })}
                </SearchSuggestionWrapper>
            </MobileWrapper>
        </>
    )
}

export default SearchBar
