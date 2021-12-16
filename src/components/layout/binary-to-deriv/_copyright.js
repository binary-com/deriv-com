import React from 'react'
import styled from 'styled-components'
import { Localize, LocalizedLink } from 'components/localization'
import CopyrightIc from 'images/svg/layout/copyright.svg'
import { Text } from 'components/elements'
import { Flex } from 'components/containers'
import device from 'themes/device'
//EU icons
import MgaLogo from 'images/svg/layout/mga-logo.svg'
import Over18 from 'images/svg/layout/over-18.svg'

const Wrapper = styled(Flex)`
    height: 48px;
    margin: 16px 0;
    justify-content: space-between;
    align-items: center;

    @media ${device.tabletL} {
        flex-direction: column-reverse;
        justify-content: center;
        height: 100%;
    }
`
const CopyrightWrapper = styled(Flex)`
    align-items: center;
    justify-content: flex-start;

    p {
        font-size: var(--text-size-xs);
        line-height: 1.14;
    }

    @media ${device.tabletL} {
        justify-content: center;
    }
`
const LogoWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;
`
const LeftLogo = styled(LocalizedLink)`
    display: flex;
    align-items: center;
`
const StyledMgaLogo = styled.img`
    margin-right: 2.4rem;
`
const StyledOver18Logo = styled.img`
    width: 48px;
    height: 48px;
`

const CopyrightSection = () => {
    const current_year = new Date().getFullYear()

    return (
        <Wrapper>
            <CopyrightWrapper>
                <img src={CopyrightIc} alt="copyright ic" width="16" height="16" />
                <Text ml="0.4rem">
                    <Localize
                        translate_text="{{current_year}} Deriv | All rights reserved"
                        values={{ current_year }}
                    />
                </Text>
            </CopyrightWrapper>
            <Flex jc="flex-end" tabletL={{ jc: 'center', mt: '34px', mb: '34px' }}>
                <LogoWrapper>
                    <LeftLogo
                        to="https://authorisation.mga.org.mt/verification.aspx?lang=EN&company=a5fd1edc-d072-4c26-b0cd-ab3fa0f0cc40&details=1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledMgaLogo src={MgaLogo} alt="mga logo desktop" />
                    </LeftLogo>
                    <StyledOver18Logo src={Over18} alt="over18 desktop" />
                </LogoWrapper>
            </Flex>
        </Wrapper>
    )
}

export default CopyrightSection
