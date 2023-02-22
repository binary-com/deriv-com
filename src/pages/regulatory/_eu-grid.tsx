import React from 'react'
import styled from 'styled-components'
import { CssGrid, CssGridColumn } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import { ReactComponent as ViewLicense } from 'images/svg/regulatory/view-license.svg'

type GridItemProps = {
    name: string
    order: string
    url: string
}

const Country = styled.div`
    margin-bottom: 2.4rem;
    text-align: start;
    display: grid;
    grid-template-columns: 1.9rem 1fr;
    grid-column-gap: 0.8rem;
    font-size: var(--text-size-s);
    color: var(--color-grey-3);
    align-items: center;

    & a {
        display: inline;
        font-size: 1rem;
        line-height: 1rem;
        color: var(--color-grey-3);
    }
`
const Order = styled.div`
    display: inline-block;
    font-size: 1rem;
    line-height: 1.9rem;
    font-weight: 500;
    border: 0.1rem solid var(--color-grey-3);
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    text-align: center;
`
const License = styled.div`
    margin: 0;

    & a {
        margin-left: 0.3rem;
        font-size: 1rem;
        line-height: 1rem;
        color: var(--color-grey-3);
        text-decoration: none;

        :hover {
            color: var(--color-red);
            text-decoration: underline;
        }
    }
`

const AttachmentIcon = styled(ViewLicense)`
    margin-left: 1rem;

    path {
        transition: 0.2s fill;
    }
    &:hover {
        path {
            fill: red;
        }
    }
`

const GridItem = ({ name, order, url }: GridItemProps) => (
    <Country>
        <Order>{order}</Order>
        <License>
            {name}
            <a href={url} target="_blank" rel="noopener noreferrer">
                <AttachmentIcon />
            </a>
        </License>
    </Country>
)

const EUgrid = () => {
    return (
        <CssGrid columns="repeat(2, 1fr)">
            <CssGridColumn>
                <GridItem
                    name={localize('_t_Austria_t_')}
                    url="/regulatory/countries/Austria.pdf"
                    order="1"
                />
                <GridItem
                    name={localize('_t_Bulgaria_t_')}
                    url="/regulatory/countries/Bulgaria.pdf"
                    order="2"
                />
                <GridItem
                    name={localize('_t_Croatia_t_')}
                    url="/regulatory/countries/Croatia.pdf"
                    order="3"
                />
                <GridItem
                    name={localize('_t_Cyprus_t_')}
                    url="/regulatory/countries/Cyprus.pdf"
                    order="4"
                />
                <GridItem
                    name={localize('_t_Czech Republic_t_')}
                    url="/regulatory/countries/CzechRepublic.pdf"
                    order="5"
                />
                <GridItem
                    name={localize('_t_Denmark_t_')}
                    url="/regulatory/countries/Denmark.pdf"
                    order="6"
                />
                <GridItem
                    name={localize('_t_Estonia_t_')}
                    url="/regulatory/countries/Estonia.pdf"
                    order="7"
                />
                <GridItem
                    name={localize('_t_Finland_t_')}
                    url="/regulatory/countries/Finland.pdf"
                    order="8"
                />
                <GridItem
                    name={localize('_t_France_t_')}
                    url="/regulatory/countries/France.pdf"
                    order="9"
                />
                <GridItem
                    name={localize('_t_Germany_t_')}
                    url="/regulatory/countries/Germany.pdf"
                    order="10"
                />
                <GridItem
                    name={localize('_t_Greece_t_')}
                    url="/regulatory/countries/Greece.pdf"
                    order="11"
                />
                <GridItem
                    name={localize('_t_Hungary_t_')}
                    url="/regulatory/countries/Hungary.pdf"
                    order="12"
                />
                <GridItem
                    name={localize('_t_Italy_t_')}
                    url="/regulatory/countries/Italy.pdf"
                    order="13"
                />
            </CssGridColumn>
            <CssGridColumn>
                <Country>
                    <Order>14</Order>
                    <License>
                        <Localize translate_text="Ireland" />
                    </License>
                </Country>
                <GridItem
                    name={localize('_t_Latvia')}
                    url="/regulatory/countries/Latvia.pdf"
                    order="15"
                />
                <GridItem
                    name={localize('_t_Lithuania')}
                    url="/regulatory/countries/Lithuania.pdf"
                    order="16"
                />
                <GridItem
                    name={localize('_t_Luxembourg')}
                    url="/regulatory/countries/Luxembourg.pdf"
                    order="17"
                />
                <GridItem
                    name={localize('_t_Netherlands')}
                    url="/regulatory/countries/Netherlands.pdf"
                    order="18"
                />
                <GridItem
                    name={localize('_t_Poland')}
                    url="/regulatory/countries/Poland.pdf"
                    order="19"
                />
                <GridItem
                    name={localize('_t_Portugal')}
                    url="/regulatory/countries/Portugal.pdf"
                    order="20"
                />
                <GridItem
                    name={localize('_t_Romania')}
                    url="/regulatory/countries/Romania.pdf"
                    order="21"
                />
                <GridItem
                    name={localize('_t_Slovakia')}
                    url="/regulatory/countries/Slovakia.pdf"
                    order="22"
                />
                <GridItem
                    name={localize('_t_Slovenia')}
                    url="/regulatory/countries/Slovenia.pdf"
                    order="23"
                />
                <GridItem
                    name={localize('_t_Spain')}
                    url="/regulatory/countries/Spain.pdf"
                    order="24"
                />
                <GridItem
                    name={localize('_t_Sweden_t_')}
                    url="/regulatory/countries/Sweden.pdf"
                    order="25"
                />
            </CssGridColumn>
        </CssGrid>
    )
}
export default WithIntl()(EUgrid)
