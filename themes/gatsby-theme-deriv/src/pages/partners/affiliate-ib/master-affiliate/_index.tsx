import React from 'react'
import CalculatedCard from './_calculated-card'
import DefaultCard from './_default-card'

const MasterAffilateCard = () => {
    const [is_calculated, setCalculated] = React.useState(false)

    const toggleCalculated = () => {
        setCalculated((prev) => !prev)
    }

    if (is_calculated) return <CalculatedCard toggleCalculated={toggleCalculated} />
    return <DefaultCard toggleCalculated={toggleCalculated} />
}

export default MasterAffilateCard
