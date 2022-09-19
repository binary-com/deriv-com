import React from 'react'
import styled from 'styled-components'
import { ModalFlex } from './leaders'
import { LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import Linkedin from 'images/svg/who-we-are/linkedin.svg'

type ModalPropsType = {
    name: string
    position: string
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

const Modal = ({ name, position, link }: ModalPropsType) => {
    return (
        <ModalFlex
            ai="center"
            direction="column"
            width="unset"
            height="unset"
            padding="0px 16px 5px"
        >
            <Header type="unset" as="h4" padding="0" align="center" size="14px">
                {name}
            </Header>
            <Header as="h4" padding="0" type="sub-paragraph" weight="normal" align="center">
                {position}
            </Header>
            {link && (
                <LocalizedLink external to={link} target="_blank" rel="noopener noreferrer">
                    <StyledLogo width="32px" height="32px" src={Linkedin} alt="" link={link} />
                </LocalizedLink>
            )}
        </ModalFlex>
    )
}

export default Modal
