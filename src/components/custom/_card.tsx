import React from 'react'
import styled from 'styled-components'
import Selected_svg from 'images/svg/selected.svg'

type CardProps = {
    icon: string
    title: string
    description: string
    selected?: boolean
}

const StyledCard = styled.div<{ selected: boolean }>`
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

const Card = ({ icon, title, description, selected }: CardProps) => {
    const [is_selected, setIsSelected] = React.useState(false)
    const clickHandler = () => setIsSelected(true)

    React.useEffect(() => {
        if (selected) {
            setIsSelected(selected)
        }
    }, [selected])

    return (
        <StyledCard selected={is_selected} onClick={clickHandler}>
            <Icon src={icon} alt={title} />
            <Content>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Content>
            {is_selected && <SelectedIcon src={Selected_svg} alt="selected" />}
        </StyledCard>
    )
}

export default Card
