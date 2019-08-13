import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/elements/typography'
import Button from '../../components/form/button'
import Checklist from 'images/svg/checklist.svg'
import { localize } from 'components/localization'

const WhyDerivMobileContainer = styled.div`
    padding: 4rem 0 2rem 0;
    background-color: var(--color-grey-1);
`
const Card = styled.section`
    width: 90%;
    margin: 0 auto;
    min-height: 41.75rem;
    padding: 3rem 2rem;
    margin-top: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);

    div:first-child {
        margin-top: 0;
    }
`

const CardItem = styled.div`
    display: flex;
    margin-top: 3rem;

    svg {
        width: 3rem;
        height: 3rem;
    }
    ${Header} {
        margin-left: 2.5rem;
        width: 80%;
        height: 3.75rem;
        padding-top: 1%;
    }
`
const ButtonWrapper = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
`

const SingupButton = styled(Button)`
    width: 100%;
    max-width: 36rem;
    font-size: var(--text-size-sm);
`
export const WhyDerivMobile = () => (
    <WhyDerivMobileContainer>
        <Header align="center" font_size="4rem">
            Why choose Deriv?
        </Header>
        <Card>
            <CardItem>
                <Checklist />
                <Header font_size="2rem" lh="2.5rem" weight="400">
                    Exclusive synthetic market available 24/7
                </Header>
            </CardItem>
            <CardItem>
                <Checklist />
                <Header font_size="2rem" lh="2.5rem" weight="400">
                    USD 5 minimum deposit
                </Header>
            </CardItem>
            <CardItem>
                <Checklist />
                <Header font_size="2rem" lh="2.5rem" weight="400">
                    Stakes as low as USD 0.35
                </Header>
            </CardItem>
            <CardItem>
                <Checklist />
                <Header font_size="2rem" lh="2.5rem" weight="400">
                    Payouts up to USD 50,000
                </Header>
            </CardItem>
            <CardItem>
                <Checklist />
                <Header font_size="2rem" lh="2.5rem" weight="400">
                    Patented, licensed, and regulated
                </Header>
            </CardItem>
            <CardItem>
                <Checklist />
                <Header font_size="2rem" lh="2.5rem" weight="400">
                    Short- to long-term trades
                </Header>
            </CardItem>
        </Card>
        <ButtonWrapper>
            <SingupButton type="submit" secondary>
                {localize('Create a free demo account')}
            </SingupButton>
        </ButtonWrapper>
    </WhyDerivMobileContainer>
)
