import React from 'react'
import styled from 'styled-components'
import { Text, ImageWithDireciton } from 'components/elements'
import { Localize, LocalizedLink, localize } from 'components/localization'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import { TString } from 'types/generics'

type LearnMoreProps = {
    text: TString
    to: string
}

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

    @media (max-width: 680px) {
        margin-left: -0.9rem;
    }
`
const Link = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-red);

    &:hover {
        text-decoration: underline;
    }
`
const StyledLink = styled(Text)`
    font-size: 14px;

    @media (max-width: 425px) {
        font-size: 12px;
    }
`

const LearnMore = ({ text, to }: LearnMoreProps) => {
    return (
        <Wrapper className="learn-more">
            <Link to={to}>
                <Item>
                    <StyledLink mr="0.8rem" weight="normal" color="red">
                        <Localize translate_text={text} />
                    </StyledLink>
                    <ImageWithDireciton src={Arrow} alt={localize('_t_arrow right_t_')} />
                </Item>
            </Link>
        </Wrapper>
    )
}

export default LearnMore
