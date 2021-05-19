import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'

const content = {
    subscriber: {
        header: <Localize translate_text="How to subscribe to an MT5 signal" />,
    },
    provider: {
        header: <Localize translate_text="How to register as a signals provider" />,
    },
}

const StyledSectionContainer = styled(SectionContainer)`
    padding: 9.1rem 0 8rem 0;
    background-color: ${(props) =>
        props.active_tab === 'signal-subscriber' ? 'var(--color-grey-25)' : 'var(--color-white)'};
    box-shadow: ${(props) =>
        props.active_tab === 'signal-subscriber' ? 'none' : 'inset 0 1px 0 0 var(--color-grey-2);'};

    @media ${device.tabletL} {
        padding: 29px 0 40px 0;
    }
`
const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        width: 90%;
        padding-left: 0;
        padding-right: 0;
    }
`

const StyledHeader = styled(Header)`
    text-align: center;
    font-size: 4.8rem;

    @media ${device.tabletL} {
        margin-bottom: 25px;
        font-size: 32px;
        line-height: 40px;
    }
`

const DMT5Button = styled(LinkButton)`
    margin-top: 2.4rem;
    height: 40px;
    min-width: 204px;
    width: auto;
    padding: 10px 16px;
    font-size: 14px;
    white-space: nowrap;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`

const HowTo = ({ Steps, active_tab }) => {
    return (
        <StyledSectionContainer active_tab={active_tab}>
            <StyledContainer justify="center" direction="column">
                <StyledHeader as="h2">
                    {active_tab === 'signal-subscriber'
                        ? content.subscriber.header
                        : content.provider.header}
                </StyledHeader>
                <Steps active_tab={active_tab} />
                {active_tab === 'signal-provider' && (
                    <DMT5Button
                        secondary="true"
                        external="true"
                        type="mt5"
                        to=""
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {localize('Go to your DMT5 terminal')}
                    </DMT5Button>
                )}
            </StyledContainer>
        </StyledSectionContainer>
    )
}

HowTo.propTypes = {
    active_tab: PropTypes.string,
    Steps: PropTypes.func,
}
export default HowTo
