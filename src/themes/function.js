import { css } from 'styled-components'

export const Margins = ({ m, mt, ml, mr, mb }) => css`
    margin: ${m ? m : null};
    margin-top: ${mt ? mt : null};
    margin-right: ${mr ? mr : null};
    margin-bottom: ${mb ? mb : null};
    margin-left: ${ml ? ml : null};
`
export const Paddings = ({ p, pt, pl, pr, pb }) => css`
    padding: ${p ? p : null};
    padding-top: ${pt ? pt : null};
    padding-bottom: ${pb ? pb : null};
    padding-right: ${pr ? pr : null};
    padding-left: ${pl ? pl : null};
`

// export const Margins = css`
//     margin: ${(props) => (props.m ? props.m : '')};
//     margin-top: ${(props) => (props.mt ? props.mt : '')};
//     margin-bottom: ${(props) => (props.mb ? props.mb : '')};
//     margin-right: ${(props) => (props.mr ? props.mr : '')};
//     margin-left: ${(props) => (props.ml ? props.ml : '')};
// `

// export const Paddings = css`
//     padding: ${(props) => (props.p ? props.p : '')};
//     padding-top: ${(props) => (props.pt ? props.pt : '')};
//     padding-bottom: ${(props) => (props.pb ? props.pb : '')};
//     padding-right: ${(props) => (props.pr ? props.pr : '')};
//     padding-left: ${(props) => (props.pl ? props.pl : '')};
// `
