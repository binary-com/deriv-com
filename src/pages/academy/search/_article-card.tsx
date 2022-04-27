import React from 'react'
import styled from 'styled-components'
import { StandardImgWrapper } from '../common/_styles'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import { convertDate } from 'common/utility'
import StarIcon from 'images/svg/blog/star-icon.svg'
import { BlogType } from 'components/hooks/use-academy-data'

type ArticleCardProps = {
    items: BlogType
}

const StyledLink = styled(LocalizedLink)`
    color: var(--color-black-3);
    text-decoration: none;
`

const StarIconWrapper = styled.img`
    width: 16px;
    height: 16px;
    margin-left: 8px;
    padding-top: 2px;
`

const DesktopSection = styled.div`
    @media (max-width: 475px) {
        display: none;
    }
`

const MobileSection = styled.div`
    @media (min-width: 475px) {
        display: none;
    }
`

const ArticleCard = ({ items }: ArticleCardProps) => {
    const article_link = `/academy/blog/posts/${items.slug}/`

    return (
        <Flex mb="40px" jc="flex-start" tablet={{ mb: '24px' }}>
            <DesktopSection>
                <StandardImgWrapper width="161px" height="96px" border_radius="6px">
                    <QueryImage
                        data={items.main_image.imageFile}
                        alt={items.main_image.description || ''}
                        className="standard-query-img"
                        width="161px"
                        height="96px"
                    />
                </StandardImgWrapper>
            </DesktopSection>
            <Flex max-width="auto" ml="14px" fd="column">
                <MobileSection>
                    <StandardImgWrapper
                        tabletL_width="120px"
                        tabletL_height="72px"
                        tabletL_border_radius="4px"
                    >
                        <QueryImage
                            data={items.main_image.imageFile}
                            alt={items.main_image.description || ''}
                            className="standard-query-img"
                        />
                    </StandardImgWrapper>
                </MobileSection>
                <Flex jc="space-between" tablet={{ fd: 'column', jc: 'flex-start', mt: '8px' }}>
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
