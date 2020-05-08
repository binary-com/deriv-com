import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'
import Scrollbar from 'react-perfect-scrollbar'
import ExpandList from './_expanded-list'
import payment_data from './_payment-data'
import Layout from 'components/layout/layout'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import { BinarySocketBase } from 'common/websocket/socket_base'

const AccordionContainer = styled.div`
    width: 100%;
`

const Th = styled.th`
    vertical-align: middle;
    padding: 1.6rem 2rem;

    :first-child {
        p {
            text-align: center;
        }
    }
`

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
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
`

const PaymentMethods = () => {
    const [payment_methods, setPaymentMethods] = React.useState(payment_data)

    React.useEffect(() => {
        const binary_socket = BinarySocketBase.init()

        binary_socket.onopen = () => {
            binary_socket.send(JSON.stringify({ website_status: 1 }))
        }
        binary_socket.onmessage = (msg) => {
            const response = JSON.parse(msg.data)
            const filtered_payment_data = payment_methods.map((payment) => {
                if (payment.is_crypto) {
                    payment.data = payment.data.map((data) => {
                        const minimum_withdrawal = +response.website_status.crypto_config[
                            data.currencies
                        ].minimum_withdrawal

                        const min_log_n = Math.floor(Math.log10(minimum_withdrawal))
                        const min_division = min_log_n < 0 ? Math.pow(10, 1 - min_log_n) : 100

                        const result_min_withdrawal =
                            Math.round(minimum_withdrawal * min_division) / min_division

                        data.min_max_withdrawal = result_min_withdrawal
                        data.tooltip = minimum_withdrawal
                        return data
                    })
                }
                return payment
            })

            setPaymentMethods(filtered_payment_data)
            binary_socket.close()
        }
    }, [])
    return (
        <Layout>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/perfect-scrollbar.css" />
            </Helmet>
            <SEO
                title={localize('Payment methods')}
                description={localize(
                    'All your deposits and withdrawals are processed within 1 working day. However, there may be additional processing time required by your bank or money transfer service.',
                )}
            />
            <SectionContainer>
                <Container direction="column">
                    <Header as="h1" align="center" mb="1.6rem">
                        {localize('Payment methods')}
                    </Header>
                    <Text max_width="99.6rem" align="center" size="var(--text-size-m)">
                        {localize(
                            'All your deposits and withdrawals are processed within 1 working day. However, there may be additional processing time required by your bank or money transfer service.',
                        )}
                    </Text>
                </Container>
            </SectionContainer>
            <Divider height="2px" />
            <SectionContainer>
                <Container direction="column">
                    <AccordionContainer>
                        <Accordion has_single_state>
                            {payment_methods.map((pd, idx) => (
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
                                    <Scrollbar options={{ suppressScrollY: true }}>
                                        <StyledTable has_note={!!pd.note}>
                                            <Thead>
                                                <Tr>
                                                    <Th>
                                                        <BoldText>{localize('Method')}</BoldText>
                                                    </Th>
                                                    <Th>
                                                        <BoldText>
                                                            {localize('Currencies')}
                                                        </BoldText>
                                                    </Th>
                                                    <Th>
                                                        {pd.is_crypto ? (
                                                            <BoldText>
                                                                {localize('Min deposit')}
                                                            </BoldText>
                                                        ) : (
                                                            <React.Fragment>
                                                                <BoldText>
                                                                    {localize('Min - max')}
                                                                </BoldText>
                                                                <BoldText>
                                                                    {localize('deposit')}
                                                                </BoldText>
                                                            </React.Fragment>
                                                        )}
                                                    </Th>
                                                    <Th>
                                                        {pd.is_crypto ? (
                                                            <BoldText>
                                                                {localize('Min withdrawal')}
                                                            </BoldText>
                                                        ) : (
                                                            <React.Fragment>
                                                                <BoldText>
                                                                    {localize('Min - max')}
                                                                </BoldText>
                                                                <BoldText>
                                                                    {localize('withdrawal')}
                                                                </BoldText>
                                                            </React.Fragment>
                                                        )}
                                                    </Th>
                                                    <Th>
                                                        <BoldText>{localize('Deposit')}</BoldText>
                                                        <BoldText>
                                                            {localize('processing time')}
                                                        </BoldText>
                                                    </Th>
                                                    <Th>
                                                        <BoldText>
                                                            {localize('Withdrawal')}
                                                        </BoldText>
                                                        <BoldText>
                                                            {localize('processing time')}
                                                        </BoldText>
                                                    </Th>
                                                    <Th>
                                                        <BoldText>{localize('Reference')}</BoldText>
                                                    </Th>
                                                    <Th />
                                                </Tr>
                                            </Thead>
                                            <Tbody>
                                                {pd.data.map((data, indx) => (
                                                    <ExpandList
                                                        key={indx}
                                                        data={data}
                                                        is_crypto={pd.is_crypto}
                                                    />
                                                ))}
                                            </Tbody>
                                        </StyledTable>
                                    </Scrollbar>
                                    {pd.note && (
                                        <Notes>
                                            <Text weight="500" size="var(--text-size-xxs)">
                                                {localize('Note:')} {pd.note}
                                            </Text>
                                        </Notes>
                                    )}
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </AccordionContainer>
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(PaymentMethods)
