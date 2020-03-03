import React from 'react'
import styled from 'styled-components'
import { SEO, Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import { Button } from 'components/form'
import Layout from 'components/layout/layout'
import { localize, WithIntl, LocalizedLink } from 'components/localization'
// SVG
import Location from 'images/svg/small-location.svg'
import Chevron from 'images/svg/chevron-bottom.svg'

const Banner = styled.section`
    background-color: var(--color-black);
    height: 36.2rem;
`

const StyledContainer = styled.div`
    max-width: 79.2rem;
    width: 80%;
    height: 100%;
    flex-direction: column;
    margin: auto;
    justify-content: center;
    display: flex;
`

const LocalizedLinkText = styled(props => <LocalizedLink {...props} />)`
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 8rem;

    &:hover {
        text-decoration: underline;
    }
`

const LeftChevron = styled(Chevron)`
    transform: rotate(90deg);
    margin-right: 0.8rem;
`

const DescHeader = styled(Header)`
    margin-top: 4rem;
    margin-bottom: 2.4rem;

    &:first-child {
        margin-top: 0;
    }
`

const DescText = styled(Text)`
    margin-bottom: 2rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 2rem;
`

const Li = styled.li`
    margin-bottom: 1.6rem;

    &:last-child {
        margin-bottom: 0;
    }
`

const StyledButton = styled(Button)`
    margin-top: 4rem;
    margin-bottom: 8rem;
    width: fit-content;
`

const Job = () => (
    <Layout type="careers" padding_top="10rem">
        <SEO title={localize('Job')} />
        <Banner>
            <StyledContainer>
                <Text color="white">{localize('Accounts and Payments')}</Text>
                <Header as="h2" color="white" margin="1.6rem 0 0.8rem">
                    {localize('Accounts and Payments Executive')}
                </Header>
                <Flex height="auto" jc="flex-start" ai="center">
                    <Location />
                    <Text color="white" margin="0 2.4rem 0 0.8rem">
                        {localize('Cyberjaya, Malaysia')}
                    </Text>
                    <Text color="white">{localize('Full time')}</Text>
                </Flex>
            </StyledContainer>
        </Banner>
        <StyledContainer>
            <LocalizedLinkText to="careers/jobs/">
                <LeftChevron />
                <Text weight="bold">{localize('Back to jobs')}</Text>
            </LocalizedLinkText>

            <DescHeader as="h4">{localize('Description:')}</DescHeader>
            <DescText>
                {localize(
                    'Our Accounting & Payments team manages our wide range of bank accounts and e-currency systems, as well as the huge volume of transactions that take place every day.',
                )}
            </DescText>
            <DescText>
                {localize(
                    ' They also generate monthly management accounts, annual audited accounts, and reconcile all transactions. As our Accounts & Payments Executive, you will be able to contribute to all these key areas and increase the efficiency of our financial operations.',
                )}
            </DescText>

            <DescHeader as="h4">{localize('Responsibilities:')}</DescHeader>
            <Ul>
                <Li>
                    <Text>
                        {localize(
                            'Process client payments, as well as handle and resolve client payment queries',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Track and manage transactions and accounts using proprietary and non-proprietary software and systems',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Process transactions for clients who make deposits and withdrawals using a wide range of third-party payment services, including bank wire, credit card, and e-currency',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Perform reconciliations of all transactions that take place through third-party payment services and banks',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Assist in management accounting for all companies within the Binary Ltd. group',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Work closely with the affiliate marketing team to process affiliate commission payments on a monthly basis',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Constantly liaise with all internal departments such as Customer Support and Marketing on account and payment matters',
                        )}
                    </Text>
                </Li>
            </Ul>

            <DescHeader as="h4">{localize('Minimum Qualifications:')}</DescHeader>
            <Ul>
                <Li>
                    <Text>
                        {localize('A lifelong interest in accounting, and an aptitude for numbers')}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'A university degree with a major in accounting, or other relevant professional qualifications',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Process transactions for clients who make deposits and withdrawals using a wide range of third-party payment services, including bank wire, credit card, and e-currency',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize('At least one year of work experience in a similar role')}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Proficiency with popular office applications such as Microsoft Excel, accounting software, and databases',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'In-depth knowledge of accounting principles, best practices, standards, and regulations',
                        )}
                    </Text>
                </Li>
                <Li>
                    <Text>
                        {localize(
                            'Ability to quickly learn new (proprietary) systems and procedures',
                        )}
                    </Text>
                </Li>
            </Ul>
            <StyledButton secondary>{localize('Send us your CV')}</StyledButton>
        </StyledContainer>
    </Layout>
)

export default WithIntl()(Job)
