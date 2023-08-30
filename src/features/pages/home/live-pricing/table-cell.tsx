import React, { useEffect, useRef, useState } from 'react'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import useBreakpoints from 'components/hooks/use-breakpoints'

type tableCellProps = {
    info: number | string
    code: string
    status: string
}
const TableCell = ({ info, code, status }: tableCellProps) => {
    const { is_mobile } = useBreakpoints()
    const ref = useRef<number | string>()
    // let cell_color = 'grey'
    const [cell_color, SetCellColor] = useState('gray')

    useEffect(() => {
        if (ref.current) {
            if (ref.current == info) {
                SetCellColor('gray')
                console.log('inside equal')
            } else if (ref.current > info) {
                // cell_color = 'red'
                // console.log('==>', 'in if ')
                SetCellColor('red')
                console.log('red')
            } else if (ref.current < info) {
                // cell_color = 'green'
                SetCellColor('green')
                console.log('red')
            } else {
                // cell_color = 'gray'
                SetCellColor('gray')
            }
        }

        // console.log('up ==>', ref.current, info, code)
        ref.current = info // Updating the ref to latest/current value
        // setRerender(!rerender)
        // console.log('bottom ==>', ref.current, info, code)
    }, [info])
    return (
        <Flex.Box>
            <Typography.Paragraph
                size={is_mobile ? 'small' : 'medium'}
                style={{
                    color: status || 'gray',
                }}
            >
                {info}
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default TableCell
