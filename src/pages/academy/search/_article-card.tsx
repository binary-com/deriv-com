import React from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { convertDate } from 'common/utility'
import ArticleIcon from 'images/svg/blog/article-icon.svg'
import StarIcon from 'images/svg/blog/star-icon.svg'

type ArticleCardProps = {
    items: ItemType
}

type ItemType = {
    blog_description?: string
    blog_title: string
    featured: boolean
    id: string
    main_image: MainImageType
    published_date: string
    slug: string
    tags?: TagsType[]
}

type MainImageType = {
    description?: string
    id: string
    imageFile: ImageDataLike
}

export type TagsType = {
    id: string
    tags_id: {
        tag_name: string
    }
}

const StyledLink = styled(LocalizedLink)`
    color: var(--color-black-3);
    text-decoration: none;
`

const IconWrapper = styled.img`
    width: 24px;
    height: 24px;
`
const StarIconWrapper = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 8px;
    padding-top: 2px;
`
const StyledCategories = styled(Header)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 2px 8px 0;
    margin: 0 8px 8px 0;
`

const ArticleCard = ({ items }: ArticleCardProps) => {
    const article_link = `/academy/blog/posts/${items.slug}/`

    return (
        <Flex mb="40px" jc="flex-start" tablet={{ mb: '24px' }}>
            <IconWrapper src={ArticleIcon} alt="article icon" />
            <Flex max-width="auto" ml="14px" fd="column">
                <Flex jc="space-between" tablet={{ fd: 'column', jc: 'flex-start' }}>
                    <StyledLink to={article_link}>
                        <Header type="paragraph-1" width="auto">
                            {items.blog_title}
                            {items.featured && (
                                <StarIconWrapper src={StarIcon} alt="featured post icon" />
                            )}
                        </Header>
                    </StyledLink>
                    <Header
                        type="paragraph-2"
                        color="grey-5"
                        weight="normal"
                        align="right"
                        width="auto"
                        tablet={{ align: 'left', mt: '4px' }}
                    >
                        {convertDate(items.published_date)}
                    </Header>
                </Flex>

                <Header type="paragraph-1" weight="normal">
                    {items.blog_description}
                </Header>
                <Flex jc="flex-start" height="auto" fw="wrap" mt="8px">
                    {items.tags &&
                        items.tags.slice(0, 4).map((tag) => (
                            <StyledCategories as="h4" type="paragraph-2" key={tag.id}>
                                {tag?.tags_id?.tag_name}
                            </StyledCategories>
                        ))}
                    {items.tags.length > 4 && (
                        <StyledCategories as="h4" type="paragraph-2">
                            {`+${items.tags.slice(4).length.toString()}`}
                        </StyledCategories>
                    )}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ArticleCard
