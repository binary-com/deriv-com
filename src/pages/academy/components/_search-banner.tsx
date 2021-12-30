import React, { useContext, useState, createRef } from 'react'
import styled, { css } from 'styled-components'
import { navigate } from 'gatsby'
import { matchSorter } from 'match-sorter'
import { combined_filter_type } from '../common/_constants'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import { LocalizedLink } from 'components/localization'
import AcademyLogo from 'images/svg/blog/academy-logo.svg'
import { slugify } from 'common/utility'
import { DerivStore } from 'store'
import Chevron from 'images/svg/custom/chevron-thick.svg'
import SearchIcon from 'images/svg/blog/search_icon.svg'
import CloseIcon from 'images/svg/blog/close-icon.svg'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    box-shadow: 0 5px 10px rgba(14, 14, 14, 0.1);
    position: fixed;
    z-index: 70;
    height: 7.2rem;
    top: ${(props) => (props.background ? '0' : '72px')};
    transition: opacity 3s ease-in;
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
    transition: transform 0.5s ease-in-out;
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
`
const TopicItemWrapper = styled(Flex)`
    max-width: 250px;
    height: auto;
`
const StyledLink = styled(LocalizedLink)`
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: var(--color-black-3);
    text-decoration: none;
    margin: 8px 0;
`
const SearchResultRows = styled(Flex)`
    cursor: pointer;

    :hover {
        background-color: var(--color-grey-31);
    }
