import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Bullet,
    CardWrapper,
    DropdownWrapper,
    IconWrapper,
    ListContainer,
    TextWrapper,
} from '../style/_what-lies-ahead'
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
                grid_area={'title'}
            >
                {card_content.title}
            </TextWrapper>
            {is_list_open ? (
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
