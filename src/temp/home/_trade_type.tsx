import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex } from 'components/containers'
import { Carousel, Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

const query = graphql`
    query {
        trade_type_cfds: file(relativePath: { eq: "home/trade_type_cfds.png" }) {
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
        trade_type_spreads: file(relativePath: { eq: "home/trade_type_spreads.png" }) {
            ...fadeIn
        }
    }
`

type TradeTypeDetails = {
    image: string
    image_alt: string
    header: any
    description: any
    to: string
}

const TradeTypeItems: TradeTypeDetails[] = [
    {
        image: 'trade_type_cfds',
        image_alt: 'CFDs trade type',
        header: <Localize translate_text="CFDs" />,
        description: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        to: '/markets/synthetic/',
    },
    {
        image: 'trade_type_multipliers',
        image_alt: 'Multipliers trade type',
        header: <Localize translate_text="Multipliers" />,
        description: (
            <Localize translate_text="Amplify your gains without losing more than your stake." />
        ),
        to: '/markets/synthetic/',
    },
    {
        image: 'trade_type_digitaloptions',
        image_alt: 'Options trade type',
        header: <Localize translate_text="Options" />,
        description: (
            <Localize translate_text="Earn fixed payouts by predicting asset price movements." />
        ),
        to: '/markets/synthetic/',
    },
]

const ParentWrapper = styled(Container)`
    margin: 60px auto 184px;
    max-width: 1440px;
    width: 100%;
    overflow: unset;
    max-height: 600px;

    @media (max-width: 1320px) {
        max-width: 80%;
    }

    @media ${device.tabletL} {
        max-width: 100%;
        max-height: 100%;
        margin: 40px 0 24px;
        padding: 0 16px;
    }
`

const MainWrapper = styled(Flex)`
    align-items: flex-start;
`
const FlexItems = styled(Flex)`
    position: relative;
    align-items: flex-start;
    max-width: 384px;
    min-height: 446px;
    padding: ${(props) => (props.visibility ? '24px 12px 52px' : '24px 12px 32px')};
    flex-direction: column;
    border: 1px solid var(--color-grey-17);
    border-radius: 8px;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08), 0px 24px 24px rgba(0, 0, 0, 0.08);
    transition: opacity 0.4s ease-in;

    @media ${device.tabletL} {
        max-width: 328px;
        min-height: unset;
        padding: 24px 24px 68px;
    }
`
const ImageWrapper = styled(Flex)`
    margin: 0 auto;
    width: 360px;
    height: 332px;
    margin-bottom: 24px;

    @media ${device.tabletL} {
        width: 264px;
        height: unset;
    }
`
const ContentWrapper = styled(Flex)`
    display: ${(props) => (props.visibility ? 'flex' : 'none')};
    transition: opacity 2s ease-out;
    flex-direction: column;
    position: relative;

    @media ${device.tabletL} {
        display: flex;
    }
`
const LearnMore = styled(LocalizedLink)`
    display: ${(props) => (props.visibility ? 'flex' : 'none')};
    width: 142px;
    height: 40px;
    border-radius: 23px;
    background-color: var(--color-white);
    position: absolute;
    bottom: -3%;
    left: 50%;
    transform: translate(-50%, -3%);
    justify-content: center;
    align-items: center;
    text-decoration: none;
    filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.08))
        drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.08));

    ${Text} {
        font-weight: bold;
        color: var(--color-red);
    }

    @media ${device.tabletL} {
        display: flex;
    }

    @media ${device.tabletL} {
        ${Text} {
            font-size: var(--text-size-sm);
            margin-right: 1rem;
        }
    }
`

const DesktopWrapper = styled(Flex)`
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled(Flex)`
    display: none;
    @media ${device.tabletL} {
        display: flex;
    }
`

const TradeTypes = (): ReactElement => {
    const settings = {
        options: {
            align: 'start',
            draggable: 'false',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
        },
        slide_style: {
            minWidth: '384px',
            position: 'relative',
            marginRight: '24px',
            height: 'unset',
        },
        view_port: {
            marginBottom: '184px',
            overflow: 'unset',
        },
    }

    return (
        <ParentWrapper>
            <MainWrapper>
                <DesktopWrapper>
                    <Carousel {...settings}>
                        {TradeTypeItems.map((item, index) => {
                            return (
                                <Flex key={index} height="unset">
                                    <Items items_details={item} />
                                </Flex>
                            )
                        })}
                    </Carousel>
                </DesktopWrapper>
                <MobileWrapper>
                    <Flex fd="column">
                        {TradeTypeItems.map((item, index) => {
                            return (
                                <Flex key={index} mb="36px">
                                    <Items items_details={item} />
                                </Flex>
                            )
                        })}
                    </Flex>
                </MobileWrapper>
            </MainWrapper>
        </ParentWrapper>
    )
}

type ItemsProps = {
    items_details: TradeTypeDetails
}

const Items = ({ items_details }: ItemsProps): ReactElement => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const [content_visibility, setContentVisibility] = React.useState(false)

    return (
        <FlexItems
            onMouseEnter={() => setContentVisibility(true)}
            onMouseLeave={() => setContentVisibility(false)}
            visibility={content_visibility && !is_mobile}
        >
            <ImageWrapper>
                <QueryImage
                    data={data[items_details.image]}
                    alt={items_details.image_alt}
                    width="100%"
                />
            </ImageWrapper>
            <Header type="subtitle-1" align="center" mb="8px">
                {items_details.header}
            </Header>
            <ContentWrapper visibility={content_visibility && !is_mobile}>
                <Header type="paragraph-1" align="center" weight="normal">
                    {items_details.description}
                </Header>
            </ContentWrapper>

            <LearnMore to={items_details.to} visibility={content_visibility && !is_mobile}>
                <Text mr="1rem">{localize('Learn more')}</Text>
                <img src={Arrow} alt="" />
            </LearnMore>
        </FlexItems>
    )
}

export default TradeTypes
