import React from 'react'
import { EuLogoWrapper, StyledMgaLogo } from './common/style.js'
import { LocalizedLink } from 'components/localization'
import { Flex, Show } from 'components/containers'
import { mga_link_url } from 'common/constants'
//EU icons
import MgaLogo from 'images/svg/layout/mga-logo.svg'
import Over18 from 'images/svg/layout/over-18.svg'

const AdditionalEUSection = () => {
    return (
        <Show.Eu>
            <Show.Desktop>
                <EuLogoWrapper mt="1rem" ai="center">
                    <LocalizedLink
                        external="true"
                        to={mga_link_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledMgaLogo src={MgaLogo} alt="mga logo desktop" />
                    </LocalizedLink>
                    <img src={Over18} alt="over18 desktop" />
                </EuLogoWrapper>
            </Show.Desktop>
            <Show.Mobile>
                <EuLogoWrapper mt="1rem" ai="center">
                    <Flex fd="column" width="auto">
                        <LocalizedLink
                            external="true"
                            to={mga_link_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <StyledMgaLogo src={MgaLogo} alt="mga logo" />
                        </LocalizedLink>
                    </Flex>
                    <img src={Over18} alt="over18 mobile" />
                </EuLogoWrapper>
            </Show.Mobile>
        </Show.Eu>
    )
}

export default AdditionalEUSection
