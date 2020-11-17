import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Localize, localize } from 'components/localization'
import { Container, Flex, SectionContainer } from 'components/containers'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import Info from 'images/svg/trade-types/info.svg'

const content = {
    subscriber: {
        header: localize('How to subscribe to an MT5 signal'),
        notice: (
            <Localize
                translate_text="<0>Note:</0> For a wider selection of signal providers for Deriv, go to <1>MQL5 showcase page</1> and search for <0>Deriv</0> under the <0>Broker</0> server field."
                components={[
                    <strong key={0} />,
                    <LocalizedLinkText
                        to="/"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={1}
                    />,
                ]}
            />
        ),
    },
    provider: {
        header: localize('How to register as a signals provider'),
        notice: (
            <Localize
                translate_text="<0>Note:</0> You need to upgrade your MQL5 account to seller status to be able to add a signal. If you’ve not upgraded yet, <1>follow the steps on this page</1> to register as a seller."
                components={[
                    <strong key={0} />,
                    <LocalizedLinkText
                        to="/"
                        color="red"
                        target="_blank"
                        rel="noopener noreferrer"
                        size={16}
                        key={1}
                    />,
                ]}
            />
        ),
    },
}

const StyledSectionContainer = styled(SectionContainer)`
    padding: 9.1rem 0 7.7rem 0;
    background-color: ${(props) =>
        props.active_tab === 'signal-subscriber' ? 'var(--color-grey-25)' : 'var(--color-white)'};
    box-shadow: ${(props) =>
        props.active_tab === 'signal-subscriber'
            ? 'none'
            : 'inset 1px 0 0 1px var(--color-grey-2);'};

    @media ${device.tabletL} {
        padding: 29px 0 40px 0;
    }
`

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 4.8rem;

    @media ${device.tabletL} {
        margin-bottom: 17px;
        font-size: 24px;
    }
`

const NoticeWrapper = styled(Flex)`
    max-width: 580px;
    margin: 4rem 0 0 2.4rem;
    align-self: flex-start;

    @media ${device.tabletL} {
        max-width: 100%;
        margin: 32px 0 0 0;
        justify-content: flex-start;
    }
`

const StyledInfo = styled(Info)`
    margin-right: 16px;

    @media ${device.tabletL} {
        margin-right: 8px;
        margin-left: 16px;
    }
`

const StyledText = styled(Text)`
    font-size: 1.6rem;
    line-height: 2.4rem;
    max-width: 52.2rem;

    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
        max-width: 90%;
    }
    @media ${device.tabletS} {
        max-width: 85%;
    }
    @media ${device.mobileM} {
        max-width: 80%;
    }
`

const DMT5Button = styled(LinkButton)`
    margin-top: 4rem;
    height: 40px;
    padding: 10px 16px;
    font-size: 14px;
    white-space: nowrap;

    @media ${device.tabletL} {
        margin-top: 32px;
    }
`

const HowTo = ({ Steps, active_tab }) => {
    return (
        <StyledSectionContainer active_tab={active_tab}>
            <Container justify="center" direction="column">
                <StyledHeader as="h2">
                    {active_tab === 'signal-subscriber'
                        ? content.subscriber.header
                        : content.provider.header}
                </StyledHeader>
                <Steps active_tab={active_tab} />
                <NoticeWrapper>
                    <StyledInfo />
                    <StyledText>
                        {active_tab === 'signal-subscriber'
                            ? content.subscriber.notice
                            : content.provider.notice}
                    </StyledText>
                </NoticeWrapper>
                {active_tab === 'signal-provider' && (
                    <DMT5Button to="/" secondary="true">
                        {localize('Go to your DMT5 terminal')}
                    </DMT5Button>
                )}
            </Container>
        </StyledSectionContainer>
    )
}

HowTo.propTypes = {
    active_tab: PropTypes.string,
    Steps: PropTypes.func,
    title: PropTypes.object,
}
export default HowTo
