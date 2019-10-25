import React from 'react'
import styled from 'styled-components'
import { SecurityIconGrid } from './_icon-grid'
import {
    Show,
    SEO,
    SectionContainer,
    FlexGridContainer,
    Container,
} from 'components/containers'
import device from 'themes/device'
import Layout from 'components/layout/layout'
import {
    Image,
    Hero,
    Modal,
    useModal,
    Divider,
    Link,
    Header,
    Text,
} from 'components/elements'
import Button from 'components/form/button'
import SignupModal from 'components/custom/signup-modal'
import { Card } from 'components/elements/card.js'
import { localize, WithIntl, Localize } from 'components/localization'

const GridGrayBackground = styled.div`
    grid-area: risk;
    background-color: var(--color-grey-1);
    padding: 8rem 0;

    section {
        padding: 0;
    }

    @media ${device.tabletL} {
        padding: 4rem 0;
    }
`

const StyledHeader = styled(Header)`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.2rem 2rem 4rem;
`
const PractiseHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 4rem;
    }
`
const Practice = styled(Container)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 17.4rem;
    grid-row-gap: 2.4rem;

    div:nth-child(2n) {
        display: flex;
        flex-direction: column;
        align-self: flex-start;
    }
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
        grid-template-rows: repeat(2, 1fr);
        grid-template-areas:
            'risk'
            'practice';
    }
`

const GridSectionContainer = styled(SectionContainer)`
    grid-area: practice;
    padding: 8rem 0;

    @media ${device.tabletL} {
        padding: 4rem 0;
    }
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
                <Show.Mobile>
                    <SecureWrapper>
                        <Header as="h2" align="left">
                            {localize('Secure your account')}
                        </Header>
                        <StyledHeader as="h4" align="left" weight="500">
                            {localize(
                                'To help keep your account secure, we recommend these best practices:',
                            )}
                        </StyledHeader>
                    </SecureWrapper>
                </Show.Mobile>
                <Show.Desktop>
                    <Header as="h2" align="center">
                        {localize('Account security')}
                    </Header>
                    <StyledHeader as="h4" align="center" weight="500">
                        {localize(
                            'Your account security is very important to us. Here are a few ways to enhance your account security:',
                        )}
                    </StyledHeader>
                </Show.Desktop>
                <SecurityIconGrid />
            </KeepSafeSectionContainer>
            <Show.Desktop>
                <Divider />
            </Show.Desktop>
            <KeepSafeGirdArea>
                <GridSectionContainer padding="3.55rem 0">
                    <Practice>
                        <div>
                            <PractiseHeader as="h2">
                                {localize('Practise with a demo account')}
                            </PractiseHeader>
                            <Show.Mobile>
                                <CustomizeHeader as="h4" weight="500">
                                    {localize(
                                        'Use our demo account and learn how to trade, risk-free, by using virtual funds.',
                                    )}
                                </CustomizeHeader>
                            </Show.Mobile>
                            <Show.Desktop>
                                <Header as="h4" weight="500">
                                    {localize(
                                        'New to trading and don’t know where to start? Use our demo account and learn how to trade by using risk-free virtual funds.',
                                    )}
                                </Header>
                                <Button secondary onClick={toggleModal}>
                                    {localize('Create a free account')}
                                </Button>
                            </Show.Desktop>
                        </div>
                        <Image
                            width="415"
                            img_name="keep-safe-practice.png"
                            alt="Practice"
                        />
                        <Show.Mobile>
                            <MobileBtn secondary onClick={toggleModal}>
                                {localize('Create a free account')}
                            </MobileBtn>
                        </Show.Mobile>
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
                                    <Localize
                                        translate_text="Trading derivatives can involve substantial risks. Don’t trade with money you can’t afford to lose and never trade with borrowed money. Learn about <0>Responsible Trading</0>."
                                        components={[
                                            <Link
                                                key={0}
                                                target="_blank"
                                                to="/responsible-trading/"
                                            />,
                                        ]}
                                    />
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
                    closeModal={closeModal}
                >
                    <SignupModal />
                </Modal>
            </KeepSafeGirdArea>
        </Layout>
    )
}

export default WithIntl()(KeepSafe)
