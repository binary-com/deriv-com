import React, { useState } from 'react'
import {
    Bullet,
    CardWrapper,
    DropdownWrapper,
    IconWrapper,
    ListContainer,
} from '../../static/style/_card'
import { TextWrapper } from '../../static/style/_common'
import { Minimize, Maximize } from '../../static/images/_what-lies-ahead'

type CardWrapperProps = {
    grid_template_columns?: string[]
    grid_column_gap?: string[]
    border?: string
    border_radius?: string
    padding?: string[]
}

type TextWrapperProps = {
    max_width: string[]
}

type StyleProps = {
    text_wrapper: TextWrapperProps
    icon_wrapper: React.ReactNode
    card_wrapper: CardWrapperProps
}

type CustomIconProps = {
    src?: string
    alt?: string
}

type CardContentProps = {
    title?: string
    subtitle?: string
    text?: string | JSX.Element
    src?: string
    content?: string[]
}

type CardProps = {
    title_component?: React.ReactNode
    has_list?: boolean
    custom_icon?: CustomIconProps
    card_content?: CardContentProps
    style?: StyleProps
}

const Card = ({ card_content, custom_icon, has_list, style, title_component }: CardProps) => {
    const [is_list_open, setIsListOpen] = useState(false)

    const getCurrentDropdownComponent = () => {
        const DropdownComponent = (
            <DropdownWrapper
                onClick={toggleIsListOpen}
                src={is_list_open ? Minimize : Maximize}
                alt=""
                width="32"
                height="32"
            />
        )
        if (is_list_open) {
            return (
                <React.Fragment>
                    {DropdownComponent}
                    <ListContainer>
                        {card_content.content.map((item, index) => (
                            <React.Fragment key={index}>
                                <Bullet>{'•'}</Bullet>
                                <TextWrapper max_width={['100%']}>{item}</TextWrapper>
                            </React.Fragment>
                        ))}
                    </ListContainer>
                </React.Fragment>
            )
        } else {
            return <React.Fragment>{DropdownComponent}</React.Fragment>
        }
    }

    const toggleIsListOpen = () => {
        setIsListOpen(!is_list_open)
    }

    const { card_wrapper, icon_wrapper, text_wrapper } = style
    return (
        <CardWrapper {...card_wrapper}>
            <IconWrapper {...icon_wrapper} src={custom_icon?.src || card_content.src} alt="" />
            {title_component}
            <TextWrapper {...text_wrapper}>{card_content.text}</TextWrapper>
            {has_list && getCurrentDropdownComponent()}
        </CardWrapper>
    )
}

export default Card
