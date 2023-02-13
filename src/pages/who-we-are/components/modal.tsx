import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Flex } from 'components/containers'
import { LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import Linkedin from 'images/svg/who-we-are/linkedin.svg'
import device from 'themes/device'

type ModalPropsType = {
    name: string
    position: ReactElement
    link?: string
}

type StyledLogoType = {
    link: string
}

const StyledLogo = styled.img<StyledLogoType>`
    width: 32px;
    height: 32px;
    filter: grayscale(100%);

    &:hover {
        filter: ${(props) => (props.link ? 'unset' : 'grayscale(100%)')};
    }
`
const ModalFlex = styled(Flex)`
    position: absolute;
    top: 130px;
    background-color: white;
    padding: 8px 16px 6px;
    z-index: 1;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0 4px 15px;
    white-space: pre;
    width: fit-content;
    @media ${device.tablet} {
        top: 124px;
    }
    @media ${device.tabletS} {
        top: 108px;
    }
    @media ${device.mobileL} {
        top: 93px;
    }
`

const Modal = ({ name, position, link }: ModalPropsType) => {
    return (
        <ModalFlex ai="center" direction="column" width="unset" height="unset" p="0px 16px 5px">
            <Header type="unset" as="h4" padding="0" align="center" size="14px">
                {name}
            </Header>
            <Header as="h4" padding="0" type="sub-paragraph" weight="normal" align="center">
                {position}
            </Header>
            {link && (
                <LocalizedLink
                    external
                    to={process.env.STRAPI_URL + link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <StyledLogo width="32px" height="32px" src={Linkedin} alt="" link={link} />
                </LocalizedLink>
            )}
        </ModalFlex>
    )
}

export default Modal
