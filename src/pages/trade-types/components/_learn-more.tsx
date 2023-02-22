import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Text, ImageWithDireciton } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import Arrow from 'images/svg/trade-types/arrow-right.svg'

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    bottom: -2rem;
    width: 100%;
    opacity: 1;
    transition: opacity 0.25s;
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    margin-bottom: 3rem;
    padding: 0.8rem 2.6rem;
    width: fit-content;
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
                    <Text mr="0.8rem" weight="normal" color="red">
                        {text}
                    </Text>
                    <ImageWithDireciton src={Arrow} alt="arrow right" />
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
