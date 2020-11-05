import styled from 'styled-components'
import { Flex } from 'components/containers'
import { StyledLink, Text } from 'components/elements'
import device from 'themes/device'

export const ContentTitleWrapper = styled(Text)`
    color: var(--color-black-3);
    padding-top: 80px;
    padding-bottom: 24px;
    text-align: center;

    @media ${device.laptopM} {
        padding-top: 40px;
        padding-bottom: 32px;
        font-size: 24px;
        text-align: left;
    }
`

export const LinkWrapper = styled.div`
    margin-top: ${(props) => (props.first_child == 'true' ? '0.8rem' : '1.6rem')};
`

export const Title = styled(Text)`
    color: var(--color-black-3);
    font-size: 16px;
    font-weight: bold;
`

export const Link = styled(StyledLink)`
    color: var(--color-red);
    font-size: 14px;
    line-height: 1.5;
`

export const GridSubWrapper = styled.div`
    display: grid;
    grid-template-columns: ${props => props.size ? props.size : '12px 90%'};
    margin-top: 8px;

    @media ${device.laptopM} {
        margin-top: 0;
    }
`

export const GridLinkWrapper = styled(Flex)`
    flex-direction: column;
    margin-left: 8px;
`

export const SubLinkWrapper = styled.div`
    margin-top: 8px;

    @media ${device.laptopM} {
        margin-top: 7.2px !important;
    }
`

export const LoginWrapper = styled.a`
    color: var(--color-red);
    font-size: 14px;
    line-height: 1.5;
    text-decoration: none;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`