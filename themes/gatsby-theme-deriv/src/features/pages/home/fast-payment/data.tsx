import React from 'react'
import { CardContent } from '@deriv-com/components'
import logos from "../../../../images/svg/payments/logos.svg"
import logos1 from "../../../../images/svg/payments/logos-1.svg"
import logos2 from "../../../../images/svg/payments/logos-2.svg"
import logos3 from "../../../../images/svg/payments/logos-3.svg"
import logos4 from "../../../../images/svg/payments/logos-4.svg"
import logos5 from "../../../../images/svg/payments/logos-5.svg"
import logos6 from "../../../../images/svg/payments/logos-6.svg"
import logos7 from "../../../../images/svg/payments/logos-7.svg"
import logos8 from "../../../../images/svg/payments/logos-8.svg"
import logos9 from "../../../../images/svg/payments/logos-9.svg"
import logos10 from "../../../../images/svg/payments/logos-10.svg"
import logos11 from "../../../../images/svg/payments/logos-11.svg"
import logos12 from "../../../../images/svg/payments/logos-12.svg"
import logos13 from "../../../../images/svg/payments/logos-13.svg"
import logos14 from "../../../../images/svg/payments/logos-14.svg"
import logos15 from "../../../../images/svg/payments/logos-15.svg"
import logos16 from "../../../../images/svg/payments/logos-16.svg"
import logos17 from "../../../../images/svg/payments/logos-17.svg"
import logos18 from "../../../../images/svg/payments/logos-18.svg"
import logos19 from "../../../../images/svg/payments/logos-19.svg"
import logos20 from "../../../../images/svg/payments/logos-20.svg"
import logos21 from "../../../../images/svg/payments/logos-21.svg"
import logos22 from "../../../../images/svg/payments/logos-22.svg"
import logos23 from "../../../../images/svg/payments/logos-23.svg"
import logos24 from "../../../../images/svg/payments/logos-24.svg"
import logos25 from "../../../../images/svg/payments/logos-25.svg"
import logos26 from "../../../../images/svg/payments/logos-26.svg"
import logos27 from "../../../../images/svg/payments/logos-27.svg"
import logos28 from "../../../../images/svg/payments/logos-28.svg"
import logos29 from "../../../../images/svg/payments/logos-29.svg"
import logos30 from "../../../../images/svg/payments/logos-30.svg"
import logos31 from "../../../../images/svg/payments/logos-31.svg"
import logos32 from "../../../../images/svg/payments/logos-32.svg"
import logos33 from "../../../../images/svg/payments/logos-33.svg"
import logos34 from "../../../../images/svg/payments/logos-34.svg"
import logos35 from "../../../../images/svg/payments/logos-35.svg"
import logos36 from "../../../../images/svg/payments/logos-36.svg"
import logos37 from "../../../../images/svg/payments/logos-37.svg"
import logos38 from "../../../../images/svg/payments/logos-38.svg"
import logos39 from "../../../../images/svg/payments/logos-39.svg"
import logos40 from "../../../../images/svg/payments/logos-40.svg"
import logos41 from "../../../../images/svg/payments/logos-41.svg"
import logos42 from "../../../../images/svg/payments/logos-42.svg"
import logos43 from "../../../../images/svg/payments/logos-43.svg"

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
        card: Card(toImage(logos, 'Mastercard'), 1),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage(logos1, 'Maestro'), 2),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage(logos2, 'Visa'), 3),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage(logos3, 'Visa Electron'), 4),
        is_eu: true,
        is_row: true,
    },
    {
        card: Card(toImage(logos4, 'Pix'), 5),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos5, 'Help to Pay'), 6),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos6, 'Zing Pay'), 7),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos7, 'M-Pesa'), 8),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos8, 'MTN'), 9),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos9, 'Vodafone'), 10),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos10, 'AdvCash'), 11),
        is_eu: false,
        is_row: true,
    },
    {
        card: Card(toImage(logos11, 'AirTm'), 12),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage(logos12, 'AstroPay'), 13), is_eu: false, is_row: true },
    { card: Card(toImage(logos13, 'Jeton'), 14), is_eu: true, is_row: true },
    { card: Card(toImage(logos14, 'MiFinity'), 15), is_eu: false, is_row: true },
    { card: Card(toImage(logos15, 'Netteler'), 16), is_eu: true, is_row: true },
    { card: Card(toImage(logos16, 'PayLivre'), 17), is_eu: false, is_row: true },
    {
        card: Card(toImage(logos17, 'Perfect Money'), 18),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage(logos18, 'Skrill'), 19), is_eu: true, is_row: true },
    {
        card: Card(toImage(logos19, 'Skrill 1-Tap'), 20),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage(logos20, 'StickPay'), 21), is_eu: false, is_row: true },
    { card: Card(toImage(logos21, 'bitcoin'), 22), is_eu: false, is_row: true },
    { card: Card(toImage(logos22, 'etherium'), 23), is_eu: false, is_row: true },
    { card: Card(toImage(logos23, 'litecoin'), 24), is_eu: false, is_row: true },
    { card: Card(toImage(logos24, 'USD Coin'), 25), is_eu: false, is_row: true },
    { card: Card(toImage(logos25, '10Coins'), 26), is_eu: false, is_row: true },
    {
        card: Card(toImage(logos26, 'BitcoinCash'), 27),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage(logos27, 'DogeCoin'), 28), is_eu: false, is_row: true },
    { card: Card(toImage(logos28, 'Tron'), 29), is_eu: false, is_row: true },
    { card: Card(toImage(logos29, 'Cardano'), 30), is_eu: false, is_row: true },
    { card: Card(toImage(logos30, 'BNB'), 31), is_eu: false, is_row: true },
    { card: Card(toImage(logos31, 'Banxa'), 32), is_eu: false, is_row: true },
    { card: Card(toImage(logos32, 'Oxxo'), 33), is_eu: false, is_row: true },
    {
        card: Card(toImage(logos33, 'Pago Efectivo'), 34),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage(logos34, 'SPEI'), 35), is_eu: false, is_row: true },
    {
        card: Card(toImage(logos35, 'paysafecard'), 36),
        is_eu: false,
        is_row: true,
    },
    { card: Card(toImage(logos36, 'derivP2P'), 37), is_eu: false, is_row: true },
    { card: Card(toImage(logos37, 'ozow'), 38), is_eu: false, is_row: true },
    { card: Card(toImage(logos38, 'pse'), 39), is_eu: false, is_row: true },
    { card: Card(toImage(logos39, 'eps'), 40), is_eu: true, is_row: false },
    { card: Card(toImage(logos40, 'giropay'), 41), is_eu: true, is_row: false },
    { card: Card(toImage(logos41, 'przelewy24'), 40), is_eu: true, is_row: false },
    {
        card: Card(toImage(logos42, 'Rapid Transfer'), 41),
        is_eu: true,
        is_row: false,
    },
    { card: Card(toImage(logos43, 'iDeal'), 42), is_eu: true, is_row: false },
]

export const RowPaymentMethods: CardContent[] = data
    .filter((obj) => obj.is_row)
    .map((obj) => obj.card)

export const EUPaymentMethods: CardContent[] = data
    .filter((obj) => obj.is_eu)
    .map((obj) => obj.card)
