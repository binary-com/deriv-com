import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel, Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Flex, SectionContainer } from 'components/containers'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'
import i18next from 'components/localization/config'

type TradeTypesProps = {
    image_url: string
    image_alt: ReactElement
    header: ReactElement
    desc: ReactElement
    link: string
    link_text: ReactElement
}

type TradeItemsProps = {
    items_details: TradeTypesProps
}

const query = graphql`
    query {
        trade_type_cfds: file(relativePath: { eq: "home/trade_type_cfds.png" }) {
            ...fadeIn
        }
        trade_type_cfds_eu: file(relativePath: { eq: "home/trade_type_cfds_eu.png" }) {
            ...fadeIn
        }
        trade_type_cfds_uk: file(relativePath: { eq: "home/trade_type_cfds_uk.png" }) {
            ...fadeIn
        }
        trade_type_digitaloptions: file(
            relativePath: { eq: "home/trade_type_digitaloptions.png" }
        ) {
            ...fadeIn
        }
        trade_type_multipliers: file(relativePath: { eq: "home/trade_type_multipliers.png" }) {
            ...fadeIn
        }
        trade_type_multipliers_eu: file(
            relativePath: { eq: "home/trade_type_multipliers_eu.png" }
        ) {
            ...fadeIn
        }
        trade_type_multipliers_uk: file(
            relativePath: { eq: "home/trade_type_multipliers_uk.png" }
        ) {
            ...fadeIn
        }
        trade_type_spreads: file(relativePath: { eq: "home/trade_type_spreads.png" }) {
            ...fadeIn
        }
    }
`

const items_details_cr: TradeTypesProps[] = [
    {
        image_url: 'trade_type_cfds',
        image_alt: <Localize translate_text="CFDs" />,
        header: <Localize translate_text="CFDs" />,
        desc: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
        link_text: <Localize translate_text="More on CFDs" />,
    },
    {
        image_url: 'trade_type_multipliers',
        image_alt: <Localize translate_text="Multipliers" />,
        header: <Localize translate_text="Multipliers" />,
        desc: (
            <Localize translate_text="Multiply your potential profit without risking more than your stake." />
        ),
        link: '/trade-types/multiplier/',
        link_text: <Localize translate_text="More on multipliers" />,
    },
    {
        image_url: 'trade_type_digitaloptions',
        image_alt: <Localize translate_text="Options" />,
        header: <Localize translate_text="Options" />,
        desc: <Localize translate_text="Earn fixed payouts by predicting asset price movements." />,
        link: '/trade-types/options/',
        link_text: <Localize translate_text="More on options" />,
    },
]

const items_details_eu: TradeTypesProps[] = [
    {
        image_url: 'trade_type_cfds_eu',
        image_alt: <Localize translate_text="CFDs" />,
        header: <Localize translate_text="CFDs" />,
        desc: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
        link_text: <Localize translate_text="More on CFDs" />,
    },
    {
        image_url: 'trade_type_multipliers_eu',
        image_alt: <Localize translate_text="Multipliers" />,
        header: <Localize translate_text="Multipliers" />,
        desc: (
            <Localize translate_text="Multiply your potential profit without risking more than your stake." />
        ),
        link: '/trade-types/multiplier/',
        link_text: <Localize translate_text="More on multipliers" />,
    },
]

const items_details_uk: TradeTypesProps[] = [
    {
        image_url: 'trade_type_cfds_uk',
        image_alt: <Localize translate_text="CFDs" />,
        header: <Localize translate_text="CFDs" />,
        desc: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
        link_text: <Localize translate_text="More on CFDs" />,
    },
    {
        image_url: 'trade_type_multipliers_uk',
        image_alt: <Localize translate_text="Multipliers" />,
        header: <Localize translate_text="Multipliers" />,
        desc: (
            <Localize translate_text="Multiply your potential profit without risking more than your stake." />
        ),
        link: '/trade-types/multiplier/',
        link_text: <Localize translate_text="More on multipliers" />,
    },
]

const StyledSection = styled(SectionContainer)`
    max-width: 100%;

    @media ${device.tablet} {
        padding-block-start: 40px;
        padding-inline: 20px;
        padding-block-end: 80px;
    }
`

const DesktopWrapper = styled(Flex)`
    @media ${device.tablet} {
        display: none;
    }
`

const MobileWrapper = styled(Flex)`
    display: none;

    @media ${device.tablet} {
        display: flex;
    }
`

const ItemsWrapper = styled(Flex)<{ $visibility }>`
    box-shadow: ${(props) =>
        props.$visibility
            ? '0 0 24px rgba(0, 0, 0, 0.08), 0 24px 24px rgba(0, 0, 0, 0.08)'
            : 'inset 0 0 0 1px var(--color-grey-17)'};
    padding-block-start: ${(props) => (props.$visibility ? '24px' : '24px')};
    padding-inline: 12px;
    padding-block-end: ${(props) => (props.$visibility ? '50px' : '32px')};
    height: auto;
    background: var(--color-white);
    position: relative;
    flex-direction: column;
    margin-block: 0;
    margin-inline: auto;
    border-radius: 8px;
    max-inline-size: 100%;
    transition: all 0.4s ease-out;
    align-items: flex-start;

    @media ${device.tablet} {
        max-inline-size: 328px;
        padding-block-start: 24px;
        padding-inline: 32px;
        padding-block-end: 68px;
        margin-block-end: 36px;
    }

    @media ${device.mobileS} {
        padding-inline: 12px;
        padding-block: 12px;
        block-size: 424px;
    }
`
const ImageWrapper = styled(Flex)`
    inline-size: 360px;
    block-size: 332px;
    margin-block-end: 24px;

    @media ${device.tablet} {
        inline-size: 100%;
        block-size: auto;
    }
`

