import React from 'react'
import styled from 'styled-components'
import ExpandList from './_expanded-list'
import payment_data from 'data/payment-data'
import Layout from 'components/layout/layout'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'

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

    & > p {
        &:last-child {
            margin-bottom: 1.6rem;
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

const PaymentMethods = () => (
    <Layout>
        <SEO
            title={localize('Payment methods')}
            description={localize(
                'All your deposits and withdrawals are processed within 24 hours. However, there may be additional processing time required by your bank or money transfer service.',
            )}
        />
        <SectionContainer>
            <Container direction="column">
                <StyledHeader as="h1" align="center">
                    {localize('Payment methods')}
                </StyledHeader>
                <StyledText align="center" size="var(--text-size-m)">
                    {localize(
                        'All your deposits and withdrawals are processed within 24 hours. However, there may be additional processing time required by your bank or money transfer service.',
                    )}
                </StyledText>
            </Container>
        </SectionContainer>
        <Divider height="2px" />
        <SectionContainer>
            <Container direction="column">
                <AccordionContainer>
                    <Accordion>
                        {payment_data.map((pd, idx) => {
                            // eslint-disable-next-line no-console
                            console.log({ ...payment_data }, pd, idx)

                            return (
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
                                                        <>
                                                            <BoldText>
                                                                {localize('Min - max')}
                                                            </BoldText>
                                                            <BoldText>
                                                                {localize('deposit')}
                                                            </BoldText>
                                                        </>
                                                    )}
                                                </Th>
                                                <Th>
                                                    {pd.is_crypto ? (
                                                        <BoldText>
                                                            {localize('Min withdrawal')}
                                                        </BoldText>
                                                    ) : (
                                                        <>
                                                            <BoldText>
                                                                {localize('Min - max')}
                                                            </BoldText>
                                                            <BoldText>
                                                                {localize('withdrawal')}
                                                            </BoldText>
                                                        </>
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
                                            {pd.data.map((data, indx) => {
                                                // eslint-disable-next-line no-console
                                                console.log('Expand:', data, indx)
                                                return <ExpandList key={indx} data={data} />
                                            })}
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
                            )
                        })}
                    </Accordion>
                </AccordionContainer>
            </Container>
        </SectionContainer>
    </Layout>
)

export default WithIntl()(PaymentMethods)
