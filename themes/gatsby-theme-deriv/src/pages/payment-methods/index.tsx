import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import payment_data, { PaymentDataProps } from './_payment-data'
import Dp2p from './_dp2p'
import MobileAccordianItem from './_mobile-accordian-item'
import Layout from 'components/layout/layout'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Text, Divider, Accordion, AccordionItem, DotLoader } from 'components/elements'
import { SEO, SectionContainer, Container, TMetaAttributes } from 'components/containers'
import { WithIntl, Localize } from 'components/localization'
import device from 'themes/device'
import useRegion from 'components/hooks/use-region'
import useWS from 'components/hooks/useWS'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { TGatsbyHead } from 'features/types'
import useBuildVariant from 'features/hooks/use-build-variant'

const ExpandList = Loadable(() => import('./_expanded-list'))

type StyledTableType = {
    has_note: boolean
}

const meta_attributes: TMetaAttributes = {
    og_title: '_t_Payment Methods | Deposits and withdrawals | Deriv_t_',
    og_description:
        '_t_We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!_t_',
}

const Th = styled.th`
    vertical-align: middle;
    padding: 16px 0 16px 24px;

    :first-child {
        position: sticky;
        /* stylelint-disable-next-line value-no-vendor-prefix */
        position: -webkit-sticky;
        left: -5px; /* required */
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

const StyledTable = styled.table<StyledTableType>`
    border-collapse: collapse;
    width: 110.4rem;
    margin: ${(props) => (props.has_note ? '16px auto 2.4rem' : '0 auto')};
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
const DescriptionText = styled(Text)`
    padding-bottom: 16px;
    padding-top: 8px;
    margin-left: -15px;
`