`
const StyledChevron = styled.img<StyledChevronProp>`
    height: 16px;
    width: 16px;
    margin: 26px 0 32px;
    transform: ${(props) => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`
const HoverChevron = styled.div`
    transition: background 0.25s;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`
const FormWrapper = styled(Flex)<ElementWithMaximiseProp>`
    width: ${(props) => (props.maximise ? '640px' : '400px')};
    background: ${(props) => (props.maximise ? 'white' : 'rgba(236, 241, 247, 0.5)')};
    border: ${(props) => (props.maximise ? '2px solid #ecf1f7;' : 'none')};
    border-radius: ${(props) => (props.result_opened ? '20px' : '40px')};
    overflow: hidden;

    ${(props) =>
        props.result_opened &&
        css`
            position: absolute;
            top: -24px;
            padding: 8px 24px 24px;
        `}
`
const FormContainer = styled.form`
    width: 100%;
    display: block;
    margin: 0 auto;
    position: relative;
    border: none;
`
const InputWrapper = styled.input<ElementWithMaximiseProp>`
    margin: 0 auto;
    width: 100%;
    padding: 8px 48px;
    padding: ${(props) => (props.result_opened ? '10px 24px 8px !important' : '8px 48px')};
    font-size: 16px;
    line-height: 24px;
    border: none;
    outline: none;
    background: transparent;

    &:focus {
        background: var(--color-white);
        transition: 0.25s ease;
        padding: 10px 48px 8px;

        &::-webkit-input-placeholder {
            transition: opacity 0.25s ease;
            opacity: 0;
        }
        &::-moz-placeholder {
            transition: opacity 0.25s ease;
            opacity: 0;
        }
        &:-ms-placeholder {
            transition: opacity 0.25s ease;
            opacity: 0;
        }
    }

    ${(props) =>
        props.result_opened &&
        css`
            border-bottom: 1px solid var(--color-black);
        `}
`
const SearchIconWrapper = styled.img<ElementWithMaximiseProp>`
    position: absolute;
    cursor: pointer;
    width: 16px;
    height: 16px;
    top: 50%;
    left: ${(props) => (props.result_opened ? '0' : '24px')};
    transform: translateY(-50%);
`
const CloseIconWrapper = styled.img<ElementWithMaximiseProp>`
    display: ${(props) => (props.maximise ? 'block' : 'none')};
    cursor: pointer;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    right: ${(props) => (props.result_opened ? '0' : '24px')};
    transform: translateY(-50%);
`

const SearchSuggestionWrapper = styled(Flex)`
    padding: 24px 0 0;
    display: ${(props) => (props.opened ? 'flex' : 'none')};
    width: 640px;
    background: white;
    height: auto;
`

type SearchBannerProps = {
    hidden?: boolean
}

type ElementWithMaximiseProp = {
    maximise?: boolean
    result_opened?: boolean
}

type StyledChevronProp = {
    expanded?: boolean
}

const SearchBanner = ({ hidden }: SearchBannerProps) => {
    const { academy_data } = useContext(DerivStore)
    const [search_input, setSearchInput] = useState('')
    const [search_query, setSearchQuery] = useState('')
    const [modal_opened, setModal] = useState(false)
    const [search_input_touched, setSearchInputTouched] = useState(false)
    const [suggestion_box_opened, setSuggestionBoxOpened] = useState(false)

    const input_ref = createRef<HTMLInputElement>()

    const combined_data = [...academy_data.blog, ...academy_data.videos]

    const filter_type = combined_filter_type

    let data_to_render

    const handleFilterSearch = (e) => {
        setSearchInput(e.target.value.toLowerCase())
    }

    useDebouncedEffect(
        () => {
            if (search_input !== '') {
                setSearchQuery(search_input)
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
            keys: ['blog_title', 'video_title', 'tags.*.tags_id.tag_name'],
        })
    } else data_to_render = null

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search_input) navigate(`/academy/search?q=${encodeURI(search_input)}`)
        setSearchInput('')
        setSuggestionBoxOpened(false)
        input_ref.current.blur()
    }

    const openModal = () => {
        setModal(!modal_opened)
    }

    const maximiseSearchInput = () => {
        setSearchQuery('')
        setSearchInput('')
        setSearchInputTouched(!search_input_touched)
    }

    return (
        <>
            <MainWrapper fd="column" background={hidden}>
                <Container height="7.2rem">
                    <Flex ai="center" jc="space-between">
                        <LogoWrapper src={AcademyLogo} />
                        <Flex ai="center" max_width="751px" jc="flex-end">
                            <Flex height="auto" jc="flex-end" style={{ position: 'relative' }}>
                                <FormWrapper
                                    fd="column"
                                    maximise={search_input_touched}
                                    result_opened={suggestion_box_opened}
                                    ai="flex-start"
                                    height="auto"
                                >
                                    <FormContainer onSubmit={handleSubmit}>
                                        <Flex jc="flex-start" ai="center">
                                            <SearchIconWrapper
                                                src={SearchIcon}
                                                alt="search_icon"
                                                onSubmit={handleSubmit}
                                                result_opened={suggestion_box_opened}
                                            ></SearchIconWrapper>
                                            <InputWrapper
                                                placeholder="What would you like to search?"
                                                onChange={handleFilterSearch}
                                                onFocus={maximiseSearchInput}
                                                onBlur={maximiseSearchInput}
                                                value={search_input}
                                                result_opened={suggestion_box_opened}
                                                ref={input_ref}
                                            ></InputWrapper>
                                            <CloseIconWrapper
                                                maximise={search_input_touched}
                                                src={CloseIcon}
                                                alt="close icon"
                                                onClick={maximiseSearchInput}
                                                result_opened={suggestion_box_opened}
                                            />
                                        </Flex>
                                    </FormContainer>

                                    <SearchSuggestionWrapper
                                        opened={suggestion_box_opened}
                                        max_width="100%"
                                        fd="column"
                                    >
                                        {data_to_render &&
                                            data_to_render.map((post, idx) => {
                                                if (idx < 6) {
                                                    const redirect_link = post.slug
                                                        ? `/academy/blog/posts/${post.slug}/`
                                                        : `/academy/videos/?t=${slugify(
                                                              post.video_title,
                                                          )}`
                                                    const handleMouseDown = (e) => {
                                                        e.preventDefault()
                                                        navigate(redirect_link)
                                                    }

                                                    return (
                                                        <SearchResultRows
                                                            key={
                                                                post.blog_title || post.video_title
                                                            }
                                                            jc="flex-start"
                                                            style={{
                                                                fontSize: '16px',
                                                                marginTop: '4px',
                                                                height: '40px',
                                                            }}
                                                            onMouseDown={handleMouseDown}
                                                        >
                                                            {(post.blog_title &&
                                                                `Blog Icon - ${post.blog_title}`) ||
                                                                (post.video_title &&
                                                                    `Video Icon - ${post.video_title}`)}
                                                        </SearchResultRows>
                                                    )
                                                }
                                            })}
                                    </SearchSuggestionWrapper>
                                </FormWrapper>
                            </Flex>

                            <TopicSectionWrapper
                                ml="40px"
                                width="auto"
                                max_width="auto"
                                ai="center"
                                onClick={openModal}
                            >
                                <Header
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
                            {filter_type.map((filter, index) => {
                                return (
                                    <TopicItemWrapper key={index} fd="column">
                                        <Header type="paragraph-2" align="left">
                                            {filter.type}
                                        </Header>
                                        {filter.items.map((item, idx) => {
                                            return (
                                                <StyledLink
                                                    key={idx}
                                                    to={`/academy/search?category=${slugify(
                                                        item.title,
                                                    )}`}
                                                    onClick={() => setModal(false)}
                                                >
                                                    {item.title}
                                                </StyledLink>
                                            )
                                        })}
                                    </TopicItemWrapper>
                                )
                            })}
                        </TopicWrapper>
                    </TopicParent>
                </Flex>
            </MainWrapper>
        </>
    )
}

export default SearchBanner
