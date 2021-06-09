import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { EuLogoWrapper, StyledCoatArms, StyledGamstop, StyledMgaLogo } from './common/style.js'
import { LocalizedLink } from 'components/localization'
import { QueryImage } from 'components/elements'
import { Flex, Show } from 'components/containers'
import {
    mga_link_url,
} from 'common/constants'
//EU icons
import Gamstop from 'images/svg/gamstop.svg'
import MgaLogo from 'images/svg/mga-logo.svg'
import Over18 from 'images/svg/over-18.svg'

const query = graphql`
query {
    iom: file(relativePath: { eq: "isle-of-man-coat-of-arms.png" }) {
        ...fadeIn
    }
}
`
const AdditionalEUSection = () => {
    const image_query = useStaticQuery(query)

    return (
        <Show.Eu>
            <Show.Desktop>
                <EuLogoWrapper mt="1rem" ai="center">
                    <LocalizedLink
                        external="true"
                        to="https://www.gamstop.co.uk"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledGamstop src={Gamstop} alt="gamstop desktop" />
                    </LocalizedLink>
                    <LocalizedLink
                        external="true"
                        to="https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledCoatArms>
                            <QueryImage
                                data={image_query.iom}
                                alt={'IOM'}
                                width="6.4rem"
                                height="auto"
                            />
                        </StyledCoatArms>
                    </LocalizedLink>
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
                    <LocalizedLink
                        external="trues"
                        to="https://www.gov.im/categories/business-and-industries/gambling-and-e-gaming/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <StyledCoatArms>
                            <QueryImage
                                data={image_query.iom}
                                alt={'IOM'}
                                width="6.4rem"
                                height="auto"
                            />
                        </StyledCoatArms>
                    </LocalizedLink>
                    <Flex fd="column" width="auto">
                        <LocalizedLink
                            external="true"
                            to={mga_link_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <StyledMgaLogo src={MgaLogo} alt="mga logo" />
                        </LocalizedLink>
                        <LocalizedLink
                            external="true"
                            to="https://www.gamstop.co.uk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <StyledGamstop src={Gamstop} alt="gamstop mobile" />
                        </LocalizedLink>
                    </Flex>
                    <img src={Over18} alt="over18 mobile" />
                </EuLogoWrapper>
            </Show.Mobile>
        </Show.Eu>
    )
}

export default AdditionalEUSection;