import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'

type SpeakersListProps = {
    title?: string | ReactNode
    content?: string | ReactNode
    image?: string
    key?: string
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 80px;
    justify-content: center;

    :nth-child(2n-2) {
        flex-direction: row-reverse;
    }
`

const ImageName = styled.img`
    width: 384px;
    height: 355;
    border-radius: 8px;
`

const ImageWrapper = styled.div`
    :nth-child(2n-2) {
        padding-right: 24px;
    }
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 588px;
`

const SpeakersList = ({ title, content, image, key }: SpeakersListProps) => {
    return (
        <Container>
            <ContentWrapper>
                <Header weight="700" type="heading-3">
                    {title}
                </Header>
                <Header weight="400" type="subtitle-1">
                    {content}
                </Header>
            </ContentWrapper>
            <ImageWrapper>
                <ImageName src={image} />
            </ImageWrapper>
        </Container>
    )
}

export default SpeakersList
