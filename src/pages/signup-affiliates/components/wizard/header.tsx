import React from 'react'
import styled from 'styled-components'
import { Localize } from 'components/localization'
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
    color: var(--color-black-3);
`

const Header = ({
    setShowWizard,
}: {
    setShowWizard: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <StyledHeader>
            <Title>
                <Localize translate_text="_t_Add an affiliate account_t_" />
            </Title>
            <CloseButton src={CloseSVG} onClick={() => setShowWizard(false)} />
        </StyledHeader>
    )
}

export default Header
