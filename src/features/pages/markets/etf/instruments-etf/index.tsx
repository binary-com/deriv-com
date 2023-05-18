import React from 'react'
import { tableContent } from './data'
import InstrumentalTable from 'features/components/molecules/instruments-table'

const InstrumentsTableEtf = () => {
    return <InstrumentalTable tableContent={tableContent} />
}

export default InstrumentsTableEtf
