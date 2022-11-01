import React from 'react'
import styled from 'styled-components'
import { TOtherMarketsModel } from '../types'
import { Localize, LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import device from 'themes/device'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

const LearnMore = styled(LocalizedLink)`
    width: fit-content;
    height: 40px;
    padding: 10px 16px;
    border-radius: 100px;
    background-color: var(--color-white);
    position: absolute;
    opacity: 0;
    bottom: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.08)) drop-shadow(0 24px 24px rgba(0, 0, 0, 0.08));
    transition: opacity 0.1s linear;

    @media ${device.tabletL} {
        opacity: 1;
    }
`

const Container = styled.div`
    position: relative;
    padding: 24px 24px 44px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    max-width: 35.25rem;
    border-radius: 8px;

    @media ${device.tabletL} {
        box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    }

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);

        & ${LearnMore} {
            opacity: 1;
        }
    }
`

const TitleIconContainer = styled.div`
    width: 100%;
    gap: 24px;
    display: flex;
    flex-direction: column;

    @media ${device.tabletL} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & ${Header} {
            order: -1;
            flex: 1;
            font-size: 18px;
        }
    }
`

type TOtherMarketsCardProps = {
    item: TOtherMarketsModel
}

const OtherMarketsCard = ({ item }: TOtherMarketsCardProps) => {
    return (
        <Container>
            <TitleIconContainer>
                <img src={item.icon} alt="" width={'64'} height={'64'} />
                <Header type={'paragraph-1'}>
                    <Localize translate_text={item.title} />
                </Header>
            </TitleIconContainer>
            <Header type="paragraph-1" weight="normal">
                <Localize translate_text={item.content} />
            </Header>
            <LearnMore to={item.to}>
                <Header type="paragraph-1" color="red" mr={'1rem'}>
                    <Localize translate_text={'_t_Learn more_t_'} />
                </Header>
                <img src={Arrow} alt="" />
            </LearnMore>
        </Container>
    )
}

export default OtherMarketsCard
