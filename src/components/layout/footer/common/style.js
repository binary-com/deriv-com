import styled, { css } from 'styled-components'
import { Container, CssGrid, Flex } from 'components/containers'
import { StyledLink, Text } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'

export const DefaultFooter = styled.footer`
    background-color: var(--color-grey-25);
    inline-size: 100%;
    margin-block: 0;
    margin-inline: auto;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    margin-block-end: ${(props) => props.is_eu_country && '7.3rem'};
    padding-block-end: 1.6rem;

    @media (max-width: 1090px) {
        margin-block-end: ${(props) => props.is_eu_country && '9rem'};
    }
    @media (max-width: 991px) {
        margin-block-end: ${(props) => props.is_eu_country && '11rem'};
    }
    @media (max-width: 826px) {
        margin-block-end: ${(props) => props.is_eu_country && '12.2rem'};
    }
    @media (max-width: 710px) {
        margin-block-end: ${(props) => props.is_eu_country && '10.6rem'};
    }
    @media (max-width: 538px) {
        margin-block-end: ${(props) => props.is_eu_country && '13.8rem'};
    }

    ${Container} {
        @media ${device.tabletL} {
            inline-size: 100%;
        }
    }

    @media ${device.mobileL} {
        padding-block-end: 6rem;

        @media ${device.tabletL} {
            padding-block-end: 0;
        }
    }
`
export const FooterGrid = styled(CssGrid)`
    inline-size: 100%;
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
    padding-block-start: 4rem;
    padding-block-end: 2rem;
    padding-inline: 0;

    @media ${device.tabletL} {
        margin-inline-start: 2rem;
    }
`
export const LinksWrapper = styled.div`
    grid-area: links;
    background: var(--color-grey-25);
    padding-block-start: 0.8rem;
    padding-block-end: 2.4rem;
    padding-inline: 0;
    border-block-end: 1px solid var(--color-grey-26);
    border-block-start: 2px solid var(--color-grey-26);

    @media ${device.tabletL} {
        padding-inline: 0;
        padding: 0;
    }
`

export const LinksCol = styled(Flex)`
    flex-direction: column;
    inline-size: fit-content;
    min-inline-size: 100px;
    margin-inline-end: 40px;

    :last-child {
        margin-inline-end: 0;
    }

    @media (min-width: 993px) and (max-width: 1050px) {
        min-inline-size: 0;
        max-inline-size: 100px;
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
    margin-block-start: 10px;
`

export const LinkWrapper = styled.div`
    margin-block-start: 1.6rem;

    @media ${device.laptopM} {
        ${Title} {
            font-size: var(--text-size-xs);
        }
        ${Link} {
            font-size: var(--text-size-xs);
        }
    }

    :nth-child(2) {
        margin-block-start: 0.8rem;
    }
`
export const DisclaimerWrapper = styled.div`
    grid-area: disclaimer;
    background: var(--color-grey-25);
`
export const DisclaimerParagraph = styled(Text)`
    font-size: var(--text-size-xs);
    margin-block-start: ${(props) => (props.no_margin ? '0' : '2rem')};

    @media ${device.tabletL} {
        width: 90%;
        margin-block-start: 16px;
        margin-block-end: 0;
        margin-inline: 0;
        font-size: 12px;
        line-height: ${(props) => (props.line_height ? '21px' : '18px')};
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
    border-inline-start: 4px solid var(--color-grey-27);
    padding-inline: 1.6rem;
    padding-block: 1.6rem;
    margin-block-start: 2rem;

    @media ${device.tabletL} {
        border-block-start: 2px solid var(--color-grey-27);
        border-left: none;
        inline-size: 90%;
        margin-block-start: 24px;
        margin-block-end: 0;
        margin-inline: 16px;
        padding-block-start: 0;
        padding-block-end: 16px;
        padding-inline: 8px;

        p {
            padding-inline: 0;
            padding-block: 0;
            inline-size: 100%;
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
        padding-block: 2rem;
        padding-inline: 0;
    }

    @media ${device.tabletL} {
        inline-size: 90%;
        margin-block: 0;
        margin-inline: auto;
        padding-block: 2rem;
        padding-inline: 0;
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
    margin-block: 1.6rem;
    margin-inline: 0;

    img {
        margin-inline-start: 1.6rem;
    }

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        margin-block-start: 3rem;
        margin-block-end: 1rem;
        margin-inline: 0;

        a:first-child {
            img {
                margin-inline-start: 0;
            }
        }
    }
`

export const StyledMgaLogo = styled.img`
    margin-inline-end: 2.4rem;
`
export const StyledLogo = styled.img`
    inline-size: 18.2rem;
`
