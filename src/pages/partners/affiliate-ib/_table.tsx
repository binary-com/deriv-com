import styled from 'styled-components'
import device from 'themes/device'

function ColGen(num: number, is_balance: boolean) {
    let grid_col_template = ''
    for (let i = 0; i < num; i++) {
        grid_col_template += is_balance ? `${100 / +num}% ` : 'auto '
    }
    return grid_col_template
}

function AreaGen(num: number) {
    let grid_template_area = ''
    for (let i = 0; i < num; i++) {
        grid_template_area += 'area' + i + ' '
    }
    return grid_template_area
}

type TableProps = {
    grid_col_number?: number
    is_balance?: boolean
    max_width?: string
    grid_area?: string
    isTitle?: string
    even?: string
}

const Table = styled.div<TableProps>`
    width: 100%;
    display: grid;
    margin-top: 1.6rem;
    grid-template-columns: ${(props) => ColGen(props.grid_col_number, props.is_balance)};
    grid-template-rows: auto;
    grid-template-areas: '${(props) => AreaGen(props.grid_col_number)}';

    & > div:first-child {
        div {
            padding-left: 0.8rem;
        }
    }
`
const TC = styled.div<TableProps>`
    display: flex;
    max-width: ${(props) => props.max_width};
    grid-area: ${(props) => props.grid_area};
    flex-direction: column;
    height: 100%;
`
const TR = styled.div<TableProps>`
    padding: 0.8rem 1rem 0.8rem 0;
    background-color: ${(props) => (props.isTitle === 'true' ? 'var(--color-grey-8)' : 'unset')};
    border-bottom: 2px solid var(--color-grey-8);
    @media ${device.tabletL} {
        p {
            white-space: ${(props) => (props.isTitle === 'true' ? '' : 'nowrap')};
            font-size: 14px;
        }
    }
    @media ${device.mobileL} {
        p {
            font-size: 12px;
        }
    }
`

const TRAP = styled.div<TableProps>`
    padding: 0.8rem 1rem 0.8rem 0;
    background-color: ${(props) => (props.isTitle === 'true' ? 'var(--color-grey-8)' : 'unset')};
    border-bottom: 2px solid var(--color-grey-8);

    @media ${device.mobileL} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const TRAPREVERSE = styled.div<TableProps>`
    padding: 1rem 0.8rem;
    background-color: ${(props) => (props.even === 'true' ? 'var(--color-grey-39)' : 'unset')};
    display: flex;
    align-items: center;
    justify-content: center;

    :nth-child(odd) {
        height: 100%;
    }
`

export { TR, TRAP, TRAPREVERSE, TC, Table }
