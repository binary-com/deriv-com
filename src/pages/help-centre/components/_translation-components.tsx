import React from 'react'
import styled from 'styled-components'
import { TTranslationComponents } from '../data/_data-types'
import device from 'themes/device'
import { LocalizedLink } from 'components/localization'

const Link = styled(LocalizedLink)`
    text-decoration: none;
    font-size: var(--text-size-s);
    font-weight: bold;
    color: var(--color-red);

    :hover {
        text-decoration: underline;
    }

    @media ${device.tabletL} {
        font-size: 16px;
    }
`

const getComponent = (key: number, to: string, type: 'link' | 'deriv_app_link' | 'strong') => {
    return {
        deriv_app_link: (
            <Link
                key={key}
                to={to}
                target="_blank"
                external
                weight="bold"
                rel="noopener noreferrer"
                type="deriv_app"
            />
        ),
        link: (
            <Link
                key={key}
                to={to}
                target="_blank"
                external
                weight="bold"
                rel="noopener noreferrer"
            />
        ),
        strong: <strong key={key} />,
    }[type]
}

const TranslationComponents = (components: TTranslationComponents) =>
    components.map(({ type, to, key }) => getComponent(key, to, type))

export default TranslationComponents
