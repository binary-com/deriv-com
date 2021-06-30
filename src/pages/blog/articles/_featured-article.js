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

const FeaturedArticle = ({ article_data }) => {
    return (
        <RedirectLink to={`/blog/articles/${article_data[0].slug}/`}>
            <StyledFlex jc="flex-start" mt="96px">
                <ImageWrapper>
                    <img
                        src="https://source.unsplash.com/random/10"
                        alt="Video card"
                        width="100%"
                        style={{ objectFit: 'cover' }}
                    />
                </ImageWrapper>
                <FeaturedContentWrapper fd="column" p="35px 40px" width="45%">
                    <Flex jc="flex-start" height="auto" fw="wrap">
                        {article_data[0].category.slice(0, 2).map((item_category) => (
                            <StyledCategories as="h4" type="paragraph-2" key={item_category}>
                                {item_category}
                            </StyledCategories>
                        ))}
                        {article_data[0].category.length > 2 && (
                            <StyledCategories as="h4" type="paragraph-2">
                                {`+${article_data[0].category.slice(2).length.toString()}`}
                            </StyledCategories>
                        )}
                        <Header
                            color="grey-5"
                            as="h5"
                            weight="normal"
                            type="paragraph-2"
                            width="auto"
                        >
                            {`• ${article_data[0].reading_time} min read`}
                        </Header>
                    </Flex>
                    <Header as="h3" type="heading-3">
                        {article_data[0].title}
                    </Header>
                    <Header as="p" type="paragraph-1" weight="normal" mt="8px" color="grey-5">
                        {article_data[0].description}
                    </Header>
                </FeaturedContentWrapper>
            </StyledFlex>
        </RedirectLink>
    )
}

FeaturedArticle.propTypes = {
    article_data: PropTypes.arrayOf(PropTypes.object),
}

export default FeaturedArticle
