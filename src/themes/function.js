import { css } from 'styled-components'

export const Margins = css`
    margin: ${(props) => (props.m ? props.m : '')};
    margin-top: ${(props) => (props.mt ? props.mt : '')};
    margin-bottom: ${(props) => (props.mb ? props.mb : '')};
    margin-right: ${(props) => (props.mr ? props.mr : '')};
    margin-left: ${(props) => (props.ml ? props.ml : '')};
`

export const Paddings = css`
    padding: ${(props) => (props.p ? props.p : '')};
    padding-top: ${(props) => (props.pt ? props.pt : '')};
    padding-bottom: ${(props) => (props.pb ? props.pb : '')};
    padding-right: ${(props) => (props.pr ? props.pr : '')};
    padding-left: ${(props) => (props.pl ? props.pl : '')};
`
