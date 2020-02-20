import React from 'react'
import styled from 'styled-components'
import Stories from './_story_constant'
// import { Container } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
import StorySVG from 'images/svg/story-line.svg'

const StorySection = styled.section`
    width: 100%;
    margin: auto;
    background-color: var(--color-white);
    padding: 8rem 0 0 0;
    position: relative;
`
const Story = styled.div`
    /* prettier-ignore */
    background-color: var(--color-${props => props.bgColor || 'white'});
    width: 100%;
    margin: auto;
    padding: 2rem 0;
`

const YearWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: ${props => (props.left ? props.margin_left || '9.5rem' : '-9rem')};
    margin-bottom: ${props => props.margin_bottom || 'unset'};

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
    width: ${props => (props.content_width || '39.6rem')};
    padding: 0 0 0 1rem;
`
const StyledHeader = styled(Header)`
    width: 8%;
    margin-left: ${props => (props.left ? '41.66%' : '50.9%')};
    margin-bottom: 2.5rem;
    position: relative;

    ::before {
        content: '';
        width: 2px;
        height: 2rem;
        border-top: 14px solid red;
        border-bottom: 14px solid red;
        position: absolute;
        top: 27.6%;
        right: ${props => (props.left ? '-12.8%' : '')};
        left: ${props => (props.left ? '' : '-4.2%')};

        @media ${device.tablet} {
            display: none;
        }
    }

    @media ${device.laptopL} {
        width: 11%;
        margin-left: ${props => (props.left ? '38.4%' : '51.1%')};
    }
    @media ${device.laptop} {
        width: 11%;
        margin-left: ${props => (props.left ? '38.7%' : '51.4%')};
    }

    @media ${device.tablet} {
        margin: auto;
        align-items: center;
    }
`
const Splitter = styled.div`
    width: 39.6rem;
    height: 0.1rem;
    border: 1px solid var(--color-grey-20);
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
    height: 92.5%;
    left: 50%;
    top: 5%;

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
                            <YearWrapper
                                key={idxa}
                                color={story.color}
                                width={story.width}
                                width_laptop={story.width_laptop}
                                left
                                margin_left={content.margin_left}
                                margin_bottom={content.margin_bottom}
                            >
                                <LogoContainer
                                    svg_position={content.svg_position}
                                    svg_width={content.svg_width}
                                    margin_right={content.margin_right}
                                >
                                    {content.svg}
                                </LogoContainer>
                                <ContentWrapper content_width={content.content_width} left>
                                    {content.headers.map((header, id) => (
                                        <div key={id}>
                                            <Header
                                                padding="0 0 0 1.1rem"
                                                mobile_text_align="center"
                                                as="h3"
                                                color={story.color}
                                                margin= {header.margin_top +  ' 0 0 0'}
                                            >
                                                {header.header}
                                            </Header>
                                            <Splitter />
                                            <Text padding="0 0 0 1.1rem" >
                                                {content.texts[id].text}
                                            </Text>
                                        </div>
                                    ))}
                                </ContentWrapper>
                            </YearWrapper>
                        ) : (
                            <YearWrapper
                                key={idxa}
                                color={story.color}
                                width={story.width}
                                width_laptop={story.width_laptop}
                                margin_bottom={content.margin_bottom}
                            >
                                <ContentWrapper content_width={content.content_width}>
                                    {content.headers.map((header, id) => (
                                        <div key={id}>
                                            <Header
                                                mobile_text_align="center"
                                                as="h3"
                                                color={story.color}
                                                margin= {header.margin_top +  ' 0 0 0'}
                                            >
                                                {header.header}
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
