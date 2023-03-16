import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import payment_data, { PaymentDataProps } from './_payment-data'
import Dp2p from './_dp2p'
import MobileAccordianItem from './_mobile-accordian-item'
import Layout from 'components/layout/layout'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { WithIntl, Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import useWS from 'components/hooks/useWS'
import { TString } from 'types/generics'
import { MetaAttributesType } from 'types/page.types'

const ExpandList = Loadable(() => import('./_expanded-list'))

type StyledTableType = {
    has_note: boolean
}

const meta_attributes: MetaAttributesType = {
    og_title: '_t_Payment Methods | Deposits and withdrawals | Deriv_t_',
    og_description:
        '_t_We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!_t_',
}

const AccordionContainer = styled.div`
    width: 100%;

    @media ${device.tabletL} {
        max-width: 58.8rem;
        margin: 0 auto;
    }
`

const Th = styled.th`
    vertical-align: middle;
    padding: 16px 0 16px 24px;

    :first-child {
        position: sticky;
        /* stylelint-disable-next-line value-no-vendor-prefix */
        position: -webkit-sticky;
        left: -5px; /* required */
        background-color: var(--color-white);
        z-index: 2;
        width: 128px;
        padding: 16px 0 16px 16px;
    }
    :nth-child(7) {
        p {
            text-align: center;
        }
    }
    :last-child {
        width: 50px;
    }
`
const SectionTopContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 48px 16px 40px;
    }
`
const SectionContentContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 24px 0 40px;
    }
`
const TopContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 100%;
    }
`
const StyledTable = styled.table<StyledTableType>`
    table-layout: fixed;
    border-collapse: collapse;
    width: 110.4rem;
    margin: ${(props) => (props.has_note ? '0 auto 2.4rem' : '0 auto')};
`

const Thead = styled.thead`
    font-size: var(--text-size-s);
    font-weight: bold;
    text-align: start;
    border-bottom: 2px solid var(--color-grey-2);
`

const Tbody = styled.tbody`
    text-align: start;
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
const DesktopWrapper = styled.div`
    display: block;
    @media ${device.tabletL} {
        display: none;
    }
`
const MobileWrapper = styled.div`
    display: none;
    @media ${device.tabletL} {
        display: block;
    }
`

