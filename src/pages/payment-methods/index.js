import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import ExpandList from './_expanded-list'
import payment_data from './_payment-data'
import Dp2p from './_dp2p'
import Layout from 'components/layout/layout'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { DerivStore } from 'store'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { isLoggedIn, getDomain, getClientInformation } from 'common/utility'
import { isEuCountry } from 'common/country-base'
const meta_attributes = {
    og_title: localize('Payment Methods | Deposits and withdrawals | Deriv'),
    og_description: localize(
        'We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!',
    ),
}

const AccordionContainer = styled.div`
    width: 100%;
`

const Th = styled.th`
    vertical-align: middle;
    padding: 1.6rem 2rem;

    :first-child {
        position: sticky;
        /* stylelint-disable-next-line value-no-vendor-prefix */
        position: -webkit-sticky;
        left: -5px; /* required */
        background-color: var(--color-white);
        z-index: 2;

        p {
            text-align: center;
        }
    }
`

const StyledTable = styled.table`
    table-layout: fixed;
    border-collapse: collapse;
    width: 110.4rem;
    margin-bottom: ${(props) => (props.has_note ? '2.4rem' : 0)};
`

const Thead = styled.thead`
    font-size: var(--text-size-s);
    font-weight: bold;
    text-align: left;
    border-bottom: 2px solid var(--color-grey-2);
`

const Tbody = styled.tbody`
    text-align: left;
`

const Tr = styled.tr`
    border-bottom: 1px solid var(--color-grey-2);
`

const BoldText = styled(Text)`
    font-weight: bold;
`

const Notes = styled.div`
    position: absolute;
    width: 100%;
    padding: 1.6rem;
    background: var(--color-grey-8);
    left: 0;
    bottom: 0;
    z-index: 3;
`
const OuterDiv = styled.div`
    position: relative;
`

const InnerDiv = styled.div`
    overflow-x: auto;
    overflow-y: visible;
`

const getClientResidence = () => {
    const domain = getDomain()
    const client_information = getClientInformation(domain)
    return client_information ? client_information.residence : ''
}

const getClientCountry = () => {
    let current_client_country = ''
    if (isLoggedIn()) {
        current_client_country = getClientResidence()
    } else if (
        typeof window !== 'undefined' &&
        new URLSearchParams(window.location.search).get('country')
    ) {
        current_client_country = new URLSearchParams(window.location.search).get('country')
    } else {
        const [website_status] = useWebsiteStatus()
        current_client_country = website_status?.clients_country || ''
    }
    return current_client_country
}
const getPaymentsBasedOnCountry = (payment_data, current_client_country) => {
    const payments_data_array = payment_data.map((category) => {
        const filteredData = category.data.filter((item) => {
            if (item.countries.included.length) {
                const includedCountries = item.countries.included.map((i) => i.toLowerCase())
                if (includedCountries.includes(current_client_country)) {
                    return true
                } else if (includedCountries.includes('eu')) {
                    return isEuCountry(current_client_country)
                }
                return false
            } else if (item.countries.excluded.length) {
                const excludedCountries = item.countries.excluded.map((i) => i.toLowerCase())
                if (excludedCountries.includes(current_client_country)) {
                    return false
                }
                if (excludedCountries.includes('eu')) {
                    return !isEuCountry(current_client_country)
                }
                return true
            }
            return true
        })
        return {
            ...category,
            data: filteredData,
        }
    })
    const payment_list = payments_data_array.filter((item) => item.data.length)
    return payment_list
}

const DisplayAccordion = (locale) => {
    const { crypto_config } = React.useContext(DerivStore)
    const current_client_country = getClientCountry()
    // eslint-disable-next-line no-console
    console.log(current_client_country)
    const [show_table, setShowTable] = useState(false)

    const paymentsBasedOnCountry = getPaymentsBasedOnCountry(payment_data, current_client_country)

    if (!paymentsBasedOnCountry.length) {
        return (
            <>
                <BoldText>
                    {localize('Sorry! No payment options are available for your country')}
                </BoldText>
            </>
        )
    }

    useEffect(() => {
        setShowTable(true)
    }, [paymentsBasedOnCountry])

    if (show_table) {
        return (
            <Accordion has_single_state>
                {paymentsBasedOnCountry.map((pd, idx) => {
                    return (
                        <AccordionItem
                            key={idx}
                            content_style={{
                                background: 'var(--color-white)',
                                boxShadow: '-2px 6px 15px 0 rgba(195, 195, 195, 0.31)',
                            }}
                            header_style={{
                                borderRadius: '6px',
                            }}
                            style={{
                                padding: '2.2rem 4.8rem',
                                position: 'relative',
                                background: 'var(--color-white)',
                                paddingBottom: pd.note ? '5rem' : '2.2rem',
                            }}
                            parent_style={{
                                marginBottom: '2.4rem',
                            }}
                            header={pd.name}
                        >
                            <DisplayAccordianItem
                                pd={pd}
                                crypto_config={crypto_config}
                                locale={locale}
                            />
                        </AccordionItem>
                    )
                })}
            </Accordion>
        )
    }

    return <></>
}

