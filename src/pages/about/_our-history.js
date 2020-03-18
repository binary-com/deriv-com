import React from 'react'
import styled from 'styled-components'
import Stories from './_story_constant'
// import { Container } from 'components/containers'
import { Header, Text, Image } from 'components/elements'
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
    margin-left: ${props => (props.left ? props.margin_left || '9.4rem' : '-9.4rem')};
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
    width: ${props => props.content_width || '39.6rem'};
    padding: 0 0 0 1rem;
`
const StyledHeader = styled(Header)`
    width: 18rem;
    margin-left: 50%;
    margin-bottom: 2.5rem;
    position: relative;
    transform: ${props => (props.left ? 'translateX(-88.7%)' : 'translateX(-1%)')};

    ::before {
        content: '';
        width: 3px;
        height: 2rem;
        border-top: 1.7rem solid red;
        border-bottom: 17px solid red;
        position: absolute;
        top: 32.6%;
        right: ${props => (props.left ? '1rem' : '')};
        left: ${props => (props.left ? '' : '1rem')};

        @media ${device.tablet} {
            display: none;
        }
    }

    @media ${device.laptopL} {
        transform: ${props => (props.left ? 'translateX(-88%)' : 'translateX(-1%)')};
    }
    @media ${device.laptop} {
        transform: ${props => (props.left ? 'translateX(-87%)' : 'translateX(-1%)')};
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
    width: ${props => props.outer_image_width || '28.2rem'};
    text-align: ${props => props.image_position};
    margin-left: ${props => (props.left ? '2rem' : '')};
    margin-right: ${props => (props.left ? '' : props.margin_right || '2rem')};

    @media ${device.tablet} {
        text-align: center;
    }
`
const SVGContainer = styled.div`
    position: absolute;
    height: 93%;
    left: 50%;
    width: 22px;
`
const StyledLine = styled(StorySVG)`
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;

    @media ${device.tablet} {
        display: none;
    }
`

export const OurHistory = () => {
    return (
        <StorySection>
            <Header font_size="3.6rem" align="center" margin="0 0 9.2rem 0">
                {localize('Our history')}
            </Header>
            <SVGContainer>
                <StyledLine />
            </SVGContainer>
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
                                    image_position={content.image_position}
                                    outer_image_width={content.outer_image_width}
                                    margin_right={content.margin_right}
                                    height={content.asset_height}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <Image
                                            width={content.image_width}
                                            img_name={content.image}
                                        />
                                    </div>
                                </LogoContainer>
                                <ContentWrapper content_width={content.content_width} left>
                                    {content.headers.map((header, id) => (
                                        <div key={id}>
                                            <Header
                                                padding="0 0 0 1.1rem"
                                                mobile_text_align="center"
                                                as="h3"
                                                color={story.color}
                                                margin={header.margin_top + ' 0 0 0'}
                                            >
                                                {header.header}
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
                                                margin={header.margin_top + ' 0 0 0'}
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
                                    image_position={content.image_position}
                                    outer_image_width={content.outer_image_width}
                                    margin_right={content.margin_right}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            marginLeft: '1rem',
                                        }}
                                    >
                                        <Image
                                            width={content.image_width}
                                            img_name={content.image}
                                        />
                                    </div>
                                </LogoContainer>
                            </YearWrapper>
                        ),
                    )}
                </Story>
            ))}
        </StorySection>
    )
}
