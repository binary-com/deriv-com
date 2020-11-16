import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Text, Header } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import Checklist from 'images/svg/checklist-red.svg'

const ContentWrapper = styled(Flex)`
    margin: 8rem auto;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column;
        margin: 40px auto 0 auto;
    }
`

const CardWrapper = styled(Flex)`
    flex-direction: column;
    margin-right: 10rem;

    @media ${device.tabletL} {
        align-items: center;
        margin-right: 0;
    }
`

const StyledText = styled(Text)`
    padding: 4rem 0;
    font-size: 2.4rem;
    line-height: 1.5;
    text-align: center;

    @media ${device.tabletL} {
        font-size: 2rem;
        padding: 0 0;
    }
`

const StyledHeader = styled(Header)`
    font-size: 4.8rem;
    line-height: 1.25;
    max-width: 38.3rem;
    margin-right: 2.4rem;

    @media ${device.tabletL} {
        margin: 0 0 24px 0;
        font-size: 24px;
        text-align: center;
        line-height: 30px;
    }
`

const StyledSection = styled(SectionContainer)`
    padding: 0;

    @media ${device.tabletL} {
        padding: 40px 16px;
    }
`

const Card = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2.4rem 2.4rem;
    width: 48.6rem;
    height: 72px;
    border-radius: 5.1px;
    box-shadow: 0 13px 17px 0 rgba(0, 0, 0, 0.05), 0 0 17px 0 rgba(0, 0, 0, 0.05);
    margin-bottom: 1.6rem;

    &:last-child {
        margin-bottom: 0;
    }
    svg {
        margin-right: 1.4rem;
    }
    @media ${device.tabletL} {
        width: 328px;
        padding: 16px;

        svg {
            margin-right: 17px;
        }
    }
`

const CardText = styled(Text)`
    font-size: 1.6rem;
    line-height: 1.5;

    @media ${device.tabletL} {
        width: 86%;
    }
`

export const Signal = ({ content }) => {
    return (
        <StyledSection background="var(--color-white)">
            <Flex direction="column" max_width="99.6rem" m="0 auto" jc="space-between" ai="center">
                <StyledText>{content.text}</StyledText>
                <ContentWrapper>
                    <StyledHeader>{content.header}</StyledHeader>
                    <CardWrapper>
                        {content.list.map((text, idx) => {
                            return (
                                <Card key={idx}>
                                    <Checklist />
                                    <CardText>{text}</CardText>
                                </Card>
                            )
                        })}
                    </CardWrapper>
                </ContentWrapper>
            </Flex>
        </StyledSection>
    )
}
Signal.propTypes = {
    content: PropTypes.shape({
        header: PropTypes.string,
        list: PropTypes.shape({
            map: PropTypes.func,
        }),
        text: PropTypes.string,
    }),
}