DisplayAccordion.propTypes = {
    locale: PropTypes.object,
}

const DisplayAccordianItem = ({ pd, crypto_config, locale }) => {
    return (
        <>
            <OuterDiv>
                <InnerDiv>
                    <StyledTable has_note={!!pd.note}>
                        <Thead>
                            <Tr>
                                <Th>
                                    <BoldText>{localize('Method')}</BoldText>
                                </Th>
                                <Th colSpan={pd.is_fiat_onramp && '3'}>
                                    <BoldText>{localize('Currencies')}</BoldText>
                                </Th>
                                <Th style={pd.is_fiat_onramp && { width: '135px' }}>
                                    {pd.is_crypto || pd.is_fiat_onramp ? (
                                        <BoldText>{localize('Min deposit')}</BoldText>
                                    ) : (
                                        <React.Fragment>
                                            <BoldText>{localize('Min-max')}</BoldText>
                                            <BoldText>{localize('deposit')}</BoldText>
                                        </React.Fragment>
                                    )}
                                </Th>
                                {!pd.is_fiat_onramp && (
                                    <Th>
                                        {pd.is_crypto ? (
                                            <>
                                                <BoldText>{localize('Min withdrawal')}</BoldText>
                                            </>
                                        ) : (
                                            <React.Fragment>
                                                <BoldText>{localize('Min-max')}</BoldText>
                                                <BoldText>{localize('withdrawal')}</BoldText>
                                            </React.Fragment>
                                        )}
                                    </Th>
                                )}
                                {pd.is_fiat_onramp ? (
                                    <Th colSpan="2">
                                        <BoldText>{localize('Deposit processing time')}</BoldText>
                                    </Th>
                                ) : (
                                    <Th>
                                        <BoldText>{localize('Deposit')}</BoldText>
                                        <BoldText>{localize('processing time')}</BoldText>
                                    </Th>
                                )}

                                {!pd.is_fiat_onramp && (
                                    <Th>
                                        <BoldText>{localize('Withdrawal')}</BoldText>
                                        <BoldText>{localize('processing time')}</BoldText>
                                    </Th>
                                )}

                                <Th>
                                    <BoldText>{localize('Reference')}</BoldText>
                                </Th>
                                <Th />
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pd.data.map((data) => {
                                return (
                                    <ExpandList
                                        key={data.key}
                                        data={data}
                                        is_crypto={pd.is_crypto}
                                        config={crypto_config}
                                        is_fiat_onramp={pd.is_fiat_onramp}
                                        locale={locale}
                                    />
                                )
                            })}
                        </Tbody>
                    </StyledTable>
                </InnerDiv>
            </OuterDiv>
            {pd.note && (
                <Notes>
                    <Text weight="500" size="var(--text-size-xs)">
                        {localize('Note:')} {pd.note}
                    </Text>
                </Notes>
            )}
        </>
    )
}

DisplayAccordianItem.propTypes = {
    crypto_config: PropTypes.object,
    locale: PropTypes.object,
    pd: PropTypes.object,
}

const PaymentMethods = (locale) => {
    const { is_p2p_allowed_country } = React.useContext(DerivStore)
    return (
        <Layout>
            <SEO
                title={localize('Payment Methods | Deposits and withdrawals | Deriv')}
                description={localize(
                    'We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!',
                )}
                meta_attributes={meta_attributes}
            />
            <SectionContainer>
                <Container direction="column">
                    <Header as="h1" type="display-title" align="center" mb="1.6rem">
                        {localize('Payment methods')}
                    </Header>
                    <Text align="center" size="var(--text-size-m)">
                        {localize('We support a variety of deposit and withdrawal options.')}
                    </Text>
                    <Text align="center" size="var(--text-size-m)">
                        {localize('Learn more about our payment methods and how to use them.')}
                    </Text>
                </Container>
            </SectionContainer>
            <Divider height="2px" />
            <SectionContainer>
                <Container direction="column">
                    <AccordionContainer>
                        <DisplayAccordion locale={locale} />
                    </AccordionContainer>
                    <Text mt="1.6rem" size="var(--text-size-xs)" align="left">
                        <Localize
                            translate_text="<0>Disclaimer</0>: We process all your deposits and withdrawals within 1 day. However, the processing times and limits in this page are indicative, depending on the queue or for reasons outside of our control."
                            components={[<strong key={0} />]}
                        />
                    </Text>
                </Container>
            </SectionContainer>
            {is_p2p_allowed_country && (
                <>
                    <Divider height="2px" />
                    <SectionContainer>
                        <Container direction="column">
                            <Dp2p />
                        </Container>
                    </SectionContainer>
                </>
            )}
        </Layout>
    )
}

PaymentMethods.propTypes = {
    locale: PropTypes.object,
}

export default WithIntl()(PaymentMethods)
