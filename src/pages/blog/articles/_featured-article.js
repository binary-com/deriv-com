import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'

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

    @media (max-width: 894px) {
        flex-direction: column;
        height: auto;
        max-width: 384px;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    height: 300px;
    width: 55%;

    @media ${device.tabletL} {
        width: 100%;
    }
`

const StyledCategories = styled(Text)`
    width: fit-content;
    border-radius: 8px;
    background-color: var(--color-blue-10);
    color: var(--color-blue-9);
    padding: 1px 8px;
    line-height: 20px;
    margin: 0 8px 8px 0;
`

const FeaturedContentWrapper = styled(Flex)`
    width: 100%;

    @media (max-width: 894px) {
        padding: 16px 24px;
    }
`

const RedirectLink = styled(LocalizedLink)`
    text-decoration: none;
`

const FeaturedArticle = ({ article_data }) => {
    return (
        <RedirectLink to={`/blog/articles/${article_data[0].slug}/`}>
            <StyledFlex jc="flex-start" mt="96px">
                <ImageWrapper>
                    <img
                        src="https://source.unsplash.com/random/10"
                        alt={localize('Video card')}
                        width="100%"
                        style={{ objectFit: 'cover' }}
                    />
                </ImageWrapper>
                <FeaturedContentWrapper fd="column" p="35px 40px" width="45%">
                    <Flex jc="flex-start" height="auto" fw="wrap">
                        {article_data[0].category.slice(0, 2).map((item_category) => (
                            <StyledCategories weight="bold" size="14px" key={item_category}>
                                {item_category}
                            </StyledCategories>
                        ))}
                        {article_data[0].category.length > 2 && (
                            <StyledCategories weight="bold" size="14px">
                                {`+${article_data[0].category.slice(2).length.toString()}`}
                            </StyledCategories>
                        )}
                        <Text color="grey-5" size="14px">
                            {`• ${article_data[0].reading_time} min read`}
                        </Text>
                    </Flex>
                    <Header as="h3" size="32px">
                        {article_data[0].title}
                    </Header>
                    <Text size="14px" mt="8px" color="grey-5">
                        {article_data[0].description}
                    </Text>
                </FeaturedContentWrapper>
            </StyledFlex>
        </RedirectLink>
    )
}

FeaturedArticle.propTypes = {
    article_data: PropTypes.arrayOf(PropTypes.object),
}

export default FeaturedArticle
