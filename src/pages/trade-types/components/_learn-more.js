import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import Arrow from 'images/svg/arrow-right.svg'

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: -2.4rem;
    width: 100%;
    opacity: 0;
    transition: opacity 0.25s;

    @media (max-width: 680px) {
        opacity: 1;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    background: var(--color-grey-18);
    padding: 0.8rem 1.6rem;
    width: fit-content;
    margin: 0 auto;
`

const Link = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-red);

    &:hover {
        text-decoration: underline;
    }
`

const LearnMore = ({ text, to }) => {
    return (
        <Wrapper className="learn-more">
            <Link to={to}>
                <Item>
                    <Text mr="0.8rem" weight="bold" color="red">
                        {text}
                    </Text>
                    <Arrow />
                </Item>
            </Link>
        </Wrapper>
    )
}

LearnMore.propTypes = {
    text: PropTypes.string,
    to: PropTypes.string,
}

export default LearnMore
