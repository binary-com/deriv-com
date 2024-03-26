import React, { ReactNode } from 'react'
import FlexBoxContainer from './box'
import FlexItem from './item'

type FlexTypes = {
    Box: typeof FlexBoxContainer
    Item: typeof FlexItem
}

const Flex: FlexTypes = ({ children }: { children: ReactNode }) => {
    return <>{children}</>
}

Flex.Box = FlexBoxContainer
Flex.Item = FlexItem

export default Flex
