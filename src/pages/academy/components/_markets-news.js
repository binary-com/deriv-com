import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { StandardImgWrapper } from '../common/_styles'
import { Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { getMinRead } from 'common/utility'
import EyeIcon from 'images/svg/eye.svg'
import device from 'themes/device'

const MarketsNewsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px 24px;
    padding: 10px;
    max-height: 211px;

    @media ${device.tabletL} {
        grid-template-columns: auto auto;
        max-height: 330px;
    }

    @media ${device.tablet} {
        grid-template-columns: auto;
        margin: 0 auto;
        max-height: unset;
        padding: 0;
    }
`

const StyledFlex = styled(Flex)`
    max-height: 83px;
`
const ContentWrapper = styled(Flex)`
    max-width: 238px;

    @media ${device.tabletL} {
        max-width: 200px;
    }
`

const StyledLocalizedLink = styled(LocalizedLink)`
    text-decoration: none;
`

const StyledContainer = styled(Container)`
    margin-bottom: 80px;

    @media ${device.tabletL} {
        margin-bottom: 40px;
    }
`

// Can modify this for second phase to get the tag name
// const getTagName = (tags) => {
//     for (let i = 0; i < tags.length; i++){
//         if (tags[i].tags_id.tag_name !== 'Market News') return tags[i].tags_id.tag_name
//     }
//     return 'Market News'
// }

const MarketNews = ({ data }) => {
    return (
        <StyledContainer>
            <Flex fd="column">
                <Header mb="20px" align="center" type="heading-3" as="h3">
                    Market news
                </Header>
                <MarketsNewsWrapper>
                    {data.map((data) => {
                        return (
                            <StyledLocalizedLink
                                key={data.id}
                                to={`/academy/blog/posts/${data.slug}/`}
                            >
                                <StyledFlex>
                                    <StandardImgWrapper
                                        width="138px"
                                        height="80px"
                                        tabletL_width="112px"
                                        tabletL_height="70px"
                                        mobileL_width="112px"
                                        mobileL_height="70px"
                                    >
                                        <QueryImage
                                            data={data.main_image.imageFile}
                                            alt={data.main_image.alt || ''}
                                            className="standard-query-img"
                                        />
                                    </StandardImgWrapper>

                                    <ContentWrapper ml="8px" fd="column" ai="flex-start">
                                        <Header type="paragraph-1" weight="bold">
                                            {data.blog_title}
                                        </Header>
                                        <Flex
                                            mt="auto"
                                            height="fit-content"
                                            jc="center"
                                            ai="center"
                                        >
                                            <img src={EyeIcon} width="16px" height="11px" />
                                            <Header
                                                ml="4px"
                                                mt="3px"
                                                type="small"
                                                weight="normal"
                                                color="grey-5"
                                            >
                                                {getMinRead(data?.blog_post)}
                                            </Header>
                                        </Flex>
                                    </ContentWrapper>
                                </StyledFlex>
                            </StyledLocalizedLink>
                        )
                    })}
                </MarketsNewsWrapper>
            </Flex>
        </StyledContainer>
    )
}

export default MarketNews

MarketNews.propTypes = {
    data: PropTypes.array,
}
