import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const MarketNews = ({ data }) => {
    console.log(data) //eslint-disable-line
    return (
        <SectionContainer>
            <Container>
                <Flex fd="column">
                    <Header mb="20px" align="center" type="heading-3" as="h3">
                        Market News
                    </Header>
                    <MarketsNewsWrapper>
                        {market_news_data
                            .filter((data) => data.report_type === 'Weekly report')
                            .slice(0, 6)
                            .map((data, index) => {
                                return (
                                    <StyledFlex key={index}>
                                        <img src={data.img_source} width="104px" height="78px" />
                                        <Flex ml="8px" fd="column">
                                            <Header type="paragraph-2" color="blue-9">
                                                <StyledSpan>{data.report_type}</StyledSpan>
                                            </Header>
                                            <Header mt="8px" type="paragraph-1" weight="bold">
                                                {data.date}
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
                                                    {data.read_time} min read
                                                </Header>
                                            </Flex>
                                        </Flex>
                                    </StyledFlex>
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
    data: PropTypes.object,
}
