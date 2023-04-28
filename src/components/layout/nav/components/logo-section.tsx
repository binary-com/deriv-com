import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { LocalizedLink } from 'components/localization'
import { QueryImage } from 'components/elements'
import GetTrading from 'images/svg/layout/get-trading.svg'
import device from 'themes/device'

type LogoSectionProps = {
    is_ppc_redirect?: boolean
    base?: string
    hide_get_trading?: boolean
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    max-width: 30rem;
    width: 100%;
`
const LogoLink = styled(LocalizedLink)`
    text-decoration: none;
    max-width: 16rem;
    width: 100%;
    @media ${device.tabletS} {
        & svg,
        .gatsby-image-wrapper {
            width: 10rem;
        }
    }
    @media ${device.mobileL} {
        & svg,
        .gatsby-image-wrapper {
            width: 12rem;
        }
    }
`
const Line = styled.div`
    width: 1px;
    height: 28px;
    margin: 0 8px;
    background-color: var(--color-white);
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const LogoSection = ({ is_ppc_redirect, base, hide_get_trading }: LogoSectionProps) => {
    const data = useStaticQuery(query)
    const to = is_ppc_redirect ? '/landing' : base || '/'

    return (
        <Wrapper>
            <LogoLink to={to} aria-label="Home">
                <QueryImage
                    data={data['deriv']}
                    alt="deriv logo"
                    max_width="16.4rem"
                    width="100%"
                    height="auto"
                />
            </LogoLink>
            {!hide_get_trading && (
                <>
                    <Line />
                    <img src={GetTrading} alt="get trading" />
                </>
            )}
        </Wrapper>
    )
}

export default LogoSection
