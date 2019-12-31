import React from 'react'
import styled from 'styled-components'
import { SecurityIconGrid } from './_icon-grid'
import { SEO, SectionContainer, GridContainer, CssGrid, CssGridColumn } from 'components/containers'
import Layout from 'components/layout/layout'
import {
    Modal,
    useModal,
    StyledLink,
    Header,
    Text,
    Divider
} from 'components/elements'
import { Button } from 'components/form'
import SignupModal from 'components/custom/signup-modal'
import { localize, WithIntl, Localize } from 'components/localization'
import Checked from 'images/svg/checklist.svg'
import Demo from 'images/svg/demo-account.svg'

const Section = styled(SectionContainer)`
    max-width: ${props => props.max_width || '100%'};
    margin: 0 auto;
`
const StyledHeader = styled(Header)`
    max-width: ${props => props.maxwidth || '100%'};
    margin: 0 auto;
    padding: ${props => props.padding || '1.2rem 2rem 4rem'};
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
                    <StyledHeader as="h4" align="center" weight="normal" maxwidth="79.2rem" padding="0">
                        {localize(
                            'Your account security is very important to us. Here are a few ways to enhance your account security:',
                        )}
                    </StyledHeader>
                </GridContainer>
            </SectionContainer>
            <Divider />
            <SectionContainer>
                <SecurityIconGrid />
            </SectionContainer>
            <Section bgcolor="var(--color-grey-8)">
                <GridContainer align="center">
                    <DemoIcon />
                    <Header font_size="3.6rem" align="center">
                        {localize('New to trading?')}
                    </Header>
                    <StyledHeader as="h5" align="center" weight="400" lh="2.4rem">
                        {localize(
                            'Use our demo account and learn how to trade by using risk-free virtual funds.',
                        )}
                    </StyledHeader>
                    <Button secondary onClick={toggleModal}>
                        {localize('Create a free account')}
                    </Button>
                </GridContainer>
            </Section>
            <Section max_width="98rem">
                <GridContainer align="center">
                    <StyledHeader font_size="3.6rem" lh="3.6rem" align="center" padding="0">
                        {localize('Understand the risks')}
                    </StyledHeader>
                    <CssGrid
                            columns="2.4rem 1fr"
                            column_gap="1.6rem"
                            row_gap="1.6rem"
                            mobile_columns="2.4rem 1fr"
                            mobile_row_gap="2rem"
                            margin="3.2rem 0 0"
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
                                                weight="normal"
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
                                    {localize('Trading on Deriv can become addictive. If you wish to stop trading for a period of time, please use our self-exclusion facilities.')}
                                </Text>
                            </CssGridColumn>
                        </CssGrid>
                </GridContainer>
            </Section>
                <Modal toggle={toggleModal} is_open={show_modal} closeModal={closeModal}>
                    <SignupModal />
                </Modal>
        </Layout>
    )
}

export default WithIntl()(KeepSafe)
