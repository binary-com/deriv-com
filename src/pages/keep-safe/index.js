import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/containers/seo'
import { SecurityIconGrid } from './_icon-grid'
import device from 'themes/device'
import Layout from 'components/layout/layout'
import Image from 'components/elements/image'
import Hero from 'components/elements/hero.js'
import Button from 'components/form/button'
import Modal, { useModal } from 'components/elements/modal'
import SignupModal from 'components/elements/signup-modal'
import Container, {
    SectionContainer,
    FlexGridContainer,
} from 'components/containers/container'
import { Card } from 'components/elements/card.js'
import { Divider } from 'components/elements/divider'
import { StyledLink } from 'components/elements/link'
import { Header, Text } from 'components/elements/typography.js'
import { localize, WithIntl } from 'components/localization'

const GrayBackground = styled.div`
    background-color: var(--color-grey-1);
`

const StyledHeader = styled(Header)`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.2rem 2rem 4rem;
`
const Practice = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 17.4rem;
    grid-row-gap: 2.4rem;

    ${Header} {
        padding-bottom: 1.6rem;
    }
    button {
        padding: 1.6rem 2rem;
        margin-top: 3.4rem;
    }
    @media ${device.laptop} {
        grid-column-gap: 5rem;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`
const Risk = styled(FlexGridContainer)`
    margin-top: 4rem;

    ${Text} {
        font-size: var(--text-size-sm);
    }
`

const KeepSafe = () => {
    const [show_modal, toggleModal, closeModal] = useModal()

    return (
        <Layout>
            <SEO
                title={localize('Keep Safe')}
                description={localize('Learn how to enhance your account security and manage your trading risk.')}
            />
            <Hero
                header={localize('Keep safe')}
                paragraph={localize(
                    'Learn how to enhance your account security and manage your trading risk.',
                )}
                paragraph_width="61.5rem"
            />
            <SectionContainer padding="8" direction="column">
                <Header as="h2" align="center">
                    {localize('Account security')}
                </Header>
                <StyledHeader as="h4" align="center" weight="500">
                    {localize(
                        'Your account security is very important to us. Here are a few ways to enhance your account security:',
                    )}
                </StyledHeader>
                <SecurityIconGrid />
            </SectionContainer>
            <Divider />
            <SectionContainer>
                <Practice>
                    <div>
                        <Header as="h2">
                            {localize('Practise with a demo account')}
                        </Header>
                        <Header as="h4" weight="500">
                            {localize(
                                'New to trading and don’t know where to start? Use our demo account and learn how to trade by using risk-free virtual funds.',
                            )}
                        </Header>
                        <Button secondary onClick={toggleModal}>
                            {localize('Create a free account')}
                        </Button>
                    </div>
                    <Image
                        width="415"
                        img_name="keep-safe-practice.png"
                        alt="Practice"
                    />
                </Practice>
            </SectionContainer>
            <GrayBackground>
                <SectionContainer>
                    <Header as="h2" align="center">
                        {localize('Understand the risks')}
                    </Header>
                    <Risk justify="center" content_width="41.5rem">
                        <Card min_height="0rem" width="41.5rem">
                            <Text color="black-3" lh="1.55">
                                {localize(
                                    'Trading derivatives can involve substantial risks. Don’t trade with money you can’t afford to lose and never trade with borrowed money. Learn about ',
                                )}
                                <StyledLink to="/responsible-trading/">
                                    {localize('Responsible Trading.')}
                                </StyledLink>
                            </Text>
                        </Card>
                        <Card min_height="0rem" width="41.5rem">
                            <Text color="black-3">
                                {localize(
                                    'Trading on Deriv.com can become addictive. If you wish to stop trading for a period of time, please use our self-exclusion facilities.',
                                )}
                            </Text>
                        </Card>
                    </Risk>
                </SectionContainer>
            </GrayBackground>
            <Modal
                toggle={toggleModal}
                is_open={show_modal}
                is_blurred={true}
                closeModal={closeModal}
            >
                <SignupModal />
            </Modal>
        </Layout>
    )
}

export default WithIntl()(KeepSafe)
