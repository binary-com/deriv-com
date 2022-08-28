import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const meta_attributes = {
    og_title: localize('_t_Payment Methods | Deposits and withdrawals | Deriv_t_'),
    og_description: localize(
        '_t_We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!_t_',
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
const StyledTable = styled.table`
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
const DisplayAccordion = (locale) => {
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

DisplayAccordion.propTypes = {
    locale: PropTypes.object,
}

const DisplayAccordianItem = ({ pd, locale }) => {
    return (
        <>
            <OuterDiv>
                <InnerDiv>
                    <StyledTable has_note={!!pd.note}>
                        <Thead>
                            <Tr>
                                <Th>
                                    <BoldText>{localize('_t_Method_t_')}</BoldText>
                                </Th>
                                <Th colSpan={pd.is_fiat_onramp && '2'}>
                                    <BoldText>{localize('_t_Currencies_t_')}</BoldText>
                                </Th>
                                <Th style={pd.is_fiat_onramp && { width: '180px' }}>
                                    {pd.is_crypto || pd.is_fiat_onramp ? (
                                        <BoldText>{localize('_t_Min deposit_t_')}</BoldText>
                                    ) : pd.is_dp2p ? (
                                        <BoldText>{localize('_t_Supported Deriv accounts_t_')}</BoldText>
                                    ) : (
                                        <React.Fragment>
                                            <BoldText>{localize('_t_Min-max_t_')}</BoldText>
                                            <BoldText>{localize('_t_deposit_t_')}</BoldText>
                                        </React.Fragment>
                                    )}
                                </Th>
                                {!pd.is_fiat_onramp && (
                                    <Th>
                                        {pd.is_crypto ? (
                                            <>
                                                <BoldText>{localize('_t_Min withdrawal_t_')}</BoldText>
                                            </>
                                        ) : pd.is_dp2p ? (
                                            <BoldText>{localize('_t_Daily deposit limits_t_')}</BoldText>
                                        ) : (
                                            <React.Fragment>
                                                <BoldText>{localize('_t_Min-max_t_')}</BoldText>
                                                <BoldText>{localize('_t_withdrawal_t_')}</BoldText>
                                            </React.Fragment>
                                        )}
                                    </Th>
                                )}
                                {pd.is_fiat_onramp ? (
                                    <Th colSpan="2">
                                        <BoldText>{localize('_t_Deposit processing time_t_')}</BoldText>
                                    </Th>
                                ) : pd.is_dp2p ? (
                                    <Th>
                                        <BoldText>{localize('_t_Daily withdrawal limits_t_')}</BoldText>
                                    </Th>
                                ) : (
                                    <Th>
                                        <BoldText>{localize('_t_Deposit_t_')}</BoldText>
                                        <BoldText>{localize('_t_processing time_t_')}</BoldText>
                                    </Th>
                                )}

                                {!pd.is_fiat_onramp && !pd.is_dp2p && (
                                    <Th>
                                        <BoldText>{localize('_t_Withdrawal_t_')}</BoldText>
                                        <BoldText>{localize('_t_processing time_t_')}</BoldText>
                                    </Th>
                                )}
                                {pd.is_dp2p && (
                                    <Th>
                                        <BoldText>{localize('_t_Processing time_t_')}</BoldText>
                                    </Th>
                                )}
                                <Th>
                                    <BoldText>
                                        {pd.is_dp2p ? localize('_t_More info_t_') : localize('_t_Reference_t_')}
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
                                        data={data}
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
                        {localize('_t_Note:_t_')} {pd.note}
                    </Text>
                </Notes>
            )}
        </>
    )
}

DisplayAccordianItem.propTypes = {
    locale: PropTypes.object,
    pd: PropTypes.object,
}

const PaymentMethods = (locale) => {
    const { is_p2p_allowed_country } = React.useContext(DerivStore)
    return (
        <Layout>
            <SEO
                title={localize('_t_Payment Methods | Deposits and withdrawals | Deriv_t_')}
                description={localize(
                    '_t_We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!_t_',
                )}
                meta_attributes={meta_attributes}
            />
            <SectionTopContainer>
                <TopContainer direction="column" width="100%">
                    <Header as="h1" type="hero" align="center" mb="1.6rem">
                        {localize('_t_Payment methods_t_')}
                    </Header>
                    <Header
                        align="center"
                        as="h3"
                        type="subtitle-1"
                        weight="normal"
                        mobile_max_width="326px"
                    >
                        {localize('_t_We support a variety of deposit and withdrawal options._t_')}
                    </Header>
                    <Header
                        align="center"
                        as="h3"
                        type="subtitle-1"
                        weight="normal"
                        mobile_max_width="326px"
                    >
                        {localize('_t_Learn more about our payment methods and how to use them._t_')}
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
                            translate_text="_t_<0>Disclaimer</0>: We process all your deposits and withdrawals within 1 day. However, the processing times and limits in this page are indicative, depending on the queue or for reasons outside of our control._t_"
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

PaymentMethods.propTypes = {
    locale: PropTypes.object,
}

export default WithIntl()(PaymentMethods)
