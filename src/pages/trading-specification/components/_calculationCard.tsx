import React from 'react'
import { DlMarketTypeProps } from './_howItsCalculated'
import { Header } from 'components/elements'
import { Localize } from 'components/localization'
import { TString } from 'types/generics'

const note: TString =
    '_t_Note: Margin requirements will be adjusted to a lower amount in the case of a decreased volume when positions are closed._t_'

const CalculationCard = ({ data }: DlMarketTypeProps) => {
    return (
        <>
            <Header type="paragraph-2" weight="normal" as="p">
                <Localize translate_text={data.title} />
            </Header>
            <Header type="paragraph-2" weight="normal" as="p">
                <Localize translate_text={data.description} components={[<strong key={0} />]} />
            </Header>

            {data.list.map((list, index) => (
                <React.Fragment key={index}>
                    <Header type="paragraph-2" weight="normal" as="p">
                        {list.details && (
                            <Localize
                                translate_text={list.details}
                                components={[<strong key={0} />]}
                            />
                        )}
                    </Header>

                    <img src={list.icon} />
                </React.Fragment>
            ))}
            <Header type="paragraph-2" weight="normal" as="p">
                <Localize translate_text={note} />
            </Header>
        </>
    )
}

export default CalculationCard
