import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import payment_data from './_payment-data'
import Layout from 'components/layout/layout'
import { Text, Header, Divider, Accordion, AccordionItem } from 'components/elements'
import { SEO, SectionContainer, Container } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { Button } from 'components/form/'
import Chevron from 'images/svg/chevron-thick.svg'

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

const Td = styled.td`
    vertical-align: middle;
    padding: 0 2rem;
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

const Description = styled.div`
    transition: all 0.3s;
    display: none;
    background: var(--color-grey-8);
    margin-bottom: 4rem;
    padding: 2.6rem 3.2rem;
    width: 100%;
    ${props =>
        props.is_expanded &&
        css`
            display: inline-block;
        `}
`

const StyledButton = styled(Button)`
    margin-top: 1.6rem;
`

const StyledChevron = styled(Chevron)`
    height: 16px;
    width: 16px;
    transform: ${props => (props.expanded ? 'inherit' : 'rotate(-180deg)')};
    transition: transform 0.25s ease-out;
`

const ExpandedContent = styled.td`
    text-align: left;
`

const Notes = styled.div`
    position: absolute;
    width: 100%;
    padding: 1.6rem;
    background: var(--color-grey-8);
    left: 0;
`

const ExpandList = ({ data }) => {
    const [is_expanded, setIsExpanded] = React.useState(false)

    const toggleExpand = () => {
        setIsExpanded(!is_expanded)
    }
    return (
        <React.Fragment>
            <Tr onClick={toggleExpand}>
                <Td>
                    <Text>{data.method}</Text>
                </Td>
                <Td>
                    <Text>{data.currencies}</Text>
                </Td>
                <Td>
                    {Array.isArray(data.min_max_deposit) ? (
                        data.min_max_deposit.map((md, idx) => <Text key={idx}>{md}</Text>)
                    ) : (
                        <Text>{data.min_max_deposit}</Text>
                    )}
                </Td>
                <Td>
                    {Array.isArray(data.min_max_withdrawal) ? (
                        data.min_max_withdrawal.map((md, idx) => <Text key={idx}>{md}</Text>)
                    ) : (
                        <Text>{data.min_max_withdrawal}</Text>
                    )}
                </Td>
                <Td>
                    <Text>{data.deposit_time}</Text>
                </Td>
                <Td>
                    <Text>{data.withdrawal_time}</Text>
                </Td>
                <Td>
                    <StyledChevron expanded={is_expanded} />
                </Td>
            </Tr>
            <ExpandedContent colSpan="7">
                <Description is_expanded={is_expanded}>
                    <Text>{data.description}</Text>
                    {data.url && (
                        <StyledButton onClick={() => window.open(data.url, '_blank')} tertiary>
                            <Localize
                                translate_text="Learn more about {{name}}"
                                values={{ name: data.name }}
                            />
                        </StyledButton>
                    )}
                </Description>
            </ExpandedContent>
        </React.Fragment>
    )
}

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
                        {payment_data.map((pd, idx) => (
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
                                                <BoldText>{localize('Min - max')}</BoldText>
                                                <BoldText>{localize('deposit')}</BoldText>
                                            </Th>
                                            <Th>
                                                <BoldText>{localize('Min - max')}</BoldText>
                                                <BoldText>{localize('withdrawal')}</BoldText>
                                            </Th>
                                            <Th>
                                                <BoldText>{localize('Deposit')}</BoldText>
                                                <BoldText>{localize('processing time')}</BoldText>
                                            </Th>
                                            <Th>
                                                <BoldText>{localize('Withdrawal')}</BoldText>
                                                <BoldText>{localize('processing time')}</BoldText>
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

ExpandList.propTypes = {
    data: PropTypes.object,
}

export default WithIntl()(PaymentMethods)
