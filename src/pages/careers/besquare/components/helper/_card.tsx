import React, { useState, ReactElement } from 'react'
import PropTypes from 'prop-types'
import {
    Bullet,
    CardWrapper,
    DropdownWrapper,
    IconWrapper,
    ListContainer,
} from '../../static/style/_card'
import { TextWrapper } from '../../static/style/_common'
import { Minimize, Maximize } from '../../static/images/_what-lies-ahead'

type card_wrapper = {
    grid_template_columns?: string[]
    grid_column_gap?: string[]
    border?: string
    border_radius?: string
    padding?: string[]
}

type icon_wrapper = {
    width?: number | string
    height?: number | string
    margin?: string[]
    grid_area?: string[]
}

type text_wrapper = {
    max_width: string[]
}

type style = {
    text_wrapper: text_wrapper
    icon_wrapper: icon_wrapper
    card_wrapper: card_wrapper
}

type custom_icon = {
    src?: string
    alt?: string
}

type card_content = {
    title?: string
    subtitle?: string
    text?: string | JSX.Element
    src?: string
    content?: string[]
}

type CardProps = {
    title_component?: React.ReactNode
    has_list?: boolean
    custom_icon?: custom_icon
    card_content?: card_content
    style?: style
}

const Card = ({
    card_content,
    custom_icon,
    has_list,
    style,
    title_component,
}: CardProps): ReactElement => {
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

Card.propTypes = {
    card_content: PropTypes.object,
    custom_icon: PropTypes.object,
    has_list: PropTypes.bool,
    style: PropTypes.object,
    title_component: PropTypes.object,
}

export default Card
