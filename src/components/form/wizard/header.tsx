import React from 'react'
import styled from 'styled-components'
import CloseSVG from 'images/svg/custom/close-2.svg'

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 24px;
    border-bottom: 1px solid var(--color-grey-43);
    gap: 10px;
`

const CloseButton = styled.img`
    &:hover {
        cursor: pointer;
    }
`

const Title = styled.h2`
    font-size: 16px;
    font-weight: 700;
    padding-top: 4px;
    color: '#333333';
`

type HeaderProps = {
    title: string
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({ title, setShow }: HeaderProps) => {
    return (
        <StyledHeader>
            <Title>{title}</Title>
            <CloseButton src={CloseSVG} onClick={() => setShow(false)} />
        </StyledHeader>
    )
}

export default Header
