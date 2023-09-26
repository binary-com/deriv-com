import React, { useEffect, useRef, useState } from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { TTypographyColor } from 'features/types'

type tableCellProps = {
    info: number | string
    midValue: number | string
    status: string
}
const TableCell = ({ info, midValue, status }: tableCellProps) => {
    const { is_mobile } = useBreakpoints()
    const ref = useRef<number | string>()
    // let cell_color = 'grey'
    const [cell_color, SetCellColor] = useState<TTypographyColor>('secondary')

    useEffect(() => {
        if (ref.current) {
            if (ref.current == midValue) {
                SetCellColor('secondary')
                console.log('inside equal')
            } else if (ref.current > midValue) {
                // cell_color = 'red'
                // console.log('==>', 'in if ')
                SetCellColor('brand')
                console.log('red')
            } else if (ref.current < midValue) {
                // cell_color = 'green'
                SetCellColor('profit')
                console.log('red')
            } else {
                // cell_color = 'gray'
                SetCellColor('secondary')
            }
        }

        // console.log('up ==>', ref.current, midValue, code)
        ref.current = midValue // Updating the ref to latest/current value
        // setRerender(!rerender)
        // console.log('bottom ==>', ref.current, info, code)
    }, [info])
    return (
        <Flex.Box>
            <Typography.Paragraph
                size={is_mobile ? 'small' : 'medium'}
                // style={{
                //     color: cell_color || 'gray',
                // }}
                textcolor={cell_color}
            >
                {info} -- {midValue}
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default TableCell
