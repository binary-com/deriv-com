import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import {
    Carousel,
    Header,
    QueryImage,
    Text,
    ImageWithDireciton,
    CarouselProps,
} from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import { Flex, SectionContainer } from 'components/containers'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import useRegion from 'components/hooks/use-region'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { TString } from 'types/generics'

type TradeTypesProps = {
    class_name: string
    image_url: string
    image_alt: string
    header: TString
    desc: TString
    link: string
    link_text: TString
    alt: string
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
        trade_type_spreads: file(relativePath: { eq: "home/trade_type_spreads.png" }) {
            ...fadeIn
        }
    }
`

const items_details_row: TradeTypesProps[] = [
    {
        class_name: 'cfds',
        image_url: 'trade_type_cfds',
        image_alt: 'CFDs',
        header: '_t_CFDs_t_',
        desc: '_t_Trade with leverage and low spreads for better returns on successful trades._t_',
        link: '/trade-types/cfds/',
        link_text: '_t_More on CFDs_t_',
        alt: 'cfd',
    },
    {
        class_name: 'multipliers',
        image_url: 'trade_type_multipliers',
        image_alt: 'Multipliers',
        header: '_t_Multipliers_t_',
        desc: '_t_Multiply potential profit without risking more than your initial stake._t_',
        link: '/trade-types/multiplier/',
        link_text: '_t_More on multipliers_t_',
        alt: 'multipliers',
    },
    {
        class_name: 'options',
        image_url: 'trade_type_digitaloptions',
        image_alt: 'Options',
        header: '_t_Options_t_',
        desc: '_t_Earn a range of payouts by correctly predicting market movements._t_',
        link: '/trade-types/options/',
        link_text: '_t_More on options_t_',
        alt: 'options',
    },
]

const items_details_eu: TradeTypesProps[] = [
    {
        class_name: 'cfds',
        image_url: 'trade_type_cfds_eu',
        image_alt: 'CFDs',
        header: '_t_CFDs_t_',
        desc: '_t_Trade with leverage and low spreads for better returns on successful trades._t_',
        link: '/trade-types/cfds/',
        link_text: '_t_More on CFDs_t_',
        alt: 'cfd',
    },
    {
        class_name: 'multipliers',
        image_url: 'trade_type_multipliers_eu',
        image_alt: 'Multipliers',
        header: '_t_Multipliers_t_',
        desc: '_t_Multiply your potential profit without risking more than your stake._t_',
        link: '/trade-types/multiplier/',
        link_text: '_t_More on multipliers_t_',
        alt: 'multipliers',
    },
]

const StyledSection = styled(SectionContainer)`
    max-width: 100%;

    @media ${device.tablet} {
        padding: 40px 20px 80px;
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
    padding: 24px 12px 0;
    height: ${(props) => (props.$visibility ? '100%' : '90%')};
    justify-content: center;
    background: var(--color-white);
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 8px;
    max-width: 100%;
    transition: all 0.4s ease-out;
    align-items: center;

    @media ${device.tablet} {
        max-width: 328px;
    }

    @media ${device.mobileS} {
        height: 424px;
    }
`
const ImageWrapper = styled(Flex)`
    width: 360px;
    height: 332px;
    margin-bottom: 24px;

    @media ${device.tablet} {
        width: 100%;
        height: auto;
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

const MobileContentFlex = styled(Flex)`
    gap: 40px;
`

const LearnMore = styled(LocalizedLink)<{ $visibility }>`
    opacity: ${(props) => (props.$visibility ? '1' : '0')};
    width: fit-content;
    padding: 10px 16px;
    border-radius: 100px;
    background-color: var(--color-white);
    margin-bottom: -20px;
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
            margin-right: 8px;
        }
    }
`

const DescriptionContainer = styled(Flex)`
    flex: 1;
`

const TradeItems = ({ items_details }: TradeItemsProps) => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const [details_visible, setDetailsVisibility] = React.useState(false)

    return (
        <ItemsWrapper
            onMouseOver={() => setDetailsVisibility(true)}
            onMouseOut={() => setDetailsVisibility(false)}
            $visibility={details_visible && !is_mobile}
            className={items_details.class_name}
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

            <DescriptionContainer ai={'center'} jc={'center'} direction={'column'}>
                <Header type="subtitle-1" align="center">
                    <Localize translate_text={items_details.header} />
                </Header>
                <ContentWrapper $visibility={details_visible && !is_mobile}>
                    <Header type="paragraph-1" weight="normal" align="center">
                        <Localize translate_text={items_details.desc} />
                    </Header>
                </ContentWrapper>
            </DescriptionContainer>
            <LearnMore to={items_details.link} $visibility={details_visible && !is_mobile}>
                <Text mr="1rem">
                    <Localize translate_text={items_details.link_text} />
                </Text>
                <ImageWithDireciton src={Arrow} alt={items_details.alt} />
            </LearnMore>
        </ItemsWrapper>
    )
}

const TradeTypes = (): React.ReactNode => {
    const { is_row, is_eu } = useRegion()
    const items_details_by_region = (is_eu && items_details_eu) || items_details_row
    const [is_not_big_screen] = useBrowserResize(1979)

    const lang_direction = useLangDirection()

    const settings: CarouselProps = {
        options: {
            loop: false,
            align: 'start',
            containScroll: 'trimSnaps',
            direction: lang_direction,
        },
        view_port: {
            blockSize: is_not_big_screen ? '600px' : '660px',
        },
        container_style: {
            maxInlineSize: '100%',
            marginBlockStart: '0',
            marginBlockEnd: '0',
            marginInlineStart: 'auto',
            marginInlineEnd: 'auto',
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
                <Localize translate_text="_t_Trade types_t_" />
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
                    translate_text="_t_Trade the way you want with {{trade_no}} flexible trade types._t_"
                    values={{ trade_no: is_row ? '3' : '2' }}
                />
            </Header>

            <DesktopWrapper>
                <Flex id="trade-types">
                    <Carousel {...settings}>
                        {items_details_by_region.map((item) => {
                            return <TradeItems key={item.image_url} items_details={item} />
                        })}
                    </Carousel>
                </Flex>
            </DesktopWrapper>
            <MobileWrapper>
                <MobileContentFlex fd="column" tablet={{ max_width: '58.8rem', m: '0 auto' }}>
                    {items_details_by_region.map((item) => {
                        return <TradeItems key={item.link} items_details={item} />
                    })}
                </MobileContentFlex>
            </MobileWrapper>
        </StyledSection>
    )
}

export default TradeTypes
