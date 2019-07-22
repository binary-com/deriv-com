import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import device from 'themes/device'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import Hero from '../components/elements/hero.js'
import Container from '../components/containers/container'
import { Card } from '../components/elements/card.js'
import { Divider } from '../components/elements/divider'
import { Header, Text } from '../components/elements/typography.js'
import { localize, WithIntl } from '../components/localization'

import Two from 'images/svg/two-factor.svg'
import DifferentPassword from 'images/svg/different-password.svg'
import Cashier from 'images/svg/cashier-lock.svg'
import Browser from 'images/svg/browser-up-to-date.svg'
import Configure from 'images/svg/configure-pc.svg'
import DontShare from 'images/svg/share-deriv.svg'
import Monitor from 'images/svg/monitor-logins.svg'
import Antivirus from 'images/svg/install-antivirus.svg'

const GrayBackground = styled.div`
    background-color: var(--color-grey-1);
`
const SectionContainer = styled(Container).attrs({
    as: 'section',
})`
    padding: ${props => props.padding || ''}rem 0;
`
const StyledHeader = styled(Header)`
    max-width: 80rem;
    margin: 0 auto;
    padding: 1.2rem 2rem 4rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 5rem;
    grid-row-gap: 2.4rem;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`
const Practice = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 17.4rem;
    grid-row-gap: 2.4rem;

    @media ${device.laptop} {
        grid-column-gap: 5rem;
    }
    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`
const Risk = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;

    ${Text} {
        font-size: 2rem;
    }
    @media ${device.tablet} {
        flex-direction: column;
    }
`
const GridCol = styled.article`
    ${Text} {
        margin-top: 0.8rem;
    }
`
const Col = ({ Icon, content }) => (
    <GridCol>
        <Icon />
        <Text color="black-3" lh="1.55">
            {content}
        </Text>
    </GridCol>
)
Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

const KeepSafe = () => (
    <Layout>
        <SEO title={localize('Keep Safe')} />
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
            <Grid>
                <Col
                    Icon={Two}
                    content={localize(
                        'Enable two-factor authentication on your account.',
                    )}
                />
                <Col
                    Icon={DifferentPassword}
                    content={localize(
                        'Use different passwords for your email and Deriv.com account and set a strong password.',
                    )}
                />
                <Col
                    Icon={Cashier}
                    content={localize(
                        'Set a cashier lock password to prevent unauthorised access to your cashier.',
                    )}
                />
                <Col
                    Icon={Browser}
                    content={localize(
                        'Always keep your web browser up-to-date. We recommend using the latest version of Google Chrome.',
                    )}
                />
                <Col
                    Icon={Configure}
                    content={localize(
                        'Configure your PC and mobile phone to use the Cloudflare DNS by following the instructions on our website.',
                    )}
                />
                <Col
                    Icon={DontShare}
                    content={localize(
                        "Don't share your Deriv.com account or payment methods with any other person.",
                    )}
                />
                <Col
                    Icon={Monitor}
                    content={localize(
                        'Monitor recent logins to your account using the login history facility.',
                    )}
                />
                <Col
                    Icon={Antivirus}
                    content={localize(
                        'Install antivirus software (such as Avast Free Antivirus for Windows and Mac) on your computer.',
                    )}
                />
            </Grid>
        </SectionContainer>
        <Divider />
        <SectionContainer padding="8">
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
                </div>
                <Image
                    width="415"
                    img_name="keep-safe-practice.png"
                    alt="Practice"
                />
            </Practice>
        </SectionContainer>
        <GrayBackground>
            <SectionContainer padding="8" direction="column">
                <Header as="h2" align="center">
                    {localize('Understand the risks')}
                </Header>
                <Risk>
                    <Card min_height="0rem" width="41.5rem">
                        <Text color="black-3" lh="1.55">
                            {localize(
                                'Trading derivatives can involve substantial risks. Don’t trade with money you can’t afford to lose and never trade with borrowed money. Learn about Responsible Trading.',
                            )}
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
    </Layout>
)

export default WithIntl()(KeepSafe)