const Notes = styled.div`
    position: absolute;
    width: 100%;
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

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -50px;
        width: 140rem;
        border-top: 2px solid var(--color-grey-2);
    }
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
    const {region} = useBuildVariant()
    const { is_p2p_allowed_country, is_region_loading } = useRegion()
    const [is_mobile] = useBrowserResize(992)
    const { data, send } = useWS('crypto_config')
    const [payment_method_data, setPaymentMethodData] = useState(payment_data)

    // Here we send the request to the server on the first render of the page to get the data.
    useEffect(() => {
        send({})
    }, [send])

    useEffect(() => {
        // First we check if the `data` exists or not, Then we manipulate the local data with the response from the server.

        if (region === "eu") {
            setPaymentMethodData(
                payment_method_data.filter((payment_method) => payment_method.is_eu),
            )
        } else {
            if (data) {
                const filtered_payment_methods = payment_method_data.filter(
                    (payment_method) => !payment_method.is_eu,
                )

                const updated_payment_data = filtered_payment_methods.map((payment_method) => {
                    if (!payment_method.is_crypto) return payment_method

                    const updated_data = payment_method.data.map((value) => ({
                        ...value,
                        ...data.currencies_config[value.name],
                    }))

                    return {
                        ...payment_method,
                        data: updated_data,
                    }
                })

                setPaymentMethodData(updated_payment_data)
            }
        }
    }, [data, region])

    const content_style = {
        background: 'var(--color-white)',
        boxShadow: 'rgba(195, 195, 195, 0.31) 1px 20px 15px 0px',
    }

    const header_style = is_mobile
        ? {
              borderBottom: 'none',
              padding: '28px 16px',
              height: '80px',
          }
        : {
              borderBottom: 'none',
              boxShadow: 'rgba(195, 195, 195, 0.31) 1px 15px 15px 0px',
          }
    const parent_style = { marginBottom: is_mobile ? '24px' : '2.4rem' }

    if (is_region_loading) {
        return <DotLoader />
    }
    return (
        <>
            {payment_method_data.map((pdata) => {
                const styles = is_mobile
                    ? {
                          padding: '0 16px 0',
                          position: 'relative',
                          background: 'var(--color-white)',
                      }
                    : {
                          padding: '0 48px 24px',
                          position: 'relative',
                          borderBottom: 'none',
                          background: 'var(--color-white)',
                          paddingBottom: pdata.note ? '5rem' : '3.8rem',
                          boxShadow: 'rgba(195, 195, 195, 0.31) 0px 20px 15px 0px',
                      }
                if (pdata.is_row && region === "eu") {
                    return []
                }
                if (pdata.is_eu && region !== "eu") {
                    return []
                }
                if (pdata.is_crypto && region === "eu") {
                    return []
                }
                if (pdata.is_fiat_onramp && region === "eu") {
                    return []
                } else if (pdata.is_dp2p && !is_p2p_allowed_country) {
                    return null
                } else
                    return (
                        <Accordion has_single_state key={pdata.class_name}>
                            <AccordionItem
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

    let displayString = ''

    if (!pd || !pd.name) {
        return null
    }
    switch (pd.name) {
        case '_t_Credit & debit cards_t_':
            displayString = 'Make deposits via cards easily.'
            break
        case '_t_Online banking_t_':
            displayString = '_t_Send and receive payments directly from your bank account._t_'
            break
        case '_t_Mobile payments_t_':
            displayString = '_t_Pay on the go with your phone for instant convenience._t_'
            break
        case '_t_E-wallets_t_':
            displayString = '_t_Benefit from quick and secure Deriv payments with your e-wallet._t_'
            break
        case '_t_Cryptocurrencies_t_':
            displayString = '_t_Make payments with top cryptocurrencies._t_'
            break
        case '_t_On-ramp / Off-ramp_t_':
            displayString =
                '_t_Send crypto directly to your Deriv account, get credited in fiat._t_'
            break
        case '_t_Voucher_t_':
            displayString =
                '_t_A convenient way to make payments without cards or bank accounts._t_'
            break
        case '_t_Deriv P2P_t_':
            displayString =
                '_t_Fund your account securely through our peer-to-peer deposit and withdrawal service._t_'
            break
        default:
            displayString = ''
            break
    }

    return (
        <>
            <DescriptionText>
                {displayString ? <Localize translate_text={displayString} /> : null}
            </DescriptionText>
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
                                {pd.is_dp2p && (
                                    <Th>
                                        <BoldText>
                                            <Localize translate_text="_t_More info_t_" />
                                        </BoldText>
                                    </Th>
                                )}
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
                    <Typography.Paragraph
                        size="small"
                        weight="normal"
                        padding_inline="16x"
                        padding_block="8x"
                    >
                        <Localize translate_text="_t_Note:_t_" />{' '}
                        <Localize translate_text={pd.note} />
                    </Typography.Paragraph>
                </Notes>
            )}
        </>
    )
}

const PaymentMethodSection = ({ locale }: PaymentMethodsProps) => {
    return (
        <Flex.Box container="fluid" direction="col" id="payment-list">
            <DisplayAccordion locale={locale} />
            <Typography.Paragraph size="small" pb="16x" md={{ pb: '40x' }}>
                <Localize translate_text="_t_We're committed to processing your transactions as quickly as possible. Deposits are processed instantly, while withdrawals might take up to 1 business day. The time for funds to reach you after withdrawal depends on your bank or payment provider._t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

const PaymentMethods = ({ pageContext }: TGatsbyHead) => {
    const { is_p2p_allowed_country } = useRegion()
    const { region } = pageContext

    return (
        <Layout region={region}>
            <Flex.Box
                direction="col"
                container="fluid"
                justify="center"
                align="center"
                padding_inline="8x"
                padding_block="20x"
                md={{ padding: '40x' }}
                gap="4x"
            >
                <Typography.Heading as="h1" textcolor="brand" size="xlarge" align="center">
                    <Localize translate_text="_t_Payment methods_t_" />
                </Typography.Heading>
                <Typography.Paragraph
                    textcolor="primary"
                    size="xlarge"
                    weight="normal"
                    align="center"
                >
                    <Localize translate_text="_t_We support a variety of deposit and withdrawal options._t_" />
                    <br />
                    <Localize translate_text="_t_Learn more about our payment methods and how to use them._t_" />
                </Typography.Paragraph>
            </Flex.Box>
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

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Payment Methods | Deposits and withdrawals | Deriv_t_"
        description="_t_We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!_t_"
        meta_attributes={meta_attributes}
        pageContext={pageContext}
    />
)
