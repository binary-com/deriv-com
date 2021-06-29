import React from 'react'
import styled from 'styled-components'
import { market_news_data } from './_markets_news_data'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header } from 'components/elements/typography'
import EyeIcon from 'images/svg/eye.svg'
import device from 'themes/device'

const MarketsNewsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 30px;
    padding: 10px;

    @media ${device.tabletL} {
        grid-template-columns: auto auto;
    }

    @media ${device.tabletS} {
        grid-template-columns: auto;
        margin:0 auto;
    }
`

const StyledSpan = styled.span`
    background-color: var(--color-blue-9); 
    padding: 3px 8px;
    border-radius: 8px;
`

const MarketNews = () => {
    return (
        <SectionContainer>
            <Container>
                <Flex fd="column">
                    <Header mb="20px" align="center" type="heading-3" as="h3">
                        Market News
                    </Header>
                    <MarketsNewsWrapper>
                        {market_news_data.filter((data) => data.report_type === "Weekly report").slice(0, 6).map((data, index) => {
                            return (
                                <Flex key={index}>
                                    <img src={data.img_source} width="104px" height="78px" />
                                    <Flex ml="8px" fd="column">
                                        <Header type="paragraph-2" color="blue-10">
                                            <StyledSpan>{data.report_type}</StyledSpan>
                                        </Header>
                                        <Header lh="1 !important" mt="8px" type="paragraph-1" weight="bold">
                                            {data.date}
                                        </Header>
                                        <Flex mt="auto" height="fit-content" jc="center" ai="center">
                                            <img src={EyeIcon} width="16px" height="11px" />
                                            <Header ml="4px" mt="3px" type="small" weight="normal" color='grey-5'>
                                                {data.read_time} min read
                                            </Header>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </MarketsNewsWrapper>
                </Flex>
            </Container>
        </SectionContainer >
    )
}

export default MarketNews