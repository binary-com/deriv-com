import React, { useState } from 'react'
import styled from 'styled-components'
import ResidenceForm from './residence-form'
import PasswordForm from './password/academy-password-form'
import device from 'themes/device'
import { useResidenceList } from 'features/hooks/use-residence-list'

const Card = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`
const ModalCard = styled.div`
    position: relative;
    z-index: 310;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    inline-size: 44rem;
    background: var(--color-white);

    @media ${device.tablet} {
        width: 80%;
    }
`
const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.72);
    z-index: 10;
`
const PopUpMenu = () => {
    const [residence_list] = useResidenceList({})
    const [is_password, setIsPassword] = useState(false)
    const [selected_value, setSelectedValue] = useState({
        country: null,
        citizenship: null,
    })

    return (
        <>
            <Card>
                <ModalCard>
                    {!is_password && (
                        <ResidenceForm
                            residence_list={residence_list}
                            handleNext={() => setIsPassword(true)}
                            selected_value={selected_value}
                            setSelectedValue={setSelectedValue}
                        />
                    )}
                    {is_password && <PasswordForm residence={selected_value.country.symbol} />}
                </ModalCard>

                <Background></Background>
            </Card>
        </>
    )
}

export default PopUpMenu
