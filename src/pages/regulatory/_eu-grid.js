import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { CssGrid, CssGridColumn } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import ViewLicense from 'images/svg/view-license.svg'

const Country = styled.div`
    margin-bottom: 2.4rem;
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
const GridItem = ({ name, order, url }) => (
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
GridItem.propTypes = {
    name: PropTypes.string,
    order: PropTypes.string,
    url: PropTypes.string,
}
const EUgrid = () => {
    return (
        <CssGrid columns="repeat(2, 1fr)" columngap="1rem">
            <CssGridColumn>
                <GridItem name={localize('Austria')} url="/Austria.pdf" order="1" />
                <GridItem name={localize('Bulgaria')} url="/Bulgaria.pdf" order="2" />
                <GridItem name={localize('Croatia')} url="/Croatia.pdf" order="3" />
                <GridItem name={localize('Cyprus')} url="/Cyprus.pdf" order="4" />
                <GridItem name={localize('Czech Republic')} url="/CzechRepublic.pdf" order="5" />
                <GridItem name={localize('Denmark')} url="/Denmark.pdf" order="6" />
                <GridItem name={localize('Estonia')} url="/Estonia.pdf" order="7" />
                <GridItem name={localize('Finland')} url="/Finland.pdf" order="8" />
                <GridItem name={localize('France')} url="/France.pdf" order="9" />
                <GridItem name={localize('Germany')} url="/Germany.pdf" order="10" />
                <GridItem name={localize('Greece')} url="/Greece.pdf" order="11" />
                <GridItem name={localize('Hungary')} url="/Hungary.pdf" order="12" />
                <GridItem name={localize('Italy')} url="/Italy.pdf" order="13" />
            </CssGridColumn>
            <CssGridColumn>
                <Country>
                    <Order>14</Order>
                    <License>
                        <Localize translate_text="Ireland" />
                    </License>
                </Country>
                <GridItem name={localize('Latvia')} url="/Latvia.pdf" order="15" />
                <GridItem name={localize('Lithuania')} url="/Lithuania.pdf" order="16" />
                <GridItem name={localize('Luxembourg')} url="/Luxembourg.pdf" order="17" />
                <GridItem name={localize('Netherlands')} url="/Netherlands.pdf" order="18" />
                <GridItem name={localize('Poland')} url="/Poland.pdf" order="19" />
                <GridItem name={localize('Portugal')} url="/Portugal.pdf" order="20" />
                <GridItem name={localize('Romania')} url="/Romania.pdf" order="21" />
                <GridItem name={localize('Slovakia')} url="/Slovakia.pdf" order="22" />
                <GridItem name={localize('Slovenia')} url="/Slovenia.pdf" order="23" />
                <GridItem name={localize('Spain')} url="/Spain.pdf" order="24" />
                <GridItem name={localize('Sweden')} url="/Sweden.pdf" order="25" />
                <GridItem name={localize('United Kingdom')} url="/UnitedKingdom.pdf" order="26" />
            </CssGridColumn>
        </CssGrid>
    )
}
export default WithIntl()(EUgrid)
