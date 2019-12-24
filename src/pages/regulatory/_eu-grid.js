import React from 'react'
//import PropTypes from 'prop-types'
import styled from 'styled-components'
//import device from 'themes/device'
import { CssGrid, CssGridColumn } from 'components/containers'
//import { Text } from 'components/elements'
import { WithIntl, Localize } from 'components/localization'

const Country = styled.div`
    margin-bottom: 2.5rem;
    display: grid;
    grid-template-columns: 1.9rem 1fr;
    grid-column-gap: 0.8rem;
    font-size: var(--text-size-s);
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
    line-height: 1.8rem;
    border: 1px solid #333333;
    border-radius: 100%;
    width: 1.9rem;
    height: 1.9rem;
    text-align: center;
`
const License = styled.div`
    margin: 0;

    & a {
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
const EUgrid = () => {
    return (
    <CssGrid
        columns="repeat(2, 1fr)"
        columngap="1rem"
    >
        <CssGridColumn>
            <Country>
                <Order>1</Order>
                <License>
                    <Localize
                        translate_text="Austria <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Austria.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>2</Order>
                <License>
                    <Localize
                        translate_text="Bulgaria <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Bulgaria.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>3</Order>
                <License>
                    <Localize
                        translate_text="Croatia <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Croatia.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>4</Order>
                <License>
                    <Localize
                        translate_text="Cyprus <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Cyprus.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>5</Order>
                <License>
                    <Localize
                        translate_text="Czech Republic <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/CzechRepublic.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>6</Order>
                <License>
                    <Localize
                        translate_text="Denmark <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Denmark.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>7</Order>
                <License>
                    <Localize
                        translate_text="Estonia <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Estonia.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>8</Order>
                <License>
                    <Localize
                        translate_text="Finland <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Finland.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>9</Order>
                <License>
                    <Localize
                        translate_text="France <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/France.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>10</Order>
                <License>
                    <Localize
                        translate_text="Germany <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Germany.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>11</Order>
                <License>
                    <Localize
                        translate_text="Greece <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Greece.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>12</Order>
                <License>
                    <Localize
                        translate_text="Hungary <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Hungary.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>13</Order>
                <License>
                    <Localize
                        translate_text="Italy <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Italy.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
        </CssGridColumn>
        <CssGridColumn>
            <Country>
                <Order>14</Order>
                <License>
                    <Localize
                        translate_text="Ireland <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Ireland.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>15</Order>
                <License>
                    <Localize
                        translate_text="Latvia <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Latvia.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>16</Order>
                <License>
                    <Localize
                        translate_text="Lithuania <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Lithuania.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>17</Order>
                <License>
                    <Localize
                        translate_text="Luxembourg <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Luxembourg.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>18</Order>
                <License>
                    <Localize
                        translate_text="Netherlands <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Netherlands.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>19</Order>
                <License>
                    <Localize
                        translate_text="Poland <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Poland.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>20</Order>
                <License>
                    <Localize
                        translate_text="Portugal <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Portugal.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>21</Order>
                <License>
                    <Localize
                        translate_text="Romania <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Romania.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>22</Order>
                <License>
                    <Localize
                        translate_text="Slovakia <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Slovakia.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>23</Order>
                <License>
                    <Localize
                        translate_text="Slovenia <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Slovenia.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>24</Order>
                <License>
                    <Localize
                        translate_text="Spain <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Spain.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>25</Order>
                <License>
                    <Localize
                        translate_text="Sweden <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/Sweden.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
            <Country>
                <Order>26</Order>
                <License>
                    <Localize
                        translate_text="United Kingdom <0>(View License)</0>"
                        components={[
                            <a
                                key={0}
                                target="_blank"
                                href="/UnitedKingdom.pdf"
                                rel="noopener noreferrer"
                            />
                        ]}
                    />
                </License>
            </Country>
        </CssGridColumn>
    </CssGrid>
    )
}
export default WithIntl()(EUgrid)