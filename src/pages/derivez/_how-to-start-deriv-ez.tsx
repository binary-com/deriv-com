import React, { ReactNode, useState } from 'react'
import styled, { css } from 'styled-components'
import GetStartedStepsSection from './_get-started-steps-section'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
import device from 'themes/device'
import { TString } from 'types/generics'

interface StartDerivEZProps {
    children?: ReactNode
    active?: boolean
    mobile_padding?: string
}

const Section = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    padding: 8rem 12rem;
    align-items: center;
    justify-content: center;

    @media ${device.laptopM} {
        padding: 8rem 6rem;
    }
    @media ${device.tabletS} {
        padding: 40px 0;
        height: auto;
    }
`
const demoActive = css`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    border: unset;

    ${Text} {
        font-weight: bold;
    }
`
const realActive = css`
    box-shadow: unset;

    ${Text} {
        font-weight: unset;
    }
`
const TabItem = styled.div<StartDerivEZProps>`
    padding: 2.4rem 4rem;
    width: fit-content;
    height: 8.4rem;
    border-radius: 4px;
    border: solid 1px rgba(51, 51, 51, 0.1);
    cursor: pointer;
    ${(props) => (props.active ? demoActive : realActive)}

    @media ${device.tabletS} {
        padding: 17px 20px;
    }
    @media ${device.mobileL} {
        max-width: 164px;
        width: 100%;
        padding: ${(props) => props.mobile_padding};
    }
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 24px;
        margin-bottom: 24px;
        padding: 0 16px;
    }
`
const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const demo_title: TString = '_t_Demo account _t_'
const real_title: TString = '_t_Real money account_t_'
const heading: TString = '_t_How to get started with a Deriv EZ account_t_'

const StartDerivEZ = () => {
    const [tab, setTab] = useState('demo')

    const onTabClick = (chosenTab: string) => {
        setTab(chosenTab)
    }

    return (
        <Section>
            <StyledHeader align="center" mb="4rem" as="h2" type="page-title">
                <Localize translate_text={heading} />
            </StyledHeader>
            <Flex mb="0" p="0 16px" tablet={{ mb: '0', height: 'unset' }}>
                <TabItem
                    mobile_padding="21px 12px"
                    active={tab === 'demo'}
                    onClick={() => onTabClick('demo')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        <Localize translate_text={demo_title} />
                    </StyledText>
                </TabItem>
                <TabItem
                    mobile_padding="12px 24px"
                    active={tab === 'real'}
                    onClick={() => onTabClick('real')}
                >
                    <StyledText size="var(--text-size-m)" align="center">
                        <Localize translate_text={real_title} />
                    </StyledText>
                </TabItem>
            </Flex>
            <GetStartedStepsSection chosen_tab={tab} is_demo={tab === 'demo'} />
        </Section>
    )
}

export default StartDerivEZ
