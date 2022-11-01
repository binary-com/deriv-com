import { graphql, useStaticQuery } from 'gatsby'
import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TTradeTypeImageQuery, TTradeTypeModel } from '../types'
import { Flex } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'
import device from 'themes/device'
import { Localize, LocalizedLink } from 'components/localization'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

const CardDescription = styled(Flex)`
    display: none;
    flex-direction: column;
    visibility: unset;
    opacity: 0;
    transition: visibility 0s, opacity 0.4s linear;

    @media ${device.tablet} {
        display: flex;
        opacity: 1;
    }
`

const LearnMore = styled(LocalizedLink)`
    width: fit-content;
    height: 46px;
    padding: 10px 16px;
    border-radius: 100px;
    background-color: var(--color-white);
    position: absolute;
    opacity: 0;
    bottom: -23px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.08)) drop-shadow(0 24px 24px rgba(0, 0, 0, 0.08));

    @media ${device.tablet} {
        opacity: 1;
    }
`

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 24px 12px 32px;
    min-width: 384px;
    width: 384px;

    @media ${device.tabletL} {
        min-width: 346px;
        width: 346px;
    }

    box-shadow: inset 0 0 0 1px var(--color-grey-17);
    transition: all 0.4s ease-out;

    &:hover {
        padding: 24px 12px 50px;
        box-shadow: 0 0 24px rgba(0, 0, 0, 0.08), 0 24px 24px rgba(0, 0, 0, 0.08);

        ${CardDescription} {
            display: flex;
            visibility: visible;
            opacity: 1;
        }
        ${LearnMore} {
            opacity: 1;
        }
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

type TTradeTypeCardProps = {
    item: TTradeTypeModel
}

const TradeTypeCard = ({ item }: TTradeTypeCardProps) => {
    const data = useStaticQuery<TTradeTypeImageQuery>(query)
    const rules = useCountryRule()

    const trade_type_image_key = useMemo(() => {
        return typeof item.image_url === 'function' ? item.image_url(rules) : item.image_url
    }, [item, rules])

    return (
        <Container>
            <ImageWrapper mb="24px">
                <QueryImage data={data[trade_type_image_key]} alt={item.image_alt} width="100%" />
            </ImageWrapper>
            <Header type="subtitle-1" align="center">
                <Localize translate_text={item.header} />
            </Header>
            <CardDescription>
                <Header type="paragraph-1" weight="normal" align="center">
                    <Localize translate_text={item.desc} />
                </Header>
            </CardDescription>
            <LearnMore to={item.link}>
                <Header type="paragraph-1" color="red" mr={'1rem'}>
                    <Localize translate_text={item.link_text} />
                </Header>
                <img src={Arrow} alt="" />
            </LearnMore>
        </Container>
    )
}

export default TradeTypeCard

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
