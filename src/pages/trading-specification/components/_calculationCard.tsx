import React from 'react'
import { DlMarketTypeProps } from './_howItsCalculated'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'

const CalculationCard = ({ data }: DlMarketTypeProps) => {
    return (
        <>
            <Header type="paragraph-2" weight="normal">
                <Localize translate_text={data.title} />
            </Header>
            <Header type="paragraph-2" weight="normal">
                <Localize translate_text={data.description} components={[<strong key={0} />]} />
            </Header>

            {data.list.map((list, index) => (
                <>
                    <Header key={index} type="paragraph-2" weight="normal">
                        <Localize translate_text={list.details} components={[<strong key={0} />]} />
                    </Header>
                    <img src={list.icon} />
                </>
            ))}
            <Header type="paragraph-2" weight="normal">
                <Localize translate_text="Note: Margin requirements will be adjusted to a lower amount in the case of a decreased volume when positions are closed." />
            </Header>
        </>
    )
}

export default CalculationCard
