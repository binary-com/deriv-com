import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SEO from '../components/containers/seo'
import Layout from '../components/layout/layout'
import device from 'themes/device'
import Image from '../components/elements/image'
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

const Wrapper = styled.section`
    box-sizing: border-box;
    width: 100%;
    padding: 0;
    background-color: var(--color-${props => props.color || ''});
`
const Section = styled.section`
    margin: 0 auto;
    width: 80%;
    padding: ${props => props.padding || ''}rem 0;

    @media ${device.desktop} {
        max-width: 1024px;
    }
    @media ${device.desktopL} {
        max-width: 1400px;
    }
`
const Divider = styled.div`
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--color-${props => props.color || ''});
`
const Hero = styled.div`
    padding: 8rem 0 10rem;

    h4 {
        max-width: 60rem;
        margin: 0 auto;
        padding: 1.2rem 2rem 0;
    }
`
const Security = styled.div`

    h4 {
        max-width: 80rem;
        margin: 0 auto;
        padding: 1.2rem 2rem 4rem;
    }
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
const GridCol = styled.article`

    p {
        margin-top: 0.8rem;
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
    * {
        max-width: 100%;
    }
`
const Risk = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;

    @media ${device.tablet} {
        flex-direction: column;
    }
    div {
        box-sizing: border-box;
        max-width: 41.5rem;
        padding: 4rem;
        margin: 0 1rem;
        border-radius: 4px;
        box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
        background-color: var(--color-white);
        
        p {
            font-size: 2rem;
        }
        @media ${device.tablet} {
            margin: 1rem auto;
        }
    }
`
export const Col = ({ Icon, content }) => {
    return (
        <GridCol>
            <Icon />
            <Text color="black-3" lh="1.55">{content}</Text>
        </GridCol>
    )
}
const KeepSafe = () => (
    <Layout>
        <SEO title={localize('Keep Safe')} />
        <Wrapper color="black">
            <Section>
                <Hero>
                    <Header as="h1" align="center" color="red">
                        {localize('Keep safe')}
                    </Header>
                    <Header as="h4" align="center" color="white" weight="500">
                        {localize('Learn how to enhance your account security and manage your trading risk.')}
                    </Header>
                </Hero>
            </Section>
        </Wrapper>
        <Wrapper>
            <Section padding="8">
                <Security>
                    <Header as="h2" align="center">
                        {localize('Account security')}
                    </Header>
                    <Header as="h4" align="center" weight="500">
                        {localize('Your account security is very important to us. Here are a few ways to enhance your account security:')}
                    </Header>
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
                                'Don\'t share your Deriv.com account or payment methods with any other person.',
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
                </Security>
            </Section>
            <Divider color="grey-2" />
            <Section padding="8">
                <Practice>
                    <div>
                        <Header as="h2">
                            {localize('Practise with a demo account')}
                        </Header>
                        <Header as="h4" weight="500">
                            {localize('New to trading and don’t know where to start? Use our demo account and learn how to trade by using risk-free virtual funds.')}
                        </Header>
                    </div>
                    <Image
                        width="415"
                        img_name="keep-safe-practice.png"
                        alt="Practice"
                    />
                </Practice>
            </Section>
        </Wrapper>
        <Wrapper color="grey-1">
            <Section padding="8">
                <Header as="h2" align="center">
                    {localize('Understand the risks')}
                </Header>
                <Risk>
                    <div className='left'>
                    <Text color="black-3" lh="1.55">
                        {localize('Trading derivatives can involve substantial risks. Don’t trade with money you can’t afford to lose and never trade with borrowed money. Learn about Responsible Trading.')}
                    </Text>
                    </div>
                    <div className='right'>
                        <Text color="black-3">
                            {localize('Trading on Deriv.com can become addictive. If you wish to stop trading for a period of time, please use our self-exclusion facilities.')}
                        </Text>
                    </div>
                </Risk>
            </Section>
        </Wrapper>
    </Layout>
)

Col.propTypes = {
    content: PropTypes.string,
    Icon: PropTypes.func,
}

export default WithIntl()(KeepSafe)
