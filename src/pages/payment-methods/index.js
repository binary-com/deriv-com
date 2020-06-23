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
    return (
        <Layout>
            <Helmet>
                <link rel="stylesheet" type="text/css" href="/css/perfect-scrollbar.css" />
            </Helmet>
            <SEO
                title={localize('Payment Methods | Deposits and withdrawals | Deriv')}
                description={localize(
                    'We offer various payment methods - Bank wires, debit/credit cards, e-wallets and cryptocurrencies to make your transactions more convenient!',
                )}
            />
            <SectionContainer>
                <Container direction="column">
                    <Header as="h1" align="center" mb="1.6rem">
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
                        <Accordion has_single_state>
                            {payment_data.map((pd, idx) => (
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
                                                                    {localize('Min-max')}
                                                                </BoldText>
                                                                <BoldText>
                                                                    {localize('deposit')}
                                                                </BoldText>
                                                            </React.Fragment>
                                                        )}
                                                    </Th>
                                                    <Th>
                                                        {pd.is_crypto ? (
                                                            <>
                                                                <BoldText>
                                                                    {localize('Min withdrawal')}
                                                                </BoldText>
                                                                <BoldText>
                                                                    {localize('(in USD)')}
                                                                </BoldText>
                                                            </>
                                                        ) : (
                                                            <React.Fragment>
                                                                <BoldText>
                                                                    {localize('Min-max')}
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
                    <Text mt="1.6rem" align="center">
                        {localize(
                            'Disclaimer: Processing times and limits are indicative. They may differ from what is shown here, depending on the queue or for reasons outside of our control.',
                        )}
                    </Text>
                </Container>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(PaymentMethods)
