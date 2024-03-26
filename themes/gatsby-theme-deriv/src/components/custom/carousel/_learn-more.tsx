import React from 'react'
import styled from 'styled-components'
import { Text, ImageWithDireciton } from 'components/elements'
import { Localize, LocalizedLink } from 'components/localization'
import Arrow from 'images/svg/trade-types/arrow-right.svg'
import device from 'themes/device'
import { TString } from 'types/generics'

type LearnMoreProps = {
    text: TString
    to: string
    in_trading_platforms?: boolean
}

const Wrapper = styled.div<{ in_trading_platforms?: boolean }>`
    position: absolute;
    left: ${(props) => (props.in_trading_platforms ? '9rem' : '0')};
    bottom: -2rem;
    width: auto;
    opacity: 0;
    transition: opacity 0.25s;

    @media ${device.tabletL} {
        opacity: 1;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 23px;
    background: var(--color-grey-45);
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

const LinkTitle = styled(Text)`
    font-family: Ubuntu, sans-serif;
`

const LearnMore = ({ text, to, in_trading_platforms }: LearnMoreProps) => {
    return (
        <Wrapper in_trading_platforms={in_trading_platforms} className="learn-more">
            <Link to={to}>
                <Item>
                    <LinkTitle mr="0.8rem" weight="bold" color="red">
                        <Localize translate_text={text} />
                    </LinkTitle>
                    <ImageWithDireciton src={Arrow} alt="arrow right" />
                </Item>
            </Link>
        </Wrapper>
    )
}

export default LearnMore
