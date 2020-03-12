import React from 'react'
import styled from 'styled-components'
import ExpandList from './_expanded-list'
import payment_data from './_payment-data'
import Layout from 'components/layout/layout'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { BinarySocketBase } from 'common/websocket/socket_base'

const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;
`

const StyledText = styled(Text)`
    max-width: 99.6rem;
`

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
    margin-bottom: ${props => (props.has_note ? '2.4rem' : 0)};
`

const Thead = styled.thead`
    font-size: var(--text-size-s);
    font-weight: bold;
    text-align: left;
    border-bottom: 2px solid var(--color-grey-2);
`

const Tbody = styled.tbody`
    text-align: left;

    tr {
        cursor: pointer;
    }
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
        BinarySocketBase.wait('website_status').then(response => {
            const filtered_payment_data = payment_methods.map(payment => {
                if (payment.is_crypto) {
                    payment.data = payment.data.map(data => {
                        data.min_max_withdrawal =
                            response.website_status.crypto_config[
                                data.currencies
                            ].minimum_withdrawal
                        return data
                    })
                }
                return payment
            })

            setPaymentMethods(filtered_payment_data)
        })
    }, [])
    return (
        <Layout>
            <SEO
                title={localize('Payment methods')}
                description={localize(
                    'All your deposits and withdrawals are processed within 1 working day. However, there may be additional processing time required by your bank or money transfer service.',
                )}
            />
            <SectionContainer>
                <Container direction="column">
                    <StyledHeader as="h1" align="center">
                        {localize('Payment methods')}
                    </StyledHeader>
                    <StyledText align="center" size="var(--text-size-m)">
                        {localize(
                            'All your deposits and withdrawals are processed within 1 working day. However, there may be additional processing time required by your bank or money transfer service.',
                        )}
                    </StyledText>
                </Container>
            </SectionContainer>
            <Divider height="2px" />
            <SectionContainer>
                <Container direction="column">
                    <AccordionContainer>
                        <Accordion>
                            {payment_methods.map((pd, idx) => (
                                <AccordionItem
                                    key={idx}
                                    style={{
                                        padding: '2.2rem 4.8rem',
                                        position: 'relative',
                                        paddingBottom: pd.note ? '5rem' : '2.2rem',
                                    }}
                                    parent_style={{
                                        marginBottom: '4rem',
                                    }}
                                    header={pd.name}
                                >
                                    <StyledTable has_note={!!pd.note}>
                                        <Thead>
                                            <Tr>
                                                <Th>
                                                    <BoldText>{localize('Method')}</BoldText>
                                                </Th>
                                                <Th>
                                                    <BoldText>{localize('Currencies')}</BoldText>
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
                                                    <BoldText>{localize('Withdrawal')}</BoldText>
                                                    <BoldText>
                                                        {localize('processing time')}
                                                    </BoldText>
                                                </Th>
                                                <Th />
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {pd.data.map((data, indx) => (
                                                <ExpandList key={indx} data={data} />
                                            ))}
                                        </Tbody>
                                    </StyledTable>
                                    {pd.note && (
                                        <Notes>
                                            <Text weight="500" size="var(--text-size-xxs)">
                                                <Localize
                                                    translate_text="Note: {{note}}"
                                                    values={{ note: pd.note }}
                                                />
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
