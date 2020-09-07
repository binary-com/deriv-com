import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header, Text, Card, LocalizedLinkText } from 'components/elements'
import { localize } from 'components/localization'
import Arrow from 'images/svg/arrow-right.svg'

const CustomLinkWrap = styled.div`
    display: block;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    margin-top: 5px;
`

const CustomWrap = styled.div`
    display: block;
    transition: all 0.2s ease-in;
`

const LogoDiv = styled.div`
    text-align: center;
`

const StyledCard = styled(Card)`
    max-width: 28.2rem;
    margin: 0 2.4rem;
    padding: 6.4rem 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    box-shadow: none;
    border: 1px solid var(--color-grey-2);

    &:hover {
        border: none;
        border-radius: 8px;
        box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

        ${CustomWrap} {
            margin-bottom: 20px;
            transition-duration: 0.2s;
        }
        ${CustomLinkWrap} {
            visibility: visible;
            opacity: 1;
        }
    }
    &:nth-child(4) {
        margin-right: unset;
    }
    ${Text} {
        font-size: 1.4rem;
    }
    ${Header} {
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
        margin-top: 2.4rem;
    }
`

const StyledLinkText = styled(LocalizedLinkText)`
    display: flex;
    align-items: center;

    &:hover {
        color: var(--color-red);
        text-decoration: none;
    }
    span {
        margin-right: 8px;
    }
`

const TradeTypesCard = ({ icon, title, description, link, linkTitle }) => {
    return (
        <StyledCard>
            <CustomWrap>
                <LogoDiv>{icon}</LogoDiv>
                <Header>{title}</Header>
                <Text>{description}</Text>
            </CustomWrap>
            <CustomLinkWrap>
                <StyledLinkText
                    ariaLabel={linkTitle}
                    weight="bold"
                    color="red"
                    mt="16px"
                    size="16px"
                    to={link}
                >
                    <span>{localize('Learn more')}</span> <Arrow />
                </StyledLinkText>
            </CustomLinkWrap>
        </StyledCard>
    )
}

TradeTypesCard.propTypes = {
    description: PropTypes.any,
    icon: PropTypes.any,
    link: PropTypes.any,
    linkTitle: PropTypes.any,
    title: PropTypes.any,
}

export default TradeTypesCard
