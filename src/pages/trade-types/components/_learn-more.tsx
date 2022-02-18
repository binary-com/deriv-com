import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: -2rem;
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
type LearnMoreProps = {
    text: string | ReactNode
    to: string
}

const LearnMore = ({ text, to }: LearnMoreProps) => {
    return (
        <Wrapper className="learn-more">
            <Link to={to}>
                <Item>
                    <Text mr="0.8rem" weight="bold" color="red">
                        {text}
                    </Text>
                    <img src={Arrow} alt="arrow right" />
                </Item>
            </Link>
        </Wrapper>
    )
}

LearnMore.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    to: PropTypes.string,
}

export default LearnMore
