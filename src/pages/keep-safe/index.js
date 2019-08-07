import React from 'react'
import styled from 'styled-components'
import SEO from '../../components/containers/seo'
import { SecurityIconGrid } from './_icon-grid'
import Show from 'components/containers/show'
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

const GridGrayBackground = styled.div`
    grid-area: risk;
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
    margin-top: 2.7rem;

    ${Text} {
        font-size: var(--text-size-sm);
    }

    @media ${device.tabletL} {
        article {
            width: 100%;
            margin: 1.77rem 0 0 0;
            padding: 3rem 2rem;
        }
        article:first-child {
            margin: 0;
        }
    }
`
const HeroWrapper = styled.div`
    @media ${device.tabletL} {
        div {
            padding-bottom: 4rem;
        }
        h1 {
            margin-top: 3rem;
            font-size: 6rem;
        }
        h4 {
            font-size: 2rem;
            line-height: 3.25rem;
        }
    }
`
const SecureWrapper = styled.div`
    margin: 0 1.8rem;
    h2 {
        font-size: 4rem;
        padding-right: 10rem;
    }
    h4 {
        font-size: 2rem;
        padding: 1.77rem 0 3rem 0;
        line-height: 1.5;
    }
`
const KeepSafeSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 3.55rem 0;
    }
`
const KeepSafeGirdArea = styled.div`
    @media ${device.tabletL} {
        display: grid;
        grid-template-row: repeat(2, 1fr);
        grid-template-areas:
            'risk'
            'practice';
    }
`

const GridSectionContainer = styled(SectionContainer)`
    grid-area: practice;
`
const UnderstandRisk = styled(Header)`
    @media ${device.tabletL} {
        text-align: left;
        padding: 0 5%;
        font-size: 4rem;
    }
`
const CustomizeHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 2rem;
        line-height: 2.88rem;
    }
`
const MobileBtn = styled(Button)`
    font-size: 2rem;
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
            <HeroWrapper>
                <Hero
                    header={localize('Keep safe')}
                    paragraph={localize(
                        'Learn how to enhance your account security and manage your trading risk.',
                    )}
                    paragraph_max_width="61.5rem"
                />
            </HeroWrapper>
            <KeepSafeSectionContainer>
                <Show device="laptop">
                    <Header as="h2" align="center">
                        {localize('Account security')}
                    </Header>
                    <StyledHeader as="h4" align="center" weight="500">
                        {localize(
                            'Your account security is very important to us. Here are a few ways to enhance your account security:',
                        )}
                    </StyledHeader>
                </Show>
                <Show device="mobile">
                    <SecureWrapper>
                        <Header as="h2" align="left">
                            {localize('Secure your account')}
                        </Header>
                        <StyledHeader as="h4" align="left" weight="500">
                            {localize(
                                'To help keep your account secure, we recommend these best practices: ',
                            )}
                        </StyledHeader>
                    </SecureWrapper>
                </Show>
                <SecurityIconGrid />
            </KeepSafeSectionContainer>
            <Show device="laptop">
                <Divider />
            </Show>
            <KeepSafeGirdArea>
                <GridSectionContainer padding="3.55rem 0">
                    <Practice>
                        <div>
                            <Header as="h2">
                                {localize('Practise with a demo account')}
                            </Header>
                            <Show device="laptop">
                                <Header as="h4" weight="500">
                                    {localize(
                                        'New to trading and don’t know where to start? Use our demo account and learn how to trade by using risk-free virtual funds.',
                                    )}
                                </Header>
                            </Show>
                            <Show device="mobile">
                                <CustomizeHeader as="h4" weight="500">
                                    {localize(
                                        'Use our demo account and learn how to trade, risk-free, by using virtual funds.',
                                    )}
                                </CustomizeHeader>
                            </Show>
                            <Show device="laptop">
                                <Button secondary onClick={toggleModal}>
                                    {localize('Create a free account')}
                                </Button>
                            </Show>
                        </div>
                        <Image
                            width="415"
                            img_name="keep-safe-practice.png"
                            alt="Practice"
                        />
                        <Show device="mobile">
                            <MobileBtn secondary onClick={toggleModal}>
                                {localize('Create a free account')}
                            </MobileBtn>
                        </Show>
                    </Practice>
                </GridSectionContainer>
                <GridGrayBackground>
                    <SectionContainer padding="3.55rem 0">
                        <UnderstandRisk as="h2" align="center">
                            {localize('Understand the risks')}
                        </UnderstandRisk>
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
                </GridGrayBackground>
                <Modal
                    toggle={toggleModal}
                    is_open={show_modal}
                    is_blurred={true}
                    closeModal={closeModal}
                >
                    <SignupModal />
                </Modal>
            </KeepSafeGirdArea>
        </Layout>
    )
}

export default WithIntl()(KeepSafe)
