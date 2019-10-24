import React from 'react'
import styled from 'styled-components'
import Container from 'components/containers/container'
import SEO from 'components/containers/seo'
import SideTab from 'components/elements/side-tab'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { Desktop, Mobile } from 'components/containers/show'
import device from 'themes/device'

const TncContainer = styled(Container)`
    padding: 6rem 0;

    @media ${device.tabletL} {
        padding-top: 9rem;
    }
`
export default function TermsAndConditionsHoc(TabPageComponent) {
    const TermsAndConditionsHoc = class extends React.Component {
        render() {
            return (
                <Layout>
                    <SEO
                        title={localize('Terms and conditions')}
                        description={localize(
                            'Read our terms and conditions to learn how we manage our data feeds, security, privacy, and more.',
                        )}
                    />

                    <TncContainer align="left" justify="left">
                        <SideTab is_sticky has_link>
                            <p
                                label="general"
                                text={localize('Terms and conditions')}
                            ></p>
                            <p
                                label="data-feed"
                                text={localize('Data feed')}
                            ></p>
                            <p
                                label="security-privacy"
                                text={localize('Security and privacy')}
                            ></p>
                            <p
                                label="conflict-policy"
                                text={localize('Conflicts policy')}
                            ></p>
                            <p
                                label="copyright"
                                text={localize('Copyright')}
                            ></p>
                            <p
                                label="complaint-dispute"
                                text={localize('Complaints and disputes')}
                            ></p>
                            <p
                                label="risk-disclaimer"
                                text={localize('Risk disclaimer')}
                            ></p>
                            <p
                                label="order-execution"
                                text={localize('Order execution')}
                            ></p>
                            <p
                                label="payment-agent"
                                text={localize('Payment agents')}
                            ></p>
                            <p label="bonuses" text={localize('Bonuses')}></p>
                        </SideTab>
                        <Desktop>
                            <TabPageComponent></TabPageComponent>
                        </Desktop>
                    </TncContainer>
                    <Mobile>
                        <TabPageComponent></TabPageComponent>
                    </Mobile>
                </Layout>
            )
        }
    }
    TermsAndConditionsHoc.displayName = 'TermsAndConditionsHoc'
    return TermsAndConditionsHoc
}
