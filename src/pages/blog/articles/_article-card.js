import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

const ArticleCardWrapper = styled(Flex)`
    max-width: 384px;
    flex-direction: column;
    justify-content: flex-start;
    text-decoration: none;
    position: relative;
    height: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-grey-8);
    background: var(--color-white);
    transition: transform 0.3s;
    overflow: hidden;
    cursor: pointer;
    z-index: 2;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }
`

const ImageWrapper = styled.div`
    height: 200px;
    width: 384px;
    position: relative;
    z-index: 2;

    @media ${device.mobileL} {
        width: 100%;
        height: 184px;
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
    padding: 16px 24px;

    @media ${device.mobileL} {
        padding: 16px;
    }
`

const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
`

const ArticleCard = ({ item }) => {
    return (
        <RedirectLink to={`/blog/articles/${item.slug}`}>
            <ArticleCardWrapper>
                <ImageWrapper>
                    <QueryImage
                        data={item.main_image.imageFile.childImageSharp.gatsbyImageData}
                        alt={item.main_image.description || ''}
                        width="100%"
                    />
                </ImageWrapper>

                <ContentWrapper>
                    <Flex jc="flex-start" height="auto" fw="wrap">
                        {item.tags &&
                            item.tags.slice(0, 2).map((tag) => (
                                <StyledCategories as="h4" type="paragraph-2" key={tag.id}>
                                    {tag.tags_id.tag_name}
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
                            {`• ${item.read_time_in_minutes} min read`}
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

ArticleCard.propTypes = {
    item: PropTypes.object,
}

export default ArticleCard
