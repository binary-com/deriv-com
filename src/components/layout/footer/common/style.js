import styled, { css } from 'styled-components'
import { Container, CssGrid, Flex } from 'components/containers'
import { StyledLink, Text } from 'components/elements'
import { LocalizedLink } from 'components/localization'
import device from 'themes/device'
import { SizeMixin, MarginMixin, PaddingMixin, BorderMixin } from 'themes/mixins'

export const DefaultFooter = styled.footer`
    background-color: var(--color-grey-25);
    ${SizeMixin({ width: '100%' })}
    ${(props) =>
        MarginMixin({
            top: '0',
            start: 'auto',
            end: 'auto',
            bottom: props.is_eu_country && '7.3rem',
        })}
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    ${PaddingMixin({ bottom: '1.6rem' })}

    @media (max-width: 1090px) {
        ${(props) => MarginMixin({ bottom: props.is_eu_country && '9rem' })}
    }
    @media (max-width: 991px) {
        ${(props) => MarginMixin({ bottom: props.is_eu_country && '11rem' })}
    }
    @media (max-width: 826px) {
        ${(props) => MarginMixin({ bottom: props.is_eu_country && '12.2rem' })}
    }
    @media (max-width: 710px) {
        ${(props) => MarginMixin({ bottom: props.is_eu_country && '10.6rem' })}
    }
    @media (max-width: 538px) {
        ${(props) => MarginMixin({ bottom: props.is_eu_country && '13.8rem' })}
    }

    ${Container} {
        @media ${device.tabletL} {
            ${SizeMixin({ width: '100%' })}
        }
    }

    @media ${device.mobileL} {
        ${PaddingMixin({ bottom: '6rem' })}

        @media ${device.tabletL} {
            ${PaddingMixin({ bottom: '0' })}
        }
    }
`
export const FooterGrid = styled(CssGrid)`
    ${SizeMixin({ width: '100%' })}
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
    ${PaddingMixin({ top: '4rem', bottom: '2rem', start: '0', end: '0' })}

    @media ${device.tabletL} {
        ${MarginMixin({ start: '2rem' })}
    }
`
export const LinksWrapper = styled.div`
    grid-area: links;
    background: var(--color-grey-25);
    ${PaddingMixin({ top: '0.8rem', bottom: '2.4rem', start: '0', end: '0' })}
    ${BorderMixin({
        top: '2px solid var(--color-grey-26)',
        bottom: '1px solid var(--color-grey-26)',
    })}

    @media ${device.tabletL} {
        ${PaddingMixin({ all: '0' })}
    }
`

export const LinksCol = styled(Flex)`
    flex-direction: column;

    :last-child {
        ${MarginMixin({ end: '0' })}
    }

    ${SizeMixin({ width: 'fit-content', min_width: '100px' })}
    ${MarginMixin({ end: '40px' })}

    @media (min-width: 993px) and (max-width: 1050px) {
        ${SizeMixin({ min_width: '0', max_width: '100px' })}
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
    ${MarginMixin({ top: '10px' })}
`

export const LinkWrapper = styled.div`
    margin-block-start: 1.6rem;
    ${MarginMixin({ top: '1.6rem' })}

    @media ${device.laptopM} {
        ${Title} {
            font-size: var(--text-size-xs);
        }
        ${Link} {
            font-size: var(--text-size-xs);
        }
    }

    :nth-child(2) {
        ${MarginMixin({ top: '0.8rem' })}
    }
`
export const DisclaimerWrapper = styled.div`
    grid-area: disclaimer;
    background: var(--color-grey-25);
`
export const DisclaimerParagraph = styled(Text)`
    font-size: var(--text-size-xs);
    ${(props) => MarginMixin({ top: props.no_margin ? '0' : '2rem' })}

    @media ${device.tabletL} {
        ${SizeMixin({ width: '90%' })}
        ${MarginMixin({ top: '16px', bottom: '0', start: '0', end: '0' })}
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
    ${BorderMixin({ start: '4px solid var(--color-grey-27)' })}
    ${PaddingMixin({ all: '1.6rem 1.6rem' })}
    ${MarginMixin({ top: '2rem' })}

    @media ${device.tabletL} {
        ${BorderMixin({ top: '2px solid var(--color-grey-27)', left: 'none' })}
        ${SizeMixin({ width: '90%' })}
        ${MarginMixin({ top: '24px', bottom: '0', start: '16px', end: '16px' })}
        ${PaddingMixin({ top: '0', bottom: '16px', start: '8px', end: '8px' })}

        p {
            ${PaddingMixin({ all: '0' })}
            ${SizeMixin({ width: '100%' })}
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
        ${PaddingMixin({ all: '2rem 0' })}
    }

    @media ${device.tabletL} {
        ${SizeMixin({ width: '90%' })}
        ${MarginMixin({ all: '0 auto' })}
        ${PaddingMixin({ all: '2rem 0' })}
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
    ${MarginMixin({ all: '1.6rem 0' })}

    img {
        ${MarginMixin({ start: '1.6rem' })}
    }

    @media ${device.tabletL} {
        display: flex;
        justify-content: center;
        ${MarginMixin({ top: '3rem', bottom: '1rem', start: '0', end: '0' })}

        a:first-child {
            img {
                ${MarginMixin({ start: '0' })}
            }
        }
    }
`

export const StyledMgaLogo = styled.img`
    ${MarginMixin({ end: '2.4rem' })}
`
export const StyledLogo = styled.img`
    ${SizeMixin({ width: '18.2rem' })}
`
