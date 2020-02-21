import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Table, TR, TC } from './_table.js'
import { Card, CardWrapper } from './_partner-card.js'
import { SectionContainer, Container } from 'components/containers'
import { Header, Text } from 'components/elements/typography'
import { localize, Localize } from 'components/localization'
import { Button } from 'components/form'
import device from 'themes/device'
import Chevron from 'images/svg/chevron.svg'

const TitleWrapper = styled.div`
    max-width: 104.5rem;
    margin: 0 auto;

    h4:last-child {
        margin-top: 1.6rem;
    }
`
const StyledSection = styled(SectionContainer)`
    box-shadow: ${props => (props.shadow ? '0 1px 0 0 rgba(0, 0, 0, 0.1)' : '')};
    padding-bottom: 0;
    text-align: ${props => props.align || 'left'};
`
const StyledHeader = styled(Header)`
    margin-bottom: ${props => (props.margin_bottom ? props.margin_bottom : '1.6rem')};

    @media ${device.tabletL} {
        text-align: center;
    }
`

const BackButton = styled(Button)`
    border: 2px solid var(--color-grey-5);
    color: var(--color-black);
`
const StyledText = styled(Text)`
    font-size: ${props => (props.font_size ? props.font_size : '1.4rem')};
    line-height: ${props => (props.lh ? props.lh : '1.14')};
    margin-bottom: ${props => props.margin_bottom || ''};
`
const StyledButton = styled(Button)`
    color: var(--color-red);
`
const HowItsCalculate = styled.div`
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    text-align: center;
    padding: 2.6rem 0;
`
const ButtonWrapper = styled.div`
    width: 100;
    display: flex;
    justify-content: flex-start;

    a:last-child {
        margin-left: 1.6rem;
    }
`
const DerivIBProgramme = () => {
    return (
        <StyledSection shadow>
            <Container direction="column">
                <TitleWrapper>
                    <Header font_size="3.6rem" align="center">
                        {localize('Deriv IB Programme')}
                    </Header>
                    <Header as="h4" align="center" weight="500">
                        {localize(
                            'Our IB programme is available to all Deriv affiliates. Earn commission from your clients’ trades on DMT5.',
                        )}
                    </Header>
                </TitleWrapper>
                <SectionContainer padding="8rem 0 9.6rem 0">
                    <StyledHeader as="h4">{localize('Choose a commission plan:')}</StyledHeader>
                    <CardWrapper mt="-2rem" wrap="wrap">
                        <Card min_height="42rem">
                            <div>
                                <Header as="h4" lh="1.5">
                                    {localize('DMT5 Standard')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Earn when your customers trade on a DMT5 Standard account.',
                                    )}
                                </Text>
                                <Table grid_col_number={2}>
                                    <TC grid_area={'area0'}>
                                        <TR isTitle="true">
                                            <StyledText weight="bold" lh="2.2">
                                                {localize('Asset')}
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>{localize('Forex and metals')}</StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>{localize('Cryptocurrencies')}</StyledText>
                                        </TR>
                                    </TC>
                                    <TC grid_area={'area1'}>
                                        <TR isTitle="true">
                                            <StyledText weight="bold">
                                                <Localize
                                                    translate_text="Commission per round<0/>trade"
                                                    components={[<br key={0} />]}
                                                />
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>{localize('10 per lot')}</StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>{localize('0.3% per lot')}</StyledText>
                                        </TR>
                                    </TC>
                                </Table>
                            </div>
                            <HowItsCalculate>
                                <StyledButton to="/">
                                    {localize("How it's calculated")}
                                </StyledButton>
                            </HowItsCalculate>
                        </Card>
                        <Card min_height="42rem">
                            <div>
                                <Header as="h4" lh="1.5">
                                    {localize('DMT5 Advanced')}
                                </Header>
                                <Text>
                                    {localize(
                                        'Earn when your customers trade on a DMT5 Advanced account.',
                                    )}
                                </Text>
                                <Table grid_col_number={2}>
                                    <TC grid_area={'area0'}>
                                        <TR isTitle="true">
                                            <StyledText weight="bold" lh="2.2">
                                                {localize('Asset')}
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>{localize('Forex and metals')}</StyledText>
                                        </TR>
                                    </TC>
                                    <TC grid_area={'area1'}>
                                        <TR isTitle="true">
                                            <StyledText weight="bold">
                                                <Localize
                                                    translate_text="Commission per round<0/>trade"
                                                    components={[<br key={0} />]}
                                                />
                                            </StyledText>
                                        </TR>
                                        <TR>
                                            <StyledText>{localize('10 per lot')}</StyledText>
                                        </TR>
                                    </TC>
                                </Table>
                            </div>
                            <HowItsCalculate>
                                <StyledButton to="/">
                                    {localize("How it's calculated")}
                                </StyledButton>
                            </HowItsCalculate>
                        </Card>
                        <IBPlan data={ib_dmt5} />
                    </CardWrapper>
                    <StyledSection padding="4rem 0 0 0" align="center">
                        <StyledHeader
                            as="h4"
                            align="center"
                            weight="500"
                            lh="1.5"
                            margin_bottom="2.6rem"
                        >
                            {localize('Can’t decide which programme or commission plan suits you?')}
                        </StyledHeader>
                        <Button secondary>{localize('Contact us')}</Button>
                    </StyledSection>
                </SectionContainer>
            </Container>
        </StyledSection>
    )
}

