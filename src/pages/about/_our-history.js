import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Stories from './_story_constant'
import Show from 'components/containers/show'
// import { Container } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Flex } from 'components/containers'
import { localize } from 'components/localization'
import device, { size } from 'themes/device'
import StorySVG from 'images/svg/story-line.svg'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        regent_market_logo: file(relativePath: { eq: "regent-market-logo.png" }) {
            ...fadeIn
        }
        flag_malta: file(relativePath: { eq: "flag-malta.png" }) {
            ...fadeIn
        }
        bet_on_markets_logo: file(relativePath: { eq: "bet-on-markets-logo.png" }) {
            ...fadeIn
        }
        isle_of_man_flag: file(relativePath: { eq: "isle-of-man-flag.png" }) {
            ...fadeIn
        }
        awards: file(relativePath: { eq: "awards.png" }) {
            ...fadeIn
        }
        logo_binary: file(relativePath: { eq: "logo-binary.png" }) {
            ...fadeIn
        }
        eu_flag: file(relativePath: { eq: "eu-flag.png" }) {
            ...fadeIn
        }
        logo_developers: file(relativePath: { eq: "logo-developers.png" }) {
            ...fadeIn
        }
        laptop: file(relativePath: { eq: "laptop.png" }) {
            ...fadeIn
        }
        logo_mt5: file(relativePath: { eq: "logo-mt5.png" }) {
            ...fadeIn
        }
        flag_labuan: file(relativePath: { eq: "flag-labuan.png" }) {
            ...fadeIn
        }
        dubai_paraguay_flags: file(relativePath: { eq: "dubai-paraguay-flags.png" }) {
            ...fadeIn
        }
        deriv_laptop: file(relativePath: { eq: "deriv-laptop.png" }) {
            ...fadeIn
        }
        location_flags: file(relativePath: { eq: "location-flags.png" }) {
            ...fadeIn
        }
    }
`
const StorySection = styled.section`
    width: 100%;
    margin: auto;
    background-color: var(--color-white);
    padding: 8rem 0 0 0;
    position: relative;

    @media ${device.tablet} {
        > ${Header} {
            margin-bottom: 2rem;
        }
    }

    > :last-child {
        margin-bottom: 0;
    }
`
const Story = styled.div`
    /* prettier-ignore */
    background-color: var(--color-${(props) => props.bgColor || 'white'});
    width: 100%;
    margin: auto;
    padding: 2rem 0;

    @media ${device.tablet} {
        background-color: var(--color-${(props) => (props.bgColor == 'black' ? 'black' : 'white')});
    }
`

const YearWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: ${(props) => (props.left === true ? props.margin_left || '9.4rem' : '-9.4rem')};
    margin-bottom: ${(props) => props.margin_bottom || 'unset'};

    p {
        color: ${(props) => props.color || 'black'};
    }

    @media ${device.tablet} {
        flex-direction: column;
        justify-content: left;
        text-align: left;
        margin: auto;
        align-items: left;
        max-width: 42.9rem;
        width: auto;
        margin-bottom: 4rem;
    }
`
const ContentWrapper = styled.div`
    width: ${(props) => props.content_width || '38.4rem'};
    padding: 0;
    margin-left: ${(props) => (props.left ? '1.2rem' : '0.8rem')};

    @media ${device.tablet} {
        width: 328px;

        ${Header} {
            text-align: left;
            margin-bottom: 1rem;
            max-width: 41rem;
        }
        ${Text} {
            margin-bottom: 1rem;
        }
    }
`
const StyledHeader = styled(Header)`
    width: 18rem;
    margin-left: 50%;
    margin-bottom: 2.5rem;
    position: relative;
    transform: ${(props) => (props.left === true ? 'translateX(-88.7%)' : 'translateX(-1%)')};

    ::before {
        content: '';
        width: 3px;
        height: 2rem;
        border-top: 1.7rem solid red;
        border-bottom: 17px solid red;
        position: absolute;
        top: 32.6%;
        right: ${(props) => (props.left === true ? '1rem' : '')};
        left: ${(props) => (props.left === true ? '' : '1rem')};

        @media ${device.tablet} {
            display: none;
        }
    }

    @media ${device.laptopL} {
        transform: ${(props) => (props.left === true ? 'translateX(-88%)' : 'translateX(-1%)')};
    }
    @media ${device.laptop} {
        transform: ${(props) => (props.left === true ? 'translateX(-87%)' : 'translateX(-1%)')};
    }
    @media ${device.tablet} {
        margin-left: -186px;
        width: auto;
        transform: unset;
        margin-bottom: 1rem;
    }
`
const Splitter = styled.div`
    width: 39.6rem;
    height: 0.1rem;
    border: 1px solid var(--color-grey-20);
    margin: 0.5rem 0 1rem 0;

    @media ${device.tablet} {
        display: none;
    }
`
const LogoContainer = styled.div`
    width: ${(props) => props.outer_image_width || '28.2rem'};
    text-align: ${(props) => props.image_position};
    margin-left: ${(props) => (props.left === true ? '2rem' : '')};
    margin-right: ${(props) => (props.left === true ? '' : props.margin_right || '2rem')};

    @media ${device.tablet} {
        text-align: left;
        margin-bottom: 1rem;
        width: 284px;
        margin-left: 0;
        height: ${(props) => props.height || '10rem'};
        position: relative;
    }
    @media ${device.mobileS} {
        margin-left: 0;
    }
`
const LogoDiv = styled.div`
    display: flex;
    justify-content: ${(props) => (props.is_mobile ? 'flex-start' : 'flex-end')};

    @media ${device.tablet} {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
    }
`

