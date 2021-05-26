import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header, Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'
import Arrow from 'images/svg/arrow-right.svg'

const CustomLinkWrap = styled.div`
    display: flex;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s ease-in;
    margin-top: 5px;
    align-items: center;
`

const CustomWrap = styled.div`
    display: block;
    transition: transform 0.2s ease-in;
`

const LogoDiv = styled.div`
    text-align: center;
`

const StyledText = styled(Text)`
    text-align: center;
    font-size: 1.6rem;
`

const StyledCard = styled(LocalizedLink)`
    max-width: 28.2rem;
    margin: 0 1.2rem;
    padding: 6.4rem 2.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
    box-shadow: none;
    border: 1px solid var(--color-grey-2);
    border-radius: 8px;
    text-decoration: none;

    &:hover {
        border-color: var(--color-white);
        box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);

        ${CustomWrap} {
            transform: translateY(-10px);
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
        font-size: 1.6rem;
    }
    ${Header} {
        text-align: center;
        font-size: 2.4rem;
        margin-bottom: 0.8rem;
        margin-top: 2.4rem;
    }
`

const TradeTypesCard = ({ icon, title, description, link, linkTitle }) => {
    return (
        <StyledCard aria_label={linkTitle} to={link}>
            <CustomWrap>
                <LogoDiv>{icon}</LogoDiv>
                <Header>{title}</Header>
                <StyledText>{description}</StyledText>
            </CustomWrap>
            <CustomLinkWrap>
                <Text weight="bold" mr="0.8rem" color="red">
                    {localize('Learn more')}
                </Text>{' '}
                <img src={Arrow} alt="arrow" width="16" height="16" />
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
