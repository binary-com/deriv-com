import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, TR, TC } from './_table.js'
import { Card, CardWrapper } from './_partner-card.js'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import { Button, LinkButton } from 'components/form'
import { affiliate_signup_url } from 'common/utility'
import device from 'themes/device'
import Chevron from 'images/svg/chevron-bottom-bold.svg'

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;
`

const StyledSection = styled(SectionContainer)`
    box-shadow: ${(props) => (props.shadow ? '0 1px 0 0 rgba(0, 0, 0, 0.1)' : '')};
    padding-bottom: 0;
    text-align: ${(props) => props.align || 'left'};
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        text-align: center;
    }
`

const BackButton = styled(Button)`
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
    height: 40px;
    padding: 0 1.6rem;
`

const StyledText = styled(Text)`
    font-size: 1.4rem;
    line-height: 1.15;
`

const HowItsCalculate = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 1.6rem;
    border-top: 2px solid var(--color-grey-2);
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 1.6rem;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.6rem 3.2rem 3.2rem;

    button:last-child {
        margin-left: 1.6rem;
    }
`

const StyledHeaderCommission = styled(StyledHeader)`
    @media (max-width: 1428px) {
        text-align: center;
    }
`

const StyledCard = styled(Card)`
    margin: 1.6rem 2.4rem 0;

    @media ${device.tabletL} {
        margin: 2.4rem 0;
    }
`

const TitleTR = styled(TR)`
    height: 6rem;
`
const DerivIBProgramme = () => {
    return (
        <StyledSection shadow id="deriv-ib">
            <Container direction="column">
                <TitleWrapper>
                    <Header mb="1.6rem" size="3.6rem" align="center">
                        {localize('Deriv IB Programme')}
                    </Header>
                    <Header as="h4" align="center" weight="500">
                        {localize(
                            'Our introducing broker programme is available to all Deriv affiliates.',
                        )}
                    </Header>
                    <Header as="h4" align="center" weight="500">
                        {localize('Earn commission from your clients’ trades on DMT5.')}
                    </Header>
                </TitleWrapper>
                <SectionContainer padding="4rem 0 9.6rem 0">
                    <StyledHeaderCommission as="h4" mb="1.6rem">
                        {localize('Choose a commission plan:')}
                    </StyledHeaderCommission>
                    <CardWrapper>
                        <DMT5Standard data={ib_dmt5_standard} />
                        <DMT5Advanced data={ib_dmt5_advanced} />
                        <DMT5Synthetic data={ib_dmt5_synthetic} />
                    </CardWrapper>
                    <StyledSection padding="4rem 0 0 0" align="center">
                        <StyledHeader as="h4" align="center" weight="500" mb="2.6rem">
                            {localize('Can’t decide which programme or commission plan suits you?')}
                        </StyledHeader>
                        <LinkButton
                            external="true"
                            secondary
                            to="mailto:partners@deriv.com"
                            is_mail_link
                        >
                            {localize('Contact us')}
                        </LinkButton>
                    </StyledSection>
                </SectionContainer>
            </Container>
        </StyledSection>
    )
}

const StyledChevron = styled(Chevron)`
    width: 100%;
    margin-top: 0.8rem;
    height: 16px;
    cursor: pointer;
    transform: ${(props) => (props.is_expand ? 'rotate(-180deg)' : 'inherit ')};
`

const StyledTR = styled(TR)`
    display: ${(props) => (props.hidden ? 'hidden' : 'block')};
`

