import React from 'react'
import styled from 'styled-components'
import Stories from './_story_constant'
import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import StorySVG from 'images/svg/story-line.svg'

const StorySection = styled.section`
    width: 100%;
    margin: auto;
    background-color: var(--color-white);
    padding: 8rem 0;
    position: relative;
`
const Story = styled.div`
    /* prettier-ignore */
    background-color: var(--color-${props => props.bgColor || 'white'});
    width: 100%;
    margin: auto;
    padding: 2rem 32.4rem;
`

const YearWrapper = styled.div`
    width: 69rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: ${props => (!props.left ? '11rem' : '20.7rem')};

    p {
        color: ${props => props.color || 'black'};
    }

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
    }
`
const ContentWrapper = styled.div`
    width: 38.4rem;
`
const StyledHeader = styled(Header)`
    width: 12rem;
    margin-left: ${props => (props.left ? '38rem' : '52rem')};
    margin-bottom: 2.5rem;
    position: relative;

    ::before {
        content: '';
        width: 0.4rem;
        height: 2rem;
        border-top: 14px solid red;
        border-bottom: 14px solid red;
        position: absolute;
        top: 1.6rem;
        right: ${props => (props.left ? '-1.2rem' : '')};
        left: ${props => (props.left ? '' : '-1.2rem')};
    }

    @media ${device.tablet} {
        margin: auto;
        align-items: center;
    }
`
const Splitter = styled.div`
    width: 39.6rem;
    height: 0.1rem;
    border: 1px solid var(--color-grey-19);
    margin: 0.5rem 0 1rem 0;
`
const LogoContainer = styled.div`
    width: 28.2rem;
    height: 15rem;
    text-align: ${props => props.svgPosition};
    margin-left: ${props => (props.left ? '2rem' : '')};
    margin-right: ${props => (props.left ? '' : '2rem')};
`

const StyledLine = styled(StorySVG)`
    position: absolute;
    height: 92%;
    left: 50%;
`
export const OurStory = () => {
    return (
        <StorySection>
            <Header font_size="3.6rem" align="center" margin="0 0 9.2rem 0">
                {localize('Our history')}
            </Header>

            <StyledLine />
            {Stories.map((story, idx) => (
                <Story key={idx} bgColor={story.bgColor}>
                    {/* <Container direction="column" justify="space-between"> */}
                    <StyledHeader
                        left={story.left}
                        as="h2"
                        color={story.color || 'red-4'}
                        align="center"
                    >
                        {story.year}
                    </StyledHeader>

                    {story.contents.map((content, idxa) =>
                        content.left ? (
                            <YearWrapper key={idxa} color={story.color} left>
                                <LogoContainer svgPosition={content.svgPosition}>
                                    {content.svg}
                                </LogoContainer>
                                <ContentWrapper left>
                                    {content.headers.map((header, id) => (
                                        <div key={id}>
                                            <Header
                                                mobile_text_align="center"
                                                as="h3"
                                                color={story.color}
                                            >
                                                {header}
                                            </Header>
                                            <Splitter />
                                            <Text>{content.texts[id]}</Text>
                                        </div>
                                    ))}
                                </ContentWrapper>
                            </YearWrapper>
                        ) : (
                            <YearWrapper key={idxa} color={story.color}>
                                <ContentWrapper>
                                    {content.headers.map((header, id) => (
                                        <div key={id}>
                                            <Header
                                                mobile_text_align="center"
                                                as="h3"
                                                color={story.color}
                                            >
                                                {header}
                                            </Header>
                                            <Splitter />
                                            <Text>{content.texts[id]}</Text>
                                        </div>
                                    ))}
                                </ContentWrapper>
                                <LogoContainer left svgPosition={content.svgPosition}>
                                    {content.svg}
                                </LogoContainer>
                            </YearWrapper>
                        ),
                    )}
                    {/* </Container> */}
                </Story>
            ))}
        </StorySection>
    )
}
