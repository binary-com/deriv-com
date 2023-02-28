import React, { useEffect, useMemo, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { isBrowser } from 'common/utility'
import { Localize, localize, LocalizedLink } from 'components/localization'
import { SectionContainer, Container } from 'components/containers'
import StepperView from 'components/custom/_stepper_view'
import { Header, QueryImage } from 'components/elements'
import device, { size } from 'themes/device'
import useRegion from 'components/hooks/use-region'
import useBreakpoints from 'components/hooks/use-breakpoints'

const query = graphql`
    query {
        sign_up: file(relativePath: { eq: "deriv-go/create-account.png" }) {
            ...fadeIn
        }
        fund: file(relativePath: { eq: "deriv-go/fund-account.png" }) {
            ...fadeIn
        }
        trading: file(relativePath: { eq: "deriv-go/get-trading.png" }) {
            ...fadeIn
        }
    }
`

const SmallContainer = styled(Container)`
    width: 100%;
    @media ${device.tabletL} {
        width: 90%;
        padding: 0;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 32px;
        padding: 0 35px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`
const StartDerivGo = () => {
    const [is_mobile, setMobile] = useState(false)
    const { is_row } = useRegion()
    const { is_mobile_or_tablet } = useBreakpoints()
    const data = useStaticQuery(query)

    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
    }

    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.mobileL : false)
        window.addEventListener('resize', handleResizeWindow)
    })
    const stepsData: React.ComponentProps<typeof StepperView>['items'] = useMemo(
        () => [
            {
                title: 'Sign in to your Deriv account. If you don’t have one, sign up for free; then create a Deriv real account.',
                image: data['sign_up'],
                alt: <Localize translate_text="Sign in" />,
            },
            {
                title: 'Fund your Deriv real account with your preferred payment method.',
                image: data['fund'],
                alt: <Localize translate_text="Fund your Deriv" />,
            },
            {
                title: 'Download the app and trade anytime, anywhere.',
                image: data['trading'],
                alt: <Localize translate_text="Download the app" />,
            },
        ],
        [data, is_mobile],
    )
    return (
        <SectionContainer tabletL={{ height: 'fit-content', p: '40px 0 0' }}>
            <SmallContainer direction="column">
                <StyledHeader as="h2" type="heading-2" align="center" mb="4rem">
                    {localize('How to get started with Deriv GO')}
                </StyledHeader>
                <StepperView items={stepsData} />
            </SmallContainer>
        </SectionContainer>
    )
}

export default StartDerivGo