const SVGContainer = styled.div`
    position: absolute;
    height: 93%;
    width: 22px;
    left: 50%;
`
const StyledLine = styled.img`
    position: absolute;
    height: 102%;
    left: -1px;
    top: 0;

    @media ${device.tablet} {
        display: none;
    }
`

export const OurHistory = (props) => {
    const data = useStaticQuery(query)
    const [is_mobile, setMobile] = useState(props.is_mobile_menu)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.tablet : false)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResizeWindow)
    })

    return (
        <StorySection>
            <Show.Mobile>
                <Header size="4.5rem" align="center" mb="2rem">
                    {localize('Our history')}
                </Header>
            </Show.Mobile>
            <Show.Desktop>
                <Header size="3.6rem" align="center" mb="5rem">
                    {localize('Our history')}
                </Header>
            </Show.Desktop>
            <SVGContainer>
                <StyledLine src={StorySVG} alt="story svg" />
            </SVGContainer>
            {Stories.map((story, idx) => (
                <Story key={idx} bgColor={story.bgColor}>
                    <Show.Mobile>
                        <StyledHeader
                            left={story.left.toString()}
                            size="6rem"
                            color={story.color || 'red-4'}
                            align="center"
                        >
                            {story.year}
                        </StyledHeader>
                    </Show.Mobile>
                    <Show.Desktop>
                        <StyledHeader
                            left={story.left.toString()}
                            as="h2"
                            type="page-title"
                            color={story.color || 'red-4'}
                            align="center"
                        >
                            {story.year}
                        </StyledHeader>
                    </Show.Desktop>

                    {story.contents.map((content, idxa) => (
                        <React.Fragment key={idxa}>
                            {content.left || is_mobile ? (
                                <YearWrapper
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
                                        <LogoDiv>
                                            <QueryImage
                                                data={data[content.image]}
                                                alt={content.image_alt.props.translate_text}
                                                width={content.image_width}
                                            />
                                        </LogoDiv>
                                    </LogoContainer>
                                    <ContentWrapper content_width={content.content_width} left>
                                        {content.headers.map((header, id) => (
                                            <div key={id}>
                                                <Show.Mobile>
                                                    <Header
                                                        pl="1.1rem"
                                                        color={story.color}
                                                        mt={header.margin_top}
                                                        size="4rem"
                                                    >
                                                        {header.header}
                                                    </Header>
                                                    <Splitter />
                                                    <Text size="2rem" pl="1.1rem">
                                                        {content.texts[id].text}
                                                    </Text>
                                                </Show.Mobile>
                                                <Show.Desktop>
                                                    <Header
                                                        pl="1.1rem"
                                                        as="h3"
                                                        type="section-title"
                                                        color={story.color}
                                                        mt={header.margin_top}
                                                    >
                                                        {header.header}
                                                    </Header>
                                                    <Splitter />
                                                    <Text pl="1.1rem">
                                                        {content.texts[id].text}
                                                    </Text>
                                                </Show.Desktop>
                                            </div>
                                        ))}
                                    </ContentWrapper>
                                </YearWrapper>
                            ) : (
                                <>
                                    <YearWrapper
                                        key={idxa}
                                        color={story.color}
                                        width={story.width}
                                        width_laptop={story.width_laptop}
                                        margin_bottom={content.margin_bottom}
                                        left={content.left}
                                    >
                                        <ContentWrapper content_width={content.content_width}>
                                            {content.headers.map((header, id) => (
                                                <div key={id}>
                                                    <Header
                                                        as="h3"
                                                        type="section-title"
                                                        color={story.color}
                                                        mt={header.margin_top}
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
                                            <Flex jc="flex-start" ml="1rem">
                                                <QueryImage
                                                    data={data[content.image]}
                                                    alt={content.image_alt.props.translate_text}
                                                    width={
                                                        is_mobile
                                                            ? content.image_mobile_width
                                                            : content.image_width
                                                    }
                                                />
                                            </Flex>
                                        </LogoContainer>
                                    </YearWrapper>
                                </>
                            )}
                        </React.Fragment>
                    ))}
                </Story>
            ))}
        </StorySection>
    )
}

OurHistory.propTypes = {
    is_mobile_menu: PropTypes.bool,
}
