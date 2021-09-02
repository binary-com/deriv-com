import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { truncateString } from 'common/utility'
import EyeIcon from 'images/svg/eye.svg'
import device from 'themes/device'

const MarketsNewsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    padding: 10px;
    max-height: 211px;

    @media ${device.tabletL} {
        grid-template-columns: auto auto;
        max-height: 330px;
    }

    @media ${device.tabletS} {
        grid-template-columns: auto;
        margin: 0 auto;
        max-height: 668px;
    }
`

const StyledSpan = styled.span`
    background-color: var(--color-blue-10);
    padding: 3px 8px 1px;
    border-radius: 8px;
`

const StyledFlex = styled(Flex)`
    max-height: 83px;
`

const StyledLocalizedLink = styled(LocalizedLink)`
    text-decoration: none;
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
        <SectionContainer>
            <Container>
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
                                        <QueryImage
                                            data={data.main_image.imageFile}
                                            width="104px"
                                            height="78px"
                                            alt={data.main_image.alt || ''}
                                        />
                                        <Flex ml="8px" fd="column">
                                            <Header type="paragraph-2" color="blue-9">
                                                {/* We'll stick to just weekly report for phase 1 */}
                                                <StyledSpan>Weekly report</StyledSpan>
                                            </Header>
                                            <Header mt="8px" type="paragraph-1" weight="bold">
                                                {truncateString(data.blog_title, 38)}
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
                                                    {data.read_time_in_minutes} min read
                                                </Header>
                                            </Flex>
                                        </Flex>
                                    </StyledFlex>
                                </StyledLocalizedLink>
                            )
                        })}
                    </MarketsNewsWrapper>
                </Flex>
            </Container>
        </SectionContainer>
    )
}

export default MarketNews

MarketNews.propTypes = {
    data: PropTypes.array,
}
