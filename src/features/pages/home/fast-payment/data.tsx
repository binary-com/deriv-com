import React from 'react'
import { CardContent } from '@deriv-com/components'
// import {
//     PaymentMethodEpsBrandIcon,
//     PaymentMethodGiropayBrandIcon,
//     PaymentMethodIdealBrandIcon,
//     PaymentMethodPrzelewy24BrandIcon,
//     PaymentMethodRapidTransferBrandIcon,
//     PaymentMethodMaestroBrandIcon,
//     PaymentMethodVisaBrandIcon,
//     PaymentMethodVisaElectronBrandIcon,
//     PaymentMethodPixBrandIcon,
//     PaymentMethodHelp2payBrandIcon,
//     PaymentMethodZingpayBrandIcon,
//     PaymentMethodMpesaBrandIcon,
//     PaymentMethodMtnBrandIcon,
//     PaymentMethodVodafoneBrandIcon,
//     PaymentMethodAdvcashBrandIcon,
//     PaymentMethodAirtmBrandIcon,
//     PaymentMethodAstropayBrandIcon,
//     PaymentMethodJetonBrandIcon,
//     PaymentMethodMifinityBrandIcon,
//     PaymentMethodNetellerBrandIcon,
//     PaymentMethodPayLivreBrandIcon,
//     PaymentMethodPerfectMoneyBrandIcon,
//     PaymentMethodSkrillBrandIcon,
//     PaymentMethodSkrill1TapBrandIcon,
//     PaymentMethodSticpayBrandIcon,
//     PaymentMethodLitecoinBrandIcon,
//     PaymentMethodUsdCoinBrandIcon,
//     PaymentMethod10CoinsBrandIcon,
//     PaymentMethodBitcoinCashBrandIcon,
//     PaymentMethodDogecoinBrandIcon,
//     PaymentMethodCardanoBrandIcon,
//     PaymentMethodBnbBrandIcon,
//     PaymentMethodBanxaBrandIcon,
//     PaymentMethodOxxoBrandIcon,
//     PaymentMethodPagoEfectivoBrandIcon,
//     PaymentMethodPaysafecardBrandIcon,
//     PaymentMethodSpeiBrandIcon,
//     DerivProductDerivP2pBrandLightWordmarkHorizontalIcon,
//     PaymentMethodOzowBrandIcon,
//     PaymentMethodPseBrandIcon,
//     PaymentMethodBitcoinBrandIcon,
//     PaymentMethodEthereumBrandIcon,
//     PaymentMethodTronBrandIcon,
//     PaymentMethodMastercardBrandIcon,
// } from '@deriv/quill-icons'

const toImage = (path: string, loading: 'lazy' | 'eager' = 'eager') => (
    <img src={path} height={80} width={128} className="max-w-[128px] h-[80px]" loading={loading} />
)

const Card = (icon, id: number): CardContent => ({
    id,
    icon,
    color: 'gray',
    size: 'xs',
    align: 'center',
    className: '!overflow-visible',
})

