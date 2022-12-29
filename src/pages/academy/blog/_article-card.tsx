import React from 'react'
import styled from 'styled-components'
import { StandardImgWrapper } from '../common/_styles'
import { ItemType } from './_all-articles'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { getMinRead } from 'common/utility'
import device from 'themes/device'

const ArticleCardWrapper = styled(Flex)`
    box-sizing: border-box;
    max-width: 384px;
    flex-direction: column;
    justify-content: flex-start;
    text-decoration: none;
    position: relative;
    min-height: 400px;
    height: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-grey-8);
    background: var(--color-white);
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }

    @media ${device.mobileL} {
        min-height: unset;
    }
`

const StyledCategories = styled(Header)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 2px 8px 0;
    margin: 0 8px 8px 0;
`

const ContentWrapper = styled.div`
    height: auto;
    padding: 16px 24px;

    @media ${device.mobileL} {
        padding: 16px;
    }
`
const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
`

type ArticleCardProps = {
    item: ItemType
}

const ArticleCard = ({ item }: ArticleCardProps) => {
    return (
        <RedirectLink to={`/academy/blog/posts/${item.slug}/`}>
            <ArticleCardWrapper>
                <StandardImgWrapper
                    width="384px"
                    height="230px"
                    border_radius="unset"
                    tabletL_border_radius="unset"
                >
                    <QueryImage
                        data={item.main_image.imageFile.childImageSharp.gatsbyImageData}
                        alt={item.main_image.description || ''}
                        className="standard-query-img"
                    />
                </StandardImgWrapper>

                <ContentWrapper>
                    <Flex jc="flex-start" height="auto" fw="wrap">
                        {item.tags &&
                            item.tags.slice(0, 2).map((tag) => (
                                <StyledCategories as="h4" type="paragraph-2" key={tag.id}>
                                    {tag?.tags_id?.tag_name}
                                </StyledCategories>
                            ))}
                        {item.tags.length > 2 && (
                            <StyledCategories as="h4" type="paragraph-2">
                                {`+${item.tags.slice(2).length.toString()}`}
                            </StyledCategories>
                        )}
                        <Header
                            as="h5"
                            type="paragraph-2"
                            weight="normal"
                            color="grey-5"
                            width="auto"
                        >
                            {`• ${getMinRead(item?.blog_post)}`}
                        </Header>
                    </Flex>
                    <Header as="h3" type="subtitle-2">
                        {item.blog_title}
                    </Header>
                    <Header as="p" type="paragraph-2" weight="normal" mt="8px" color="grey-5">
                        {item.blog_description}
                    </Header>
                </ContentWrapper>
            </ArticleCardWrapper>
        </RedirectLink>
    )
}

export default ArticleCard
