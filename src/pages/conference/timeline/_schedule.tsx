import React, { ReactNode } from 'react'
import styled from 'styled-components'
import ArrowRight from './images/downwards_right.svg'
import ArrowLeft from './images/downwards_left.svg'
import { Header } from 'components/elements'
import device from 'themes/device'

type ScheduleProps = {
    time?: ReactNode
    id?: string
    name?: ReactNode
    topic?: ReactNode
}

type DataProps = {
    timings: ScheduleProps[]
    free_time: ReactNode
    speakers: ScheduleProps[]
}

type ScheduleConferenceProps = {
    id?: string
    title?: ReactNode
    date?: ReactNode
    period?: ReactNode
    data?: DataProps[]
}

type ConferenceProps = {
    item: ScheduleConferenceProps
    key: string
}

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
`

const Container = styled.div`
    padding-bottom: 80px;
`

const HeaderTitle = styled.div`
    padding-bottom: 80px;
`

const WrapperContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 700px;
`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.tablet} {
        margin-left: 40px;
    }
`

const TimeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2:last-child {
        margin-bottom: 0;
    }

    @media ${device.tablet} {
        margin-left: 40px;
    }
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2:last-child {
        margin-bottom: 0;
    }
`

const ScheduleConference = ({ item }: ConferenceProps) => {
    const { id, date, data, period, title } = item

    return (
        <>
            <HeaderTitle key={id}>
                <Header weight="400" type="subtitle-1" align="center" pt="16px">
                    {title}
                </Header>
                <Header weight="400" type="subtitle-1" align="center" pt="16px">
                    {date}
                </Header>
                <Header weight="400" type="subtitle-1" align="center" pt="16px">
                    {period}
                </Header>
            </HeaderTitle>

            <Container key={id}>
                {data.map((item, index) => {
                    return (
                        <>
                            <MainContainer>
                                <WrapperContainer>
                                    <TimeWrapper>
                                        {item.timings.map((item) => {
                                            return (
                                                <Header
                                                    type="heading-3"
                                                    align="center"
                                                    weight="700"
                                                    mb="60px"
                                                    key={id}
                                                >
                                                    {item.time}
                                                </Header>
                                            )
                                        })}
                                    </TimeWrapper>
                                    <ImageContainer>
                                        {index % 2 === 0 ? (
                                            <img src={ArrowLeft} alt="arrow_left" />
                                        ) : (
                                            <img src={ArrowRight} alt="arrow_right" />
                                        )}
                                    </ImageContainer>
                                    <ContentWrapper>
                                        {item.speakers.map((item) => {
                                            return (
                                                <>
                                                    <Header
                                                        align="left"
                                                        type="subtitle-1"
                                                        weight="700"
                                                        width="230px"
                                                    >
                                                        {item.name}
                                                    </Header>
                                                    <Header
                                                        align="left"
                                                        type="subtitle-1"
                                                        weight="400"
                                                        mb="32px"
                                                    >
                                                        {item.topic}
                                                    </Header>
                                                </>
                                            )
                                        })}
                                    </ContentWrapper>
                                </WrapperContainer>
                            </MainContainer>
                            <Header
                                type="heading-3"
                                align="center"
                                weight="400"
                                mt="40px"
                                mb="40px"
                            >
                                {item.free_time}
                            </Header>
                        </>
                    )
                })}
            </Container>
        </>
    )
}

export default ScheduleConference
