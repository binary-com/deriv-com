import React from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import DxFinancialIcon from 'images/svg/deriv-x/dxfinancial.svg'
import DxSyntheticIcon from 'images/svg//deriv-x/dxsynthetic.svg'
import device from 'themes/device'

const StyledIcon = styled.img`
    width: 48px;
    height: 48px;

    @media ${device.mobileL} {
        width: 24px;
        height: 24px;
    }
`

const content = [
    {
        header: <Localize translate_text="Synthetic" />,
        text: (
            <Localize translate_text="Trade our exclusive, proprietary synthetic indices 24/7, which simulate real-world market movements." />
        ),
        icon: <StyledIcon src={DxSyntheticIcon} alt="synthetic icon" />,
    },
    {
        header: <Localize translate_text="Financial" />,
        text: (
            <Localize translate_text="Trade forex, commodities and cryptocurrencies at high leverage." />
        ),
        icon: <StyledIcon src={DxFinancialIcon} alt="financial icon" />,
    },
]
const Section = styled(SectionContainer)`
    display: flex;
    padding: 8rem 12rem;
    justify-content: center;
    flex-direction: column;

    @media ${device.tablet} {
        padding: 40px 16px;
    }
`
const ClientCard = styled.article`
    margin-left: 2rem;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 38.4rem;
    padding: 3.2rem 2.4rem 4rem;
    position: relative;

    :first-child {
        margin: 0;
    }
    @media ${device.laptopM} {
        min-height: 22rem;
        height: 100%;
    }
    @media ${device.tablet} {
        margin: 0 0 24px 0;
        max-height: unset;
        padding: 24px 24px 24px;
        max-width: 328px;

        :first-child {
            margin: 0 0 24px 0;
        }
    }
`
const StyledLinkButton = styled(LinkButton)`
    display: inline-flex;
    align-items: center;
    padding: 10px 16px;
    height: 40px;
    border: unset;
    width: auto;
    margin: auto;
`
const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: ${(props) => props.mobile_font_size};
        margin: ${(props) => props.mobile_margin};
    }
`
const StyledText = styled(Text)`
    margin-top: 8px;

    @media ${device.mobileL} {
        font-size: 16px;
        line-height: 24px;
    }
`

const Accounts = () => {
    return (
        <Section>
            <StyledHeader
                mobile_font_size="32px"
                mobile_margin="0 0 24px"
                align="center"
                as="h2"
                type="page-title"
                mb="4rem"
            >
                {localize('2 accounts to choose from')}
            </StyledHeader>
            <Flex mb="4rem" tablet_direction="column" tablet_ai="center" tablet={{ m: '0' }}>
                {content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex height="unset" ai="flex-end" mobileL={{ mb: '8px' }}>
                                <StyledHeader
                                    mobile_margin="unset"
                                    mobile_font_size="20px"
                                    as="h4"
                                    type="sub-section-title"
                                >
                                    {item.header}
                                </StyledHeader>
                                {item.icon}
                            </Flex>
                            <StyledText>{item.text}</StyledText>
                        </ClientCard>
                    )
                })}
            </Flex>

            {/* TODO: Update link once available in deriv app */}
            <StyledLinkButton
                external
                type="derivx"
                secondary="true"
                target="_blank"
                rel="nofollow noopener noreferrer"
            >
                {localize('Go to Deriv X dashboard')}
            </StyledLinkButton>
        </Section>
    )
}

export default Accounts
