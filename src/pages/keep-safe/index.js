import React from 'react'
import styled from 'styled-components'
import { SecurityIconGrid } from './_icon-grid'
import { SEO, SectionContainer, GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import Layout from 'components/layout/layout'
import { Modal, useModal, StyledLink, Header, Text } from 'components/elements'
import { Button } from 'components/form'
import SignupModal from 'components/custom/signup-modal'
import { localize, WithIntl, Localize } from 'components/localization'
import Checked from 'images/svg/checklist.svg'
import Demo from 'images/svg/demo-account.svg'

const Section = styled(SectionContainer)`
    background-color: ${props => props.bgcolor || 'transparent'};
`
const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: 1.2rem 2rem 4rem;
`
const Card = styled.div`
    padding: 2.4rem;
    border-radius: 6px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: var(--color-white);
`
const CheckedIcon = styled(Checked)`
    max-width: 100%;
`
const DemoIcon = styled(Demo)`
    margin-bottom: 2.4rem;
`

const KeepSafe = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <Layout>
            <SEO
                title={localize('Keep Safe')}
                description={localize(
                    'Learn how to enhance your account security and manage your trading risk.',
                )}
            />
            <SectionContainer>
                <GridContainer>
                    <Header as="h1" align="center">
                        {localize('Keep safe')}
                    </Header>
                    <StyledHeader as="h4" align="center" weight="500" maxwidth="98.4rem">
                        {localize(
                            'Your account security is very important to us. Here are a few ways to enhance your account security:',
                        )}
                    </StyledHeader>
                </GridContainer>
                <SecurityIconGrid />
            </SectionContainer>
            <Section bgcolor="var(--color-grey-8)">
                <GridContainer align="center">
                    <DemoIcon />
                    <Header font_size="3.6rem" align="center">
                        {localize('Practise with a demo account')}
                    </Header>
                    <StyledHeader as="h5" align="center" weight="400" maxwidth="58rem" lh="2.4rem">
                        {localize(
                            'New to trading and don’t know where to start? Use our demo account and learn how to trade by using risk-free virtual funds.',
                        )}
                    </StyledHeader>
                    <Button secondary onClick={toggleModal}>
                        {localize('Create a free account')}
                    </Button>
                </GridContainer>
            </Section>
            <Section>
                <GridContainer>
                    <Card>
                        <Header as="h4" lh="1.55">
                            {localize('Understand the risks')}
                        </Header>
                        <CssGrid
                            columns="2.4rem 1fr"
                            columngap="1.6rem"
                            rowgap="1.6rem"
                            mobilecolumns="2.4rem 1fr"
                            mobilerowgap="2rem"
                            margin="1.4rem 0 0"
                        >
                            <CssGridColumn>
                                <CheckedIcon />
                            </CssGridColumn>
                            <CssGridColumn>
                                <Text color="black-3" lh="1.55">
                                    <Localize
                                        translate_text="Trading derivatives can involve substantial risks. Don’t trade with money you can’t afford to lose and never trade with borrowed money. Learn about <0>Responsible Trading</0>."
                                        components={[
                                            <StyledLink
                                                size="var(--text-size-s)"
                                                weight="bold"
                                                key={0}
                                                target="_blank"
                                                to="/responsible-trading/"
                                            />,
                                        ]}
                                    />
                                </Text>
                            </CssGridColumn>
                            <CssGridColumn>
                                <CheckedIcon />
                            </CssGridColumn>
                            <CssGridColumn>
                                <Text lh="1.55" margin="0.3rem 0 0">
                                    {localize(
                                        'Trading on Deriv.com can become addictive. If you wish to stop trading for a period of time, please use our self-exclusion facilities',
                                    )}
                                </Text>
                            </CssGridColumn>
                        </CssGrid>
                    </Card>
                </GridContainer>
            </Section>
            <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                <SignupModal />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(KeepSafe)
