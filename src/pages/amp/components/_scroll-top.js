import React from 'react'
import styled from 'styled-components'
import Chevron from 'images/svg/chevron.svg'

const WhiteArrow = styled(Chevron)`
    & polyline {
        stroke: var(--color-white);
    }
`

const ScrollTopBtn = styled.button`
    color: var(--color-white);
    font-size: 2.4rem;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 1px -1px rgba(0, 0, 0, 0.14),
        0 1px 5px 0 rgba(0, 0, 0, 0.12);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    outline: none;
    background: var(--color-red);
    z-index: 9999;
    bottom: 1.6rem;
    right: 1.6rem;
    position: fixed;
    opacity: 0;
    cursor: pointer;
    visibility: hidden;
`

const ScrollTop = () => {
    return (
        <>
            <div id="top">
                <amp-position-observer
                    intersection-ratios="1"
                    on="enter:hideAnim.start; exit:showAnim.start"
                    layout="nodisplay"
                ></amp-position-observer>
            </div>
            <amp-animation id="showAnim" layout="nodisplay">
                <script
                    type="application/json"
                    dangerouslySetInnerHTML={{
                        __html: `
                        {
                          "duration": "200ms",
                          "fill": "both",
                          "iterations": "1",
                          "direction": "alternate",
                          "animations": [
                            {
                              "selector": "#scrollToTopButton",
                              "keyframes": [
                                { "opacity": "1", "visibility": "visible" }
                              ]
                            }
                          ]
                        }
                
                `,
                    }}
                />
            </amp-animation>
            <amp-animation id="hideAnim" layout="nodisplay">
                <script
                    type="application/json"
                    dangerouslySetInnerHTML={{
                        __html: `
                        {
                          "duration": "200ms",
                          "fill": "both",
                          "iterations": "1",
                          "direction": "alternate",
                          "animations": [
                            {
                              "selector": "#scrollToTopButton",
                              "keyframes": [
                                { "opacity": "0", "visibility": "hidden" }
                              ]
                            }
                          ]
                        }
                `,
                    }}
                />
            </amp-animation>
            <ScrollTopBtn id="scrollToTopButton" on="tap:top.scrollTo()">
                <WhiteArrow width="16" height="16" />
            </ScrollTopBtn>
        </>
    )
}

export default ScrollTop
