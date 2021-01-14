import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CardWrapper, DropdownWrapper, IconWrapper, TextWrapper } from '../style/_what-lies-ahead'
import { Minimize, Maximize } from '../images/_what-lies-ahead'

const Card = ({ card_content }) => {
    const [is_list_open, setIsListOpen] = useState(false)

    const toggleIsListOpen = () => {
        setIsListOpen(!is_list_open)
    }

    return (
        <CardWrapper>
            <IconWrapper src={card_content.src} alt={card_content.alt} width="48" height="48" />
            <TextWrapper
                max_width={['100%']}
                font_size={['24px', '18px']}
                line_height={['36px', '26px']}
                font_weight="700"
            >
                {card_content.title}
            </TextWrapper>
            {is_list_open ? (
                <DropdownWrapper
                    onClick={toggleIsListOpen}
                    src={Minimize}
                    alt="Minimize icon"
                    width="32"
                    height="32"
                />
            ) : (
                <DropdownWrapper
                    onClick={toggleIsListOpen}
                    src={Maximize}
                    alt="Maximize icon"
                    width="32"
                    height="32"
                />
            )}
        </CardWrapper>
    )
}

Card.propTypes = {
    card_content: PropTypes.object,
}

export default Card
