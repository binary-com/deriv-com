import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components'
//import device from 'themes/device'
import { CssGrid, CssGridColumn } from 'components/containers'
//import { Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'

const Country = styled.div`
    margin-bottom: 2.5rem;
    display: grid;
    grid-template-columns: 1.9rem 1fr;
    grid-column-gap: 0.8rem;
    font-size: var(--text-size-s);
    align-items: center;
`
const Order = styled.div`
    display: inline-block;
    font-size: 1rem;
    line-height: 1.8rem;
    border: 1px solid #333333;
    border-radius: 100%;
    width: 1.9rem;
    height: 1.9rem;
    text-align: center;
`
const EUgrid = () => {
    return (
    <CssGrid
        columns="repeat(2, 1fr)"
        columngap="1rem"
    >
        <CssGridColumn>
            <Country>
                <Order>1</Order>
                {localize('Austria')}
            </Country>
            <Country>
                <Order>2</Order>
                {localize('Bulgaria')}
            </Country>
            <Country>
                <Order>3</Order>
                {localize('Croatia')}
            </Country>
            <Country>
                <Order>4</Order>
                {localize('Cyprus')}
            </Country>
            <Country>
                <Order>5</Order>
                {localize('Czech Republic')}
            </Country>
            <Country>
                <Order>6</Order>
                {localize('Denmark')}
            </Country>
            <Country>
                <Order>7</Order>
                {localize('Estonia')}
            </Country>
            <Country>
                <Order>8</Order>
                {localize('Finland')}
            </Country>
            <Country>
                <Order>9</Order>
                {localize('France')}
            </Country>
            <Country>
                <Order>10</Order>
                {localize('Germany')}
            </Country>
            <Country>
                <Order>11</Order>
                {localize('Greece')}
            </Country>
            <Country>
                <Order>12</Order>
                {localize('Hungary')}
            </Country>
            <Country>
                <Order>13</Order>
                {localize('Italy')}
            </Country>
        </CssGridColumn>
        <CssGridColumn>
            <Country>
                <Order>14</Order>
                {localize('Ireland')}
            </Country>
            <Country>
                <Order>15</Order>
                {localize('Latvia')}
            </Country>
            <Country>
                <Order>16</Order>
                {localize('Lithuania')}
            </Country>
            <Country>
                <Order>17</Order>
                {localize('Luxembourg')}
            </Country>
            <Country>
                <Order>18</Order>
                {localize('Netherlands')}
            </Country>
            <Country>
                <Order>19</Order>
                {localize('Poland')}
            </Country>
            <Country>
                <Order>20</Order>
                {localize('Portugal')}
            </Country>
            <Country>
                <Order>21</Order>
                {localize('Romania')}
            </Country>
            <Country>
                <Order>22</Order>
                {localize('Slovakia')}
            </Country>
            <Country>
                <Order>23</Order>
                {localize('Slovenia')}
            </Country>
            <Country>
                <Order>24</Order>
                {localize('Spain')}
            </Country>
            <Country>
                <Order>25</Order>
                {localize('Sweden')}
            </Country>
            <Country>
                <Order>26</Order>
                {localize('United Kingdom')}
            </Country>
        </CssGridColumn>
    </CssGrid>
    )
}
export default WithIntl()(EUgrid)