export type PaymentMethodsProps = {
    locale?: PaymentDataProps
    pd?: PaymentDataProps
}
const DisplayAccordion = ({ locale }: PaymentMethodsProps) => {
    const { is_p2p_allowed_country, is_eu } = useRegion()
    const [is_mobile] = useBrowserResize(992)
    const { data, send } = useWS('crypto_config')
    const [payment_method_data, setPaymentMethodData] = useState(payment_data)

    // Here we send the request to the server on the first render of the page to get the data.
    useEffect(() => {
        send({})
    }, [send])

    useEffect(() => {
        // First we check if the `data` exists or not, Then we manipulate the local data with the response from the server.
        if (data) {
            // Here we map over the local `payment_data` variable to manipulate it with the server response.
            const updated_payment_data = payment_data.map((paymentData) => {
                if (!paymentData.is_crypto) return paymentData

                const updated_data = paymentData.data.map((value) => ({
                    ...value,
                    ...data.currencies_config[value.name],
                }))

                return {
                    ...paymentData,
                    data: updated_data,
                }
            })

            // Here we update the `payment_method_data` state with the newly updated `payment_data`.
            setPaymentMethodData(updated_payment_data)
        }
    }, [data])

    const content_style = is_mobile
        ? {
              boxShadow: '-2px 6px 15px 0 rgba(195, 195, 195, 0.31)',
              borderBottomLeftRadius: '6px',
              borderBottomRightRadius: '6px',
          }
        : {
              background: 'var(--color-white)',
              boxShadow: '-2px 6px 15px 0 rgba(195, 195, 195, 0.31)',
          }

    const header_style = is_mobile
        ? {
              borderRadius: '6px',
              padding: '28px 16px',
              height: '80px',
          }
        : {
              borderRadius: '6px',
          }
    const parent_style = { marginBottom: is_mobile ? '24px' : '2.4rem' }

    return (
        <>
            {payment_method_data &&
                payment_method_data.map((pdata) => {
                    const styles = is_mobile
                        ? {
                              padding: '0 16px 0',
                              position: 'relative',
                              background: 'var(--color-white)',
                              paddingBottom: pdata.note ? '5rem' : '2.2rem',
                          }
                        : {
                              padding: '0 48px 24px',
                              position: 'relative',
                              background: 'var(--color-white)',
                              paddingBottom: pdata.note ? '5rem' : '2.2rem',
                          }
                    if (pdata.is_row && is_eu) {
                        return []
                    }
                    if (pdata.is_eu && !is_eu) {
                        return []
                    }

                    if (pdata.is_crypto && is_eu) {
                        return []
                    }
                    if (pdata.is_fiat_onramp && is_eu) {
                        return []
                    } else if (pdata.is_dp2p && !is_p2p_allowed_country) {
                        return null
                    } else
                        return (
                            <Accordion has_single_state>
                                <AccordionItem
                                    key={pdata.class_name}
                                    content_style={content_style}
                                    header_style={header_style}
                                    style={styles}
                                    parent_style={parent_style}
                                    header={pdata.name}
                                    class_name={pdata.class_name}
                                >
                                    <DesktopWrapper>
                                        <DisplayAccordianItem pd={pdata} locale={locale} />
                                    </DesktopWrapper>
                                    <MobileWrapper>
                                        <MobileAccordianItem pd={pdata} locale={locale} />
                                    </MobileWrapper>
                                </AccordionItem>
                            </Accordion>
                        )
                })}
        </>
    )
}

