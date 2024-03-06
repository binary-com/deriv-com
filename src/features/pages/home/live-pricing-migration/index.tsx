/* eslint-disable */
import React, { useEffect } from 'react'
import { isBrowser } from 'common/utility'
import './live-price.scss'

const LiveMarketSection = () => {
    return (
        <div
            data-current="Forex"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="tabs_component-live-markets w-tabs"
        >
            <div className="tabs_menu-scroll-mobile w-tab-menu" role="tablist">
                <a
                    data-w-tab="Forex"
                    id="fx"
                    className="platforms_tab-link-2 w-inline-block w-tab-link active-tab"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-0"
                    aria-selected="true"
                >
                    <div>Forex</div>
                </a>
                <a
                    data-w-tab="Derived indices"
                    id="der"
                    className="platforms_tab-link-2 w-inline-block w-tab-link"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-1"
                    aria-selected="false"
                >
                    <div>Derived indices</div>
                </a>
                <a
                    data-w-tab="ETFs"
                    id="etfs"
                    className="platforms_tab-link-2 w-inline-block w-tab-link"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-2"
                    aria-selected="false"
                >
                    <div>ETFs</div>
                </a>
                <a
                    data-w-tab="Stocks and indices"
                    id="stk"
                    className="platforms_tab-link-2 w-inline-block w-tab-link"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-3"
                    aria-selected="false"
                >
                    <div>Stocks and indices</div>
                </a>
                <a
                    data-w-tab="Cryptocurrencies"
                    id="cry"
                    className="platforms_tab-link-2 w-inline-block w-tab-link"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-4"
                    aria-selected="false"
                >
                    <div>Cryptocurrencies</div>
                </a>
                <a
                    data-w-tab="Commodities"
                    id="com"
                    className="platforms_tab-link-2 w-inline-block w-tab-link"
                    role="tab"
                    aria-controls="w-tabs-0-data-w-pane-5"
                    aria-selected="false"
                >
                    <div>Commodities</div>
                </a>
            </div>
            <div className="tabs-live-markets_content w-tab-content">
                <div
                    data-w-tab="Forex"
                    className="platforms_tab-pane w-tab active-cards"
                    id="#fx"
                    role="tabpanel"
                    aria-labelledby="fx"
                >
                    <div className="horizontal-scroll-container">
                        <div className="scroll-content">
                            <div
                                data-w-id="844059e7-ed44-85c8-9f12-461acb94adf4"
                                style={{
                                    opacity: 1,
                                    transform:
                                        'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                    transformStyle: 'preserve-3d',
                                }}
                                className="live-markets_component-2"
                            >
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94adf5-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94adf8-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>AUD/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94adfc-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image fx w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="#DE0040"
                                                    >
                                                        <path d="M21.3125 19.6875C20.9375 19.875 20.5 19.7188 20.3125 19.3438L17.5312 13.75H13C12.6875 13.75 12.4375 13.5938 12.3125 13.3438L8.65625 6.03125L3.3125 8.6875C2.9375 8.875 2.5 8.71875 2.3125 8.34375C2.125 7.96875 2.28125 7.53125 2.65625 7.34375L8.65625 4.34375C9.03125 4.15625 9.46875 4.3125 9.65625 4.6875L13.4375 12.25H17.9688C18.2812 12.25 18.5312 12.4375 18.6562 12.6875L21.6562 18.6875C21.8438 19.0625 21.6875 19.5 21.3125 19.6875Z"></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    className="percent-change fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    -0.63%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae01-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div
                                                    className="bid-numbers_text bid fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    0.65023
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae06-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div
                                                    className="bid-numbers_text ask fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    0.6503
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae0c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae0d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread fx">
                                                0.00006
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae15-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae18-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>EUR/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae1c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image fx w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="#DE0040"
                                                    >
                                                        <path d="M21.3125 19.6875C20.9375 19.875 20.5 19.7188 20.3125 19.3438L17.5312 13.75H13C12.6875 13.75 12.4375 13.5938 12.3125 13.3438L8.65625 6.03125L3.3125 8.6875C2.9375 8.875 2.5 8.71875 2.3125 8.34375C2.125 7.96875 2.28125 7.53125 2.65625 7.34375L8.65625 4.34375C9.03125 4.15625 9.46875 4.3125 9.65625 4.6875L13.4375 12.25H17.9688C18.2812 12.25 18.5312 12.4375 18.6562 12.6875L21.6562 18.6875C21.8438 19.0625 21.6875 19.5 21.3125 19.6875Z"></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    className="percent-change fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    -0.21%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae21-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div
                                                    className="bid-numbers_text bid fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    1.08177
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae26-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div
                                                    className="bid-numbers_text ask fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    1.08182
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae2c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae2d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread fx">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae35-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae38-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>GBP/JPY</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae3c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image fx w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="#DE0040"
                                                    >
                                                        <path d="M21.3125 19.6875C20.9375 19.875 20.5 19.7188 20.3125 19.3438L17.5312 13.75H13C12.6875 13.75 12.4375 13.5938 12.3125 13.3438L8.65625 6.03125L3.3125 8.6875C2.9375 8.875 2.5 8.71875 2.3125 8.34375C2.125 7.96875 2.28125 7.53125 2.65625 7.34375L8.65625 4.34375C9.03125 4.15625 9.46875 4.3125 9.65625 4.6875L13.4375 12.25H17.9688C18.2812 12.25 18.5312 12.4375 18.6562 12.6875L21.6562 18.6875C21.8438 19.0625 21.6875 19.5 21.3125 19.6875Z"></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    className="percent-change fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    -0.14%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae41-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div
                                                    className="bid-numbers_text bid fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    190.59
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae46-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div
                                                    className="bid-numbers_text ask fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    190.604
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae4c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae4d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread fx">0.013</div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae55-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae58-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>GBP/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae5c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image fx w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="#DE0040"
                                                    >
                                                        <path d="M21.3125 19.6875C20.9375 19.875 20.5 19.7188 20.3125 19.3438L17.5312 13.75H13C12.6875 13.75 12.4375 13.5938 12.3125 13.3438L8.65625 6.03125L3.3125 8.6875C2.9375 8.875 2.5 8.71875 2.3125 8.34375C2.125 7.96875 2.28125 7.53125 2.65625 7.34375L8.65625 4.34375C9.03125 4.15625 9.46875 4.3125 9.65625 4.6875L13.4375 12.25H17.9688C18.2812 12.25 18.5312 12.4375 18.6562 12.6875L21.6562 18.6875C21.8438 19.0625 21.6875 19.5 21.3125 19.6875Z"></path>
                                                    </svg>
                                                </div>
                                                <div
                                                    className="percent-change fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    -0.2%
                                                </div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae61-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div
                                                    className="bid-numbers_text bid fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    1.26546
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae66-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div
                                                    className="bid-numbers_text ask fx"
                                                    style={{ color: 'rgb(222, 0, 64)' }}
                                                >
                                                    1.26553
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae6c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae6d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread fx">
                                                0.00007
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-tab="Derived indices"
                    className="platforms_tab-pane w-tab"
                    id="#der"
                    role="tabpanel"
                    aria-labelledby="der"
                >
                    <div className="horizontal-scroll-container">
                        <div className="scroll-content">
                            <div className="live-markets_component-2">
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae79-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae7c-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Boom 300 Index</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae80-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image der w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change der">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae85-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid der">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae8a-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask der">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae90-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae91-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread der">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae99-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94ae9c-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Crash 300 Index</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aea0-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image der w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change der">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aea5-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid der">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aeaa-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask der">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94aeb0-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94aeb1-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread der">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94aeb9-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aebc-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Volatility 150 (1s) Index</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aec0-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image der w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change der">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aec5-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid der">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aeca-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask der">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94aed0-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94aed1-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread der">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94aed9-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aedc-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Volatility 250 (1s) Index</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aee0-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image der w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change der">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aee5-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid der">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aeea-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask der">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94aef0-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94aef1-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread der">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-tab="ETFs"
                    className="platforms_tab-pane w-tab"
                    id="#etfs"
                    role="tabpanel"
                    aria-labelledby="etfs"
                >
                    <div className="horizontal-scroll-container">
                        <div className="scroll-content">
                            <div className="live-markets_component-2">
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94aefd-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af00-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>MSCI Emerging Markets (EEM)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af04-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image etfs w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change etfs">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af09-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid etfs">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af0e-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask etfs">
                                                    1.07
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94af14-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94af15-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread etfs">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94af1d-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af20-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Gold Miners (GDX)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af24-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image etfs w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change etfs">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af29-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid etfs">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af2e-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask etfs">
                                                    1.07
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94af34-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94af35-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread etfs">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94af3d-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af40-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>SPDR S&amp;P 500 (SPY)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af44-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image etfs w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change etfs">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af49-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid etfs">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af4e-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask etfs">
                                                    1.07
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94af54-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94af55-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread etfs">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94af5d-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af60-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>US Natural Gas (UNG)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af64-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image etfs w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change etfs">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af69-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid etfs">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af6e-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask etfs">
                                                    1.07
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94af74-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94af75-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread etfs">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-tab="Stocks and indices"
                    className="platforms_tab-pane w-tab"
                    id="#stk"
                    role="tabpanel"
                    aria-labelledby="stk"
                >
                    <div className="horizontal-scroll-container">
                        <div className="scroll-content">
                            <div className="live-markets_component-2">
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94af81-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af84-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Apple (APPL)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af88-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image stk w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change stk">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af8d-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid stk">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94af92-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask stk">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94af98-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94af99-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread stk">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94afa1-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afa4-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Walt Disney Co (DIS)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afa8-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image stk w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change stk">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afad-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid stk">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afb2-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask stk">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94afb8-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94afb9-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread stk">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94afc1-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afc4-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Tesla (TSLA)</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afc8-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image stk w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change stk">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afcd-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid stk">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afd2-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask stk">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94afd8-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94afd9-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread stk">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94afe1-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afe4-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>EUR/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afe8-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image stk w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change stk">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94afed-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid stk">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94aff2-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask stk">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94aff8-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94aff9-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread stk">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-tab="Cryptocurrencies"
                    className="platforms_tab-pane w-tab"
                    id="#cry"
                    role="tabpanel"
                    aria-labelledby="cry"
                >
                    <div className="horizontal-scroll-container">
                        <div className="scroll-content">
                            <div className="live-markets_component-2">
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b005-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b008-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>ADA/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b00c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image cry w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change cry">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b011-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid cry">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b016-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask cry">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b01c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b01d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread cry">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b025-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b028-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>BTC/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b02c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image cry w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change cry">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b031-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid cry">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b036-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask cry">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b03c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b03d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread cry">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b045-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b048-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>DOG/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b04c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image cry w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change cry">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b051-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid cry">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b056-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask cry">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b05c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b05d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread cry">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b065-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b068-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>DSH/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b06c-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image cry w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change cry">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b071-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid cry">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b076-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask cry">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b07c-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b07d-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread cry">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    data-w-tab="Commodities"
                    className="platforms_tab-pane w-tab"
                    id="#com"
                    role="tabpanel"
                    aria-labelledby="com"
                >
                    <div className="horizontal-scroll-container">
                        <div className="scroll-content">
                            <div className="live-markets_component-2">
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b089-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b08c-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>West Texas Intermediate</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b090-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image com w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change com">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b095-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid com">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b09a-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask com">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0a0-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0a1-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread com">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0a9-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0ac-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Silver/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0b0-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image com w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change com">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0b5-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid com">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0ba-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask com">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0c0-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0c1-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread com">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0c9-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0cc-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Gold/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0d0-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image com w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change com">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0d5-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid com">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0da-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask com">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0e0-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0e1-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread com">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0e9-87269e0a"
                                    className="platform_card-small-2"
                                >
                                    <div className="live-markets_card-content">
                                        <div className="live-markets_content-top-2">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0ec-87269e0a"
                                                className="content_market-flags"
                                            >
                                                <img
                                                    loading="lazy"
                                                    src="https://assets-global.website-files.com/65cf252c355bb0ab87269e04/65d49aa3263729bacfeecc8c_market-forex-eurusd.svg"
                                                    alt=""
                                                    className="content_flags-image"
                                                />
                                                <div>Copper/USD</div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0f0-87269e0a"
                                                className="content-top_change-2"
                                            >
                                                <div className="content-top_change-image com w-embed">
                                                    <svg
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M21.3125 4.34375C21.6875 4.53125 21.8438 4.96875 21.6562 5.34375L18.6562 11.3438C18.5312 11.5938 18.2812 11.75 17.9688 11.75H13.4375L9.65625 19.3438C9.46875 19.7188 9.03125 19.875 8.65625 19.6875L2.65625 16.6875C2.28125 16.5 2.125 16.0625 2.3125 15.6875C2.5 15.3125 2.9375 15.1562 3.3125 15.3438L8.65625 18L12.3125 10.6875C12.4375 10.4375 12.6875 10.25 13 10.25H17.5312L20.3125 4.6875C20.5 4.3125 20.9375 4.15625 21.3125 4.34375Z"
                                                            fill="currentcolor"
                                                        ></path>
                                                    </svg>
                                                </div>
                                                <div className="percent-change com">+0.11%</div>
                                            </div>
                                        </div>
                                        <div className="live-markets_content-middle">
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0f5-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Bid</div>
                                                <div className="bid-numbers_text bid com">
                                                    1.075
                                                </div>
                                            </div>
                                            <div
                                                id="w-node-_844059e7-ed44-85c8-9f12-461acb94b0fa-87269e0a"
                                                className="content_bid-wrapper"
                                            >
                                                <div>Ask</div>
                                                <div className="bid-numbers_text ask com">1.07</div>
                                            </div>
                                        </div>
                                        <div
                                            id="w-node-_844059e7-ed44-85c8-9f12-461acb94b100-87269e0a"
                                            className="content_spread"
                                        >
                                            <div id="w-node-_844059e7-ed44-85c8-9f12-461acb94b101-87269e0a">
                                                Spread
                                            </div>
                                            <div className="text-weight-bold spread com">
                                                0.00005
                                            </div>
                                        </div>
                                        <div className="live-markets_content-bottom">
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-purchase w-button"
                                            >
                                                Buy
                                            </a>
                                            <a
                                                href="#"
                                                className="button-6 is-secondary is-small is-sell w-button"
                                            >
                                                Sell
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveMarketSection
