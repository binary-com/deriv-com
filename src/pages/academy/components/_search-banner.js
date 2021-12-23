import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { matchSorter } from 'match-sorter'
import { Container, Flex } from 'components/containers'
import { Header } from 'components/elements'
import { useDebouncedEffect } from 'components/hooks/use-debounced-effect'
import { LocalizedLink } from 'components/localization'
import AcademyLogo from 'images/svg/academy-logo.svg'
import { combined_filter_type } from 'common/constants'
import { DerivStore } from 'store'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
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
const SearchSuggestionWrapper = styled(Flex)`
    display: ${(props) => (props.opened ? 'flex' : 'none')};
    background: white;
    border: 1px solid var(--color-grey-3);
    position: absolute;
    top: 8px;
    height: auto;
`

const SearchBanner = () => {
    const { academy_data } = useContext(DerivStore)
    const [search_input, setSearchInput] = useState('')
    // We need a second state for tracking the debounced search input
    const [search_query, setSearchQuery] = useState('')
    const [modal_opened, setModal] = useState(false)
    const [suggestion_box_opened, setSuggestionBoxOpened] = useState(false)

    const combined_data = [...academy_data.blog, ...academy_data.videos]

    const filter_type = combined_filter_type

    let data_to_render

    const handleFilterSearch = (e) => {
        setSearchInput(e.target.value.toLowerCase().trim())
        setSuggestionBoxOpened(!suggestion_box_opened)
    }

    useDebouncedEffect(
        () => {
            if (search_input !== '') {
                setSearchQuery(search_input)
            } else setSearchQuery('')
        },
        [search_input],
        300,
    )

    if (search_query !== '') {
        data_to_render = matchSorter(combined_data, search_query, {
            keys: ['blog_title', 'video_title'],
        })
    } else data_to_render = null

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (search_input) navigate(`/academy/search?q=${encodeURI(search_input)}`)
    }

    const openModal = () => {
        setModal(!modal_opened)
    }

    return (
        <>
            <MainWrapper fd="column">
                <Container height="7.2rem">
                    <Flex ai="center" jc="space-between">
                        <LogoWrapper src={AcademyLogo} />
                        <Flex ai="center" max_width="400px">
                            <Flex width="fill-available" fd="column" ai="flex-start">
                                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                                    <input
                                        style={{ width: '100%' }}
                                        placeholder="What would you like to search?"
                                        onChange={handleFilterSearch}
                                    ></input>
                                </form>
                                <Flex height="0" style={{ position: 'relative' }}>
                                    <SearchSuggestionWrapper
                                        opened={suggestion_box_opened}
                                        max_width="100%"
                                        fd="column"
                                    >
                                        {data_to_render &&
                                            data_to_render.map((post, idx) => {
                                                if (idx < 6) {
                                                    return (
                                                        <Flex
                                                            key={
                                                                post.blog_title || post.video_title
                                                            }
                                                            jc="flex-start"
                                                            style={{
                                                                fontSize: '16px',
                                                                marginTop: '4px',
                                                                height: '40px',
                                                            }}
                                                        >
                                                            {post.blog_title || post.video_title}
                                                        </Flex>
                                                    )
                                                }
                                            })}
                                    </SearchSuggestionWrapper>
                                </Flex>
                            </Flex>

                            <TopicSectionWrapper
                                ml="8px"
                                width="70px"
                                max_width="auto"
                                ai="center"
                                onClick={openModal}
                            >
                                Topic
                            </TopicSectionWrapper>
                        </Flex>
                    </Flex>
                </Container>
            </MainWrapper>
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
                                            to={`/academy/search?category=${item.short_title}`}
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
        </>
    )
}

export default SearchBanner
