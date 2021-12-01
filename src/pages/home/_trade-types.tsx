import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Carousel, Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Flex, SectionContainer } from 'components/containers'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import device from 'themes/device.js'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

type TradeTypesProps = {
    image_url: string
    image_alt: string
    header: any
    desc: any
    link: string
}

type ItemsDetails = {
    items_details: TradeTypesProps
}

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

const ItemsDetails: TradeTypesProps[] = [
    {
        image_url: 'trade_type_cfds',
        image_alt: 'CFDs',
        header: <Localize translate_text="CFDs" />,
        desc: (
            <Localize translate_text="Trade with leverage and low spreads for better returns on successful trades." />
        ),
        link: '/trade-types/cfds/',
    },
    {
        image_url: 'trade_type_multipliers',
        image_alt: 'Multipliers',
        header: <Localize translate_text="Multipliers" />,
        desc: <Localize translate_text="Amplify your gains without losing more than your stake." />,
        link: '/trade-types/multiplier/',
    },
    {
        image_url: 'trade_type_digitaloptions',
        image_alt: 'Options',
        header: <Localize translate_text="Options" />,
        desc: <Localize translate_text="Earn fixed payouts by predicting asset price movements." />,
        link: '/trade-types/options/',
    },
]

const StyledSection = styled(SectionContainer)`
    max-width: 100%;
    padding: 60px 20px;

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
const ParentWrapper = styled(Flex)`
    @media ${device.tablet} {
        max-width: 58.8rem;
        margin: 0 auto;
    }
`
const ItemsWrapper = styled(Flex)`
    box-shadow: ${(props) =>
        props.visibility
            ? '0px 0px 24px rgba(0, 0, 0, 0.08), 0px 24px 24px rgba(0, 0, 0, 0.08)'
            : 'unset'};
    padding: ${(props) => (props.visibility ? '24px 12px 50px' : '24px 12px 32px')};
    height: ${(props) => (props.visibility ? '524px' : '440px')};
    background: var(--color-white);
    border: ${(props) =>
        props.visibility ? '0px solid var(--color-grey-17)' : `1px solid var(--color-grey-17)`};
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 8px;
    max-width: 100%;
    transition: all 0.4s 0s ease-in-out;

    @media ${device.tablet} {
        max-width: 328px;
        padding: 24px 32px 68px;
        margin-bottom: 36px;
    }
`
const ImageWrapper = styled(Flex)`
    width: 360px;
    height: 332px;
    margin-bottom: 24px;

    @media ${device.tablet} {
        width: 264px;
        height: auto;
    }
`
const ContentWrapper = styled(Flex)`
    flex-direction: column;
    display: ${(props) => (props.visibility ? 'flex' : 'none')};
    transition: all 0.4s 0s ease-in-out;

    @media ${device.tablet} {
        display: flex;
    }
`
const LearnMore = styled(LocalizedLink)`
    opacity: ${(props) => (props.visibility ? '1' : '0')};
    transition: all 0.4s 0s ease-in-out;
    padding: 10px 16px;
    border-radius: 100px;
    background-color: var(--color-white);
    position: absolute;
    bottom: -8%;
    left: 50%;
    transform: translate(-50%, -42%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    filter: drop-shadow(0px 0px 24px rgba(0, 0, 0, 0.08))
        drop-shadow(0px 24px 24px rgba(0, 0, 0, 0.08));

    ${Text} {
        font-weight: bold;
        color: var(--color-red);
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

const TradeItems = ({ items_details }: ItemsDetails): ReactElement => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()
    const [details_visible, setDetailsVisibility] = React.useState(false)

    return (
        <ItemsWrapper
            onMouseEnter={() => setDetailsVisibility(true)}
            onMouseLeave={() => setDetailsVisibility(false)}
            visibility={details_visible && !is_mobile}
        >
            <ImageWrapper>
                <QueryImage
                    data={data[items_details.image_url]}
                    alt={items_details.image_alt}
                    width="100%"
                    onMouseEnter={() => setDetailsVisibility(true)}
                    onMouseLeave={() => setDetailsVisibility(false)}
                />
            </ImageWrapper>
            <Header type="subtitle-1" align="center">
                {items_details.header}
            </Header>
            <ContentWrapper visibility={details_visible && !is_mobile}>
                <Header type="paragraph-1" weight="normal" align="center">
                    {items_details.desc}
                </Header>
            </ContentWrapper>
            <LearnMore to={items_details.link} visibility={details_visible && !is_mobile}>
                <Text mr="1rem">{localize('Learn more')}</Text>
                <img src={Arrow} alt="" />
            </LearnMore>
        </ItemsWrapper>
    )
}

const TradeTypes = (): React.ReactNode => {
    const settings = {
        options: {
            loop: false,
            align: 'start',
        },
        view_port: {
            height: '620px',
            padding: '0 120px',
        },
        container_style: {
            maxWidth: '100%',
            margin: '0 auto',
            height: '620px',
        },
        slide_style: {
            width: '384px',
            height: 'auto',
            marginRight: '24px',
            paddingTop: '24px',
            paddingBottom: '48px',
            position: 'relative',
        },
    }
    return (
        <StyledSection padding="4rem 2rem 8rem">
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
                {localize('Trade the way you want with 4 exciting trade types')}
            </Header>

            <DesktopWrapper>
                <Flex>
                    <Carousel {...settings}>
                        {ItemsDetails.map((item, index) => {
                            return (
                                <Flex key={index}>
                                    <TradeItems items_details={item} />
                                </Flex>
                            )
                        })}
                    </Carousel>
                </Flex>
            </DesktopWrapper>
            <MobileWrapper>
                <ParentWrapper tablet={{ fd: 'column' }}>
                    {ItemsDetails.map((item, index) => {
                        return (
                            <Flex key={index}>
                                <TradeItems items_details={item} />
                            </Flex>
                        )
                    })}
                </ParentWrapper>
            </MobileWrapper>
        </StyledSection>
    )
}

export default TradeTypes
