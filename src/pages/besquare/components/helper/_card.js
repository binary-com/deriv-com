import React, { useState } from 'react'
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

const Card = ({ card_content, custom_icon, has_list, style, title_component }) => {
    const [is_list_open, setIsListOpen] = useState(false)

    const getCurrentDropdownComponent = () => {
        const DropdownComponent = (
            <DropdownWrapper
                onClick={toggleIsListOpen}
                src={is_list_open ? Minimize : Maximize}
                alt={`${() => (is_list_open ? 'Minimize' : 'Maximize')} icon`}
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
            <IconWrapper
                {...icon_wrapper}
                src={custom_icon?.src || card_content.src}
                alt={custom_icon?.alt || card_content.alt}
            />
            {title_component && title_component}
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
