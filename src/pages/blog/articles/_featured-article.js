import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { LocalizedLink } from 'components/localization'

const StyledFlex = styled(Flex)`
    border-radius: 8px;
    height: 300px;
    border: 1px solid var(--color-grey-8);
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-1.1rem) scale(1.02);
    }

    @media (max-width: 823px) {
        flex-direction: column;
        height: auto;
        max-width: 384px;
        margin-top: 40px;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    height: 300px;
    width: 55%;

    @media (max-width: 823px) {
        width: 100%;
        max-height: 328px;
    }
`

const StyledCategories = styled(Header)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 1px 8px;
    margin: 0 8px 8px 0;
`

const FeaturedContentWrapper = styled(Flex)`
    @media (max-width: 823px) {
        width: 100%;
        padding: 24px 16px;
    }
`

const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
    max-width: 1200px;
`

const CoverImg = styled.img`
    object-fit: cover;
`

const FeaturedArticle = ({ item }) => {
    return (
        <RedirectLink to={`/blog/articles/${item.slug}/`}>
            <StyledFlex jc="flex-start" mt="96px">
                <ImageWrapper>
                    <CoverImg
                        src={item.main_image.imageFile.publicURL}
                        alt={item.main_image.description}
                        width="100%"
                    />
                </ImageWrapper>
                <FeaturedContentWrapper fd="column" p="35px 40px" width="45%">
                    <Flex jc="flex-start" height="auto" fw="wrap">
                        {item?.tags &&
                            item.tags.slice(0, 2).map((tag) => (
                                <StyledCategories as="h4" type="paragraph-2" key={tag.id}>
                                    {tag.tags_id.tag_name}
                                </StyledCategories>
                            ))}
                        {item?.tags.length > 2 && (
                            <StyledCategories as="h4" type="paragraph-2">
                                {`+${item.tags.slice(2).length.toString()}`}
                            </StyledCategories>
                        )}
                        <Header
                            color="grey-5"
                            as="h5"
                            weight="normal"
                            type="paragraph-2"
                            width="auto"
                        >
                            {item.read_time_in_minutes && `• ${item.read_time_in_minutes} min read`}
                        </Header>
                    </Flex>
                    <Header as="h3" type="heading-3">
                        {item.blog_title}
                    </Header>
                    <Header as="p" type="paragraph-1" weight="normal" mt="8px" color="grey-5">
                        {item.blog_description}
                    </Header>
                </FeaturedContentWrapper>
            </StyledFlex>
        </RedirectLink>
    )
}

FeaturedArticle.propTypes = {
    item: PropTypes.object,
}

export default FeaturedArticle
