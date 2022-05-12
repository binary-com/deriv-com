import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

const SectionWrapper = styled(SectionContainer)`
    background: white;
    padding: 40px 120px 80px;
    @media ${device.tabletL} {
        padding: 0 0 98px;
    }
`
const MainContainer = styled(Container)`
    width: 100%;
`
const Wrapper = styled(Flex)`
    flex-wrap: wrap;
    flex-direction: row;
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 40px;
    @media ${device.tabletL} {
        margin-bottom: 0;
        max-width: 58.8rem;
    }
`

const StyledImage = styled.img`
    margin: 0 auto 16px;
    width: 80px;
    height: 80px;
`

const StyledIconTitle = styled(Header)`
    @media ${device.tabletL} {
        font-size: 20px;
    }
`

type WhyTradeWithUsProps = {
    mainTitle: ReactElement
    columnPerRow: number
    itemsArr: ItemsArrType[]
}

type ItemsArrType = {
    title: ReactElement
    icon: string
}

const WhyTradeWithUs = ({ itemsArr, mainTitle, columnPerRow }: WhyTradeWithUsProps) => {
    const CardWidth = 100 / columnPerRow + '%'
    const Card = styled(Flex)`
        max-width: 38.4rem;
        justify-content: flex-start;
        flex-wrap: wrap;

        &:nth-child(-n + ${columnPerRow}) {
            margin-bottom: 40px;
        }
        &:nth-child(${columnPerRow}n+1) {
            padding-right: 24px;
        }
        &:not(:nth-child(${columnPerRow}n+1)) {
            padding-right: 22px;
        }
        &:nth-child(${columnPerRow}n) {
            padding-right: 0;
        }
        @media ${device.laptopM} {
            padding-right: 0 !important;
        }
        @media ${device.tabletL} {
            &:nth-child(-n + ${columnPerRow}) {
                margin-bottom: 32px;
            }
            &:first-child {
                margin: 24px auto 32px;
            }
            &:last-child {
                margin: 0 auto;
            }

            width: 100%;
            max-width: 58.8rem;
            margin: 0 auto 40px;
            justify-content: center;
        }
    `

    return (
        <SectionWrapper>
            <MainContainer direction="column">
                <StyledHeader as="h2" type="page-title" align="center">
                    {mainTitle}
                </StyledHeader>
                <Wrapper>
                    {itemsArr.map((item, index) => {
                        return (
                            <Card direction="column" key={index} width={CardWidth}>
                                <StyledImage src={item.icon} alt="" />
                                <StyledIconTitle
                                    as="h4"
                                    weight="normal"
                                    type="sub-section-title"
                                    align="center"
                                >
                                    {item.title}
                                </StyledIconTitle>
                            </Card>
                        )
                    })}
                </Wrapper>
            </MainContainer>
        </SectionWrapper>
    )
}

export default WhyTradeWithUs
