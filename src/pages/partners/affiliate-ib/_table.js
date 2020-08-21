import styled from 'styled-components'

function ColGen(num, is_balance) {
    let grid_col_template = ''
    for (let i = 0; i < num; i++) {
        grid_col_template += is_balance ? `${100 / +num}% ` : 'auto '
    }
    return grid_col_template
}

function AreaGen(num) {
    let grid_template_area = ''
    for (let i = 0; i < num; i++) {
        grid_template_area += 'area' + i + ' '
    }
    return grid_template_area
}

const Table = styled.div`
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
const TC = styled.div`
    display: flex;
    max-width: ${(props) => props.max_width};
    grid-area: ${(props) => props.grid_area};
    flex-direction: column;
`
const TR = styled.div`
    padding: 0.8rem 1rem 0.8rem 0;
    background-color: ${(props) => (props.isTitle === 'true' ? 'var(--color-grey-8)' : 'unset')};
    border-bottom: 2px solid var(--color-grey-8);
`
export { TR, TC, Table }