const data = [
    { card: Card(toImage('/payments/logos.svg'), 1), is_eu: true, is_row: true, loading: 'eager' },
    {
        card: Card(toImage('/payments/logos-1.svg'), 2),
        is_eu: true,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-2.svg'), 3),
        is_eu: true,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-3.svg'), 4),
        is_eu: true,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-4.svg'), 5),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-5.svg'), 6),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-6.svg'), 7),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-7.svg'), 8),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-8.svg'), 9),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-9.svg'), 10),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-10.svg'), 11),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    {
        card: Card(toImage('/payments/logos-11.svg'), 12),
        is_eu: false,
        is_row: true,
        loading: 'eager',
    },
    { card: Card(toImage('/payments/logos-12.svg'), 13), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-13.svg'), 14), is_eu: true, is_row: true },
    { card: Card(toImage('/payments/logos-14.svg'), 15), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-15.svg'), 16), is_eu: true, is_row: true },
    { card: Card(toImage('/payments/logos-16.svg'), 17), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-17.svg'), 18), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-18.svg'), 19), is_eu: true, is_row: true },
    { card: Card(toImage('/payments/logos-19.svg'), 20), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-20.svg'), 21), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-21.svg'), 22), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-22.svg'), 23), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-23.svg'), 24), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-24.svg'), 25), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-25.svg'), 26), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-26.svg'), 27), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-27.svg'), 28), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-28.svg'), 29), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-29.svg'), 30), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-30.svg'), 31), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-31.svg'), 32), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-32.svg'), 33), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-33.svg'), 34), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-34.svg'), 35), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-35.svg'), 36), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-36.svg'), 37), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-37.svg'), 38), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-38.svg'), 39), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-39.svg'), 40), is_eu: true, is_row: false },
    { card: Card(toImage('/payments/logos-40.svg'), 41), is_eu: true, is_row: false },
    { card: Card(toImage('/payments/logos-41.svg'), 40), is_eu: true, is_row: false },
    { card: Card(toImage('/payments/logos-42.svg'), 41), is_eu: true, is_row: false },
    { card: Card(toImage('/payments/logos-43.svg'), 42), is_eu: true, is_row: false },
]

// const data = [
// { card: <PaymentMethodEpsBrandIcon height="80px" width="128px" />, is_eu: false },
// PaymentMethodGiropayBrandIcon,
// PaymentMethodIdealBrandIcon,
// PaymentMethodPrzelewy24BrandIcon,
// PaymentMethodRapidTransferBrandIcon,
// PaymentMethodMaestroBrandIcon,
// PaymentMethodVisaBrandIcon,
// PaymentMethodVisaElectronBrandIcon,
// PaymentMethodPixBrandIcon,
// PaymentMethodHelp2payBrandIcon,
// PaymentMethodZingpayBrandIcon,
// PaymentMethodMpesaBrandIcon,
// PaymentMethodMtnBrandIcon,
// PaymentMethodVodafoneBrandIcon,
// PaymentMethodAdvcashBrandIcon,
// PaymentMethodAirtmBrandIcon,
// PaymentMethodAstropayBrandIcon,
// PaymentMethodJetonBrandIcon,
// PaymentMethodMifinityBrandIcon,
// PaymentMethodNetellerBrandIcon,
// PaymentMethodPayLivreBrandIcon,
// PaymentMethodPerfectMoneyBrandIcon,
// PaymentMethodSkrillBrandIcon,
// PaymentMethodSkrill1TapBrandIcon,
// PaymentMethodSticpayBrandIcon,
// PaymentMethodLitecoinBrandIcon,
// PaymentMethodUsdCoinBrandIcon,
// PaymentMethod10CoinsBrandIcon,
// PaymentMethodBitcoinCashBrandIcon,
// PaymentMethodDogecoinBrandIcon,
// PaymentMethodCardanoBrandIcon,
// PaymentMethodBnbBrandIcon,
// PaymentMethodBanxaBrandIcon,
// PaymentMethodOxxoBrandIcon,
// PaymentMethodPagoEfectivoBrandIcon,
// PaymentMethodPaysafecardBrandIcon,
// PaymentMethodSpeiBrandIcon,
// DerivProductDerivP2pBrandLightWordmarkHorizontalIcon,
// PaymentMethodOzowBrandIcon,
// PaymentMethodPseBrandIcon,
// PaymentMethodBitcoinBrandIcon,
// PaymentMethodEthereumBrandIcon,
// PaymentMethodTronBrandIcon,
// PaymentMethodMastercardBrandIcon,
// ]

export const RowPaymentMethods: CardContent[] = data
    .filter((obj) => obj.is_row)
    .map((obj) => obj.card)

export const EUPaymentMethods: CardContent[] = data
    .filter((obj) => obj.is_eu)
    .map((obj) => obj.card)
