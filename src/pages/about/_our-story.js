import React from 'react'
import styled from 'styled-components'
import Stories from './_story_constant'
// import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import StorySVG from 'images/svg/story-line.svg'
import LineArrow from 'images/svg/line-arrow.svg'

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
    padding: 2rem 13.4%;

    @media ${device.laptopL} {
        padding: 2rem 5.4%;
    }
    @media ${device.laptop} {
        padding: 2rem 0.4%;
    }
`

const YearWrapper = styled.div`
    width: ${props => props.width || '68%'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: ${props => (!props.left ? '11.8%' : '19.6%')};

    p {
        color: ${props => props.color || 'black'};
    }

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: auto;
    }
`
const ContentWrapper = styled.div`
    width: 38.4rem;
`
const StyledHeader = styled(Header)`
    width: 10%;
    margin-left: ${props => (props.left ? '39.4%' : '50.9%')};
    margin-bottom: 2.5rem;
    position: relative;

    ::before {
        content: '';
        width: 0.4rem;
        height: 2rem;
        border-top: 14px solid red;
        border-bottom: 14px solid red;
        position: absolute;
        top: 27.6%;
        right: ${props => (props.left ? '-8.4%' : '')};
        left: ${props => (props.left ? '' : '-9.2%')};

        @media ${device.tablet} {
            display: none;
        }
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
    width: ${props => props.svg_width || '28.2rem'};
    text-align: ${props => props.svg_position};
    margin-left: ${props => (props.left ? '2rem' : '')};
    margin-right: ${props => (props.left ? '' : props.margin_right || '2rem')};

    @media ${device.tablet} {
        text-align: center;
    }
`

const StyledLine = styled(StorySVG)`
    position: absolute;
    height: 92%;
    left: 50%;
    top: 5%;

    @media ${device.tablet} {
        display: none;
    }
`
const StyledLineArrow = styled(LineArrow)`
    position: absolute;
    height: -3%;
    left: 49.4%;
    top: 4.3%;

    @media ${device.tablet} {
        display: none;
    }
`
export const OurStory = () => {
    return (
        <StorySection>
            <Header font_size="3.6rem" align="center" margin="0 0 9.2rem 0">
                {localize('Our history')}
            </Header>
            <StyledLineArrow />

            <StyledLine />
            {Stories.map((story, idx) => (
                <Story key={idx} bgColor={story.bgColor}>
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
                            <YearWrapper key={idxa} color={story.color} width={story.width} left>
                                <LogoContainer
                                    svg_position={content.svg_position}
                                    svg_width={content.svg_width}
                                    margin_right={content.margin_right}
                                >
                                    {content.svg}
                                </LogoContainer>
                                <ContentWrapper left>
                                    {content.headers.map((header, id) => (
                                        <div key={id}>
                                            <Header
                                                padding="0 0 0 1.1rem"
                                                mobile_text_align="center"
                                                as="h3"
                                                color={story.color}
                                            >
                                                {header}
                                            </Header>
                                            <Splitter />
                                            <Text padding="0 0 0 1.1rem">
                                                {content.texts[id].text}
                                            </Text>
                                        </div>
                                    ))}
                                </ContentWrapper>
                            </YearWrapper>
                        ) : (
                            <YearWrapper key={idxa} color={story.color} width={story.width}>
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
                                            <Text>{content.texts[id].text}</Text>
                                        </div>
                                    ))}
                                </ContentWrapper>
                                <LogoContainer
                                    left
                                    svg_position={content.svg_position}
                                    svg_width={content.svg_width}
                                    margin_right={content.margin_right}
                                >
                                    {content.svg}
                                </LogoContainer>
                            </YearWrapper>
                        ),
                    )}
                </Story>
            ))}
        </StorySection>
    )
}
