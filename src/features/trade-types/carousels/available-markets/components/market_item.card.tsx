import React, { useMemo } from 'react'
import styled from 'styled-components'
import { TAvailableMarketSmartContent } from '../types'
import { Flex } from 'components/containers'
import { Header } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import { TString } from 'types/generics'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

const MarketsItem = styled(Flex)`
    align-items: center;
    height: 100%;
    padding: 4px 0;
    margin-bottom: 2.8rem;
    position: relative;
    z-index: 2;
`

const Card = styled.article`
    position: relative;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background-color: var(--color-white);
    height: 100%;
    padding: 24px 24px;
    max-width: 28.2rem;

    @media (max-width: 680px) {
        padding: 16px 16px 36px;
        max-width: 282px;
        min-height: unset;
    }

    &:hover .learn-more {
        opacity: 1;
    }
`

const StyledText = styled(Header)`
    margin-top: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        > img {
            width: 48px;
            height: 48px;
        }
    }
`

type LearnMoreProps = {
    text: TString
    to: string
}

const Link = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-red);

    &:hover {
        text-decoration: underline;
    }
`

const LearnMoreWrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: -2rem;
    width: 100%;
    opacity: 0;
    transition: opacity 0.25s;

    @media (max-width: 680px) {
        opacity: 1;
    }
`
const LearnMoreItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    background: var(--color-grey-18);
    padding: 0.8rem 1.6rem;
    width: fit-content;
    margin: 0 auto;
`

const LearnMore = ({ text, to }: LearnMoreProps) => {
    return (
        <LearnMoreWrapper className="learn-more">
            <Link to={to}>
                <LearnMoreItem>
                    <Header type={'paragraph-1'} color="red">
                        <Localize translate_text={text} />
                    </Header>
                    <img src={Arrow} alt="arrow right" />
                </LearnMoreItem>
            </Link>
        </LearnMoreWrapper>
    )
}

interface IMarketItemCardProps<T> {
    item: T
}

const MarketItemCard = <T extends TAvailableMarketSmartContent>({
    item,
}: IMarketItemCardProps<T>) => {
    const { data } = item
    const rules = useCountryRule()

    const item_description = useMemo(() => {
        return typeof data.description === 'function' ? data.description(rules) : data.description
    }, [data, rules])

    return (
        <MarketsItem>
            <Card>
                <MobileCardHeader>
                    <img src={data.image_src} alt={data.image_alt} width="64" height="64" />
                    <StyledText type={'paragraph-1'}>
                        <Localize translate_text={data.text} />
                    </StyledText>
                </MobileCardHeader>
                <Header type={'paragraph-1'} weight={'normal'}>
                    <Localize translate_text={item_description} />
                </Header>
                <LearnMore text={'_t_Learn more_t_'} to={data.learn_more_path} />
            </Card>
        </MarketsItem>
    )
}

export default MarketItemCard
