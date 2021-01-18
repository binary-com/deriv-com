import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Bullet, CardWrapper, DropdownWrapper, IconWrapper, ListContainer } from '../style/_card'
import { TextWrapper } from '../style/_what-lies-ahead'
import { Minimize, Maximize } from '../images/_what-lies-ahead'

const Card = ({ card_content, custom_icon, has_list, style }) => {
    const [is_list_open, setIsListOpen] = useState(false)

    const getCurrentDropdownComponent = () => {
        if (is_list_open) {
            return (
                <React.Fragment>
                    <DropdownWrapper
                        onClick={toggleIsListOpen}
                        src={Minimize}
                        alt="Minimize icon"
                        width="32"
                        height="32"
                    />
                    <ListContainer>
                        {card_content.content.map((item, index) => (
                            <React.Fragment key={index}>
                                <Bullet>{'•'}</Bullet>
                                <TextWrapper
                                    max_width={['100%']}
                                    font_size={['16px', '14px']}
                                    line_height={['24px', '20px']}
                                >
                                    {item}
                                </TextWrapper>
                            </React.Fragment>
                        ))}
                    </ListContainer>
                </React.Fragment>
            )
        } else {
            return (
                <DropdownWrapper
                    onClick={toggleIsListOpen}
                    src={Maximize}
                    alt="Maximize icon"
                    width="32"
                    height="32"
                />
            )
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
}

export default Card
