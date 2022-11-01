import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Header, StyledLink } from 'components/elements'
import { Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { TString } from 'types/generics'
import useMediaQuery from 'components/hooks/use-media-query'
import device from 'themes/device'
import useCarousel from 'components/elements/carousel/use-carousel'

export const ImageTag = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 16px;
`

export type PlatformDetailsProps = {
    title: TString
    description: TString
    learn_more_link: string
    icon: string
    is_from_slider?: boolean
}

const LearnMoreLink = styled(StyledLink)`
    span {
        font-size: 16px;
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    @media ${device.tabletL} {
        margin-top: 100px;
        justify-content: center;
    }
`

const CarouselItemDetail = ({
    title,
    icon,
    description,
    learn_more_link,
    is_from_slider,
}: PlatformDetailsProps) => {
    const is_smaller_than_Ltablet = useMediaQuery(device.tabletL)
    const {
        config: { mode },
    } = useCarousel()

    const is_detail_visible = useMemo(() => {
        return mode === 'horizontal' || is_from_slider ? true : false
    }, [is_from_slider, mode])

    return (
        <Container>
            <ImageTag width="40px" height="40px" src={icon} alt="platform" />
            <Flex fd="column" ai="flex-start" jc="center" width="unset" height="unset">
                <Header
                    type={is_smaller_than_Ltablet ? 'subtitle-2' : 'subtitle-1'}
                    tablet={{ mb: '8px' }}
                >
                    <Localize translate_text={title} />
                </Header>
                {is_detail_visible && (
                    <>
                        <Header as="p" type="paragraph-1" weight="normal">
                            <Localize translate_text={description} />
                        </Header>
                        <Flex jc="flex-start" tabletL={{ jc: 'center' }} mt={'12px'}>
                            <LearnMoreLink
                                to={learn_more_link}
                                external={learn_more_link.includes('https')}
                                mb="9px"
                            >
                                <span>{`${localize('Learn more')} >`}</span>
                            </LearnMoreLink>
                        </Flex>
                    </>
                )}
            </Flex>
        </Container>
    )
}

export default CarouselItemDetail
