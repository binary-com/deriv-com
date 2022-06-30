import React from 'react'
import styled from 'styled-components'
import { StepContext } from '.'
import Individual from 'images/svg/partners/individual.svg'
import Selected from 'images/svg/partners/selected.svg'
import Business from 'images/svg/partners/business.svg'

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Text = styled.h4`
    font-size: 14px;
    color: '#333333';
    padding-bottom: 10px;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    padding-left: 24px;
    margin-bottom: 8px;
    position: relative;
    background: #f3f7f7;
    width: 400px;
    height: 80px;
    border: ${(props) => (props.selected ? '1px solid #aad2d8' : '1px solid #ffffff')};
    border-radius: 8px;
    cursor: pointer;
`

const Icon = styled.img`
    width: 48px;
    height: 48px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 12px;
`

const Title = styled.h3`
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
`

const Description = styled.p`
    font-size: 12px;
    line-height: 18px;
`

const SelectedIcon = styled.img`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 16px;
    height: 16px;
`

const FormAccountType = () => {
    const [account_type, setAccountType] = React.useState('')
    const { setEnableNext } = React.useContext(StepContext)

    const clickHandler = (type) => setAccountType(type)

    return (
        <Flex>
            <Text>Choose which plan you would like to subscribe to:</Text>
            <Card
                selected={account_type === 'Individual'}
                onClick={() => {
                    clickHandler('Individual')
                    setEnableNext(true)
                }}
            >
                <Icon src={Individual} alt="individual" />
                <Content>
                    <Title>Individual</Title>
                    <Description>Register as individual enterpreneur</Description>
                </Content>
                {account_type === 'Individual' && <SelectedIcon src={Selected} alt="selected" />}
            </Card>
            <Card
                selected={account_type === 'Business'}
                onClick={() => {
                    clickHandler('Business')
                    setEnableNext(true)
                }}
            >
                <Icon src={Business} alt="Business" />
                <Content>
                    <Title>Business/Corporate</Title>
                    <Description>Register as a company or business unit</Description>
                </Content>
                {account_type === 'Business' && <SelectedIcon src={Selected} alt="selected" />}
            </Card>
        </Flex>
    )
}

export default FormAccountType