const ContentWrapper = styled(Flex)<{ $visibility }>`
    flex-direction: column;
    display: ${(props) => (props.$visibility ? 'flex' : 'none')};
    visibility: ${(props) => (props.$visibility ? 'visible' : 'unset')};
    opacity: ${(props) => (props.$visibility ? '1' : '0')};
    transition: visibility 0s, opacity 0.4s linear;

    @media ${device.tablet} {
        display: flex;
        opacity: 1;
    }
`

const LearnMore = styled(LocalizedLink)<{ $visibility }>`
    opacity: ${(props) => (props.$visibility ? '1' : '0')};
    inline-size: fit-content;
    padding-block: 10px;
    padding-inline: 16px;
    border-radius: 100px;
    background-color: var(--color-white);
    position: absolute;
    inset-block-end: -4%;
    inset-inline-start: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.08)) drop-shadow(0 24px 24px rgba(0, 0, 0, 0.08));

    ${Text} {
        font-weight: bold;
        color: var(--color-red);
        white-space: nowrap;
    }

    @media ${device.tablet} {
        opacity: 1;

        ${Text} {
            font-size: 14px;
            line-height: 20px;
            margin-inline-start: 8px;
        }
    }
`

const TradeItems = ({ items_details }: TradeItemsProps): ReactElement => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const [details_visible, setDetailsVisibility] = React.useState(false)

    return (
        <ItemsWrapper
            onMouseOver={() => setDetailsVisibility(true)}
            onMouseOut={() => setDetailsVisibility(false)}
            $visibility={details_visible && !is_mobile}
        >
            <ImageWrapper mb="24px">
                <QueryImage
                    data={data[items_details.image_url]}
                    alt={items_details.image_alt}
                    width="100%"
                    onMouseOver={() => setDetailsVisibility(true)}
                    onMouseOut={() => setDetailsVisibility(false)}
                />
            </ImageWrapper>
            <Header type="subtitle-1" align="center">
                {items_details.header}
            </Header>
            <ContentWrapper $visibility={details_visible && !is_mobile}>
                <Header type="paragraph-1" weight="normal" align="center">
                    {items_details.desc}
                </Header>
            </ContentWrapper>
            <LearnMore to={items_details.link} $visibility={details_visible && !is_mobile}>
                <Text mr="1rem">{items_details.link_text}</Text>
                <img src={Arrow} alt="" />
            </LearnMore>
        </ItemsWrapper>
    )
}

const TradeTypes = (): React.ReactNode => {
    const { is_row, is_eu, is_uk } = useCountryRule()
    const items_details_by_region =
        (is_eu && items_details_eu) || (is_uk && items_details_uk) || items_details_cr
    const [is_not_big_screen] = useBrowserResize(1979)
    const settings = {
        options: {
            loop: false,
            align: 'start',
            containScroll: 'trimSnaps',
            direction: i18next.dir(i18next.language),
        },
        view_port: {
            blockSize: is_not_big_screen ? '600px' : '660px',
        },
        container_style: {
            maxInlineSize: '100%',
            marginBlock: 0,
            marginInline: 'auto',
            blockSize: is_not_big_screen ? '600px' : '660px',
        },
        slide_style: {
            inlineSize: '384px',
            blockSize: 'auto',
            marginInlineEnd: '24px',
            paddingBlockStart: '24px',
            paddingBlockEnd: '48px',
            position: 'relative',
        },
        last_slide_no_spacing: true,
    }
    return (
        <StyledSection padding="unset">
            <Header as="h2" type="heading-2" align="center">
                {localize('Trade types')}
            </Header>
            <Header
                type="subtitle-1"
                weight="normal"
                mt="8px"
                align="center"
                mb="40px"
                tablet={{ mb: '16px' }}
            >
                <Localize
                    translate_text="Trade the way you want with {{trade_no}} flexible trade types."
                    values={{ trade_no: is_row ? '3' : '2' }}
                />
            </Header>

            <DesktopWrapper>
                <Flex>
                    <Carousel {...settings}>
                        {items_details_by_region.map((item) => {
                            return (
                                <Flex key={item.image_url} ai="flex-start">
                                    <TradeItems items_details={item} />
                                </Flex>
                            )
                        })}
                    </Carousel>
                </Flex>
            </DesktopWrapper>
            <MobileWrapper>
                <Flex fd="column" tablet={{ max_width: '58.8rem', m: '0 auto' }}>
                    {items_details_by_region.map((item) => {
                        return (
                            <Flex key={item.link} ai="flex-start">
                                <TradeItems items_details={item} />
                            </Flex>
                        )
                    })}
                </Flex>
            </MobileWrapper>
        </StyledSection>
    )
}

export default TradeTypes