const StyledChevron = styled(Chevron)`
    width: 16px;
    height: 16px;
    transform: rotate(180deg);
    ${props => (props.is_expanded === 'true' ? 'transform: inherit;' : '')}
`

const StyledTR = styled(TR)`
    display: ${props => (props.hidden ? 'hidden' : 'block')};
`

const IBPlan = ({ data }) => {
    const [is_expand, setExpand] = React.useState(false)
    const [is_calculated, setCalculated] = React.useState(false)
    const max_expansion = 3
    const has_expansion = data.assets[0].length > max_expansion

    const toggleCalculated = () => {
        setCalculated(!is_calculated)
    }
    const toggleExpand = () => {
        setExpand(!is_expand)
    }
    return (
        <Card min_height="42rem">
            <div>
                {!is_calculated ? (
                    <>
                        <Header as="h4" lh="1.5">
                            {data.name}
                        </Header>
                        <Text>{data.description}</Text>
                        <Table grid_col_number={data.assets.length}>
                            {data.assets.map((asset, idx) => (
                                <TC grid_area={`area${idx}`} key={idx}>
                                    {asset.map((item, idxa) => {
                                        if (idxa === 0) {
                                            return (
                                                <TR isTitle="true">
                                                    <StyledText weight="bold">{item}</StyledText>
                                                </TR>
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
                            {has_expansion && (
                                <StyledChevron onClick={toggleExpand} is_expand={is_expand} />
                            )}
                        </Table>
                        <HowItsCalculate>
                            <StyledButton onClick={toggleCalculated}>
                                {localize("How it's calculated")}
                            </StyledButton>
                        </HowItsCalculate>
                    </>
                ) : (
                    <>
                        <Header as="h4" lh="1.5">
                            {localize('How it’s calculated')}
                        </Header>
                        {data.calculation}
                        <ButtonWrapper>
                            <Button secondary>{localize('Become an affiliate')}</Button>
                            <BackButton tertiary>{localize('Back')}</BackButton>
                        </ButtonWrapper>
                    </>
                )}
            </div>
        </Card>
    )
}

const ib_dmt5 = {
    name: localize('DMT5 Standard'),
    description: localize('Earn when your customers trade on a DMT5 Standard account.'),
    assets: [
        [
            localize('Asset'),
            localize('Forex and metals'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
        ],
        [
            localize('Commission per round trade'),
            localize('10 per lot'),
            localize('0.3% per lot'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
            localize('Cryptocurrencies'),
        ],
    ],
    calculation: (
        <>
            <Text>
                {localize(
                    'For example, a round trade of 1 lot of the Volatility 75 Index for a price of USD 125,000 would pay out USD 12.5 in commission based on the following formula: ',
                )}
            </Text>
            <Text weight="bold" margin="2.5rem 0">
                {localize('USD 10 X 1 lot X USD 125,000 / 100,000 = USD 12.5')}
            </Text>
            <StyledText font_size="var(--text-size-s)" lh="1.5" margin_bottom="2.4rem">
                {localize(
                    'If your account currency is in euro or pound sterling, your commission will be converted based on the latest exchange rate.',
                )}
            </StyledText>
        </>
    ),
}

IBPlan.propTypes = {
    data: PropTypes.object,
}

export default DerivIBProgramme