const SyntheticTable = styled(Table)`
    grid-template-columns: 55% 47%;
`
const StyledLinkButton = styled(LinkButton)`
    height: 40px;

    @media ${device.mobileL} {
        padding: 1.5rem 1.6rem;
        height: 40px;
        white-space: nowrap;
    }
`
const DMT5Synthetic = ({ data }) => {
    const [is_expand, setExpand] = React.useState(false)
    const [is_calculated, setCalculated] = React.useState(false)
    const max_expansion = 4
    const has_expansion = data.assets[0].length > max_expansion

    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    const toggleExpand = () => {
        setExpand(!is_expand)
    }
    return (
        <Card
            height={is_expand && !is_calculated ? '100rem' : '49rem'}
            padding="3.2rem 1.6rem 8.2rem"
            width="43rem"
        >
            <div>
                {!is_calculated ? (
                    <div>
                        <Header as="h4">{data.name}</Header>
                        <Text>{data.description}</Text>
                        <SyntheticTable grid_col_number={data.assets.length} is_balance={true}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold" lh="2.2">
                                                        {item}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa >= max_expansion) {
                                            return (
                                                <StyledTR key={idxa} hidden={!is_expand}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </SyntheticTable>
                        {has_expansion && (
                            <StyledChevron onClick={toggleExpand} is_expand={is_expand} />
                        )}
                        <HowItsCalculate>
                            <Button flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </Button>
                        </HowItsCalculate>
                    </div>
                ) : (
                    <>
                        <Header as="h4" lh="1.5">
                            {localize('How it’s calculated')}
                        </Header>
                        {data.calculation}
                        <ButtonWrapper>
                            <StyledLinkButton
                                secondary
                                to={affiliate_signup_url}
                                external
                                target="_blank"
                                is_affiliate_link
                            >
                                {localize('Become an affiliate')}
                            </StyledLinkButton>
                            <BackButton tertiary onClick={toggleCalculated}>
                                {localize('Back')}
                            </BackButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </Card>
    )
}
const DMT5Standard = ({ data }) => {
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    return (
        <Card padding="3.2rem 3.2rem 8.2rem" width="43rem">
            <div>
                {!is_calculated ? (
                    <div>
                        <Header as="h4">{data.name}</Header>
                        <Text>{data.description}</Text>
                        <Table grid_col_number={data.assets.length}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText
                                                        weight="bold"
                                                        lh="2.2"
                                                        style={item.style}
                                                    >
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item !== 'string') {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold" style={item.style}>
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item === 'string') {
                                            return (
                                                <TR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </Table>
                        <HowItsCalculate>
                            <Button flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </Button>
                        </HowItsCalculate>
                    </div>
                ) : (
                    <>
                        <Header as="h4">{localize('How it’s calculated')}</Header>
                        {data.calculation}
                        <ButtonWrapper>
                            <StyledLinkButton
                                secondary
                                to={affiliate_signup_url}
                                external
                                target="_blank"
                                is_affiliate_link
                            >
                                {localize('Become an affiliate')}
                            </StyledLinkButton>
                            <BackButton tertiary onClick={toggleCalculated}>
                                {localize('Back')}
                            </BackButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </Card>
    )
}
const DMT5Advanced = ({ data }) => {
    const [is_calculated, setCalculated] = React.useState(false)
    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    return (
        <StyledCard padding="3.2rem 3.2rem 8.2rem" width="43rem">
            <div>
                {!is_calculated ? (
                    <div>
                        <Header as="h4">{data.name}</Header>
                        <Text>{data.description}</Text>
                        <Table grid_col_number={data.assets.length}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0 && idx === 0) {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText
                                                        key={idxa}
                                                        weight="bold"
                                                        lh="2.2"
                                                        style={item.style}
                                                    >
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item !== 'string') {
                                            return (
                                                <TitleTR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold" style={item.style}>
                                                        {item.title}
                                                    </StyledText>
                                                </TitleTR>
                                            )
                                        } else if (idxa === 0 && typeof item === 'string') {
                                            return (
                                                <TR isTitle="true" key={idxa}>
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TR>
                                            )
                                        } else {
                                            return (
                                                <StyledTR key={idxa}>
                                                    <StyledText>{item}</StyledText>
                                                </StyledTR>
                                            )
                                        }
                                    })}
                                </TC>
                            ))}
                        </Table>
                        <HowItsCalculate>
                            <Button flat onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </Button>
                        </HowItsCalculate>
                    </div>
                ) : (
                    <>
                        <Header as="h4">{localize('How it’s calculated')}</Header>
                        {data.calculation}
                        <ButtonWrapper>
                            <StyledLinkButton
                                secondary
                                to={affiliate_signup_url}
                                external
                                target="_blank"
                                is_affiliate_link
                            >
                                {localize('Become an affiliate')}
                            </StyledLinkButton>
                            <BackButton tertiary onClick={toggleCalculated}>
                                {localize('Back')}
                            </BackButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </StyledCard>
    )
}
const ib_dmt5_standard = {
    name: <Localize translate_text="DMT5 Financial" />,
    description: (
        <Localize translate_text="Earn when your clients trade on a DMT5 Financial account." />
    ),
    assets: [
        [
            { title: <Localize translate_text="Asset" />, style: { minWidth: '13rem' } },
            <Localize key={0} translate_text="Forex and metals" />,
            <Localize key={1} translate_text="Cryptocurrencies" />,
        ],
        [
            {
                title: <Localize translate_text="Commission per round trade" />,
                style: { maxWidth: '16rem' },
            },
            <Localize key={0} translate_text="10 per lot" />,
            <Localize key={1} translate_text="0.3% per lot" />,
        ],
    ],
    calculation: (
        <>
            <Text>
                <Localize translate_text="For forex and metal assets, your commission is represented in the base currency. For example, a round trade (i.e. opening and closing a position) of 1 lot of EUR/USD will pay out EUR 10 in commission. A round trade of 1 lot of USD/CAD will pay out USD 10 in commission." />
            </Text>
            <Text mt="2rem">
                <Localize translate_text="For cryptocurrency assets, a round trade of 1 lot of BTC/USD with a spot price of USD 10,000 will pay out USD 30 in commission." />
            </Text>
        </>
    ),
}
const ib_dmt5_advanced = {
    name: <Localize translate_text="DMT5 Financial STP" />,
    description: (
        <Localize translate_text="Earn when your clients trade on a DMT5 Financial STP account." />
    ),
    assets: [
        [
            { title: <Localize translate_text="Asset" />, style: { minWidth: '13rem' } },
            <Localize key={0} translate_text="Forex and metals" />,
        ],
        [
            {
                title: <Localize translate_text="Commission per round trade" />,
                style: { maxWidth: '16rem' },
            },
            <Localize key={0} translate_text="5 per lot" />,
        ],
    ],
    calculation: (
        <Text>
            <Localize translate_text="For forex assets, your commission is represented in the base currency. For example, a round trade of 1 lot of EUR/USD will pay out EUR 5 in commission. A round trade of 1 lot of USD/CAD will pay out USD 5 in commission." />
        </Text>
    ),
}
const ib_dmt5_synthetic = {
    name: <Localize translate_text="DMT5 Synthetic" />,
    description: (
        <Localize translate_text="Earn when your clients trade on a DMT5 Synthetic account." />
    ),
    assets: [
        [
            <Localize key={0} translate_text="Asset" />,
            <Localize key={1} translate_text="Crash 1000 Index" />,
            <Localize key={2} translate_text="Crash 500 Index" />,
            <Localize key={3} translate_text="Boom 1000 Index" />,
            <Localize key={4} translate_text="Boom 500 Index" />,
            <Localize key={5} translate_text="Range Break 100 Index" />,
            <Localize key={6} translate_text="Range Break 200 Index" />,
            <Localize key={7} translate_text="Step Index" />,
            <Localize key={8} translate_text="Volatility 10 Index" />,
            <Localize key={9} translate_text="Volatility 10 (1s) Index" />,
            <Localize key={10} translate_text="Volatility 25 Index" />,
            <Localize key={11} translate_text="Volatility 25 (1s) Index" />,
            <Localize key={12} translate_text="Volatility 50 Index" />,
            <Localize key={13} translate_text="Volatility 50 (1s) Index" />,
            <Localize key={14} translate_text="Volatility 75 Index" />,
            <Localize key={15} translate_text="Volatility 75 (1s) Index" />,
            <Localize key={16} translate_text="Volatility 100 Index" />,
            <Localize key={17} translate_text="Volatility 100 (1s) Index" />,
            <Localize key={18} translate_text="HF Volatility 10 Index" />,
            <Localize key={19} translate_text="HF Volatility 50 Index" />,
            <Localize key={20} translate_text="HF Volatility 100 Index" />,
        ],
        [
            <Localize key={0} translate_text="Commission per round trade (per USD 100k)" />,
            '0.50',
            '0.70',
            '0.50',
            '0.70',
            '0.80',
            '0.40',
            '0.20',
            '1.50',
            '1.50',
            '3.50',
            '3.50',
            '7.50',
            '7.50',
            '10.00',
            '10.00',
            '15.00',
            '15.00',
            '1.50',
            '7.50',
            '15.00',
        ],
    ],
    calculation: (
        <>
            <Text>
                <Localize translate_text="For example, a round trade of 1 lot of the Volatility 75 Index for a price of USD 125,000 would pay out USD 12.5 in commission based on the following formula:" />
            </Text>
            <Text weight="bold" m="2.5rem 0">
                <Localize translate_text="USD 10 X 1 lot X USD 125,000 / 100,000 = USD 12.5" />
            </Text>
            <StyledText size="var(--text-size-s)" lh="1.5">
                <Localize translate_text="If your account currency is in euro or pound sterling, your commission will be converted based on the latest exchange rate." />
            </StyledText>
        </>
    ),
}

DMT5Standard.propTypes = {
    data: PropTypes.object,
}
DMT5Synthetic.propTypes = {
    data: PropTypes.object,
}
DMT5Advanced.propTypes = {
    data: PropTypes.object,
}
export default DerivIBProgramme