const DisplayAccordianItem = ({ pd, locale }: PaymentMethodsProps) => {
    const parse_to_integer = parseInt('2')
    const reference_header_subtitle: TString = pd.is_dp2p ? '_t_More info_t_' : '_t_Reference_t_'

    return (
        <>
            <OuterDiv>
                <InnerDiv>
                    <StyledTable has_note={!!pd.note}>
                        <Thead>
                            <Tr>
                                <Th>
                                    <BoldText>
                                        <Localize translate_text="_t_Method_t_" />
                                    </BoldText>
                                </Th>
                                <Th colSpan={pd.is_fiat_onramp && parse_to_integer}>
                                    <BoldText>
                                        <Localize translate_text="_t_Currencies_t_" />
                                    </BoldText>
                                </Th>
                                <Th style={pd.is_fiat_onramp && { width: '180px' }}>
                                    {pd.is_crypto || pd.is_fiat_onramp ? (
                                        <BoldText>
                                            <Localize translate_text="_t_Min deposit_t_" />
                                        </BoldText>
                                    ) : pd.is_dp2p ? (
                                        <BoldText>
                                            <Localize translate_text="_t_Supported Deriv accounts_t_" />
                                        </BoldText>
                                    ) : (
                                        <React.Fragment>
                                            <BoldText>
                                                <Localize translate_text="_t_Min-max_t_" />
                                            </BoldText>
                                            <BoldText>
                                                <Localize translate_text="_t_deposit_t_" />
                                            </BoldText>
                                        </React.Fragment>
                                    )}
                                </Th>
                                {!pd.is_fiat_onramp && (
                                    <Th>
                                        {pd.is_crypto ? (
                                            <>
                                                <BoldText>
                                                    <Localize translate_text="_t_Min withdrawal_t_" />
                                                </BoldText>
                                            </>
                                        ) : pd.is_dp2p ? (
                                            <BoldText>
                                                <Localize translate_text="_t_Daily deposit limits_t_" />
                                            </BoldText>
                                        ) : (
                                            <React.Fragment>
                                                <BoldText>
                                                    <Localize translate_text="_t_Min-max_t_" />
                                                </BoldText>
                                                <BoldText>
                                                    <Localize translate_text="_t_withdrawal_t_" />
                                                </BoldText>
                                            </React.Fragment>
                                        )}
                                    </Th>
                                )}
                                {pd.is_fiat_onramp ? (
                                    <Th colSpan={2}>
                                        <BoldText>
                                            <Localize translate_text="_t_Deposit processing time_t_" />
                                        </BoldText>
                                    </Th>
                                ) : pd.is_dp2p ? (
                                    <Th>
                                        <BoldText>
                                            <Localize translate_text="_t_Daily withdrawal limits_t_" />
                                        </BoldText>
                                    </Th>
                                ) : (
                                    <Th>
                                        <BoldText>
                                            <Localize translate_text="_t_Deposit_t_" />
                                        </BoldText>
                                        <BoldText>
                                            <Localize translate_text="_t_processing time_t_" />
                                        </BoldText>
                                    </Th>
                                )}

                                {!pd.is_fiat_onramp && !pd.is_dp2p && (
                                    <Th>
                                        <BoldText>
                                            <Localize translate_text="_t_Withdrawal_t_" />
                                        </BoldText>
                                        <BoldText>
                                            <Localize translate_text="_t_processing time_t_" />
                                        </BoldText>
                                    </Th>
                                )}
                                {pd.is_dp2p && (
                                    <Th>
                                        <BoldText>
                                            <Localize translate_text="_t_Processing time_t_" />
                                        </BoldText>
                                    </Th>
                                )}
                                <Th>
                                    <BoldText>
                                        <Localize translate_text={reference_header_subtitle} />
                                    </BoldText>
                                </Th>
                                <Th />
                            </Tr>
                        </Thead>
                        <Tbody>
                            {pd.data.map((data, indx) => {
                                return (
                                    <ExpandList
                                        key={indx}
                                        payment_data={data}
                                        is_crypto={pd.is_crypto}
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
                        <Localize translate_text="_t_Note:_t_" />{' '}
                        <Localize translate_text={pd.note} />
                    </Text>
                </Notes>
            )}
        </>
    )
}

const PaymentMethodSection = ({ locale }: PaymentMethodsProps) => {
    return (
        <SectionContentContainer>
            <Container direction="column">
                <AccordionContainer id="payment-list">
                    <DisplayAccordion locale={locale} />
                </AccordionContainer>
                <Header mt="1.6rem" type="paragraph-2" align="start" weight="normal">
                    <Localize
                        translate_text="_t_<0>Disclaimer</0>: We process all your deposits and withdrawals within 1 day. However, the processing times and limits in this page are indicative, depending on the queue or for reasons outside of our control._t_"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </Container>
        </SectionContentContainer>
    )
}

const PaymentMethods = () => {
    const { is_p2p_allowed_country } = useRegion()
    return (
        <Layout type="payment-methods">
            <SEO
                title="_t_Payment Methods | Deposits and withdrawals | Deriv_t_"
                description="_t_We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!_t_"
                meta_attributes={meta_attributes}
            />
            <SectionTopContainer>
                <TopContainer direction="column" width="100%">
                    <Header as="h1" type="hero" align="center" mb="1.6rem">
                        <Localize translate_text="_t_Payment methods_t_" />
                    </Header>
                    <Header
                        align="center"
                        as="h3"
                        type="subtitle-1"
                        weight="normal"
                        mobile_max_width="326px"
                    >
                        <Localize translate_text="_t_We support a variety of deposit and withdrawal options._t_" />
                    </Header>
                    <Header
                        align="center"
                        as="h3"
                        type="subtitle-1"
                        weight="normal"
                        mobile_max_width="326px"
                    >
                        <Localize translate_text="_t_Learn more about our payment methods and how to use them._t_" />
                    </Header>
                </TopContainer>
            </SectionTopContainer>
            <Divider height="2px" />
            <PaymentMethodSection />
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

export default WithIntl()(PaymentMethods)
