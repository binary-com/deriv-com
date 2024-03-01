import React from 'react'
import { CardContent } from '@deriv-com/components'

const toImage = (path: string, alt: string) => (
    <img
        src={path}
        alt={alt}
        height={80}
        width={128}
        className="max-w-[128px] h-[80px]"
        loading="eager"
    />
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
    {
        card: Card(toImage('/payments/logos.svg', 'Mastercard'), 1),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-1.svg', 'Maestro'), 2),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-2.svg', 'Visa'), 3),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-3.svg', 'Visa Electron'), 4),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-4.svg', 'Pix'), 5),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-5.svg', 'Help to Pay'), 6),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-6.svg', 'Zing Pay'), 7),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-7.svg', 'M-Pesa'), 8),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-8.svg', 'MTN'), 9),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-9.svg', 'Vodafone'), 10),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-10.svg', 'AdvCash'), 11),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage('/payments/logos-11.svg', 'AirTm'), 12),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage('/payments/logos-12.svg', 'AstroPay'), 13), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-13.svg', 'Jeton'), 14), is_eu: true, is_row: true },
    { card: Card(toImage('/payments/logos-14.svg', 'MiFinity'), 15), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-15.svg', 'Netteler'), 16), is_eu: true, is_row: true },
    { card: Card(toImage('/payments/logos-16.svg', 'PayLivre'), 17), is_eu: false, is_row: true },
    {
        card: Card(toImage('/payments/logos-17.svg', 'Perfect Money'), 18),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage('/payments/logos-18.svg', 'Skrill'), 19), is_eu: true, is_row: true },
    {
        card: Card(toImage('/payments/logos-19.svg', 'Skrill 1-Tap'), 20),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage('/payments/logos-20.svg', 'StickPay'), 21), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-21.svg', 'bitcoin'), 22), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-22.svg', 'etherium'), 23), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-23.svg', 'litecoin'), 24), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-24.svg', 'USD Coin'), 25), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-25.svg', '10Coins'), 26), is_eu: false, is_row: true },
    {
        card: Card(toImage('/payments/logos-26.svg', 'BitcoinCash'), 27),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage('/payments/logos-27.svg', 'DogeCoin'), 28), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-28.svg', 'Tron'), 29), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-29.svg', 'Cardano'), 30), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-30.svg', 'BNB'), 31), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-31.svg', 'Banxa'), 32), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-32.svg', 'Oxxo'), 33), is_eu: false, is_row: true },
    {
        card: Card(toImage('/payments/logos-33.svg', 'Pago Efectivo'), 34),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage('/payments/logos-34.svg', 'SPEI'), 35), is_eu: false, is_row: true },
    {
        card: Card(toImage('/payments/logos-35.svg', 'paysafecard'), 36),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage('/payments/logos-36.svg', 'derivP2P'), 37), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-37.svg', 'ozow'), 38), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-38.svg', 'pse'), 39), is_eu: false, is_row: true },
    { card: Card(toImage('/payments/logos-39.svg', 'eps'), 40), is_eu: true, is_row: false },
    { card: Card(toImage('/payments/logos-40.svg', 'giropay'), 41), is_eu: true, is_row: false },
    { card: Card(toImage('/payments/logos-41.svg', 'przelewy24'), 40), is_eu: true, is_row: false },
    {
        card: Card(toImage('/payments/logos-42.svg', 'Rapid Transfer'), 41),
        is_eu: true,
        is_row: false,
    },
    { card: Card(toImage('/payments/logos-43.svg', 'iDeal'), 42), is_eu: true, is_row: false },
]

export const RowPaymentMethods: CardContent[] = data
    .filter((obj) => obj.is_row)
    .map((obj) => obj.card)

export const EUPaymentMethods: CardContent[] = data
    .filter((obj) => obj.is_eu)
    .map((obj) => obj.card)
