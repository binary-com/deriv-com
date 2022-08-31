import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Header, Text, LinkText } from 'components/elements'
import { localize } from 'components/localization'
import device from 'themes/device'
// SVG
import Mail from 'images/svg/contact/mail.svg'

const Wrapper = styled(SectionContainer)`
    border-top: 1px solid var(--color-grey-2);
`

const CardContainer = styled(Container)`
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    background: var(--color-white);
    position: relative;
    padding: 4rem 9.5rem;
    justify-content: space-between;

    @media (max-width: 1280px) {
        flex-direction: column;
        height: 406px;
        padding: 4rem 2.4rem;
    }
`

const Item = styled(Flex)`
    max-width: 38.4rem;
    flex-direction: column;
    justify-content: flex-start;
    height: auto;

    @media (max-width: 590px) {
        min-height: 117px;
    }

    @media (max-width: 1280px) {
        max-width: 100%;

        & > * {
            text-align: center;
        }
    }
    @media ${device.mobileL} {
        ${Header} {
            font-size: 24px;
        }
        ${Text} {
            font-size: 16px;
        }
        ${LinkText} {
            font-size: 20px;
        }
    }

    @media ${device.mobileM} {
        ${Text} {
            font-size: 14px;
        }
    }
`

const AbsoluteMail = styled.img`
    position: absolute;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    z-index: 2;
`

const AbsoluteDivider = styled.div`
    position: absolute;
    width: 1px;
    height: 100%;
    left: 50%;
    z-index: 1;
    background: var(--color-grey-2);

    @media (max-width: 1280px) {
        width: 100%;
        height: 1px;
        left: 0;
        top: 50%;
    }
`

export const Affiliates = () => {
    return (
        <Wrapper padding="40px 0">
            <CardContainer>
                <Item>
                    <Header as="h3" type="section-title">
                        {localize('Affiliates')}
                    </Header>
                    <Text m="0.8rem 0">
                        {localize('For enquiries about our affiliate and IB programmes')}
                    </Text>
                    <LinkText
                        color="red"
                        size="var(--text-size-m)"
                        href="mailto:partners@deriv.com"
                        external
                    >
                        partners@deriv.com
                    </LinkText>
                </Item>
                <Item>
                    <Header as="h3" type="section-title">
                        {localize('Business development')}
                    </Header>
                    <Text m="0.8rem 0">{localize('For collaboration opportunities')}</Text>
                    <LinkText
                        color="red"
                        size="var(--text-size-m)"
                        href="mailto:marketing@deriv.com"
                        external
                    >
                        marketing@deriv.com
                    </LinkText>
                </Item>
                <AbsoluteMail src={Mail} alt="mail" />
                <AbsoluteDivider />
            </CardContainer>
        </Wrapper>
    )
}

export default Affiliates
