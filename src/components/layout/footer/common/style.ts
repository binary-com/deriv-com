import styled, { css } from 'styled-components'
import { Container, CssGrid, Flex } from 'components/containers'
import { StyledLink, Text } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

type DefaultFooterProps = {
    is_eu_country?: boolean
    has_banner_cookie?: boolean
}

type DisclaimerParagraphProps = {
    no_margin?: boolean
    has_line_height?: boolean
}

export const DefaultFooter = styled.footer<DefaultFooterProps>`
    background-color: var(--color-grey-25);
    width: 100%;
    margin: 0 auto;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    margin-bottom: ${(props) => props.is_eu_country && '7.3rem'};
    padding-bottom: 1.6rem;

    @media (max-width: 1090px) {
        margin-bottom: ${({ is_eu_country }) => is_eu_country && '9rem'};
    }
    @media (max-width: 991px) {
        margin-bottom: ${({ is_eu_country }) => is_eu_country && '11rem'};
    }
    @media (max-width: 826px) {
        margin-bottom: ${({ is_eu_country }) => is_eu_country && '12.2rem'};
    }
    @media (max-width: 710px) {
        margin-bottom: ${({ is_eu_country }) => is_eu_country && '10.6rem'};
    }
    @media (max-width: 538px) {
        margin-bottom: ${({ is_eu_country }) => is_eu_country && '13.8rem'};
    }

    ${Container} {
        @media ${device.tabletL} {
            width: 100%;
        }
    }

    @media ${device.mobileL} {
        padding-bottom: 6rem;

        @media ${device.tabletL} {
            padding-bottom: 0;
        }
    }
`
export const FooterGrid = styled(CssGrid)`
    width: 100%;
    grid-template-columns: 2fr;
    grid-template-areas:
        'logo logo'
        'links links'
        'disclaimer disclaimer'
        'copyright social'
        'copyright eulogowrapper';

    @media ${device.tabletL} {
        grid-template-columns: 1fr;
        grid-template-areas:
            'logo'
            'links'
            'social'
            'disclaimer'
            'eulogowrapper'
            'copyright';
    }
`
export const DerivLogoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: logo;
    background: var(--color-grey-25);
    padding: 4rem 0 2rem 0;

    @media ${device.tabletL} {
        margin-left: 2rem;
    }
`
export const LinksWrapper = styled.div`
    grid-area: links;
    background: var(--color-grey-25);
    padding: 0.8rem 0 2.4rem 0;
    border-bottom: 1px solid var(--color-grey-26);
    border-top: 2px solid var(--color-grey-26);

    @media ${device.tabletL} {
        padding: 0;
    }
`

export const LinksCol = styled(Flex)`
    flex-direction: column;
    width: fit-content;
    min-width: 100px;
    margin-right: 40px;

    :last-child {
        margin-right: 0;
    }

    @media (min-width: 993px) and (max-width: 1050px) {
        min-width: 0;
        max-width: 100px;
    }
`

export const Title = styled(Text)`
    color: var(--color-black-6);
    font-weight: bold;
`
export const Link = styled(StyledLink)`
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    line-height: 1.5;
`
export const AcademyWrapper = styled.div`
    color: var(--color-red-1);
    font-size: var(--text-size-xs);
    line-height: 1.5;
    margin-top: 10px;
`

export const LinkWrapper = styled.div`
    margin-top: 1.6rem;

    @media ${device.laptopM} {
        ${Title} {
            font-size: var(--text-size-xs);
        }
        ${Link} {
            font-size: var(--text-size-xs);
        }
    }

    :nth-child(2) {
        margin-top: 0.8rem;
    }
`
export const DisclaimerWrapper = styled.div`
    grid-area: disclaimer;
    background: var(--color-grey-25);
`
export const DisclaimerParagraph = styled(Text)<DisclaimerParagraphProps>`
    font-size: var(--text-size-xs);
    margin-top: ${(props) => (props.no_margin ? '0' : '2rem')};

    @media ${device.tabletL} {
        width: 90%;
        margin: 16px auto 0;
        font-size: 12px;
        line-height: ${({ has_line_height }) => (has_line_height ? '21px' : '18px')};
    }
`
export const shared_css = css`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    text-decoration: none;

    :hover {
        text-decoration: underline;
    }
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
export const StaticAsset = styled.a`
    ${shared_css}
`
export const StaticAssetLink = styled(LocalizedLink)`
    ${shared_css}
`
export const RiskWarning = styled.div`
    background-color: var(--color-grey-28);
    border-left: 4px solid var(--color-grey-27);
    padding: 1.6rem;
    margin-top: 2rem;

    @media ${device.tabletL} {
        border-top: 2px solid var(--color-grey-27);
        border-left: none;
        width: 90%;
        margin: 24px 16px 0;
        padding: 0 8px 16px;

        p {
            padding: 0;
            width: 100%;
        }
    }
`

export const BoldLink = styled(StyledLink)`
    font-weight: bold;
    color: var(--color-black-3);
    font-size: var(--text-size-xs);
    @media ${device.tabletL} {
        font-size: 12px;
    }
`
export const CopyrightWrapper = styled(Flex)`
    grid-area: copyright;
    background: var(--color-grey-25);
    justify-content: flex-start;
    align-items: center;

    p {
        font-size: var(--text-size-xs);
        line-height: 1.14;
        padding: 2rem 0;
    }

    @media ${device.tabletL} {
        width: 90%;
        margin: 0 auto;
        padding: 2rem 0;
        justify-content: center;

        p {
            font-size: 1.75rem;
            line-height: 1.5;
        }
    }
`
export const EuLogoWrapper = styled(Flex)`
    grid-area: eulogowrapper;
`
export const SocialWrapper = styled.div`
    grid-area: social;
    background: var(--color-grey-25);
    margin: 1.6rem 0;

    img {
        margin-left: 1.6rem;
    }

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin: 3rem 0 1rem;

        a:first-child {
            img {
                margin-left: 0;
            }
        }
    }
`

export const StyledMgaLogo = styled.img`
    margin-right: 2.4rem;
`
export const StyledLogo = styled.img`
    width: 18.2rem;
`
