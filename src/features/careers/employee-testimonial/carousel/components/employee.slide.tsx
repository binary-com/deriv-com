import React from 'react'
import styled from 'styled-components'
import { TEmployeeTestimonial } from '../types'
import { Flex } from 'components/containers'
import device from 'themes/device'
import QuoteMark from 'images/svg/careers/quotemark.svg'
import { Header } from 'components/elements'

const EmployeeCard = styled.article`
    width: 99.6rem;
    min-height: 31.7rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    margin: 2rem;

    @media ${device.tablet} {
        padding: 4rem;
    }

    @media ${device.tablet} {
        width: 49.8rem;
    }
`

const QuoteWrapper = styled(Flex)`
    position: relative;

    img {
        position: absolute;
        right: 15px;
        top: 16px;
    }
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

const ImageWrapper = styled.div`
    width: 100%;
    max-height: 31.7rem;
`

const QuoteText = styled(Header)`
    text-align: left;
    padding-bottom: 2.4rem;
    z-index: 10;
    position: relative;
    padding-top: 8.5rem;
    max-width: 38.4rem;

    @media ${device.tabletL} {
        padding-bottom: 1rem;
        font-size: 2rem;
        padding-top: 4rem;
    }
`

type TEmployeeSlideProps = {
    item: TEmployeeTestimonial
}

const EmployeeSlide = ({ item }: TEmployeeSlideProps) => {
    const { quote, img_path, img_alt, name } = item
    return (
        <Flex ai="center" height="unset">
            <EmployeeCard>
                <Flex tablet_direction="column">
                    <Flex>
                        <ImageWrapper>
                            <StyledImg loading="lazy" src={img_path} alt={img_alt} />
                        </ImageWrapper>
                    </Flex>
                    <QuoteWrapper direction="column">
                        <img src={QuoteMark} alt="quotemark" />
                        <QuoteText weight={'normal'} type={'main-paragraph'} as="blockquote">
                            {quote}
                        </QuoteText>
                        <Header type={'paragraph-1'}>{name}</Header>
                    </QuoteWrapper>
                </Flex>
            </EmployeeCard>
        </Flex>
    )
}

export default EmployeeSlide
