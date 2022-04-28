import React from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { convertDate } from 'common/utility'
import ArticleIcon from 'images/svg/blog/article-icon.svg'
import StarIcon from 'images/svg/blog/star-icon.svg'
import { BlogType } from 'components/hooks/use-academy-data'

type ArticleCardProps = {
    items: BlogType
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
            </Flex>
        </Flex>
    )
}

export default ArticleCard
