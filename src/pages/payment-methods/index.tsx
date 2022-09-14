import React, { ReactElement } from 'react'
import styled from 'styled-components'
import ExpandList from './_expanded-list'
import payment_data from './_payment-data'
import Dp2p from './_dp2p'
import MobileAccordianItem from './_mobile-accordian-item'
import Layout from 'components/layout/layout'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { DerivStore } from 'store'
import device from 'themes/device'

type StyledTableType = {
    has_note: boolean
}

const meta_attributes = {
    og_title: localize('Payment Methods | Deposits and withdrawals | Deriv'),
    og_description: localize(
        'We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!',
    ),
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

type LocaleType = { language?: string }

type PaymentType = {
    method?: ReactElement
    currencies?: string | ReactElement
    min_max_deposit?: ReactElement
    min_max_withdrawal?: ReactElement
    deposit_time?: ReactElement
    withdrawal_time?: ReactElement
    description?: ReactElement
    name?: string
    reference?: string
    locales?: string[]
    url?: string
    reference_link?: ReactElement
}
export type PaymentProps = {
    payment_data?: PaymentType
    locale?: { locale?: LocaleType }
    is_crypto?: boolean
    is_fiat_onramp?: boolean
    is_dp2p?: boolean
}
export type PaymentDataProps = {
    name?: ReactElement
    note?: ReactElement
    is_crypto?: boolean
    is_dp2p?: boolean
    is_fiat_onramp?: boolean
    locale?: LocaleType
    data?: Array<PaymentType>
}
export type PaymentMethodsProps = {
    locale?: PaymentDataProps
    pd?: PaymentDataProps
}
const DisplayAccordion = ({ locale }: PaymentMethodsProps) => {
    const { is_eu_country, is_p2p_allowed_country } = React.useContext(DerivStore)
    const [is_mobile] = useBrowserResize(992)

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
        <Accordion has_single_state>
            {payment_data.map((pd, idx) => {
                const styles = is_mobile
                    ? {
                          padding: '0 16px 0',
                          position: 'relative',
                          background: 'var(--color-white)',
                          paddingBottom: pd.note ? '5rem' : '2.2rem',
                      }
                    : {
                          padding: '0 48px 24px',
                          position: 'relative',
                          background: 'var(--color-white)',
                          paddingBottom: pd.note ? '5rem' : '2.2rem',
                      }

                if (pd.is_crypto && is_eu_country) {
                    return []
                }
                if (pd.is_fiat_onramp && is_eu_country) {
                    return []
                } else if (pd.is_dp2p && !is_p2p_allowed_country) {
                    return []
                } else
                    return (
                        <AccordionItem
                            key={idx}
                            content_style={content_style}
                            header_style={header_style}
                            style={styles}
                            parent_style={parent_style}
                            header={pd.name}
                        >
                            <DesktopWrapper>
                                <DisplayAccordianItem pd={pd} locale={locale} />
                            </DesktopWrapper>
                            <MobileWrapper>
                                <MobileAccordianItem pd={pd} locale={locale} />
                            </MobileWrapper>
                        </AccordionItem>
                    )
            })}
        </Accordion>
    )
}

const DisplayAccordianItem = ({ pd, locale }: PaymentMethodsProps) => {
    const parse_to_integer = parseInt('2')

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
                                <Th colSpan={pd.is_fiat_onramp && parse_to_integer}>
                                    <BoldText>{localize('Currencies')}</BoldText>
                                </Th>
                                <Th style={pd.is_fiat_onramp && { width: '180px' }}>
                                    {pd.is_crypto || pd.is_fiat_onramp ? (
                                        <BoldText>{localize('Min deposit')}</BoldText>
                                    ) : pd.is_dp2p ? (
                                        <BoldText>{localize('Supported Deriv accounts')}</BoldText>
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
                                        ) : pd.is_dp2p ? (
                                            <BoldText>{localize('Daily deposit limits')}</BoldText>
                                        ) : (
                                            <React.Fragment>
                                                <BoldText>{localize('Min-max')}</BoldText>
                                                <BoldText>{localize('withdrawal')}</BoldText>
                                            </React.Fragment>
                                        )}
                                    </Th>
                                )}
                                {pd.is_fiat_onramp ? (
                                    <Th colSpan={2}>
                                        <BoldText>{localize('Deposit processing time')}</BoldText>
                                    </Th>
                                ) : pd.is_dp2p ? (
                                    <Th>
                                        <BoldText>{localize('Daily withdrawal limits')}</BoldText>
                                    </Th>
                                ) : (
                                    <Th>
                                        <BoldText>{localize('Deposit')}</BoldText>
                                        <BoldText>{localize('processing time')}</BoldText>
                                    </Th>
                                )}

                                {!pd.is_fiat_onramp && !pd.is_dp2p && (
                                    <Th>
                                        <BoldText>{localize('Withdrawal')}</BoldText>
                                        <BoldText>{localize('processing time')}</BoldText>
                                    </Th>
                                )}
                                {pd.is_dp2p && (
                                    <Th>
                                        <BoldText>{localize('Processing time')}</BoldText>
                                    </Th>
                                )}
                                <Th>
                                    <BoldText>
                                        {pd.is_dp2p ? localize('More info') : localize('Reference')}
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
                        {localize('Note:')} {pd.note}
                    </Text>
                </Notes>
            )}
        </>
    )
}

const PaymentMethods = ({ locale }: PaymentMethodsProps) => {
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
            <SectionTopContainer>
                <TopContainer direction="column" width="100%">
                    <Header as="h1" type="hero" align="center" mb="1.6rem">
                        {localize('Payment methods')}
                    </Header>
                    <Header
                        align="center"
                        as="h3"
                        type="subtitle-1"
                        weight="normal"
                        mobile_max_width="326px"
                    >
                        {localize('We support a variety of deposit and withdrawal options.')}
                    </Header>
                    <Header
                        align="center"
                        as="h3"
                        type="subtitle-1"
                        weight="normal"
                        mobile_max_width="326px"
                    >
                        {localize('Learn more about our payment methods and how to use them.')}
                    </Header>
                </TopContainer>
            </SectionTopContainer>
            <Divider height="2px" />
            <SectionContentContainer>
                <Container direction="column">
                    <AccordionContainer>
                        <DisplayAccordion locale={locale} />
                    </AccordionContainer>
                    <Header mt="1.6rem" type="paragraph-2" align="left" weight="normal">
                        <Localize
                            translate_text="<0>Disclaimer</0>: We process all your deposits and withdrawals within 1 day. However, the processing times and limits in this page are indicative, depending on the queue or for reasons outside of our control."
                            components={[<strong key={0} />]}
                        />
                    </Header>
                </Container>
            </SectionContentContainer>
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
